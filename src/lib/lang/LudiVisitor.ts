// Generated from src/lib/lang/Ludi.g4 by ANTLR 4.13.0

import {ParseTreeVisitor} from 'antlr4';


import { GameContext } from "./LudiParser";
import { DefinitionContext } from "./LudiParser";
import { ActionContext } from "./LudiParser";
import { TriggerContext } from "./LudiParser";
import { WinContext } from "./LudiParser";
import { LossContext } from "./LudiParser";
import { SetupContext } from "./LudiParser";
import { KindContext } from "./LudiParser";
import { State_definitionContext } from "./LudiParser";
import { ChangeStatementContext } from "./LudiParser";
import { SetStatementContext } from "./LudiParser";
import { IncreaseStatementContext } from "./LudiParser";
import { DecreaseStatementContext } from "./LudiParser";
import { IfStatementContext } from "./LudiParser";
import { WhenContext } from "./LudiParser";
import { NegationContext } from "./LudiParser";
import { ComparisonContext } from "./LudiParser";
import { ConjunctionContext } from "./LudiParser";
import { ParenthizedExpressionContext } from "./LudiParser";
import { IdentifierExpressionContext } from "./LudiParser";
import { NumberExpressionContext } from "./LudiParser";
import { FunctionCallExpressionContext } from "./LudiParser";
import { LvalueContext } from "./LudiParser";
import { TypeExpressionContext } from "./LudiParser";
import { IdentifierContext } from "./LudiParser";
import { NumberContext } from "./LudiParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LudiParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class LudiVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LudiParser.game`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGame?: (ctx: GameContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrigger?: (ctx: TriggerContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.win`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWin?: (ctx: WinContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.loss`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoss?: (ctx: LossContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.setup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetup?: (ctx: SetupContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.kind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKind?: (ctx: KindContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.state_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_definition?: (ctx: State_definitionContext) => Result;
	/**
	 * Visit a parse tree produced by the `ChangeStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangeStatement?: (ctx: ChangeStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `SetStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetStatement?: (ctx: SetStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `IncreaseStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncreaseStatement?: (ctx: IncreaseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `DecreaseStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecreaseStatement?: (ctx: DecreaseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by the `IfStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.when`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen?: (ctx: WhenContext) => Result;
	/**
	 * Visit a parse tree produced by the `Negation`
	 * labeled alternative in `LudiParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegation?: (ctx: NegationContext) => Result;
	/**
	 * Visit a parse tree produced by the `Comparison`
	 * labeled alternative in `LudiParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;
	/**
	 * Visit a parse tree produced by the `Conjunction`
	 * labeled alternative in `LudiParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunction?: (ctx: ConjunctionContext) => Result;
	/**
	 * Visit a parse tree produced by the `ParenthizedExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthizedExpression?: (ctx: ParenthizedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `NumberExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by the `FunctionCallExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.typeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExpression?: (ctx: TypeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `LudiParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

