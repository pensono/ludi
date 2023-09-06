// Generated from src/lib/lang/Ludi.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
import { NumberExpressionContext } from "./LudiParser";
import { ParenthizedExpressionContext } from "./LudiParser";
import { FunctionCallExpressionContext } from "./LudiParser";
import { IdentifierExpressionContext } from "./LudiParser";
import { LvalueContext } from "./LudiParser";
import { TypeExpressionContext } from "./LudiParser";
import { IdentifierContext } from "./LudiParser";
import { NumberContext } from "./LudiParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LudiParser`.
 */
export default class LudiListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LudiParser.game`.
	 * @param ctx the parse tree
	 */
	enterGame?: (ctx: GameContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.game`.
	 * @param ctx the parse tree
	 */
	exitGame?: (ctx: GameContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.trigger`.
	 * @param ctx the parse tree
	 */
	enterTrigger?: (ctx: TriggerContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.trigger`.
	 * @param ctx the parse tree
	 */
	exitTrigger?: (ctx: TriggerContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.win`.
	 * @param ctx the parse tree
	 */
	enterWin?: (ctx: WinContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.win`.
	 * @param ctx the parse tree
	 */
	exitWin?: (ctx: WinContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.loss`.
	 * @param ctx the parse tree
	 */
	enterLoss?: (ctx: LossContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.loss`.
	 * @param ctx the parse tree
	 */
	exitLoss?: (ctx: LossContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.setup`.
	 * @param ctx the parse tree
	 */
	enterSetup?: (ctx: SetupContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.setup`.
	 * @param ctx the parse tree
	 */
	exitSetup?: (ctx: SetupContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.kind`.
	 * @param ctx the parse tree
	 */
	enterKind?: (ctx: KindContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.kind`.
	 * @param ctx the parse tree
	 */
	exitKind?: (ctx: KindContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.state_definition`.
	 * @param ctx the parse tree
	 */
	enterState_definition?: (ctx: State_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.state_definition`.
	 * @param ctx the parse tree
	 */
	exitState_definition?: (ctx: State_definitionContext) => void;
	/**
	 * Enter a parse tree produced by the `ChangeStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	enterChangeStatement?: (ctx: ChangeStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ChangeStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	exitChangeStatement?: (ctx: ChangeStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `SetStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	enterSetStatement?: (ctx: SetStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `SetStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	exitSetStatement?: (ctx: SetStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `IncreaseStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	enterIncreaseStatement?: (ctx: IncreaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `IncreaseStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	exitIncreaseStatement?: (ctx: IncreaseStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `DecreaseStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	enterDecreaseStatement?: (ctx: DecreaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `DecreaseStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	exitDecreaseStatement?: (ctx: DecreaseStatementContext) => void;
	/**
	 * Enter a parse tree produced by the `IfStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `IfStatement`
	 * labeled alternative in `LudiParser.statement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.when`.
	 * @param ctx the parse tree
	 */
	enterWhen?: (ctx: WhenContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.when`.
	 * @param ctx the parse tree
	 */
	exitWhen?: (ctx: WhenContext) => void;
	/**
	 * Enter a parse tree produced by the `Negation`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNegation?: (ctx: NegationContext) => void;
	/**
	 * Exit a parse tree produced by the `Negation`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNegation?: (ctx: NegationContext) => void;
	/**
	 * Enter a parse tree produced by the `Comparison`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `Comparison`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Enter a parse tree produced by the `Conjunction`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConjunction?: (ctx: ConjunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `Conjunction`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConjunction?: (ctx: ConjunctionContext) => void;
	/**
	 * Enter a parse tree produced by the `NumberExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NumberExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ParenthizedExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthizedExpression?: (ctx: ParenthizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthizedExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthizedExpression?: (ctx: ParenthizedExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `FunctionCallExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionCallExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `LudiParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.typeExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeExpression?: (ctx: TypeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.typeExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeExpression?: (ctx: TypeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `LudiParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `LudiParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
}

