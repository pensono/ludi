import { CharStream, CommonTokenStream, ErrorListener }  from 'antlr4';
import type { Action, Condition, FunctionCallExpression, Game, IdentifierExpression, LudiType, Parameter, StateVariable } from './types'
import LudiLexer from './gen/LudiLexer';
// import LudiParser, { ActionContext, ChangeStatementContext, ComparisonExpressionContext, DecreaseStatementContext, FunctionCallExpressionContext, GameContext, IdentifierExpressionContext, IncreaseStatementContext, NumberExpressionContext, ParameterListContext, ParameterizedTypeExpressionContext, SetStatementContext, SetupContext, TypeExpressionContext } from './gen/LudiParser';
import LudiParser from './gen/LudiParser';
import LudiVisitor from './gen/LudiVisitor';
import type { ConstantExpression, Expression, Statement } from './types';


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

function handleGame(ctx: any): Game {
    let actions: Record<string, Action> = {};
    let setup: Action | undefined = undefined;
    let variables: StateVariable[] = [];
    let playerType: LudiType = undefined;

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
            variables.push({
                name: stateDefinition.name.getText(),
                type: new TypeExpressionVisitor().visit(stateDefinition.type)
            });
        } else if (definition.players()) {
            playerType = new TypeExpressionVisitor().visit(definition.players().type);
        }
    }

    return {
        setup: setup,
        actions: actions,
        stateVariables: variables,
        playerType: playerType,
    }
}

function handleAction(ctx: any): Action {
    // const conditions = ctx.when().map(c => handleCondition(c));
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
            variable: ctx.lvalue().getText(),
            value: new ExpressionVisitor().visit(ctx.expression())
        }
    }

    visitSetStatement = (ctx: any): Statement => {
        return {
            type: 'set',
            variable: ctx.lvalue().getText(),
            value: new ExpressionVisitor().visit(ctx.expression())
        }
    }

    visitIncreaseStatement = (ctx: any): Statement => {
        return {
            type: 'increase',
            variable: ctx.lvalue().getText(),
            amount: new ExpressionVisitor().visit(ctx.expression())
        }
    }

    visitDecreaseStatement = (ctx: any): Statement => {
        return {
            type: 'decrease',
            variable: ctx.lvalue().getText(),
            amount: new ExpressionVisitor().visit(ctx.expression())
        }
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
    visitParameterizedTypeExpression = (ctx: any): LudiType => {
        // Hardcode for now
        // Eventually some sort of second pass will be needed to resolve types (?)
        return {
            type: 'number',
            min: parseInt(ctx.arguments[0].getText()),
            max: parseInt(ctx.arguments[1].getText()),
        }
    }

    visitUnionTypeExpression(ctx: any): LudiType {
        return {
            type: 'enumeration',
            values: ctx.values.map((arg: any) => arg.getText())
        }
    }
}

class CollectingErrorListener extends ErrorListener<string> {
    errors: string[] = [];

    syntaxError = (_recognizer: any, _offendingSymbol: any, line: any, column: any, msg: any, _e: any) => {
        this.errors.push(`${line}:${column} ${msg}`);
    }
}
