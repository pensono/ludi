// Generated from f:\Data\Code\Website\ludi\src\lib\lang\Ludi.g4 by ANTLR 4.9.2
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
		T__31=32, IDENTIFIER=33, NUMBER=34;
	public static final int
		RULE_program = 0, RULE_definition = 1, RULE_action = 2, RULE_trigger = 3, 
		RULE_win = 4, RULE_loss = 5, RULE_setup = 6, RULE_kind = 7, RULE_state = 8, 
		RULE_statement = 9, RULE_when = 10, RULE_condition = 11, RULE_expression = 12, 
		RULE_lvalue = 13, RULE_typeExpression = 14, RULE_identifier = 15, RULE_number = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "definition", "action", "trigger", "win", "loss", "setup", 
			"kind", "state", "statement", "when", "condition", "expression", "lvalue", 
			"typeExpression", "identifier", "number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'action'", "'('", "','", "')'", "':'", "'trigger'", "'win'", "'loss'", 
			"'setup'", "'kind'", "'state'", "'change'", "'to'", "'set'", "'if'", 
			"'then'", "'end'", "'when'", "'not'", "'!'", "'or'", "'and'", "'='", 
			"'!='", "'>'", "'<'", "'>='", "'<='", "'{'", "'}'", "'['", "']'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "IDENTIFIER", "NUMBER"
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

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(LudiParser.EOF, 0); }
		public List<DefinitionContext> definition() {
			return getRuleContexts(DefinitionContext.class);
		}
		public DefinitionContext definition(int i) {
			return getRuleContext(DefinitionContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__5) | (1L << T__6) | (1L << T__7) | (1L << T__8) | (1L << T__9))) != 0)) {
				{
				{
				setState(34);
				definition();
				}
				}
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(40);
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
		public DefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_definition; }
	}

	public final DefinitionContext definition() throws RecognitionException {
		DefinitionContext _localctx = new DefinitionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_definition);
		try {
			setState(48);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				action();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				setup();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 3);
				{
				setState(44);
				trigger();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 4);
				{
				setState(45);
				win();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 5);
				{
				setState(46);
				loss();
				}
				break;
			case T__9:
				enterOuterAlt(_localctx, 6);
				{
				setState(47);
				kind();
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
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
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
			setState(50);
			match(T__0);
			setState(51);
			((ActionContext)_localctx).name = identifier();
			setState(52);
			match(T__1);
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(53);
				((ActionContext)_localctx).identifier = identifier();
				((ActionContext)_localctx).args.add(((ActionContext)_localctx).identifier);
				setState(58);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(54);
					match(T__2);
					setState(55);
					((ActionContext)_localctx).identifier = identifier();
					((ActionContext)_localctx).args.add(((ActionContext)_localctx).identifier);
					}
					}
					setState(60);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(63);
			match(T__3);
			setState(64);
			match(T__4);
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__17) {
				{
				{
				setState(65);
				when();
				}
				}
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(72); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(71);
				statement();
				}
				}
				setState(74); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14))) != 0) );
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
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
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
			setState(76);
			match(T__5);
			setState(77);
			((TriggerContext)_localctx).name = identifier();
			setState(78);
			match(T__1);
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(79);
				((TriggerContext)_localctx).identifier = identifier();
				((TriggerContext)_localctx).args.add(((TriggerContext)_localctx).identifier);
				setState(84);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(80);
					match(T__2);
					setState(81);
					((TriggerContext)_localctx).identifier = identifier();
					((TriggerContext)_localctx).args.add(((TriggerContext)_localctx).identifier);
					}
					}
					setState(86);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(89);
			match(T__3);
			setState(90);
			match(T__4);
			setState(94);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__17) {
				{
				{
				setState(91);
				when();
				}
				}
				setState(96);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(98); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(97);
				statement();
				}
				}
				setState(100); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14))) != 0) );
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
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
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
			setState(102);
			match(T__6);
			setState(103);
			((WinContext)_localctx).name = identifier();
			setState(104);
			match(T__1);
			setState(113);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(105);
				((WinContext)_localctx).identifier = identifier();
				((WinContext)_localctx).args.add(((WinContext)_localctx).identifier);
				setState(110);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(106);
					match(T__2);
					setState(107);
					((WinContext)_localctx).identifier = identifier();
					((WinContext)_localctx).args.add(((WinContext)_localctx).identifier);
					}
					}
					setState(112);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(115);
			match(T__3);
			setState(116);
			match(T__4);
			setState(120);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__17) {
				{
				{
				setState(117);
				when();
				}
				}
				setState(122);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(124); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(123);
				statement();
				}
				}
				setState(126); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14))) != 0) );
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
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
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
			setState(128);
			match(T__7);
			setState(129);
			((LossContext)_localctx).name = identifier();
			setState(130);
			match(T__1);
			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(131);
				((LossContext)_localctx).identifier = identifier();
				((LossContext)_localctx).args.add(((LossContext)_localctx).identifier);
				setState(136);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__2) {
					{
					{
					setState(132);
					match(T__2);
					setState(133);
					((LossContext)_localctx).identifier = identifier();
					((LossContext)_localctx).args.add(((LossContext)_localctx).identifier);
					}
					}
					setState(138);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(141);
			match(T__3);
			setState(142);
			match(T__4);
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__17) {
				{
				{
				setState(143);
				when();
				}
				}
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(150); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(149);
				statement();
				}
				}
				setState(152); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14))) != 0) );
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
		public IdentifierContext name;
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
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
			setState(154);
			match(T__8);
			setState(155);
			((SetupContext)_localctx).name = identifier();
			setState(156);
			match(T__4);
			setState(158); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(157);
				statement();
				}
				}
				setState(160); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14))) != 0) );
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
			setState(162);
			match(T__9);
			setState(163);
			((KindContext)_localctx).name = identifier();
			setState(164);
			match(T__4);
			setState(165);
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

	public static class StateContext extends ParserRuleContext {
		public IdentifierContext name;
		public TypeExpressionContext typeExpression() {
			return getRuleContext(TypeExpressionContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public StateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_state; }
	}

	public final StateContext state() throws RecognitionException {
		StateContext _localctx = new StateContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_state);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(T__10);
			setState(168);
			((StateContext)_localctx).name = identifier();
			setState(169);
			match(T__4);
			setState(170);
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
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_statement);
		int _la;
		try {
			setState(192);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__11:
				enterOuterAlt(_localctx, 1);
				{
				setState(172);
				match(T__11);
				setState(173);
				lvalue();
				setState(174);
				match(T__12);
				setState(175);
				expression();
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 2);
				{
				setState(177);
				match(T__13);
				setState(178);
				lvalue();
				setState(179);
				match(T__12);
				setState(180);
				expression();
				}
				break;
			case T__14:
				enterOuterAlt(_localctx, 3);
				{
				setState(182);
				match(T__14);
				setState(183);
				condition(0);
				setState(184);
				match(T__15);
				setState(186); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(185);
					statement();
					}
					}
					setState(188); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__11) | (1L << T__13) | (1L << T__14))) != 0) );
				setState(190);
				match(T__16);
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
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
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
			setState(194);
			match(T__17);
			setState(195);
			condition(0);
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

	public static class ConditionContext extends ParserRuleContext {
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	 
		public ConditionContext() { }
		public void copyFrom(ConditionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NegationContext extends ConditionContext {
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public NegationContext(ConditionContext ctx) { copyFrom(ctx); }
	}
	public static class ComparisonContext extends ConditionContext {
		public ExpressionContext left;
		public Token operator;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ComparisonContext(ConditionContext ctx) { copyFrom(ctx); }
	}
	public static class ConjunctionContext extends ConditionContext {
		public ConditionContext left;
		public Token operator;
		public ConditionContext right;
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public ConjunctionContext(ConditionContext ctx) { copyFrom(ctx); }
	}

	public final ConditionContext condition() throws RecognitionException {
		return condition(0);
	}

	private ConditionContext condition(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ConditionContext _localctx = new ConditionContext(_ctx, _parentState);
		ConditionContext _prevctx = _localctx;
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_condition, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				_localctx = new NegationContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(198);
				_la = _input.LA(1);
				if ( !(_la==T__18 || _la==T__19) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(199);
				condition(9);
				}
				break;
			case 2:
				{
				_localctx = new ComparisonContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(200);
				((ComparisonContext)_localctx).left = expression();
				setState(201);
				((ComparisonContext)_localctx).operator = match(T__22);
				setState(202);
				((ComparisonContext)_localctx).right = expression();
				}
				break;
			case 3:
				{
				_localctx = new ComparisonContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(204);
				((ComparisonContext)_localctx).left = expression();
				setState(205);
				((ComparisonContext)_localctx).operator = match(T__23);
				setState(206);
				((ComparisonContext)_localctx).right = expression();
				}
				break;
			case 4:
				{
				_localctx = new ComparisonContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(208);
				((ComparisonContext)_localctx).left = expression();
				setState(209);
				((ComparisonContext)_localctx).operator = match(T__24);
				setState(210);
				((ComparisonContext)_localctx).right = expression();
				}
				break;
			case 5:
				{
				_localctx = new ComparisonContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(212);
				((ComparisonContext)_localctx).left = expression();
				setState(213);
				((ComparisonContext)_localctx).operator = match(T__25);
				setState(214);
				((ComparisonContext)_localctx).right = expression();
				}
				break;
			case 6:
				{
				_localctx = new ComparisonContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(216);
				((ComparisonContext)_localctx).left = expression();
				setState(217);
				((ComparisonContext)_localctx).operator = match(T__26);
				setState(218);
				((ComparisonContext)_localctx).right = expression();
				}
				break;
			case 7:
				{
				_localctx = new ComparisonContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(220);
				((ComparisonContext)_localctx).left = expression();
				setState(221);
				((ComparisonContext)_localctx).operator = match(T__27);
				setState(222);
				((ComparisonContext)_localctx).right = expression();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(234);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(232);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
					case 1:
						{
						_localctx = new ConjunctionContext(new ConditionContext(_parentctx, _parentState));
						((ConjunctionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_condition);
						setState(226);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(227);
						((ConjunctionContext)_localctx).operator = match(T__20);
						setState(228);
						((ConjunctionContext)_localctx).right = condition(9);
						}
						break;
					case 2:
						{
						_localctx = new ConjunctionContext(new ConditionContext(_parentctx, _parentState));
						((ConjunctionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_condition);
						setState(229);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(230);
						((ConjunctionContext)_localctx).operator = match(T__21);
						setState(231);
						((ConjunctionContext)_localctx).right = condition(8);
						}
						break;
					}
					} 
				}
				setState(236);
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

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public LvalueContext lvalue() {
			return getRuleContext(LvalueContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_expression);
		try {
			setState(242);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
				enterOuterAlt(_localctx, 1);
				{
				setState(237);
				match(T__1);
				setState(238);
				expression();
				setState(239);
				match(T__3);
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(241);
				lvalue();
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

	public static class LvalueContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public LvalueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lvalue; }
	}

	public final LvalueContext lvalue() throws RecognitionException {
		LvalueContext _localctx = new LvalueContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_lvalue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(244);
			identifier();
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
		public TypeExpressionContext type;
		public ExpressionContext expression;
		public List<ExpressionContext> args = new ArrayList<ExpressionContext>();
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TypeExpressionContext typeExpression() {
			return getRuleContext(TypeExpressionContext.class,0);
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
		enterRule(_localctx, 28, RULE_typeExpression);
		int _la;
		try {
			setState(270);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(246);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(247);
				identifier();
				setState(248);
				match(T__20);
				setState(249);
				identifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(251);
				match(T__28);
				setState(252);
				((TypeExpressionContext)_localctx).name = identifier();
				setState(253);
				((TypeExpressionContext)_localctx).type = typeExpression();
				setState(254);
				match(T__29);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(256);
				identifier();
				setState(257);
				match(T__30);
				setState(266);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__1 || _la==IDENTIFIER) {
					{
					setState(258);
					((TypeExpressionContext)_localctx).expression = expression();
					((TypeExpressionContext)_localctx).args.add(((TypeExpressionContext)_localctx).expression);
					setState(263);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__2) {
						{
						{
						setState(259);
						match(T__2);
						setState(260);
						((TypeExpressionContext)_localctx).expression = expression();
						((TypeExpressionContext)_localctx).args.add(((TypeExpressionContext)_localctx).expression);
						}
						}
						setState(265);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(268);
				match(T__31);
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
		enterRule(_localctx, 30, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
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
		enterRule(_localctx, 32, RULE_number);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
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
			return condition_sempred((ConditionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean condition_sempred(ConditionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3$\u0117\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\7\2&\n\2\f\2\16\2)\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\5\3\63\n"+
		"\3\3\4\3\4\3\4\3\4\3\4\3\4\7\4;\n\4\f\4\16\4>\13\4\5\4@\n\4\3\4\3\4\3"+
		"\4\7\4E\n\4\f\4\16\4H\13\4\3\4\6\4K\n\4\r\4\16\4L\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\7\5U\n\5\f\5\16\5X\13\5\5\5Z\n\5\3\5\3\5\3\5\7\5_\n\5\f\5\16\5b\13"+
		"\5\3\5\6\5e\n\5\r\5\16\5f\3\6\3\6\3\6\3\6\3\6\3\6\7\6o\n\6\f\6\16\6r\13"+
		"\6\5\6t\n\6\3\6\3\6\3\6\7\6y\n\6\f\6\16\6|\13\6\3\6\6\6\177\n\6\r\6\16"+
		"\6\u0080\3\7\3\7\3\7\3\7\3\7\3\7\7\7\u0089\n\7\f\7\16\7\u008c\13\7\5\7"+
		"\u008e\n\7\3\7\3\7\3\7\7\7\u0093\n\7\f\7\16\7\u0096\13\7\3\7\6\7\u0099"+
		"\n\7\r\7\16\7\u009a\3\b\3\b\3\b\3\b\6\b\u00a1\n\b\r\b\16\b\u00a2\3\t\3"+
		"\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\6\13\u00bd\n\13\r\13\16\13\u00be\3"+
		"\13\3\13\5\13\u00c3\n\13\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r"+
		"\3\r\5\r\u00e3\n\r\3\r\3\r\3\r\3\r\3\r\3\r\7\r\u00eb\n\r\f\r\16\r\u00ee"+
		"\13\r\3\16\3\16\3\16\3\16\3\16\5\16\u00f5\n\16\3\17\3\17\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20\7\20\u0108"+
		"\n\20\f\20\16\20\u010b\13\20\5\20\u010d\n\20\3\20\3\20\5\20\u0111\n\20"+
		"\3\21\3\21\3\22\3\22\3\22\2\3\30\23\2\4\6\b\n\f\16\20\22\24\26\30\32\34"+
		"\36 \"\2\3\3\2\25\26\2\u012d\2\'\3\2\2\2\4\62\3\2\2\2\6\64\3\2\2\2\bN"+
		"\3\2\2\2\nh\3\2\2\2\f\u0082\3\2\2\2\16\u009c\3\2\2\2\20\u00a4\3\2\2\2"+
		"\22\u00a9\3\2\2\2\24\u00c2\3\2\2\2\26\u00c4\3\2\2\2\30\u00e2\3\2\2\2\32"+
		"\u00f4\3\2\2\2\34\u00f6\3\2\2\2\36\u0110\3\2\2\2 \u0112\3\2\2\2\"\u0114"+
		"\3\2\2\2$&\5\4\3\2%$\3\2\2\2&)\3\2\2\2\'%\3\2\2\2\'(\3\2\2\2(*\3\2\2\2"+
		")\'\3\2\2\2*+\7\2\2\3+\3\3\2\2\2,\63\5\6\4\2-\63\5\16\b\2.\63\5\b\5\2"+
		"/\63\5\n\6\2\60\63\5\f\7\2\61\63\5\20\t\2\62,\3\2\2\2\62-\3\2\2\2\62."+
		"\3\2\2\2\62/\3\2\2\2\62\60\3\2\2\2\62\61\3\2\2\2\63\5\3\2\2\2\64\65\7"+
		"\3\2\2\65\66\5 \21\2\66?\7\4\2\2\67<\5 \21\289\7\5\2\29;\5 \21\2:8\3\2"+
		"\2\2;>\3\2\2\2<:\3\2\2\2<=\3\2\2\2=@\3\2\2\2><\3\2\2\2?\67\3\2\2\2?@\3"+
		"\2\2\2@A\3\2\2\2AB\7\6\2\2BF\7\7\2\2CE\5\26\f\2DC\3\2\2\2EH\3\2\2\2FD"+
		"\3\2\2\2FG\3\2\2\2GJ\3\2\2\2HF\3\2\2\2IK\5\24\13\2JI\3\2\2\2KL\3\2\2\2"+
		"LJ\3\2\2\2LM\3\2\2\2M\7\3\2\2\2NO\7\b\2\2OP\5 \21\2PY\7\4\2\2QV\5 \21"+
		"\2RS\7\5\2\2SU\5 \21\2TR\3\2\2\2UX\3\2\2\2VT\3\2\2\2VW\3\2\2\2WZ\3\2\2"+
		"\2XV\3\2\2\2YQ\3\2\2\2YZ\3\2\2\2Z[\3\2\2\2[\\\7\6\2\2\\`\7\7\2\2]_\5\26"+
		"\f\2^]\3\2\2\2_b\3\2\2\2`^\3\2\2\2`a\3\2\2\2ad\3\2\2\2b`\3\2\2\2ce\5\24"+
		"\13\2dc\3\2\2\2ef\3\2\2\2fd\3\2\2\2fg\3\2\2\2g\t\3\2\2\2hi\7\t\2\2ij\5"+
		" \21\2js\7\4\2\2kp\5 \21\2lm\7\5\2\2mo\5 \21\2nl\3\2\2\2or\3\2\2\2pn\3"+
		"\2\2\2pq\3\2\2\2qt\3\2\2\2rp\3\2\2\2sk\3\2\2\2st\3\2\2\2tu\3\2\2\2uv\7"+
		"\6\2\2vz\7\7\2\2wy\5\26\f\2xw\3\2\2\2y|\3\2\2\2zx\3\2\2\2z{\3\2\2\2{~"+
		"\3\2\2\2|z\3\2\2\2}\177\5\24\13\2~}\3\2\2\2\177\u0080\3\2\2\2\u0080~\3"+
		"\2\2\2\u0080\u0081\3\2\2\2\u0081\13\3\2\2\2\u0082\u0083\7\n\2\2\u0083"+
		"\u0084\5 \21\2\u0084\u008d\7\4\2\2\u0085\u008a\5 \21\2\u0086\u0087\7\5"+
		"\2\2\u0087\u0089\5 \21\2\u0088\u0086\3\2\2\2\u0089\u008c\3\2\2\2\u008a"+
		"\u0088\3\2\2\2\u008a\u008b\3\2\2\2\u008b\u008e\3\2\2\2\u008c\u008a\3\2"+
		"\2\2\u008d\u0085\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u008f\3\2\2\2\u008f"+
		"\u0090\7\6\2\2\u0090\u0094\7\7\2\2\u0091\u0093\5\26\f\2\u0092\u0091\3"+
		"\2\2\2\u0093\u0096\3\2\2\2\u0094\u0092\3\2\2\2\u0094\u0095\3\2\2\2\u0095"+
		"\u0098\3\2\2\2\u0096\u0094\3\2\2\2\u0097\u0099\5\24\13\2\u0098\u0097\3"+
		"\2\2\2\u0099\u009a\3\2\2\2\u009a\u0098\3\2\2\2\u009a\u009b\3\2\2\2\u009b"+
		"\r\3\2\2\2\u009c\u009d\7\13\2\2\u009d\u009e\5 \21\2\u009e\u00a0\7\7\2"+
		"\2\u009f\u00a1\5\24\13\2\u00a0\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2"+
		"\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\17\3\2\2\2\u00a4\u00a5\7\f\2"+
		"\2\u00a5\u00a6\5 \21\2\u00a6\u00a7\7\7\2\2\u00a7\u00a8\5\36\20\2\u00a8"+
		"\21\3\2\2\2\u00a9\u00aa\7\r\2\2\u00aa\u00ab\5 \21\2\u00ab\u00ac\7\7\2"+
		"\2\u00ac\u00ad\5\36\20\2\u00ad\23\3\2\2\2\u00ae\u00af\7\16\2\2\u00af\u00b0"+
		"\5\34\17\2\u00b0\u00b1\7\17\2\2\u00b1\u00b2\5\32\16\2\u00b2\u00c3\3\2"+
		"\2\2\u00b3\u00b4\7\20\2\2\u00b4\u00b5\5\34\17\2\u00b5\u00b6\7\17\2\2\u00b6"+
		"\u00b7\5\32\16\2\u00b7\u00c3\3\2\2\2\u00b8\u00b9\7\21\2\2\u00b9\u00ba"+
		"\5\30\r\2\u00ba\u00bc\7\22\2\2\u00bb\u00bd\5\24\13\2\u00bc\u00bb\3\2\2"+
		"\2\u00bd\u00be\3\2\2\2\u00be\u00bc\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf\u00c0"+
		"\3\2\2\2\u00c0\u00c1\7\23\2\2\u00c1\u00c3\3\2\2\2\u00c2\u00ae\3\2\2\2"+
		"\u00c2\u00b3\3\2\2\2\u00c2\u00b8\3\2\2\2\u00c3\25\3\2\2\2\u00c4\u00c5"+
		"\7\24\2\2\u00c5\u00c6\5\30\r\2\u00c6\27\3\2\2\2\u00c7\u00c8\b\r\1\2\u00c8"+
		"\u00c9\t\2\2\2\u00c9\u00e3\5\30\r\13\u00ca\u00cb\5\32\16\2\u00cb\u00cc"+
		"\7\31\2\2\u00cc\u00cd\5\32\16\2\u00cd\u00e3\3\2\2\2\u00ce\u00cf\5\32\16"+
		"\2\u00cf\u00d0\7\32\2\2\u00d0\u00d1\5\32\16\2\u00d1\u00e3\3\2\2\2\u00d2"+
		"\u00d3\5\32\16\2\u00d3\u00d4\7\33\2\2\u00d4\u00d5\5\32\16\2\u00d5\u00e3"+
		"\3\2\2\2\u00d6\u00d7\5\32\16\2\u00d7\u00d8\7\34\2\2\u00d8\u00d9\5\32\16"+
		"\2\u00d9\u00e3\3\2\2\2\u00da\u00db\5\32\16\2\u00db\u00dc\7\35\2\2\u00dc"+
		"\u00dd\5\32\16\2\u00dd\u00e3\3\2\2\2\u00de\u00df\5\32\16\2\u00df\u00e0"+
		"\7\36\2\2\u00e0\u00e1\5\32\16\2\u00e1\u00e3\3\2\2\2\u00e2\u00c7\3\2\2"+
		"\2\u00e2\u00ca\3\2\2\2\u00e2\u00ce\3\2\2\2\u00e2\u00d2\3\2\2\2\u00e2\u00d6"+
		"\3\2\2\2\u00e2\u00da\3\2\2\2\u00e2\u00de\3\2\2\2\u00e3\u00ec\3\2\2\2\u00e4"+
		"\u00e5\f\n\2\2\u00e5\u00e6\7\27\2\2\u00e6\u00eb\5\30\r\13\u00e7\u00e8"+
		"\f\t\2\2\u00e8\u00e9\7\30\2\2\u00e9\u00eb\5\30\r\n\u00ea\u00e4\3\2\2\2"+
		"\u00ea\u00e7\3\2\2\2\u00eb\u00ee\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ec\u00ed"+
		"\3\2\2\2\u00ed\31\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ef\u00f0\7\4\2\2\u00f0"+
		"\u00f1\5\32\16\2\u00f1\u00f2\7\6\2\2\u00f2\u00f5\3\2\2\2\u00f3\u00f5\5"+
		"\34\17\2\u00f4\u00ef\3\2\2\2\u00f4\u00f3\3\2\2\2\u00f5\33\3\2\2\2\u00f6"+
		"\u00f7\5 \21\2\u00f7\35\3\2\2\2\u00f8\u0111\5 \21\2\u00f9\u00fa\5 \21"+
		"\2\u00fa\u00fb\7\27\2\2\u00fb\u00fc\5 \21\2\u00fc\u0111\3\2\2\2\u00fd"+
		"\u00fe\7\37\2\2\u00fe\u00ff\5 \21\2\u00ff\u0100\5\36\20\2\u0100\u0101"+
		"\7 \2\2\u0101\u0111\3\2\2\2\u0102\u0103\5 \21\2\u0103\u010c\7!\2\2\u0104"+
		"\u0109\5\32\16\2\u0105\u0106\7\5\2\2\u0106\u0108\5\32\16\2\u0107\u0105"+
		"\3\2\2\2\u0108\u010b\3\2\2\2\u0109\u0107\3\2\2\2\u0109\u010a\3\2\2\2\u010a"+
		"\u010d\3\2\2\2\u010b\u0109\3\2\2\2\u010c\u0104\3\2\2\2\u010c\u010d\3\2"+
		"\2\2\u010d\u010e\3\2\2\2\u010e\u010f\7\"\2\2\u010f\u0111\3\2\2\2\u0110"+
		"\u00f8\3\2\2\2\u0110\u00f9\3\2\2\2\u0110\u00fd\3\2\2\2\u0110\u0102\3\2"+
		"\2\2\u0111\37\3\2\2\2\u0112\u0113\7#\2\2\u0113!\3\2\2\2\u0114\u0115\7"+
		"$\2\2\u0115#\3\2\2\2\36\'\62<?FLVY`fpsz\u0080\u008a\u008d\u0094\u009a"+
		"\u00a2\u00be\u00c2\u00e2\u00ea\u00ec\u00f4\u0109\u010c\u0110";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}