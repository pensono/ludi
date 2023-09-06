// Generated from src/lib/Ludi.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LudiListener from "./LudiListener.js";
import LudiVisitor from "./LudiVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LudiParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly IDENTIFIER = 36;
	public static readonly NUMBER = 37;
	public static readonly WS = 38;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_game = 0;
	public static readonly RULE_definition = 1;
	public static readonly RULE_action = 2;
	public static readonly RULE_trigger = 3;
	public static readonly RULE_win = 4;
	public static readonly RULE_loss = 5;
	public static readonly RULE_setup = 6;
	public static readonly RULE_kind = 7;
	public static readonly RULE_state_definition = 8;
	public static readonly RULE_statement = 9;
	public static readonly RULE_when = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_lvalue = 12;
	public static readonly RULE_typeExpression = 13;
	public static readonly RULE_identifier = 14;
	public static readonly RULE_number = 15;
	public static readonly literalNames: (string | null)[] = [ null, "'action'", 
                                                            "'('", "','", 
                                                            "')'", "':'", 
                                                            "'trigger'", 
                                                            "'win'", "'loss'", 
                                                            "'setup'", "'kind'", 
                                                            "'state'", "'change'", 
                                                            "'to'", "'set'", 
                                                            "'increase'", 
                                                            "'by'", "'decrease'", 
                                                            "'if'", "'then'", 
                                                            "'end'", "'when'", 
                                                            "'not'", "'!'", 
                                                            "'or'", "'and'", 
                                                            "'='", "'!='", 
                                                            "'>'", "'<'", 
                                                            "'>='", "'<='", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "IDENTIFIER", 
                                                             "NUMBER", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"game", "definition", "action", "trigger", "win", "loss", "setup", "kind", 
		"state_definition", "statement", "when", "expression", "lvalue", "typeExpression", 
		"identifier", "number",
	];
	public get grammarFileName(): string { return "Ludi.g4"; }
	public get literalNames(): (string | null)[] { return LudiParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LudiParser.symbolicNames; }
	public get ruleNames(): string[] { return LudiParser.ruleNames; }
	public get serializedATN(): number[] { return LudiParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LudiParser._ATN, LudiParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public game(): GameContext {
		let localctx: GameContext = new GameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LudiParser.RULE_game);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4034) !== 0)) {
				{
				{
				this.state = 32;
				this.definition();
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 38;
			this.match(LudiParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let localctx: DefinitionContext = new DefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LudiParser.RULE_definition);
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 40;
				this.action();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 41;
				this.setup();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 42;
				this.trigger();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 43;
				this.win();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 44;
				this.loss();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 45;
				this.kind();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 46;
				this.state_definition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public action(): ActionContext {
		let localctx: ActionContext = new ActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LudiParser.RULE_action);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this.match(LudiParser.T__0);
			this.state = 50;
			localctx._name = this.identifier();
			this.state = 51;
			this.match(LudiParser.T__1);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 52;
				localctx._identifier = this.identifier();
				localctx._args.push(localctx._identifier);
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 53;
					this.match(LudiParser.T__2);
					this.state = 54;
					localctx._identifier = this.identifier();
					localctx._args.push(localctx._identifier);
					}
					}
					this.state = 59;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 62;
			this.match(LudiParser.T__3);
			this.state = 63;
			this.match(LudiParser.T__4);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 64;
				localctx._when = this.when();
				localctx._conditions.push(localctx._when);
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 70;
				this.statement();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 446464) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public trigger(): TriggerContext {
		let localctx: TriggerContext = new TriggerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LudiParser.RULE_trigger);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(LudiParser.T__5);
			this.state = 76;
			localctx._name = this.identifier();
			this.state = 77;
			this.match(LudiParser.T__1);
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 78;
				localctx._identifier = this.identifier();
				localctx._args.push(localctx._identifier);
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 79;
					this.match(LudiParser.T__2);
					this.state = 80;
					localctx._identifier = this.identifier();
					localctx._args.push(localctx._identifier);
					}
					}
					this.state = 85;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 88;
			this.match(LudiParser.T__3);
			this.state = 89;
			this.match(LudiParser.T__4);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 90;
				localctx._when = this.when();
				localctx._conditions.push(localctx._when);
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 96;
				this.statement();
				}
				}
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 446464) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public win(): WinContext {
		let localctx: WinContext = new WinContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LudiParser.RULE_win);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this.match(LudiParser.T__6);
			this.state = 102;
			localctx._name = this.identifier();
			this.state = 103;
			this.match(LudiParser.T__1);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 104;
				localctx._identifier = this.identifier();
				localctx._args.push(localctx._identifier);
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 105;
					this.match(LudiParser.T__2);
					this.state = 106;
					localctx._identifier = this.identifier();
					localctx._args.push(localctx._identifier);
					}
					}
					this.state = 111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 114;
			this.match(LudiParser.T__3);
			this.state = 115;
			this.match(LudiParser.T__4);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 116;
				localctx._when = this.when();
				localctx._conditions.push(localctx._when);
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public loss(): LossContext {
		let localctx: LossContext = new LossContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LudiParser.RULE_loss);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 122;
			this.match(LudiParser.T__7);
			this.state = 123;
			localctx._name = this.identifier();
			this.state = 124;
			this.match(LudiParser.T__1);
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 125;
				localctx._identifier = this.identifier();
				localctx._args.push(localctx._identifier);
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 126;
					this.match(LudiParser.T__2);
					this.state = 127;
					localctx._identifier = this.identifier();
					localctx._args.push(localctx._identifier);
					}
					}
					this.state = 132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 135;
			this.match(LudiParser.T__3);
			this.state = 136;
			this.match(LudiParser.T__4);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 137;
				localctx._when = this.when();
				localctx._conditions.push(localctx._when);
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setup(): SetupContext {
		let localctx: SetupContext = new SetupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LudiParser.RULE_setup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			this.match(LudiParser.T__8);
			this.state = 144;
			this.match(LudiParser.T__4);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 145;
				this.statement();
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 446464) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public kind(): KindContext {
		let localctx: KindContext = new KindContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LudiParser.RULE_kind);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			this.match(LudiParser.T__9);
			this.state = 151;
			localctx._name = this.identifier();
			this.state = 152;
			this.match(LudiParser.T__4);
			this.state = 153;
			this.typeExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public state_definition(): State_definitionContext {
		let localctx: State_definitionContext = new State_definitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LudiParser.RULE_state_definition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 155;
			this.match(LudiParser.T__10);
			this.state = 156;
			localctx._name = this.identifier();
			this.state = 157;
			this.match(LudiParser.T__4);
			this.state = 158;
			this.typeExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LudiParser.RULE_statement);
		let _la: number;
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				localctx = new ChangeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 160;
				this.match(LudiParser.T__11);
				this.state = 161;
				this.lvalue();
				this.state = 162;
				this.match(LudiParser.T__12);
				this.state = 163;
				this.expression(0);
				}
				break;
			case 14:
				localctx = new SetStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 165;
				this.match(LudiParser.T__13);
				this.state = 166;
				this.lvalue();
				this.state = 167;
				this.match(LudiParser.T__12);
				this.state = 168;
				this.expression(0);
				}
				break;
			case 15:
				localctx = new IncreaseStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 170;
				this.match(LudiParser.T__14);
				this.state = 171;
				this.lvalue();
				this.state = 172;
				this.match(LudiParser.T__15);
				this.state = 173;
				this.expression(0);
				}
				break;
			case 17:
				localctx = new DecreaseStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 175;
				this.match(LudiParser.T__16);
				this.state = 176;
				this.lvalue();
				this.state = 177;
				this.match(LudiParser.T__15);
				this.state = 178;
				this.expression(0);
				}
				break;
			case 18:
				localctx = new IfStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 180;
				this.match(LudiParser.T__17);
				this.state = 181;
				this.expression(0);
				this.state = 182;
				this.match(LudiParser.T__18);
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 183;
					this.statement();
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 446464) !== 0));
				this.state = 188;
				this.match(LudiParser.T__19);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public when(): WhenContext {
		let localctx: WhenContext = new WhenContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LudiParser.RULE_when);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this.match(LudiParser.T__20);
			this.state = 193;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, LudiParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				localctx = new ParenthizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 196;
				this.match(LudiParser.T__1);
				this.state = 197;
				this.expression(0);
				this.state = 198;
				this.match(LudiParser.T__3);
				}
				break;
			case 2:
				{
				localctx = new IdentifierExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 200;
				this.lvalue();
				}
				break;
			case 3:
				{
				localctx = new NumberExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 201;
				this.match(LudiParser.NUMBER);
				}
				break;
			case 4:
				{
				localctx = new FunctionCallExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 202;
				this.identifier();
				this.state = 203;
				this.match(LudiParser.T__1);
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12582916) !== 0) || _la===36 || _la===37) {
					{
					this.state = 204;
					(localctx as FunctionCallExpressionContext)._expression = this.expression(0);
					(localctx as FunctionCallExpressionContext)._args.push((localctx as FunctionCallExpressionContext)._expression);
					this.state = 209;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 205;
						this.match(LudiParser.T__2);
						this.state = 206;
						(localctx as FunctionCallExpressionContext)._expression = this.expression(0);
						(localctx as FunctionCallExpressionContext)._args.push((localctx as FunctionCallExpressionContext)._expression);
						}
						}
						this.state = 211;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 214;
				this.match(LudiParser.T__3);
				}
				break;
			case 5:
				{
				localctx = new NegationContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 216;
				_la = this._input.LA(1);
				if(!(_la===22 || _la===23)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 217;
				this.expression(9);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 246;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 244;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						localctx = new ConjunctionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ConjunctionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
						this.state = 220;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 221;
						(localctx as ConjunctionContext)._operator = this.match(LudiParser.T__23);
						this.state = 222;
						(localctx as ConjunctionContext)._right = this.expression(9);
						}
						break;
					case 2:
						{
						localctx = new ConjunctionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ConjunctionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
						this.state = 223;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 224;
						(localctx as ConjunctionContext)._operator = this.match(LudiParser.T__24);
						this.state = 225;
						(localctx as ConjunctionContext)._right = this.expression(8);
						}
						break;
					case 3:
						{
						localctx = new ComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
						this.state = 226;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 227;
						(localctx as ComparisonContext)._operator = this.match(LudiParser.T__25);
						this.state = 228;
						(localctx as ComparisonContext)._right = this.expression(7);
						}
						break;
					case 4:
						{
						localctx = new ComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
						this.state = 229;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 230;
						(localctx as ComparisonContext)._operator = this.match(LudiParser.T__26);
						this.state = 231;
						(localctx as ComparisonContext)._right = this.expression(6);
						}
						break;
					case 5:
						{
						localctx = new ComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
						this.state = 232;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 233;
						(localctx as ComparisonContext)._operator = this.match(LudiParser.T__27);
						this.state = 234;
						(localctx as ComparisonContext)._right = this.expression(5);
						}
						break;
					case 6:
						{
						localctx = new ComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
						this.state = 235;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 236;
						(localctx as ComparisonContext)._operator = this.match(LudiParser.T__28);
						this.state = 237;
						(localctx as ComparisonContext)._right = this.expression(4);
						}
						break;
					case 7:
						{
						localctx = new ComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
						this.state = 238;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 239;
						(localctx as ComparisonContext)._operator = this.match(LudiParser.T__29);
						this.state = 240;
						(localctx as ComparisonContext)._right = this.expression(3);
						}
						break;
					case 8:
						{
						localctx = new ComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ComparisonContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
						this.state = 241;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 242;
						(localctx as ComparisonContext)._operator = this.match(LudiParser.T__30);
						this.state = 243;
						(localctx as ComparisonContext)._right = this.expression(2);
						}
						break;
					}
					}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lvalue(): LvalueContext {
		let localctx: LvalueContext = new LvalueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LudiParser.RULE_lvalue);
		let _la: number;
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 249;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 250;
				this.identifier();
				this.state = 251;
				this.match(LudiParser.T__31);
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12582916) !== 0) || _la===36 || _la===37) {
					{
					this.state = 252;
					localctx._expression = this.expression(0);
					localctx._args.push(localctx._expression);
					this.state = 257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 253;
						this.match(LudiParser.T__2);
						this.state = 254;
						localctx._expression = this.expression(0);
						localctx._args.push(localctx._expression);
						}
						}
						this.state = 259;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 262;
				this.match(LudiParser.T__32);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeExpression(): TypeExpressionContext {
		let localctx: TypeExpressionContext = new TypeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LudiParser.RULE_typeExpression);
		let _la: number;
		try {
			this.state = 293;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 266;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 267;
				this.identifier();
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 268;
					this.match(LudiParser.T__23);
					this.state = 269;
					this.identifier();
					}
					}
					this.state = 272;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===24);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 274;
				this.match(LudiParser.T__33);
				this.state = 275;
				localctx._name = this.identifier();
				this.state = 276;
				localctx._type_ = this.identifier();
				this.state = 277;
				this.match(LudiParser.T__34);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 279;
				this.identifier();
				this.state = 280;
				this.match(LudiParser.T__31);
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 12582916) !== 0) || _la===36 || _la===37) {
					{
					this.state = 281;
					localctx._expression = this.expression(0);
					localctx._args.push(localctx._expression);
					this.state = 286;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 282;
						this.match(LudiParser.T__2);
						this.state = 283;
						localctx._expression = this.expression(0);
						localctx._args.push(localctx._expression);
						}
						}
						this.state = 288;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 291;
				this.match(LudiParser.T__32);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LudiParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 295;
			this.match(LudiParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LudiParser.RULE_number);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 297;
			this.match(LudiParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,38,300,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,5,0,34,8,
	0,10,0,12,0,37,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,48,8,1,1,2,1,
	2,1,2,1,2,1,2,1,2,5,2,56,8,2,10,2,12,2,59,9,2,3,2,61,8,2,1,2,1,2,1,2,5,
	2,66,8,2,10,2,12,2,69,9,2,1,2,4,2,72,8,2,11,2,12,2,73,1,3,1,3,1,3,1,3,1,
	3,1,3,5,3,82,8,3,10,3,12,3,85,9,3,3,3,87,8,3,1,3,1,3,1,3,5,3,92,8,3,10,
	3,12,3,95,9,3,1,3,4,3,98,8,3,11,3,12,3,99,1,4,1,4,1,4,1,4,1,4,1,4,5,4,108,
	8,4,10,4,12,4,111,9,4,3,4,113,8,4,1,4,1,4,1,4,5,4,118,8,4,10,4,12,4,121,
	9,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,129,8,5,10,5,12,5,132,9,5,3,5,134,8,5,1,
	5,1,5,1,5,5,5,139,8,5,10,5,12,5,142,9,5,1,6,1,6,1,6,4,6,147,8,6,11,6,12,
	6,148,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,4,
	9,185,8,9,11,9,12,9,186,1,9,1,9,3,9,191,8,9,1,10,1,10,1,10,1,11,1,11,1,
	11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,208,8,11,10,11,12,
	11,211,9,11,3,11,213,8,11,1,11,1,11,1,11,1,11,3,11,219,8,11,1,11,1,11,1,
	11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,245,8,11,10,11,12,11,248,9,11,1,
	12,1,12,1,12,1,12,1,12,1,12,5,12,256,8,12,10,12,12,12,259,9,12,3,12,261,
	8,12,1,12,1,12,3,12,265,8,12,1,13,1,13,1,13,1,13,4,13,271,8,13,11,13,12,
	13,272,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,285,8,13,
	10,13,12,13,288,9,13,3,13,290,8,13,1,13,1,13,3,13,294,8,13,1,14,1,14,1,
	15,1,15,1,15,0,1,22,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,1,1,
	0,22,23,333,0,35,1,0,0,0,2,47,1,0,0,0,4,49,1,0,0,0,6,75,1,0,0,0,8,101,1,
	0,0,0,10,122,1,0,0,0,12,143,1,0,0,0,14,150,1,0,0,0,16,155,1,0,0,0,18,190,
	1,0,0,0,20,192,1,0,0,0,22,218,1,0,0,0,24,264,1,0,0,0,26,293,1,0,0,0,28,
	295,1,0,0,0,30,297,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,37,1,0,0,0,35,
	33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,38,39,5,0,0,1,39,1,
	1,0,0,0,40,48,3,4,2,0,41,48,3,12,6,0,42,48,3,6,3,0,43,48,3,8,4,0,44,48,
	3,10,5,0,45,48,3,14,7,0,46,48,3,16,8,0,47,40,1,0,0,0,47,41,1,0,0,0,47,42,
	1,0,0,0,47,43,1,0,0,0,47,44,1,0,0,0,47,45,1,0,0,0,47,46,1,0,0,0,48,3,1,
	0,0,0,49,50,5,1,0,0,50,51,3,28,14,0,51,60,5,2,0,0,52,57,3,28,14,0,53,54,
	5,3,0,0,54,56,3,28,14,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,
	1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,60,52,1,0,0,0,60,61,1,0,0,0,61,62,1,
	0,0,0,62,63,5,4,0,0,63,67,5,5,0,0,64,66,3,20,10,0,65,64,1,0,0,0,66,69,1,
	0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,70,72,3,18,
	9,0,71,70,1,0,0,0,72,73,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,5,1,0,0,
	0,75,76,5,6,0,0,76,77,3,28,14,0,77,86,5,2,0,0,78,83,3,28,14,0,79,80,5,3,
	0,0,80,82,3,28,14,0,81,79,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,
	0,0,84,87,1,0,0,0,85,83,1,0,0,0,86,78,1,0,0,0,86,87,1,0,0,0,87,88,1,0,0,
	0,88,89,5,4,0,0,89,93,5,5,0,0,90,92,3,20,10,0,91,90,1,0,0,0,92,95,1,0,0,
	0,93,91,1,0,0,0,93,94,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,96,98,3,18,9,
	0,97,96,1,0,0,0,98,99,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,7,1,0,0,
	0,101,102,5,7,0,0,102,103,3,28,14,0,103,112,5,2,0,0,104,109,3,28,14,0,105,
	106,5,3,0,0,106,108,3,28,14,0,107,105,1,0,0,0,108,111,1,0,0,0,109,107,1,
	0,0,0,109,110,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,112,104,1,0,0,0,112,
	113,1,0,0,0,113,114,1,0,0,0,114,115,5,4,0,0,115,119,5,5,0,0,116,118,3,20,
	10,0,117,116,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,
	9,1,0,0,0,121,119,1,0,0,0,122,123,5,8,0,0,123,124,3,28,14,0,124,133,5,2,
	0,0,125,130,3,28,14,0,126,127,5,3,0,0,127,129,3,28,14,0,128,126,1,0,0,0,
	129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,134,1,0,0,0,132,130,
	1,0,0,0,133,125,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,136,5,4,0,0,
	136,140,5,5,0,0,137,139,3,20,10,0,138,137,1,0,0,0,139,142,1,0,0,0,140,138,
	1,0,0,0,140,141,1,0,0,0,141,11,1,0,0,0,142,140,1,0,0,0,143,144,5,9,0,0,
	144,146,5,5,0,0,145,147,3,18,9,0,146,145,1,0,0,0,147,148,1,0,0,0,148,146,
	1,0,0,0,148,149,1,0,0,0,149,13,1,0,0,0,150,151,5,10,0,0,151,152,3,28,14,
	0,152,153,5,5,0,0,153,154,3,26,13,0,154,15,1,0,0,0,155,156,5,11,0,0,156,
	157,3,28,14,0,157,158,5,5,0,0,158,159,3,26,13,0,159,17,1,0,0,0,160,161,
	5,12,0,0,161,162,3,24,12,0,162,163,5,13,0,0,163,164,3,22,11,0,164,191,1,
	0,0,0,165,166,5,14,0,0,166,167,3,24,12,0,167,168,5,13,0,0,168,169,3,22,
	11,0,169,191,1,0,0,0,170,171,5,15,0,0,171,172,3,24,12,0,172,173,5,16,0,
	0,173,174,3,22,11,0,174,191,1,0,0,0,175,176,5,17,0,0,176,177,3,24,12,0,
	177,178,5,16,0,0,178,179,3,22,11,0,179,191,1,0,0,0,180,181,5,18,0,0,181,
	182,3,22,11,0,182,184,5,19,0,0,183,185,3,18,9,0,184,183,1,0,0,0,185,186,
	1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,189,5,20,0,
	0,189,191,1,0,0,0,190,160,1,0,0,0,190,165,1,0,0,0,190,170,1,0,0,0,190,175,
	1,0,0,0,190,180,1,0,0,0,191,19,1,0,0,0,192,193,5,21,0,0,193,194,3,22,11,
	0,194,21,1,0,0,0,195,196,6,11,-1,0,196,197,5,2,0,0,197,198,3,22,11,0,198,
	199,5,4,0,0,199,219,1,0,0,0,200,219,3,24,12,0,201,219,5,37,0,0,202,203,
	3,28,14,0,203,212,5,2,0,0,204,209,3,22,11,0,205,206,5,3,0,0,206,208,3,22,
	11,0,207,205,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,210,
	213,1,0,0,0,211,209,1,0,0,0,212,204,1,0,0,0,212,213,1,0,0,0,213,214,1,0,
	0,0,214,215,5,4,0,0,215,219,1,0,0,0,216,217,7,0,0,0,217,219,3,22,11,9,218,
	195,1,0,0,0,218,200,1,0,0,0,218,201,1,0,0,0,218,202,1,0,0,0,218,216,1,0,
	0,0,219,246,1,0,0,0,220,221,10,8,0,0,221,222,5,24,0,0,222,245,3,22,11,9,
	223,224,10,7,0,0,224,225,5,25,0,0,225,245,3,22,11,8,226,227,10,6,0,0,227,
	228,5,26,0,0,228,245,3,22,11,7,229,230,10,5,0,0,230,231,5,27,0,0,231,245,
	3,22,11,6,232,233,10,4,0,0,233,234,5,28,0,0,234,245,3,22,11,5,235,236,10,
	3,0,0,236,237,5,29,0,0,237,245,3,22,11,4,238,239,10,2,0,0,239,240,5,30,
	0,0,240,245,3,22,11,3,241,242,10,1,0,0,242,243,5,31,0,0,243,245,3,22,11,
	2,244,220,1,0,0,0,244,223,1,0,0,0,244,226,1,0,0,0,244,229,1,0,0,0,244,232,
	1,0,0,0,244,235,1,0,0,0,244,238,1,0,0,0,244,241,1,0,0,0,245,248,1,0,0,0,
	246,244,1,0,0,0,246,247,1,0,0,0,247,23,1,0,0,0,248,246,1,0,0,0,249,265,
	3,28,14,0,250,251,3,28,14,0,251,260,5,32,0,0,252,257,3,22,11,0,253,254,
	5,3,0,0,254,256,3,22,11,0,255,253,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,
	0,257,258,1,0,0,0,258,261,1,0,0,0,259,257,1,0,0,0,260,252,1,0,0,0,260,261,
	1,0,0,0,261,262,1,0,0,0,262,263,5,33,0,0,263,265,1,0,0,0,264,249,1,0,0,
	0,264,250,1,0,0,0,265,25,1,0,0,0,266,294,3,28,14,0,267,270,3,28,14,0,268,
	269,5,24,0,0,269,271,3,28,14,0,270,268,1,0,0,0,271,272,1,0,0,0,272,270,
	1,0,0,0,272,273,1,0,0,0,273,294,1,0,0,0,274,275,5,34,0,0,275,276,3,28,14,
	0,276,277,3,28,14,0,277,278,5,35,0,0,278,294,1,0,0,0,279,280,3,28,14,0,
	280,289,5,32,0,0,281,286,3,22,11,0,282,283,5,3,0,0,283,285,3,22,11,0,284,
	282,1,0,0,0,285,288,1,0,0,0,286,284,1,0,0,0,286,287,1,0,0,0,287,290,1,0,
	0,0,288,286,1,0,0,0,289,281,1,0,0,0,289,290,1,0,0,0,290,291,1,0,0,0,291,
	292,5,33,0,0,292,294,1,0,0,0,293,266,1,0,0,0,293,267,1,0,0,0,293,274,1,
	0,0,0,293,279,1,0,0,0,294,27,1,0,0,0,295,296,5,36,0,0,296,29,1,0,0,0,297,
	298,5,37,0,0,298,31,1,0,0,0,31,35,47,57,60,67,73,83,86,93,99,109,112,119,
	130,133,140,148,186,190,209,212,218,244,246,257,260,264,272,286,289,293];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LudiParser.__ATN) {
			LudiParser.__ATN = new ATNDeserializer().deserialize(LudiParser._serializedATN);
		}

		return LudiParser.__ATN;
	}


	static DecisionsToDFA = LudiParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class GameContext extends ParserRuleContext {
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(LudiParser.EOF, 0);
	}
	public definition_list(): DefinitionContext[] {
		return this.getTypedRuleContexts(DefinitionContext) as DefinitionContext[];
	}
	public definition(i: number): DefinitionContext {
		return this.getTypedRuleContext(DefinitionContext, i) as DefinitionContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_game;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterGame) {
	 		listener.enterGame(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitGame) {
	 		listener.exitGame(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitGame) {
			return visitor.visitGame(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public action(): ActionContext {
		return this.getTypedRuleContext(ActionContext, 0) as ActionContext;
	}
	public setup(): SetupContext {
		return this.getTypedRuleContext(SetupContext, 0) as SetupContext;
	}
	public trigger(): TriggerContext {
		return this.getTypedRuleContext(TriggerContext, 0) as TriggerContext;
	}
	public win(): WinContext {
		return this.getTypedRuleContext(WinContext, 0) as WinContext;
	}
	public loss(): LossContext {
		return this.getTypedRuleContext(LossContext, 0) as LossContext;
	}
	public kind(): KindContext {
		return this.getTypedRuleContext(KindContext, 0) as KindContext;
	}
	public state_definition(): State_definitionContext {
		return this.getTypedRuleContext(State_definitionContext, 0) as State_definitionContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_definition;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterDefinition) {
	 		listener.enterDefinition(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitDefinition) {
	 		listener.exitDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _identifier!: IdentifierContext;
	public _args: IdentifierContext[] = [];
	public _when!: WhenContext;
	public _conditions: WhenContext[] = [];
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public when_list(): WhenContext[] {
		return this.getTypedRuleContexts(WhenContext) as WhenContext[];
	}
	public when(i: number): WhenContext {
		return this.getTypedRuleContext(WhenContext, i) as WhenContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_action;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterAction) {
	 		listener.enterAction(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitAction) {
	 		listener.exitAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitAction) {
			return visitor.visitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriggerContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _identifier!: IdentifierContext;
	public _args: IdentifierContext[] = [];
	public _when!: WhenContext;
	public _conditions: WhenContext[] = [];
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public when_list(): WhenContext[] {
		return this.getTypedRuleContexts(WhenContext) as WhenContext[];
	}
	public when(i: number): WhenContext {
		return this.getTypedRuleContext(WhenContext, i) as WhenContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_trigger;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterTrigger) {
	 		listener.enterTrigger(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitTrigger) {
	 		listener.exitTrigger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitTrigger) {
			return visitor.visitTrigger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WinContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _identifier!: IdentifierContext;
	public _args: IdentifierContext[] = [];
	public _when!: WhenContext;
	public _conditions: WhenContext[] = [];
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public when_list(): WhenContext[] {
		return this.getTypedRuleContexts(WhenContext) as WhenContext[];
	}
	public when(i: number): WhenContext {
		return this.getTypedRuleContext(WhenContext, i) as WhenContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_win;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterWin) {
	 		listener.enterWin(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitWin) {
	 		listener.exitWin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitWin) {
			return visitor.visitWin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LossContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _identifier!: IdentifierContext;
	public _args: IdentifierContext[] = [];
	public _when!: WhenContext;
	public _conditions: WhenContext[] = [];
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public when_list(): WhenContext[] {
		return this.getTypedRuleContexts(WhenContext) as WhenContext[];
	}
	public when(i: number): WhenContext {
		return this.getTypedRuleContext(WhenContext, i) as WhenContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_loss;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterLoss) {
	 		listener.enterLoss(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitLoss) {
	 		listener.exitLoss(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitLoss) {
			return visitor.visitLoss(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetupContext extends ParserRuleContext {
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_setup;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterSetup) {
	 		listener.enterSetup(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitSetup) {
	 		listener.exitSetup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitSetup) {
			return visitor.visitSetup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KindContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeExpression(): TypeExpressionContext {
		return this.getTypedRuleContext(TypeExpressionContext, 0) as TypeExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_kind;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterKind) {
	 		listener.enterKind(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitKind) {
	 		listener.exitKind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitKind) {
			return visitor.visitKind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class State_definitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeExpression(): TypeExpressionContext {
		return this.getTypedRuleContext(TypeExpressionContext, 0) as TypeExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_state_definition;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterState_definition) {
	 		listener.enterState_definition(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitState_definition) {
	 		listener.exitState_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitState_definition) {
			return visitor.visitState_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_statement;
	}
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class IfStatementContext extends StatementContext {
	constructor(parser: LudiParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitIfStatement) {
	 		listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncreaseStatementContext extends StatementContext {
	constructor(parser: LudiParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lvalue(): LvalueContext {
		return this.getTypedRuleContext(LvalueContext, 0) as LvalueContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterIncreaseStatement) {
	 		listener.enterIncreaseStatement(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitIncreaseStatement) {
	 		listener.exitIncreaseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitIncreaseStatement) {
			return visitor.visitIncreaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ChangeStatementContext extends StatementContext {
	constructor(parser: LudiParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lvalue(): LvalueContext {
		return this.getTypedRuleContext(LvalueContext, 0) as LvalueContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterChangeStatement) {
	 		listener.enterChangeStatement(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitChangeStatement) {
	 		listener.exitChangeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitChangeStatement) {
			return visitor.visitChangeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DecreaseStatementContext extends StatementContext {
	constructor(parser: LudiParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lvalue(): LvalueContext {
		return this.getTypedRuleContext(LvalueContext, 0) as LvalueContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterDecreaseStatement) {
	 		listener.enterDecreaseStatement(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitDecreaseStatement) {
	 		listener.exitDecreaseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitDecreaseStatement) {
			return visitor.visitDecreaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SetStatementContext extends StatementContext {
	constructor(parser: LudiParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lvalue(): LvalueContext {
		return this.getTypedRuleContext(LvalueContext, 0) as LvalueContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterSetStatement) {
	 		listener.enterSetStatement(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitSetStatement) {
	 		listener.exitSetStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitSetStatement) {
			return visitor.visitSetStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenContext extends ParserRuleContext {
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_when;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterWhen) {
	 		listener.enterWhen(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitWhen) {
	 		listener.exitWhen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitWhen) {
			return visitor.visitWhen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_expression;
	}
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NegationContext extends ExpressionContext {
	constructor(parser: LudiParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterNegation) {
	 		listener.enterNegation(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitNegation) {
	 		listener.exitNegation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitNegation) {
			return visitor.visitNegation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	constructor(parser: LudiParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConjunctionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	constructor(parser: LudiParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterConjunction) {
	 		listener.enterConjunction(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitConjunction) {
	 		listener.exitConjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitConjunction) {
			return visitor.visitConjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExpressionContext extends ExpressionContext {
	constructor(parser: LudiParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(LudiParser.NUMBER, 0);
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterNumberExpression) {
	 		listener.enterNumberExpression(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitNumberExpression) {
	 		listener.exitNumberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitNumberExpression) {
			return visitor.visitNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthizedExpressionContext extends ExpressionContext {
	constructor(parser: LudiParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterParenthizedExpression) {
	 		listener.enterParenthizedExpression(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitParenthizedExpression) {
	 		listener.exitParenthizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitParenthizedExpression) {
			return visitor.visitParenthizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public _expression!: ExpressionContext;
	public _args: ExpressionContext[] = [];
	constructor(parser: LudiParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterFunctionCallExpression) {
	 		listener.enterFunctionCallExpression(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitFunctionCallExpression) {
	 		listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	constructor(parser: LudiParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public lvalue(): LvalueContext {
		return this.getTypedRuleContext(LvalueContext, 0) as LvalueContext;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterIdentifierExpression) {
	 		listener.enterIdentifierExpression(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitIdentifierExpression) {
	 		listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LvalueContext extends ParserRuleContext {
	public _expression!: ExpressionContext;
	public _args: ExpressionContext[] = [];
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_lvalue;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterLvalue) {
	 		listener.enterLvalue(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitLvalue) {
	 		listener.exitLvalue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitLvalue) {
			return visitor.visitLvalue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeExpressionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _type_!: IdentifierContext;
	public _expression!: ExpressionContext;
	public _args: ExpressionContext[] = [];
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_typeExpression;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterTypeExpression) {
	 		listener.enterTypeExpression(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitTypeExpression) {
	 		listener.exitTypeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitTypeExpression) {
			return visitor.visitTypeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LudiParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_identifier;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(LudiParser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_number;
	}
	public enterRule(listener: LudiListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: LudiListener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LudiVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
