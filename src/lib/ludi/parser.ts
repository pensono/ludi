// @ts-nocheck -- Antlr makes typechecking in this file a shitshow
import { CharStream, CommonTokenStream, ErrorListener }  from 'antlr4';
import type { Action, Condition, Expression, FunctionCallExpression, Rules, IdentifierExpression, IndexExpression, LValue, LudiType, Parameter, RememberStatement, StateVariable, View } from './types'
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

export function fromString(input: string): Rules {
    return fromStream(new CharStream(input))
}

export function ludi(strings: TemplateStringsArray, ...values): Rules {
    return fromString(String.raw({ raw:strings }, values));
}

/** Internal use only */
export function fromStream(input: CharStream): Rules {
    const lexer = new LudiLexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LudiParser(tokens);

    const errorListener = new CollectingErrorListener();
    parser.addErrorListener(errorListener);

    var gameContext = parser.rules();

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

/** Returns statements in priority order */
export function parseInteraction(input: string): Statement[] {
    const inputStream = new CharStream(input);
    const lexer = new LudiLexer(inputStream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LudiParser(tokens);

    const errorListener = new CollectingErrorListener();
    parser.addErrorListener(errorListener);

    var statements = parser.interaction();

    if (errorListener.errors.length > 0) {
        throw new Error(errorListener.errors.join('\n'));
    }
    
    return statements.statements.map(s => new StatementVisitor().visit(s));
}

function handleGame(ctx: any): Rules {
    let setup: Action | undefined = undefined;
    let actions: Action[] = [];
    let triggers: Action[] = [];
    let winConditions: Action[] = [];
    let drawConditions: Action[] = [];
    let stateVariables: StateVariable[] = [];
    let playerType: LudiType = undefined;
    let constants: Record<string, any> = {};
    let view: View = null;

    for (const definition of ctx.definition()) {
        if (definition.setup()) {
            if (setup !== undefined) {
                // TODO ideally the error only relates to the part which says "setup"
                // TODO collect errors and continue parsing
                throw new ParseError('Cannot have more than one setup block', definition.start);
            }

            setup = handleBlock(definition.setup());
        } else if (definition.action()) {
            const action = definition.action();
            actions.push(handleBlock(action));
        } else if (definition.win()) {
            const win = definition.win();
            winConditions.push(handleBlock(win));
        } else if (definition.draw()) {
            const draw = definition.draw();
            drawConditions.push(handleBlock(draw));
        } else if (definition.trigger()) {
            const trigger = definition.trigger();
            triggers.push(handleBlock(trigger));
        } else if (definition.state_definition()) {
            const stateDefinition = definition.state_definition();
            const name = stateDefinition.name.getText();
            stateVariables.push({
                name: name,
                type: new TypeExpressionVisitor(constants).visit(stateDefinition.type)
            });
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
            stateVariables.push({
                name: 'CurrentPlayer',
                type: playerType
            });
        } else if (definition.view) {
            view = new ViewVisitor().visit(definition.view);
        }
    }

    return {
        setup,
        actions,
        triggers,
        winConditions,
        drawConditions,
        stateVariables,
        playerType,
        constants,
        view
    }
}

/** Can parse actions, wins, setup, triggers */
function handleBlock(ctx: any): Action {
    const player = ctx.player ? new ExpressionVisitor().visit(ctx.player) : null;
    const statements = ctx.statement ? ctx.statement().map(s => new StatementVisitor().visit(s)) : [];
    let name: string | undefined = undefined;
    let parameters: Parameter[] = [];
    let conditions: Condition[] = [];
    
    if ([LudiParser.RULE_action, LudiParser.RULE_win, LudiParser.RULE_draw, LudiParser.RULE_trigger].includes(ctx.ruleIndex)) {
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

    visitMoveStatement = (ctx: any): MoveStatement => {
        return {
            type: 'move',
            from: new LValueVisitor().visit(ctx.from),
            to: new LValueVisitor().visit(ctx.to),
            movements: ctx.movements?.map(m => 
                ({
                    x: parseInt(m.number()[0]?.getText()) || undefined,
                    y: parseInt(m.number()[1]?.getText()) || undefined,
                    z: parseInt(m.number()[2]?.getText()) || undefined,
                })
            ),
            direction: ctx.direction?.getText(),
            distance: parseInt(ctx.distance?.getText()),
            over: ctx.over?.length ? {
                set: ctx.over.map(o => o.getText()), // Or use a type?
                name: ctx.overName?.getText()
            } : null
        }
    }
    
    visitRemoveStatement = (ctx: any): RemoveStatement => {
        return {
            type: 'remove',
            what: new LValueVisitor().visit(ctx.lvalue()),
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

    visitPlayStatement(ctx: any): PlayStatement {
        return {
            type: 'play',
            actionName: ctx.actionName.getText(),
            player: ctx.playerExpression ? new ExpressionVisitor().visit(ctx.playerExpression) : null,
            arguments: ctx.arguments.map((a: any) => new ExpressionVisitor().visit(a))
        }
    }

    visitRememberStatement(ctx: any): RememberStatement {
        return {
            type: 'remember',
            variable: ctx.variableName.getText(),
            value: new ExpressionVisitor().visit(ctx.expression())
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
    
    visitConjunctionExpression = (ctx): ConjunctionExpression => {
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
