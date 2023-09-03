// Generated from src/lib/lang/Ludi.g4 by ANTLR 4.13.0
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
	public static readonly RULE_condition = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_lvalue = 13;
	public static readonly RULE_typeExpression = 14;
	public static readonly RULE_identifier = 15;
	public static readonly RULE_number = 16;
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
                                                            "'{'", "'}'", 
                                                            "'['", "']'" ];
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
		"state_definition", "statement", "when", "condition", "expression", "lvalue", 
		"typeExpression", "identifier", "number",
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
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4034) !== 0)) {
				{
				{
				this.state = 34;
				this.definition();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 40;
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
			this.state = 49;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 42;
				this.action();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 43;
				this.setup();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 44;
				this.trigger();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 45;
				this.win();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 46;
				this.loss();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 47;
				this.kind();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 48;
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
			this.state = 51;
			this.match(LudiParser.T__0);
			this.state = 52;
			localctx._name = this.identifier();
			this.state = 53;
			this.match(LudiParser.T__1);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 54;
				localctx._identifier = this.identifier();
				localctx._args.push(localctx._identifier);
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 55;
					this.match(LudiParser.T__2);
					this.state = 56;
					localctx._identifier = this.identifier();
					localctx._args.push(localctx._identifier);
					}
					}
					this.state = 61;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 64;
			this.match(LudiParser.T__3);
			this.state = 65;
			this.match(LudiParser.T__4);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 66;
				localctx._when = this.when();
				localctx._conditions.push(localctx._when);
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 72;
				this.statement();
				}
				}
				this.state = 75;
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
			this.state = 77;
			this.match(LudiParser.T__5);
			this.state = 78;
			localctx._name = this.identifier();
			this.state = 79;
			this.match(LudiParser.T__1);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 80;
				localctx._identifier = this.identifier();
				localctx._args.push(localctx._identifier);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 81;
					this.match(LudiParser.T__2);
					this.state = 82;
					localctx._identifier = this.identifier();
					localctx._args.push(localctx._identifier);
					}
					}
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 90;
			this.match(LudiParser.T__3);
			this.state = 91;
			this.match(LudiParser.T__4);
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 92;
				localctx._when = this.when();
				localctx._conditions.push(localctx._when);
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 98;
				this.statement();
				}
				}
				this.state = 101;
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
			this.state = 103;
			this.match(LudiParser.T__6);
			this.state = 104;
			localctx._name = this.identifier();
			this.state = 105;
			this.match(LudiParser.T__1);
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 106;
				localctx._identifier = this.identifier();
				localctx._args.push(localctx._identifier);
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 107;
					this.match(LudiParser.T__2);
					this.state = 108;
					localctx._identifier = this.identifier();
					localctx._args.push(localctx._identifier);
					}
					}
					this.state = 113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 116;
			this.match(LudiParser.T__3);
			this.state = 117;
			this.match(LudiParser.T__4);
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 118;
				localctx._when = this.when();
				localctx._conditions.push(localctx._when);
				}
				}
				this.state = 123;
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
			this.state = 124;
			this.match(LudiParser.T__7);
			this.state = 125;
			localctx._name = this.identifier();
			this.state = 126;
			this.match(LudiParser.T__1);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 127;
				localctx._identifier = this.identifier();
				localctx._args.push(localctx._identifier);
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===3) {
					{
					{
					this.state = 128;
					this.match(LudiParser.T__2);
					this.state = 129;
					localctx._identifier = this.identifier();
					localctx._args.push(localctx._identifier);
					}
					}
					this.state = 134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 137;
			this.match(LudiParser.T__3);
			this.state = 138;
			this.match(LudiParser.T__4);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 139;
				localctx._when = this.when();
				localctx._conditions.push(localctx._when);
				}
				}
				this.state = 144;
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
			this.state = 145;
			this.match(LudiParser.T__8);
			this.state = 146;
			this.match(LudiParser.T__4);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 147;
				this.statement();
				}
				}
				this.state = 150;
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
			this.state = 152;
			this.match(LudiParser.T__9);
			this.state = 153;
			localctx._name = this.identifier();
			this.state = 154;
			this.match(LudiParser.T__4);
			this.state = 155;
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
			this.state = 157;
			this.match(LudiParser.T__10);
			this.state = 158;
			localctx._name = this.identifier();
			this.state = 159;
			this.match(LudiParser.T__4);
			this.state = 160;
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
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				localctx = new ChangeStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 162;
				this.match(LudiParser.T__11);
				this.state = 163;
				this.lvalue();
				this.state = 164;
				this.match(LudiParser.T__12);
				this.state = 165;
				this.expression();
				}
				break;
			case 14:
				localctx = new SetStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 167;
				this.match(LudiParser.T__13);
				this.state = 168;
				this.lvalue();
				this.state = 169;
				this.match(LudiParser.T__12);
				this.state = 170;
				this.expression();
				}
				break;
			case 15:
				localctx = new IncreaseStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 172;
				this.match(LudiParser.T__14);
				this.state = 173;
				this.lvalue();
				this.state = 174;
				this.match(LudiParser.T__15);
				this.state = 175;
				this.expression();
				}
				break;
			case 17:
				localctx = new DecreaseStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 177;
				this.match(LudiParser.T__16);
				this.state = 178;
				this.lvalue();
				this.state = 179;
				this.match(LudiParser.T__15);
				this.state = 180;
				this.expression();
				}
				break;
			case 18:
				localctx = new IfStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 182;
				this.match(LudiParser.T__17);
				this.state = 183;
				this.condition(0);
				this.state = 184;
				this.match(LudiParser.T__18);
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 185;
					this.statement();
					}
					}
					this.state = 188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 446464) !== 0));
				this.state = 190;
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
			this.state = 194;
			this.match(LudiParser.T__20);
			this.state = 195;
			this.condition(0);
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

	public condition(): ConditionContext;
	public condition(_p: number): ConditionContext;
	// @RuleVersion(0)
	public condition(_p?: number): ConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ConditionContext = new ConditionContext(this, this._ctx, _parentState);
		let _prevctx: ConditionContext = localctx;
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, LudiParser.RULE_condition, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 224;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				localctx = new NegationContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 198;
				_la = this._input.LA(1);
				if(!(_la===22 || _la===23)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 199;
				this.condition(9);
				}
				break;
			case 2:
				{
				localctx = new ComparisonContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 200;
				(localctx as ComparisonContext)._left = this.expression();
				this.state = 201;
				(localctx as ComparisonContext)._operator = this.match(LudiParser.T__25);
				this.state = 202;
				(localctx as ComparisonContext)._right = this.expression();
				}
				break;
			case 3:
				{
				localctx = new ComparisonContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 204;
				(localctx as ComparisonContext)._left = this.expression();
				this.state = 205;
				(localctx as ComparisonContext)._operator = this.match(LudiParser.T__26);
				this.state = 206;
				(localctx as ComparisonContext)._right = this.expression();
				}
				break;
			case 4:
				{
				localctx = new ComparisonContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 208;
				(localctx as ComparisonContext)._left = this.expression();
				this.state = 209;
				(localctx as ComparisonContext)._operator = this.match(LudiParser.T__27);
				this.state = 210;
				(localctx as ComparisonContext)._right = this.expression();
				}
				break;
			case 5:
				{
				localctx = new ComparisonContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 212;
				(localctx as ComparisonContext)._left = this.expression();
				this.state = 213;
				(localctx as ComparisonContext)._operator = this.match(LudiParser.T__28);
				this.state = 214;
				(localctx as ComparisonContext)._right = this.expression();
				}
				break;
			case 6:
				{
				localctx = new ComparisonContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 216;
				(localctx as ComparisonContext)._left = this.expression();
				this.state = 217;
				(localctx as ComparisonContext)._operator = this.match(LudiParser.T__29);
				this.state = 218;
				(localctx as ComparisonContext)._right = this.expression();
				}
				break;
			case 7:
				{
				localctx = new ComparisonContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 220;
				(localctx as ComparisonContext)._left = this.expression();
				this.state = 221;
				(localctx as ComparisonContext)._operator = this.match(LudiParser.T__30);
				this.state = 222;
				(localctx as ComparisonContext)._right = this.expression();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 232;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
					case 1:
						{
						localctx = new ConjunctionContext(this, new ConditionContext(this, _parentctx, _parentState));
						(localctx as ConjunctionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_condition);
						this.state = 226;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 227;
						(localctx as ConjunctionContext)._operator = this.match(LudiParser.T__23);
						this.state = 228;
						(localctx as ConjunctionContext)._right = this.condition(9);
						}
						break;
					case 2:
						{
						localctx = new ConjunctionContext(this, new ConditionContext(this, _parentctx, _parentState));
						(localctx as ConjunctionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_condition);
						this.state = 229;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 230;
						(localctx as ConjunctionContext)._operator = this.match(LudiParser.T__24);
						this.state = 231;
						(localctx as ConjunctionContext)._right = this.condition(8);
						}
						break;
					}
					}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LudiParser.RULE_expression);
		let _la: number;
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				localctx = new ParenthizedExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 237;
				this.match(LudiParser.T__1);
				this.state = 238;
				this.expression();
				this.state = 239;
				this.match(LudiParser.T__3);
				}
				break;
			case 2:
				localctx = new IdentifierExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 241;
				this.lvalue();
				}
				break;
			case 3:
				localctx = new NumberExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 242;
				this.match(LudiParser.NUMBER);
				}
				break;
			case 4:
				localctx = new FunctionCallExpressionContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 243;
				this.identifier();
				this.state = 244;
				this.match(LudiParser.T__1);
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2 || _la===36 || _la===37) {
					{
					this.state = 245;
					(localctx as FunctionCallExpressionContext)._expression = this.expression();
					(localctx as FunctionCallExpressionContext)._args.push((localctx as FunctionCallExpressionContext)._expression);
					this.state = 250;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 246;
						this.match(LudiParser.T__2);
						this.state = 247;
						(localctx as FunctionCallExpressionContext)._expression = this.expression();
						(localctx as FunctionCallExpressionContext)._args.push((localctx as FunctionCallExpressionContext)._expression);
						}
						}
						this.state = 252;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 255;
				this.match(LudiParser.T__3);
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
	public lvalue(): LvalueContext {
		let localctx: LvalueContext = new LvalueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LudiParser.RULE_lvalue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 259;
			this.identifier();
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
		this.enterRule(localctx, 28, LudiParser.RULE_typeExpression);
		let _la: number;
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 261;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 262;
				this.identifier();
				this.state = 263;
				this.match(LudiParser.T__23);
				this.state = 264;
				this.identifier();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 266;
				this.match(LudiParser.T__31);
				this.state = 267;
				localctx._name = this.identifier();
				this.state = 268;
				localctx._type_ = this.typeExpression();
				this.state = 269;
				this.match(LudiParser.T__32);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 271;
				this.identifier();
				this.state = 272;
				this.match(LudiParser.T__33);
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===2 || _la===36 || _la===37) {
					{
					this.state = 273;
					localctx._expression = this.expression();
					localctx._args.push(localctx._expression);
					this.state = 278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===3) {
						{
						{
						this.state = 274;
						this.match(LudiParser.T__2);
						this.state = 275;
						localctx._expression = this.expression();
						localctx._args.push(localctx._expression);
						}
						}
						this.state = 280;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 283;
				this.match(LudiParser.T__34);
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
		this.enterRule(localctx, 30, LudiParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 287;
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
		this.enterRule(localctx, 32, LudiParser.RULE_number);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 289;
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
			return this.condition_sempred(localctx as ConditionContext, predIndex);
		}
		return true;
	}
	private condition_sempred(localctx: ConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,38,292,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	5,0,36,8,0,10,0,12,0,39,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,50,
	8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,58,8,2,10,2,12,2,61,9,2,3,2,63,8,2,1,2,
	1,2,1,2,5,2,68,8,2,10,2,12,2,71,9,2,1,2,4,2,74,8,2,11,2,12,2,75,1,3,1,3,
	1,3,1,3,1,3,1,3,5,3,84,8,3,10,3,12,3,87,9,3,3,3,89,8,3,1,3,1,3,1,3,5,3,
	94,8,3,10,3,12,3,97,9,3,1,3,4,3,100,8,3,11,3,12,3,101,1,4,1,4,1,4,1,4,1,
	4,1,4,5,4,110,8,4,10,4,12,4,113,9,4,3,4,115,8,4,1,4,1,4,1,4,5,4,120,8,4,
	10,4,12,4,123,9,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,131,8,5,10,5,12,5,134,9,5,
	3,5,136,8,5,1,5,1,5,1,5,5,5,141,8,5,10,5,12,5,144,9,5,1,6,1,6,1,6,4,6,149,
	8,6,11,6,12,6,150,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,4,9,187,8,9,11,9,12,9,188,1,9,1,9,3,9,193,8,9,1,10,1,10,1,10,
	1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
	11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,225,
	8,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,233,8,11,10,11,12,11,236,9,11,1,
	12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,249,8,12,10,12,
	12,12,252,9,12,3,12,254,8,12,1,12,1,12,3,12,258,8,12,1,13,1,13,1,14,1,14,
	1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,277,
	8,14,10,14,12,14,280,9,14,3,14,282,8,14,1,14,1,14,3,14,286,8,14,1,15,1,
	15,1,16,1,16,1,16,0,1,22,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,0,1,1,0,22,23,319,0,37,1,0,0,0,2,49,1,0,0,0,4,51,1,0,0,0,6,77,1,0,0,
	0,8,103,1,0,0,0,10,124,1,0,0,0,12,145,1,0,0,0,14,152,1,0,0,0,16,157,1,0,
	0,0,18,192,1,0,0,0,20,194,1,0,0,0,22,224,1,0,0,0,24,257,1,0,0,0,26,259,
	1,0,0,0,28,285,1,0,0,0,30,287,1,0,0,0,32,289,1,0,0,0,34,36,3,2,1,0,35,34,
	1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,1,
	0,0,0,40,41,5,0,0,1,41,1,1,0,0,0,42,50,3,4,2,0,43,50,3,12,6,0,44,50,3,6,
	3,0,45,50,3,8,4,0,46,50,3,10,5,0,47,50,3,14,7,0,48,50,3,16,8,0,49,42,1,
	0,0,0,49,43,1,0,0,0,49,44,1,0,0,0,49,45,1,0,0,0,49,46,1,0,0,0,49,47,1,0,
	0,0,49,48,1,0,0,0,50,3,1,0,0,0,51,52,5,1,0,0,52,53,3,30,15,0,53,62,5,2,
	0,0,54,59,3,30,15,0,55,56,5,3,0,0,56,58,3,30,15,0,57,55,1,0,0,0,58,61,1,
	0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,62,54,1,0,
	0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,65,5,4,0,0,65,69,5,5,0,0,66,68,3,20,
	10,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,73,1,0,
	0,0,71,69,1,0,0,0,72,74,3,18,9,0,73,72,1,0,0,0,74,75,1,0,0,0,75,73,1,0,
	0,0,75,76,1,0,0,0,76,5,1,0,0,0,77,78,5,6,0,0,78,79,3,30,15,0,79,88,5,2,
	0,0,80,85,3,30,15,0,81,82,5,3,0,0,82,84,3,30,15,0,83,81,1,0,0,0,84,87,1,
	0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,88,80,1,0,
	0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,91,5,4,0,0,91,95,5,5,0,0,92,94,3,20,
	10,0,93,92,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,99,1,0,
	0,0,97,95,1,0,0,0,98,100,3,18,9,0,99,98,1,0,0,0,100,101,1,0,0,0,101,99,
	1,0,0,0,101,102,1,0,0,0,102,7,1,0,0,0,103,104,5,7,0,0,104,105,3,30,15,0,
	105,114,5,2,0,0,106,111,3,30,15,0,107,108,5,3,0,0,108,110,3,30,15,0,109,
	107,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,115,1,0,
	0,0,113,111,1,0,0,0,114,106,1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,116,
	117,5,4,0,0,117,121,5,5,0,0,118,120,3,20,10,0,119,118,1,0,0,0,120,123,1,
	0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,9,1,0,0,0,123,121,1,0,0,0,124,
	125,5,8,0,0,125,126,3,30,15,0,126,135,5,2,0,0,127,132,3,30,15,0,128,129,
	5,3,0,0,129,131,3,30,15,0,130,128,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,
	0,132,133,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,135,127,1,0,0,0,135,136,
	1,0,0,0,136,137,1,0,0,0,137,138,5,4,0,0,138,142,5,5,0,0,139,141,3,20,10,
	0,140,139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,11,
	1,0,0,0,144,142,1,0,0,0,145,146,5,9,0,0,146,148,5,5,0,0,147,149,3,18,9,
	0,148,147,1,0,0,0,149,150,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,13,
	1,0,0,0,152,153,5,10,0,0,153,154,3,30,15,0,154,155,5,5,0,0,155,156,3,28,
	14,0,156,15,1,0,0,0,157,158,5,11,0,0,158,159,3,30,15,0,159,160,5,5,0,0,
	160,161,3,28,14,0,161,17,1,0,0,0,162,163,5,12,0,0,163,164,3,26,13,0,164,
	165,5,13,0,0,165,166,3,24,12,0,166,193,1,0,0,0,167,168,5,14,0,0,168,169,
	3,26,13,0,169,170,5,13,0,0,170,171,3,24,12,0,171,193,1,0,0,0,172,173,5,
	15,0,0,173,174,3,26,13,0,174,175,5,16,0,0,175,176,3,24,12,0,176,193,1,0,
	0,0,177,178,5,17,0,0,178,179,3,26,13,0,179,180,5,16,0,0,180,181,3,24,12,
	0,181,193,1,0,0,0,182,183,5,18,0,0,183,184,3,22,11,0,184,186,5,19,0,0,185,
	187,3,18,9,0,186,185,1,0,0,0,187,188,1,0,0,0,188,186,1,0,0,0,188,189,1,
	0,0,0,189,190,1,0,0,0,190,191,5,20,0,0,191,193,1,0,0,0,192,162,1,0,0,0,
	192,167,1,0,0,0,192,172,1,0,0,0,192,177,1,0,0,0,192,182,1,0,0,0,193,19,
	1,0,0,0,194,195,5,21,0,0,195,196,3,22,11,0,196,21,1,0,0,0,197,198,6,11,
	-1,0,198,199,7,0,0,0,199,225,3,22,11,9,200,201,3,24,12,0,201,202,5,26,0,
	0,202,203,3,24,12,0,203,225,1,0,0,0,204,205,3,24,12,0,205,206,5,27,0,0,
	206,207,3,24,12,0,207,225,1,0,0,0,208,209,3,24,12,0,209,210,5,28,0,0,210,
	211,3,24,12,0,211,225,1,0,0,0,212,213,3,24,12,0,213,214,5,29,0,0,214,215,
	3,24,12,0,215,225,1,0,0,0,216,217,3,24,12,0,217,218,5,30,0,0,218,219,3,
	24,12,0,219,225,1,0,0,0,220,221,3,24,12,0,221,222,5,31,0,0,222,223,3,24,
	12,0,223,225,1,0,0,0,224,197,1,0,0,0,224,200,1,0,0,0,224,204,1,0,0,0,224,
	208,1,0,0,0,224,212,1,0,0,0,224,216,1,0,0,0,224,220,1,0,0,0,225,234,1,0,
	0,0,226,227,10,8,0,0,227,228,5,24,0,0,228,233,3,22,11,9,229,230,10,7,0,
	0,230,231,5,25,0,0,231,233,3,22,11,8,232,226,1,0,0,0,232,229,1,0,0,0,233,
	236,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,23,1,0,0,0,236,234,1,0,
	0,0,237,238,5,2,0,0,238,239,3,24,12,0,239,240,5,4,0,0,240,258,1,0,0,0,241,
	258,3,26,13,0,242,258,5,37,0,0,243,244,3,30,15,0,244,253,5,2,0,0,245,250,
	3,24,12,0,246,247,5,3,0,0,247,249,3,24,12,0,248,246,1,0,0,0,249,252,1,0,
	0,0,250,248,1,0,0,0,250,251,1,0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,253,
	245,1,0,0,0,253,254,1,0,0,0,254,255,1,0,0,0,255,256,5,4,0,0,256,258,1,0,
	0,0,257,237,1,0,0,0,257,241,1,0,0,0,257,242,1,0,0,0,257,243,1,0,0,0,258,
	25,1,0,0,0,259,260,3,30,15,0,260,27,1,0,0,0,261,286,3,30,15,0,262,263,3,
	30,15,0,263,264,5,24,0,0,264,265,3,30,15,0,265,286,1,0,0,0,266,267,5,32,
	0,0,267,268,3,30,15,0,268,269,3,28,14,0,269,270,5,33,0,0,270,286,1,0,0,
	0,271,272,3,30,15,0,272,281,5,34,0,0,273,278,3,24,12,0,274,275,5,3,0,0,
	275,277,3,24,12,0,276,274,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,
	1,0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,281,273,1,0,0,0,281,282,1,0,0,0,
	282,283,1,0,0,0,283,284,5,35,0,0,284,286,1,0,0,0,285,261,1,0,0,0,285,262,
	1,0,0,0,285,266,1,0,0,0,285,271,1,0,0,0,286,29,1,0,0,0,287,288,5,36,0,0,
	288,31,1,0,0,0,289,290,5,37,0,0,290,33,1,0,0,0,28,37,49,59,62,69,75,85,
	88,95,101,111,114,121,132,135,142,150,188,192,224,232,234,250,253,257,278,
	281,285];

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
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
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
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
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


export class ConditionContext extends ParserRuleContext {
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LudiParser.RULE_condition;
	}
	public copyFrom(ctx: ConditionContext): void {
		super.copyFrom(ctx);
	}
}
export class NegationContext extends ConditionContext {
	constructor(parser: LudiParser, ctx: ConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public condition(): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, 0) as ConditionContext;
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
export class ComparisonContext extends ConditionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
	public _right!: ExpressionContext;
	constructor(parser: LudiParser, ctx: ConditionContext) {
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
export class ConjunctionContext extends ConditionContext {
	public _left!: ConditionContext;
	public _operator!: Token;
	public _right!: ConditionContext;
	constructor(parser: LudiParser, ctx: ConditionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public condition_list(): ConditionContext[] {
		return this.getTypedRuleContexts(ConditionContext) as ConditionContext[];
	}
	public condition(i: number): ConditionContext {
		return this.getTypedRuleContext(ConditionContext, i) as ConditionContext;
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
	constructor(parser?: LudiParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
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
	public _type_!: TypeExpressionContext;
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
	public typeExpression(): TypeExpressionContext {
		return this.getTypedRuleContext(TypeExpressionContext, 0) as TypeExpressionContext;
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
