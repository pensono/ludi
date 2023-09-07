import { CharStream, CommonTokenStream, ErrorListener, FileStream }  from 'antlr4';
import type { Action, FunctionCallExpression, Game, LudiType, Parameter } from './types'
import LudiLexer from './gen/LudiLexer';
import LudiParser, { ActionContext, ChangeStatementContext, DecreaseStatementContext, FunctionCallExpressionContext, GameContext, IncreaseStatementContext, NumberExpressionContext, ParameterListContext, ParameterizedTypeExpressionContext, SetStatementContext, SetupContext, TypeExpressionContext } from './gen/LudiParser';
import LudiVisitor from './gen/LudiVisitor';
import type { ConstantExpression, Expression, Statement } from '$lib/types';


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

export function fromFile(fileName: string): Game {
    return fromStream(new FileStream(fileName))
}

function fromStream(input: CharStream): Game {
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


function handleGame(ctx: GameContext): Game {
    let actions: Record<string, Action> = {};
    let setup: Action | undefined = undefined;

    for (const definition of ctx.definition_list()) {
        if (definition.setup()) {
            if (setup !== undefined) {
                // TODO ideally the error only relates to the part which says "setup"
                // TODO collect errors and continue parsing
                throw new ParseError('Cannot have more than one setup block', definition.start);
            }

            setup = handleAction(definition.setup());
        }

        if (definition.action()) {
            const action = definition.action();
            actions[action._name.getText()] = handleAction(definition.action());
        } 
    }

    return {
        setup: setup,
        actions: actions,
    }
}

function handleAction(ctx: ActionContext | SetupContext): Action {
    // const conditions = ctx.when_list().map(c => handleCondition(c));
    const statements = ctx.statement_list().map(s => new StatementVisitor().visit(s));
    let parameters: Parameter[] = [];
    let name: string | undefined = undefined;
    
    if (ctx instanceof ActionContext) {
        parameters = handleParameterList(ctx.parameterList());
        name = ctx._name.getText();
    }

    return {
        name,
        conditions: [],
        statements,
        parameters
    }
}


function handleParameterList(ctx: ParameterListContext): Parameter[] {
    const result = [];
    for (let i = 0; i < ctx._names.length; i++) {
        result.push({
            name: ctx._names[i].getText(),
            type: new TypeExpressionVisitor().visit(ctx._types[i]),
        });
    };

    return result;
}

class StatementVisitor extends LudiVisitor<Statement> {
    visitChangeStatement = (ctx: ChangeStatementContext): Statement => {
        return {
            type: 'change',
            variable: ctx.lvalue().getText(),
            value: new ExpressionVisitor().visit(ctx.expression())
        }
    }

    visitSetStatement = (ctx: SetStatementContext): Statement => {
        return {
            type: 'set',
            variable: ctx.lvalue().getText(),
            value: new ExpressionVisitor().visit(ctx.expression())
        }
    }

    visitIncreaseStatement = (ctx: IncreaseStatementContext): Statement => {
        return {
            type: 'increase',
            variable: ctx.lvalue().getText(),
            amount: new ExpressionVisitor().visit(ctx.expression())
        }
    }

    visitDecreaseStatement = (ctx: DecreaseStatementContext): Statement => {
        return {
            type: 'decrease',
            variable: ctx.lvalue().getText(),
            amount: new ExpressionVisitor().visit(ctx.expression())
        }
    }
}

class ExpressionVisitor extends LudiVisitor<Expression> {
    visitNumberExpression = (ctx: NumberExpressionContext): ConstantExpression => {
        return {
            type: 'constant',
            value: parseInt(ctx.NUMBER().getText())
        }
    }

    visitFunctionCallExpression = (ctx: FunctionCallExpressionContext): FunctionCallExpression => {
        return {
            type: 'function-call',
            name: ctx._name.getText(),
            arguments: ctx.expression_list().map(e => this.visit(e))
        }
    }
}

class TypeExpressionVisitor extends LudiVisitor<LudiType> {
    visitParameterizedTypeExpression = (ctx: ParameterizedTypeExpressionContext): LudiType => {
        // Hardcode for now
        // Eventually some sort of second pass will be needed to resolve types (?)
        return {
            type: 'number',
            min: parseInt(ctx._arguments[0].getText()),
            max: parseInt(ctx._arguments[1].getText()),
        }
    }
}

class CollectingErrorListener extends ErrorListener<string> {
    errors: string[] = [];

    syntaxError = (recognizer, offendingSymbol, line, column, msg, e) => {
        this.errors.push(`${line}:${column} ${msg}`);
    }
}
