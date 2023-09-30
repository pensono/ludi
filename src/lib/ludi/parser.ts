import { CharStream, CommonTokenStream, ErrorListener }  from 'antlr4';
import type { Action, Condition, Expression, FunctionCallExpression, Game, IdentifierExpression, IndexExpression, LValue, LudiType, Parameter, StateVariable, View } from './types'
import LudiLexer from './gen/LudiLexer';
// import LudiParser, { ActionContext, ChangeStatementContext, ComparisonExpressionContext, DecreaseStatementContext, FunctionCallExpressionContext, GameContext, IdentifierExpressionContext, IncreaseStatementContext, NumberExpressionContext, ParameterListContext, ParameterizedTypeExpressionContext, SetStatementContext, SetupContext, TypeExpressionContext } from './gen/LudiParser';
import LudiParser from './gen/LudiParser';
import LudiVisitor from './gen/LudiVisitor';
import type { ConstantExpression, Statement } from './types';
import * as builtins from './builtins'


export class ParseError extends Error {
    constructor(message: string, public position: Position) {
        super(message);
    }
}

export interface Position {
    file?: string;
    line: number;
    column: number;
}

export function fromString(input: string): Game {
    return fromStream(new CharStream(input))
}

/** Internal use only */
export function fromStream(input: CharStream): Game {
    const lexer = new LudiLexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LudiParser(tokens);

    const errorListener = new CollectingErrorListener();
    parser.addErrorListener(errorListener);

    var gameContext = parser.game();

    if (errorListener.errors.length > 0) {
        throw new Error(errorListener.errors.join('\n'));
    }
    
    return handleGame(gameContext);
}

export interface MoveExpression {
    actionName: string;
    arguments: Expression[];
    player: Expression;
}
export function parseMoveExpression(input: string): MoveExpression {
    const inputStream = new CharStream(input);
    const lexer = new LudiLexer(inputStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LudiParser(tokens);

    const errorListener = new CollectingErrorListener();
    parser.addErrorListener(errorListener);

    var moveExpression = parser.moveExpression();

    if (errorListener.errors.length > 0) {
        throw new Error(errorListener.errors.join('\n'));
    }
    
    return {
        actionName: moveExpression.actionName.getText(),
        arguments: moveExpression.arguments.map((a: any) => new ExpressionVisitor().visit(a)),
        player: new ExpressionVisitor().visit(moveExpression.playerExpression)
    };
}

function handleGame(ctx: any): Game {
    let actions: Record<string, Action> = {};
    let setup: Action | undefined = undefined;
    let variables: Record<string, StateVariable> = {};
    let playerType: LudiType = undefined;
    let constants: Record<string, any> = {};
    let views: View[] = [];

    for (const definition of ctx.definition()) {
        if (definition.setup()) {
            if (setup !== undefined) {
                // TODO ideally the error only relates to the part which says "setup"
                // TODO collect errors and continue parsing
                throw new ParseError('Cannot have more than one setup block', definition.start);
            }

            setup = handleAction(definition.setup());
        } else if (definition.action()) {
            const action = definition.action();
            actions[action.name.getText()] = handleAction(action);
        } else if (definition.state_definition()) {
            const stateDefinition = definition.state_definition();
            const name = stateDefinition.name.getText();
            variables[name]  = {
                name: name,
                type: new TypeExpressionVisitor(constants).visit(stateDefinition.type)
            };
        } else if (definition.kind()) {
            // Assume for now that types are specified in an order which does not include backreferences            
            var type = new TypeExpressionVisitor(constants).visit(definition.kind().type);
            const name = definition.kind().name.getText();
            
            if (type.name === 'Enumeration') {
                for (const value of type.parameters.values) {
                    constants[value] = value;
                }
            }

            // Would need to combine with kinds
            constants[name] = type;
        } else if (definition.players()) {
            playerType = new TypeExpressionVisitor(constants).visit(definition.players().type);
            
            if (playerType.name === 'Enumeration') {
                for (const value of playerType.parameters.values) {
                    constants[value] = value;
                }
            }

            // Would need to combine with kinds
            constants['Player'] = playerType;

            // Built-in
            variables['CurrentPlayer'] = {
                name: 'CurrentPlayer',
                type: playerType
            }
        } else if (definition.view()) {
            views = definition.view().elements.map((v: any) => new ViewVisitor().visit(v));
        }
    }

    return {
        setup: setup,
        actions: actions,
        stateVariables: variables,
        playerType: playerType,
        constants,
        views
    }
}

function handleAction(ctx: any): Action {
    // const conditions = ctx.when().map(c => handleCondition(c));
    const player = ctx.player ? new ExpressionVisitor().visit(ctx.player) : null;
    const statements = ctx.statement().map(s => new StatementVisitor().visit(s));
    let name: string | undefined = undefined;
    let parameters: Parameter[] = [];
    let conditions: Condition[] = [];
    
    if (ctx.ruleIndex === LudiParser.RULE_action) {
        name = ctx.name.getText();
        parameters = handleParameterList(ctx.parameterList());
        conditions = ctx.when().map(c => ({
            expression: new ExpressionVisitor().visit(c.expression())
        }));
    }

    return {
        name,
        player,
        conditions,
        statements,
        parameters
    }
}


function handleParameterList(ctx: any): Parameter[] {
    const result = [];
    for (let i = 0; i < ctx.names.length; i++) {
        result.push({
            name: ctx.names[i].getText(),
            type: new TypeExpressionVisitor().visit(ctx.types[i]),
        });
    };

    return result;
}

class StatementVisitor extends LudiVisitor {
    visitChangeStatement = (ctx: any): Statement => {
        return {
            type: 'change',
            variable: new LValueVisitor().visit(ctx.lvalue()),
            value: new ExpressionVisitor().visit(ctx.expression())
        }
    }

    visitSetStatement = (ctx: any): Statement => {
        return {
            type: 'set',
            variable: new LValueVisitor().visit(ctx.lvalue()),
            value: new ExpressionVisitor().visit(ctx.expression())
        }
    }

    visitIncreaseStatement = (ctx: any): Statement => {
        return {
            type: 'increase',
            variable: new LValueVisitor().visit(ctx.lvalue()),
            amount: new ExpressionVisitor().visit(ctx.expression())
        }
    }

    visitDecreaseStatement = (ctx: any): Statement => {
        return {
            type: 'decrease',
            variable: new LValueVisitor().visit(ctx.lvalue()),
            amount: new ExpressionVisitor().visit(ctx.expression())
        }
    }
}

class LValueVisitor extends LudiVisitor {
    visitIdentifierLValue = (ctx: any): LValue => {
        return {
            name: ctx.identifier().getText(),
            indexes: []
        };
    }

    visitIndexLValue(ctx: any) {
        return {
            name: ctx.identifier().getText(),
            indexes: ctx.arguments.map(i => new ExpressionVisitor().visit(i))
        };
    }
}

class ExpressionVisitor extends LudiVisitor {
    visitNumberExpression = (ctx: any): ConstantExpression => {
        return {
            type: 'constant',
            value: parseInt(ctx.NUMBER().getText())
        }
    }

    visitIdentifierExpression = (ctx: any): IdentifierExpression => {
        return {
            type: 'identifier',
            name: ctx.name.getText(),
        }
    }

    visitFunctionCallExpression = (ctx: any): FunctionCallExpression => {
        return {
            type: 'function-call',
            name: ctx.name.getText(),
            arguments: ctx.expression().map(e => this.visit(e))
        }
    }

    visitIndexExpression = (ctx: any): IndexExpression => {
        return {
            type: 'index',
            variable: ctx.identifier().getText(),
            indexes: ctx.arguments.map(i => this.visit(i))
        }
    }

    visitComparisonExpression = (ctx): FunctionCallExpression => {
        // Is function-call specific enough? Worth doing binary-operator or similar?
        return {
            type: 'function-call',
            name: ctx.operator.text,
            arguments: [
                this.visit(ctx.left),
                this.visit(ctx.right)
            ]
        }
    }
}

class TypeExpressionVisitor extends LudiVisitor {
    constants: Record<string, any>;
    
    constructor(constants: Record<string, any> = {}) {
        super();
        this.constants = constants;
    }

    visitParameterizedTypeExpression = (ctx: any): LudiType => {
        var type = builtins.types[ctx.name.getText()];
        // Assume everything is a constant for now
        const parameters = ctx.arguments.map((arg: any) => evaluateConstantExpression(new ExpressionVisitor().visit(arg), this.constants));
        return type.construct(parameters);
    }

    visitUnionTypeExpression(ctx: any): LudiType {
        return {
            name: 'Enumeration',
            parameters: {
                values: ctx.values.map((arg: any) => arg.getText())
            }
        }
    }
}

class ViewVisitor extends LudiVisitor {
    visitLeafView(ctx: any) : View {
        return {
            name: ctx.name.getText(),
            attributes: Object.fromEntries(new Map(ctx.attributes.map((a: any) => [a.key.getText(), trimQuotes(a.value.text)]))),
            children: []
        }
    }
    
    visitStemView(ctx: any) : View {
        return {
            name: ctx.name.getText(),
            attributes: Object.fromEntries(new Map(ctx.attributes.map((a: any) => [a.key.getText(), trimQuotes(a.value.text)]))),
            children: ctx.childViews.map((c: any) => this.visit(c))
        }
    }
}

function trimQuotes(s: string): string {
    if (s.startsWith('"') && s.endsWith('"')) {
        return s.slice(1, -1);
    }
    return s;
}

function evaluateConstantExpression(expression: Expression, variables: Record<string, any>): any {
    switch (expression.type) {
        case 'constant':
            return expression.value;
        case 'identifier': {
            if (variables[expression.name] === undefined) {
                throw new Error(`Unknown constant ${expression.name}`);
            }
            return variables[expression.name];
        }
        default:
            throw new Error(`Unknown constant expression type ${JSON.stringify(expression)}`);
    }
}

class CollectingErrorListener extends ErrorListener<string> {
    errors: string[] = [];

    syntaxError = (_recognizer: any, _offendingSymbol: any, line: any, column: any, msg: any, _e: any) => {
        this.errors.push(`${line}:${column} ${msg}`);
    }
}
