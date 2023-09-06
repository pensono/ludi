// Generated from f:\Data\Code\Website\ludi\src\lib\Ludi.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LudiParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, IDENTIFIER=36, NUMBER=37, WS=38;
	public static final int
		RULE_game = 0, RULE_definition = 1, RULE_action = 2, RULE_trigger = 3, 
		RULE_win = 4, RULE_loss = 5, RULE_setup = 6, RULE_kind = 7, RULE_state_definition = 8, 
		RULE_statement = 9, RULE_when = 10, RULE_expression = 11, RULE_lvalue = 12, 
		RULE_typeExpression = 13, RULE_identifier = 14, RULE_number = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"game", "definition", "action", "trigger", "win", "loss", "setup", "kind", 
			"state_definition", "statement", "when", "expression", "lvalue", "typeExpression", 
			"identifier", "number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'action'", "'('", "','", "')'", "':'", "'trigger'", "'win'", "'loss'", 
			"'setup'", "'kind'", "'state'", "'change'", "'to'", "'set'", "'increase'", 
			"'by'", "'decrease'", "'if'", "'then'", "'end'", "'when'", "'not'", "'!'", 
			"'or'", "'and'", "'='", "'!='", "'>'", "'<'", "'>='", "'<='", "'['", 
			"']'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"IDENTIFIER", "NUMBER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Ludi.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LudiParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class GameContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(LudiParser.EOF, 0); }
		public List<DefinitionContext> definition() {
			return getRuleContexts(DefinitionContext.class);
		}
		public DefinitionContext definition(int i) {
			return getRuleContext(DefinitionContext.class,i);
		}
		public GameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_game; }
	}

	public final GameContext game() throws RecognitionException {
		GameContext _localctx = new GameContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_game);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9) | (1L << T__10))) != 0)) {
				{
				{
				setState(32);
				definition();
				}
				}
				setState(37);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(38);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefinitionContext extends ParserRuleContext {
		public ActionContext action() {
			return getRuleContext(ActionContext.class,0);
		}
		public SetupContext setup() {
			return getRuleContext(SetupContext.class,0);
		}
		public TriggerContext trigger() {
			return getRuleContext(TriggerContext.class,0);
		}
		public WinContext win() {
			return getRuleContext(WinContext.class,0);
		}
		public LossContext loss() {
			return getRuleContext(LossContext.class,0);
		}
		public KindContext kind() {
			return getRuleContext(KindContext.class,0);
		}
		public State_definitionContext state_definition() {
			return getRuleContext(State_definitionContext.class,0);
		}
		public DefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_definition; }
	}

	public final DefinitionContext definition() throws RecognitionException {
		DefinitionContext _localctx = new DefinitionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_definition);
		try {
			setState(47);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				action();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				setup();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 3);
				{
				setState(42);
				trigger();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 4);
				{
				setState(43);
				win();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 5);
				{
				setState(44);
				loss();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 6);
				{
				setState(45);
				kind();
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 7);
				{
				setState(46);
				state_definition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ActionContext extends ParserRuleContext {
		public IdentifierContext name;
		public IdentifierContext identifier;
		public List<IdentifierContext> args = new ArrayList<IdentifierContext>();
		public WhenContext when;
		public List<WhenContext> conditions = new ArrayList<WhenContext>();
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<WhenContext> when() {
			return getRuleContexts(WhenContext.class);
		}
		public WhenContext when(int i) {
			return getRuleContext(WhenContext.class,i);
		}
		public ActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action; }
	}

	public final ActionContext action() throws RecognitionException {
		ActionContext _localctx = new ActionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_action);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(T__0);
			setState(50);
			((ActionContext)_localctx).name = identifier();
			setState(51);
			match(T__1);
			setState(60);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(52);
				((ActionContext)_localctx).identifier = identifier();
				((ActionContext)_localctx).args.add(((ActionContext)_localctx).identifier);
				setState(57);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(53);
					match(T__2);
					setState(54);
					((ActionContext)_localctx).identifier = identifier();
					((ActionContext)_localctx).args.add(((ActionContext)_localctx).identifier);
					}
					}
					setState(59);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(62);
			match(T__3);
			setState(63);
			match(T__4);
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__20) {
				{
				{
				setState(64);
				((ActionContext)_localctx).when = when();
				((ActionContext)_localctx).conditions.add(((ActionContext)_localctx).when);
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(71); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(70);
				statement();
				}
				}
				setState(73); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14) | (1L << T__16) | (1L << T__17))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TriggerContext extends ParserRuleContext {
		public IdentifierContext name;
		public IdentifierContext identifier;
		public List<IdentifierContext> args = new ArrayList<IdentifierContext>();
		public WhenContext when;
		public List<WhenContext> conditions = new ArrayList<WhenContext>();
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<WhenContext> when() {
			return getRuleContexts(WhenContext.class);
		}
		public WhenContext when(int i) {
			return getRuleContext(WhenContext.class,i);
		}
		public TriggerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trigger; }
	}

	public final TriggerContext trigger() throws RecognitionException {
		TriggerContext _localctx = new TriggerContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_trigger);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(T__5);
			setState(76);
			((TriggerContext)_localctx).name = identifier();
			setState(77);
			match(T__1);
			setState(86);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(78);
				((TriggerContext)_localctx).identifier = identifier();
				((TriggerContext)_localctx).args.add(((TriggerContext)_localctx).identifier);
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(79);
					match(T__2);
					setState(80);
					((TriggerContext)_localctx).identifier = identifier();
					((TriggerContext)_localctx).args.add(((TriggerContext)_localctx).identifier);
					}
					}
					setState(85);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(88);
			match(T__3);
			setState(89);
			match(T__4);
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__20) {
				{
				{
				setState(90);
				((TriggerContext)_localctx).when = when();
				((TriggerContext)_localctx).conditions.add(((TriggerContext)_localctx).when);
				}
				}
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(97); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(96);
				statement();
				}
				}
				setState(99); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14) | (1L << T__16) | (1L << T__17))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WinContext extends ParserRuleContext {
		public IdentifierContext name;
		public IdentifierContext identifier;
		public List<IdentifierContext> args = new ArrayList<IdentifierContext>();
		public WhenContext when;
		public List<WhenContext> conditions = new ArrayList<WhenContext>();
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<WhenContext> when() {
			return getRuleContexts(WhenContext.class);
		}
		public WhenContext when(int i) {
			return getRuleContext(WhenContext.class,i);
		}
		public WinContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_win; }
	}

	public final WinContext win() throws RecognitionException {
		WinContext _localctx = new WinContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_win);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			match(T__6);
			setState(102);
			((WinContext)_localctx).name = identifier();
			setState(103);
			match(T__1);
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(104);
				((WinContext)_localctx).identifier = identifier();
				((WinContext)_localctx).args.add(((WinContext)_localctx).identifier);
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(105);
					match(T__2);
					setState(106);
					((WinContext)_localctx).identifier = identifier();
					((WinContext)_localctx).args.add(((WinContext)_localctx).identifier);
					}
					}
					setState(111);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(114);
			match(T__3);
			setState(115);
			match(T__4);
			setState(119);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__20) {
				{
				{
				setState(116);
				((WinContext)_localctx).when = when();
				((WinContext)_localctx).conditions.add(((WinContext)_localctx).when);
				}
				}
				setState(121);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LossContext extends ParserRuleContext {
		public IdentifierContext name;
		public IdentifierContext identifier;
		public List<IdentifierContext> args = new ArrayList<IdentifierContext>();
		public WhenContext when;
		public List<WhenContext> conditions = new ArrayList<WhenContext>();
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<WhenContext> when() {
			return getRuleContexts(WhenContext.class);
		}
		public WhenContext when(int i) {
			return getRuleContext(WhenContext.class,i);
		}
		public LossContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loss; }
	}

	public final LossContext loss() throws RecognitionException {
		LossContext _localctx = new LossContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_loss);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(T__7);
			setState(123);
			((LossContext)_localctx).name = identifier();
			setState(124);
			match(T__1);
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(125);
				((LossContext)_localctx).identifier = identifier();
				((LossContext)_localctx).args.add(((LossContext)_localctx).identifier);
				setState(130);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(126);
					match(T__2);
					setState(127);
					((LossContext)_localctx).identifier = identifier();
					((LossContext)_localctx).args.add(((LossContext)_localctx).identifier);
					}
					}
					setState(132);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(135);
			match(T__3);
			setState(136);
			match(T__4);
			setState(140);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__20) {
				{
				{
				setState(137);
				((LossContext)_localctx).when = when();
				((LossContext)_localctx).conditions.add(((LossContext)_localctx).when);
				}
				}
				setState(142);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetupContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public SetupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setup; }
	}

	public final SetupContext setup() throws RecognitionException {
		SetupContext _localctx = new SetupContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_setup);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			match(T__8);
			setState(144);
			match(T__4);
			setState(146); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(145);
				statement();
				}
				}
				setState(148); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14) | (1L << T__16) | (1L << T__17))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KindContext extends ParserRuleContext {
		public IdentifierContext name;
		public TypeExpressionContext typeExpression() {
			return getRuleContext(TypeExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public KindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kind; }
	}

	public final KindContext kind() throws RecognitionException {
		KindContext _localctx = new KindContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_kind);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			match(T__9);
			setState(151);
			((KindContext)_localctx).name = identifier();
			setState(152);
			match(T__4);
			setState(153);
			typeExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class State_definitionContext extends ParserRuleContext {
		public IdentifierContext name;
		public TypeExpressionContext typeExpression() {
			return getRuleContext(TypeExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public State_definitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_state_definition; }
	}

	public final State_definitionContext state_definition() throws RecognitionException {
		State_definitionContext _localctx = new State_definitionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_state_definition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			match(T__10);
			setState(156);
			((State_definitionContext)_localctx).name = identifier();
			setState(157);
			match(T__4);
			setState(158);
			typeExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	 
		public StatementContext() { }
		public void copyFrom(StatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class IfStatementContext extends StatementContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public IfStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class IncreaseStatementContext extends StatementContext {
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public IncreaseStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class ChangeStatementContext extends StatementContext {
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ChangeStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class DecreaseStatementContext extends StatementContext {
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DecreaseStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}
	public static class SetStatementContext extends StatementContext {
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SetStatementContext(StatementContext ctx) { copyFrom(ctx); }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_statement);
		int _la;
		try {
			setState(190);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__11:
				_localctx = new ChangeStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(160);
				match(T__11);
				setState(161);
				lvalue();
				setState(162);
				match(T__12);
				setState(163);
				expression(0);
				}
				break;
			case T__13:
				_localctx = new SetStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(165);
				match(T__13);
				setState(166);
				lvalue();
				setState(167);
				match(T__12);
				setState(168);
				expression(0);
				}
				break;
			case T__14:
				_localctx = new IncreaseStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(170);
				match(T__14);
				setState(171);
				lvalue();
				setState(172);
				match(T__15);
				setState(173);
				expression(0);
				}
				break;
			case T__16:
				_localctx = new DecreaseStatementContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(175);
				match(T__16);
				setState(176);
				lvalue();
				setState(177);
				match(T__15);
				setState(178);
				expression(0);
				}
				break;
			case T__17:
				_localctx = new IfStatementContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(180);
				match(T__17);
				setState(181);
				expression(0);
				setState(182);
				match(T__18);
				setState(184); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(183);
					statement();
					}
					}
					setState(186); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14) | (1L << T__16) | (1L << T__17))) != 0) );
				setState(188);
				match(T__19);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhenContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public WhenContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_when; }
	}

	public final WhenContext when() throws RecognitionException {
		WhenContext _localctx = new WhenContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_when);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			match(T__20);
			setState(193);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NegationContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NegationContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ComparisonContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ComparisonContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ConjunctionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ConjunctionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NumberExpressionContext extends ExpressionContext {
		public TerminalNode NUMBER() { return getToken(LudiParser.NUMBER, 0); }
		public NumberExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthizedExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ParenthizedExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionCallExpressionContext extends ExpressionContext {
		public ExpressionContext expression;
		public List<ExpressionContext> args = new ArrayList<ExpressionContext>();
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public FunctionCallExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierExpressionContext extends ExpressionContext {
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public IdentifierExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				_localctx = new ParenthizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(196);
				match(T__1);
				setState(197);
				expression(0);
				setState(198);
				match(T__3);
				}
				break;
			case 2:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(200);
				lvalue();
				}
				break;
			case 3:
				{
				_localctx = new NumberExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(201);
				match(NUMBER);
				}
				break;
			case 4:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(202);
				identifier();
				setState(203);
				match(T__1);
				setState(212);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__21) | (1L << T__22) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
					{
					setState(204);
					((FunctionCallExpressionContext)_localctx).expression = expression(0);
					((FunctionCallExpressionContext)_localctx).args.add(((FunctionCallExpressionContext)_localctx).expression);
					setState(209);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__2) {
						{
						{
						setState(205);
						match(T__2);
						setState(206);
						((FunctionCallExpressionContext)_localctx).expression = expression(0);
						((FunctionCallExpressionContext)_localctx).args.add(((FunctionCallExpressionContext)_localctx).expression);
						}
						}
						setState(211);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(214);
				match(T__3);
				}
				break;
			case 5:
				{
				_localctx = new NegationContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(216);
				_la = _input.LA(1);
				if ( !(_la==T__21 || _la==T__22) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(217);
				expression(9);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(246);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(244);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
					case 1:
						{
						_localctx = new ConjunctionContext(new ExpressionContext(_parentctx, _parentState));
						((ConjunctionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(220);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(221);
						((ConjunctionContext)_localctx).operator = match(T__23);
						setState(222);
						((ConjunctionContext)_localctx).right = expression(9);
						}
						break;
					case 2:
						{
						_localctx = new ConjunctionContext(new ExpressionContext(_parentctx, _parentState));
						((ConjunctionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(223);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(224);
						((ConjunctionContext)_localctx).operator = match(T__24);
						setState(225);
						((ConjunctionContext)_localctx).right = expression(8);
						}
						break;
					case 3:
						{
						_localctx = new ComparisonContext(new ExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(226);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(227);
						((ComparisonContext)_localctx).operator = match(T__25);
						setState(228);
						((ComparisonContext)_localctx).right = expression(7);
						}
						break;
					case 4:
						{
						_localctx = new ComparisonContext(new ExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(229);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(230);
						((ComparisonContext)_localctx).operator = match(T__26);
						setState(231);
						((ComparisonContext)_localctx).right = expression(6);
						}
						break;
					case 5:
						{
						_localctx = new ComparisonContext(new ExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(232);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(233);
						((ComparisonContext)_localctx).operator = match(T__27);
						setState(234);
						((ComparisonContext)_localctx).right = expression(5);
						}
						break;
					case 6:
						{
						_localctx = new ComparisonContext(new ExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(235);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(236);
						((ComparisonContext)_localctx).operator = match(T__28);
						setState(237);
						((ComparisonContext)_localctx).right = expression(4);
						}
						break;
					case 7:
						{
						_localctx = new ComparisonContext(new ExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(238);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(239);
						((ComparisonContext)_localctx).operator = match(T__29);
						setState(240);
						((ComparisonContext)_localctx).right = expression(3);
						}
						break;
					case 8:
						{
						_localctx = new ComparisonContext(new ExpressionContext(_parentctx, _parentState));
						((ComparisonContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(241);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(242);
						((ComparisonContext)_localctx).operator = match(T__30);
						setState(243);
						((ComparisonContext)_localctx).right = expression(2);
						}
						break;
					}
					} 
				}
				setState(248);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class LvalueContext extends ParserRuleContext {
		public ExpressionContext expression;
		public List<ExpressionContext> args = new ArrayList<ExpressionContext>();
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public LvalueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lvalue; }
	}

	public final LvalueContext lvalue() throws RecognitionException {
		LvalueContext _localctx = new LvalueContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_lvalue);
		int _la;
		try {
			setState(264);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(249);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(250);
				identifier();
				setState(251);
				match(T__31);
				setState(260);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__21) | (1L << T__22) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
					{
					setState(252);
					((LvalueContext)_localctx).expression = expression(0);
					((LvalueContext)_localctx).args.add(((LvalueContext)_localctx).expression);
					setState(257);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__2) {
						{
						{
						setState(253);
						match(T__2);
						setState(254);
						((LvalueContext)_localctx).expression = expression(0);
						((LvalueContext)_localctx).args.add(((LvalueContext)_localctx).expression);
						}
						}
						setState(259);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(262);
				match(T__32);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeExpressionContext extends ParserRuleContext {
		public IdentifierContext name;
		public IdentifierContext type;
		public ExpressionContext expression;
		public List<ExpressionContext> args = new ArrayList<ExpressionContext>();
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TypeExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeExpression; }
	}

	public final TypeExpressionContext typeExpression() throws RecognitionException {
		TypeExpressionContext _localctx = new TypeExpressionContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_typeExpression);
		int _la;
		try {
			setState(293);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(266);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(267);
				identifier();
				setState(270); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(268);
					match(T__23);
					setState(269);
					identifier();
					}
					}
					setState(272); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__23 );
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(274);
				match(T__33);
				setState(275);
				((TypeExpressionContext)_localctx).name = identifier();
				setState(276);
				((TypeExpressionContext)_localctx).type = identifier();
				setState(277);
				match(T__34);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(279);
				identifier();
				setState(280);
				match(T__31);
				setState(289);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__21) | (1L << T__22) | (1L << IDENTIFIER) | (1L << NUMBER))) != 0)) {
					{
					setState(281);
					((TypeExpressionContext)_localctx).expression = expression(0);
					((TypeExpressionContext)_localctx).args.add(((TypeExpressionContext)_localctx).expression);
					setState(286);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__2) {
						{
						{
						setState(282);
						match(T__2);
						setState(283);
						((TypeExpressionContext)_localctx).expression = expression(0);
						((TypeExpressionContext)_localctx).args.add(((TypeExpressionContext)_localctx).expression);
						}
						}
						setState(288);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(291);
				match(T__32);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(LudiParser.IDENTIFIER, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(LudiParser.NUMBER, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_number);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 11:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		case 4:
			return precpred(_ctx, 4);
		case 5:
			return precpred(_ctx, 3);
		case 6:
			return precpred(_ctx, 2);
		case 7:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3(\u012e\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\7\2$\n"+
		"\2\f\2\16\2\'\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\62\n\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\7\4:\n\4\f\4\16\4=\13\4\5\4?\n\4\3\4\3\4\3\4\7\4"+
		"D\n\4\f\4\16\4G\13\4\3\4\6\4J\n\4\r\4\16\4K\3\5\3\5\3\5\3\5\3\5\3\5\7"+
		"\5T\n\5\f\5\16\5W\13\5\5\5Y\n\5\3\5\3\5\3\5\7\5^\n\5\f\5\16\5a\13\5\3"+
		"\5\6\5d\n\5\r\5\16\5e\3\6\3\6\3\6\3\6\3\6\3\6\7\6n\n\6\f\6\16\6q\13\6"+
		"\5\6s\n\6\3\6\3\6\3\6\7\6x\n\6\f\6\16\6{\13\6\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\7\7\u0083\n\7\f\7\16\7\u0086\13\7\5\7\u0088\n\7\3\7\3\7\3\7\7\7\u008d"+
		"\n\7\f\7\16\7\u0090\13\7\3\b\3\b\3\b\6\b\u0095\n\b\r\b\16\b\u0096\3\t"+
		"\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\6\13\u00bb\n\13\r\13\16\13\u00bc\3\13\3\13\5\13\u00c1"+
		"\n\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r"+
		"\u00d2\n\r\f\r\16\r\u00d5\13\r\5\r\u00d7\n\r\3\r\3\r\3\r\3\r\5\r\u00dd"+
		"\n\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u00f7\n\r\f\r\16\r\u00fa\13\r\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\7\16\u0102\n\16\f\16\16\16\u0105\13\16\5\16"+
		"\u0107\n\16\3\16\3\16\5\16\u010b\n\16\3\17\3\17\3\17\3\17\6\17\u0111\n"+
		"\17\r\17\16\17\u0112\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\7\17\u011f\n\17\f\17\16\17\u0122\13\17\5\17\u0124\n\17\3\17\3\17\5\17"+
		"\u0128\n\17\3\20\3\20\3\21\3\21\3\21\2\3\30\22\2\4\6\b\n\f\16\20\22\24"+
		"\26\30\32\34\36 \2\3\3\2\30\31\2\u014f\2%\3\2\2\2\4\61\3\2\2\2\6\63\3"+
		"\2\2\2\bM\3\2\2\2\ng\3\2\2\2\f|\3\2\2\2\16\u0091\3\2\2\2\20\u0098\3\2"+
		"\2\2\22\u009d\3\2\2\2\24\u00c0\3\2\2\2\26\u00c2\3\2\2\2\30\u00dc\3\2\2"+
		"\2\32\u010a\3\2\2\2\34\u0127\3\2\2\2\36\u0129\3\2\2\2 \u012b\3\2\2\2\""+
		"$\5\4\3\2#\"\3\2\2\2$\'\3\2\2\2%#\3\2\2\2%&\3\2\2\2&(\3\2\2\2\'%\3\2\2"+
		"\2()\7\2\2\3)\3\3\2\2\2*\62\5\6\4\2+\62\5\16\b\2,\62\5\b\5\2-\62\5\n\6"+
		"\2.\62\5\f\7\2/\62\5\20\t\2\60\62\5\22\n\2\61*\3\2\2\2\61+\3\2\2\2\61"+
		",\3\2\2\2\61-\3\2\2\2\61.\3\2\2\2\61/\3\2\2\2\61\60\3\2\2\2\62\5\3\2\2"+
		"\2\63\64\7\3\2\2\64\65\5\36\20\2\65>\7\4\2\2\66;\5\36\20\2\678\7\5\2\2"+
		"8:\5\36\20\29\67\3\2\2\2:=\3\2\2\2;9\3\2\2\2;<\3\2\2\2<?\3\2\2\2=;\3\2"+
		"\2\2>\66\3\2\2\2>?\3\2\2\2?@\3\2\2\2@A\7\6\2\2AE\7\7\2\2BD\5\26\f\2CB"+
		"\3\2\2\2DG\3\2\2\2EC\3\2\2\2EF\3\2\2\2FI\3\2\2\2GE\3\2\2\2HJ\5\24\13\2"+
		"IH\3\2\2\2JK\3\2\2\2KI\3\2\2\2KL\3\2\2\2L\7\3\2\2\2MN\7\b\2\2NO\5\36\20"+
		"\2OX\7\4\2\2PU\5\36\20\2QR\7\5\2\2RT\5\36\20\2SQ\3\2\2\2TW\3\2\2\2US\3"+
		"\2\2\2UV\3\2\2\2VY\3\2\2\2WU\3\2\2\2XP\3\2\2\2XY\3\2\2\2YZ\3\2\2\2Z[\7"+
		"\6\2\2[_\7\7\2\2\\^\5\26\f\2]\\\3\2\2\2^a\3\2\2\2_]\3\2\2\2_`\3\2\2\2"+
		"`c\3\2\2\2a_\3\2\2\2bd\5\24\13\2cb\3\2\2\2de\3\2\2\2ec\3\2\2\2ef\3\2\2"+
		"\2f\t\3\2\2\2gh\7\t\2\2hi\5\36\20\2ir\7\4\2\2jo\5\36\20\2kl\7\5\2\2ln"+
		"\5\36\20\2mk\3\2\2\2nq\3\2\2\2om\3\2\2\2op\3\2\2\2ps\3\2\2\2qo\3\2\2\2"+
		"rj\3\2\2\2rs\3\2\2\2st\3\2\2\2tu\7\6\2\2uy\7\7\2\2vx\5\26\f\2wv\3\2\2"+
		"\2x{\3\2\2\2yw\3\2\2\2yz\3\2\2\2z\13\3\2\2\2{y\3\2\2\2|}\7\n\2\2}~\5\36"+
		"\20\2~\u0087\7\4\2\2\177\u0084\5\36\20\2\u0080\u0081\7\5\2\2\u0081\u0083"+
		"\5\36\20\2\u0082\u0080\3\2\2\2\u0083\u0086\3\2\2\2\u0084\u0082\3\2\2\2"+
		"\u0084\u0085\3\2\2\2\u0085\u0088\3\2\2\2\u0086\u0084\3\2\2\2\u0087\177"+
		"\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u0089\3\2\2\2\u0089\u008a\7\6\2\2\u008a"+
		"\u008e\7\7\2\2\u008b\u008d\5\26\f\2\u008c\u008b\3\2\2\2\u008d\u0090\3"+
		"\2\2\2\u008e\u008c\3\2\2\2\u008e\u008f\3\2\2\2\u008f\r\3\2\2\2\u0090\u008e"+
		"\3\2\2\2\u0091\u0092\7\13\2\2\u0092\u0094\7\7\2\2\u0093\u0095\5\24\13"+
		"\2\u0094\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0094\3\2\2\2\u0096\u0097"+
		"\3\2\2\2\u0097\17\3\2\2\2\u0098\u0099\7\f\2\2\u0099\u009a\5\36\20\2\u009a"+
		"\u009b\7\7\2\2\u009b\u009c\5\34\17\2\u009c\21\3\2\2\2\u009d\u009e\7\r"+
		"\2\2\u009e\u009f\5\36\20\2\u009f\u00a0\7\7\2\2\u00a0\u00a1\5\34\17\2\u00a1"+
		"\23\3\2\2\2\u00a2\u00a3\7\16\2\2\u00a3\u00a4\5\32\16\2\u00a4\u00a5\7\17"+
		"\2\2\u00a5\u00a6\5\30\r\2\u00a6\u00c1\3\2\2\2\u00a7\u00a8\7\20\2\2\u00a8"+
		"\u00a9\5\32\16\2\u00a9\u00aa\7\17\2\2\u00aa\u00ab\5\30\r\2\u00ab\u00c1"+
		"\3\2\2\2\u00ac\u00ad\7\21\2\2\u00ad\u00ae\5\32\16\2\u00ae\u00af\7\22\2"+
		"\2\u00af\u00b0\5\30\r\2\u00b0\u00c1\3\2\2\2\u00b1\u00b2\7\23\2\2\u00b2"+
		"\u00b3\5\32\16\2\u00b3\u00b4\7\22\2\2\u00b4\u00b5\5\30\r\2\u00b5\u00c1"+
		"\3\2\2\2\u00b6\u00b7\7\24\2\2\u00b7\u00b8\5\30\r\2\u00b8\u00ba\7\25\2"+
		"\2\u00b9\u00bb\5\24\13\2\u00ba\u00b9\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc"+
		"\u00ba\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00bf\7\26"+
		"\2\2\u00bf\u00c1\3\2\2\2\u00c0\u00a2\3\2\2\2\u00c0\u00a7\3\2\2\2\u00c0"+
		"\u00ac\3\2\2\2\u00c0\u00b1\3\2\2\2\u00c0\u00b6\3\2\2\2\u00c1\25\3\2\2"+
		"\2\u00c2\u00c3\7\27\2\2\u00c3\u00c4\5\30\r\2\u00c4\27\3\2\2\2\u00c5\u00c6"+
		"\b\r\1\2\u00c6\u00c7\7\4\2\2\u00c7\u00c8\5\30\r\2\u00c8\u00c9\7\6\2\2"+
		"\u00c9\u00dd\3\2\2\2\u00ca\u00dd\5\32\16\2\u00cb\u00dd\7\'\2\2\u00cc\u00cd"+
		"\5\36\20\2\u00cd\u00d6\7\4\2\2\u00ce\u00d3\5\30\r\2\u00cf\u00d0\7\5\2"+
		"\2\u00d0\u00d2\5\30\r\2\u00d1\u00cf\3\2\2\2\u00d2\u00d5\3\2\2\2\u00d3"+
		"\u00d1\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d7\3\2\2\2\u00d5\u00d3\3\2"+
		"\2\2\u00d6\u00ce\3\2\2\2\u00d6\u00d7\3\2\2\2\u00d7\u00d8\3\2\2\2\u00d8"+
		"\u00d9\7\6\2\2\u00d9\u00dd\3\2\2\2\u00da\u00db\t\2\2\2\u00db\u00dd\5\30"+
		"\r\13\u00dc\u00c5\3\2\2\2\u00dc\u00ca\3\2\2\2\u00dc\u00cb\3\2\2\2\u00dc"+
		"\u00cc\3\2\2\2\u00dc\u00da\3\2\2\2\u00dd\u00f8\3\2\2\2\u00de\u00df\f\n"+
		"\2\2\u00df\u00e0\7\32\2\2\u00e0\u00f7\5\30\r\13\u00e1\u00e2\f\t\2\2\u00e2"+
		"\u00e3\7\33\2\2\u00e3\u00f7\5\30\r\n\u00e4\u00e5\f\b\2\2\u00e5\u00e6\7"+
		"\34\2\2\u00e6\u00f7\5\30\r\t\u00e7\u00e8\f\7\2\2\u00e8\u00e9\7\35\2\2"+
		"\u00e9\u00f7\5\30\r\b\u00ea\u00eb\f\6\2\2\u00eb\u00ec\7\36\2\2\u00ec\u00f7"+
		"\5\30\r\7\u00ed\u00ee\f\5\2\2\u00ee\u00ef\7\37\2\2\u00ef\u00f7\5\30\r"+
		"\6\u00f0\u00f1\f\4\2\2\u00f1\u00f2\7 \2\2\u00f2\u00f7\5\30\r\5\u00f3\u00f4"+
		"\f\3\2\2\u00f4\u00f5\7!\2\2\u00f5\u00f7\5\30\r\4\u00f6\u00de\3\2\2\2\u00f6"+
		"\u00e1\3\2\2\2\u00f6\u00e4\3\2\2\2\u00f6\u00e7\3\2\2\2\u00f6\u00ea\3\2"+
		"\2\2\u00f6\u00ed\3\2\2\2\u00f6\u00f0\3\2\2\2\u00f6\u00f3\3\2\2\2\u00f7"+
		"\u00fa\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\31\3\2\2"+
		"\2\u00fa\u00f8\3\2\2\2\u00fb\u010b\5\36\20\2\u00fc\u00fd\5\36\20\2\u00fd"+
		"\u0106\7\"\2\2\u00fe\u0103\5\30\r\2\u00ff\u0100\7\5\2\2\u0100\u0102\5"+
		"\30\r\2\u0101\u00ff\3\2\2\2\u0102\u0105\3\2\2\2\u0103\u0101\3\2\2\2\u0103"+
		"\u0104\3\2\2\2\u0104\u0107\3\2\2\2\u0105\u0103\3\2\2\2\u0106\u00fe\3\2"+
		"\2\2\u0106\u0107\3\2\2\2\u0107\u0108\3\2\2\2\u0108\u0109\7#\2\2\u0109"+
		"\u010b\3\2\2\2\u010a\u00fb\3\2\2\2\u010a\u00fc\3\2\2\2\u010b\33\3\2\2"+
		"\2\u010c\u0128\5\36\20\2\u010d\u0110\5\36\20\2\u010e\u010f\7\32\2\2\u010f"+
		"\u0111\5\36\20\2\u0110\u010e\3\2\2\2\u0111\u0112\3\2\2\2\u0112\u0110\3"+
		"\2\2\2\u0112\u0113\3\2\2\2\u0113\u0128\3\2\2\2\u0114\u0115\7$\2\2\u0115"+
		"\u0116\5\36\20\2\u0116\u0117\5\36\20\2\u0117\u0118\7%\2\2\u0118\u0128"+
		"\3\2\2\2\u0119\u011a\5\36\20\2\u011a\u0123\7\"\2\2\u011b\u0120\5\30\r"+
		"\2\u011c\u011d\7\5\2\2\u011d\u011f\5\30\r\2\u011e\u011c\3\2\2\2\u011f"+
		"\u0122\3\2\2\2\u0120\u011e\3\2\2\2\u0120\u0121\3\2\2\2\u0121\u0124\3\2"+
		"\2\2\u0122\u0120\3\2\2\2\u0123\u011b\3\2\2\2\u0123\u0124\3\2\2\2\u0124"+
		"\u0125\3\2\2\2\u0125\u0126\7#\2\2\u0126\u0128\3\2\2\2\u0127\u010c\3\2"+
		"\2\2\u0127\u010d\3\2\2\2\u0127\u0114\3\2\2\2\u0127\u0119\3\2\2\2\u0128"+
		"\35\3\2\2\2\u0129\u012a\7&\2\2\u012a\37\3\2\2\2\u012b\u012c\7\'\2\2\u012c"+
		"!\3\2\2\2!%\61;>EKUX_eory\u0084\u0087\u008e\u0096\u00bc\u00c0\u00d3\u00d6"+
		"\u00dc\u00f6\u00f8\u0103\u0106\u010a\u0112\u0120\u0123\u0127";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}