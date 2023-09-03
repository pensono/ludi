import { CharStream, CommonTokenStream, ErrorListener }  from 'antlr4';
import type { Action, Game } from '../types'
import LudiLexer from './LudiLexer';
import LudiParser, { ActionContext, ChangeStatementContext, DecreaseStatementContext, GameContext, IncreaseStatementContext, NumberExpressionContext, SetStatementContext } from './LudiParser';
import LudiVisitor from './LudiVisitor';
import type { ConstantExpression, Expression, Statement } from '$lib/types';

export function fromString(input: string): Game {
    const chars = new CharStream(input); // replace this with a FileStream as required
    const lexer = new LudiLexer(chars);
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

    for (const definition of ctx.definition_list()) {
        if (definition.action()) {
            const action = definition.action();
            actions[action._name.getText()] = handleAction(definition.action());
        } 
    }

    return {
        actions: actions
    }
}

function handleAction(ctx: ActionContext): Action {
    // const conditions = ctx.when_list().map(c => handleCondition(c));
    const statements = ctx.statement_list().map(s => new StatementVisitor().visit(s));

    return {
        conditions: [],
        statements: statements
    }
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
}

class CollectingErrorListener extends ErrorListener<string> {
    errors: string[] = [];

    syntaxError = (recognizer, offendingSymbol, line, column, msg, e) => {
        this.errors.push(`${line}:${column} ${msg}`);
    }
}
