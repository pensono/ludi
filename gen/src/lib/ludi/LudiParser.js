// Generated from src/lib/ludi/Ludi.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LudiListener from './LudiListener.js';
import LudiVisitor from './LudiVisitor.js';

const serializedATN = [4,1,39,308,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,5,0,38,8,0,10,0,12,
0,41,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,53,8,1,1,2,1,2,1,2,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,65,8,3,1,3,1,3,5,3,69,8,3,10,3,12,3,72,9,
3,1,3,5,3,75,8,3,10,3,12,3,78,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,87,8,4,
10,4,12,4,90,9,4,1,4,5,4,93,8,4,10,4,12,4,96,9,4,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,3,5,105,8,5,1,5,1,5,5,5,109,8,5,10,5,12,5,112,9,5,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,3,6,121,8,6,1,6,1,6,5,6,125,8,6,10,6,12,6,128,9,6,1,7,1,7,1,7,
4,7,133,8,7,11,7,12,7,134,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,4,10,171,8,10,11,10,12,10,172,1,
10,1,10,3,10,177,8,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,5,12,190,8,12,10,12,12,12,193,9,12,3,12,195,8,12,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,208,8,13,10,13,12,13,211,9,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,221,8,13,10,13,12,13,224,9,13,
3,13,226,8,13,1,13,1,13,1,13,1,13,3,13,232,8,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,5,13,258,8,13,10,13,12,13,261,9,13,1,14,1,14,1,14,
1,14,1,14,1,14,5,14,269,8,14,10,14,12,14,272,9,14,3,14,274,8,14,1,14,1,14,
3,14,278,8,14,1,15,1,15,1,15,1,15,4,15,284,8,15,11,15,12,15,285,1,15,1,15,
1,15,1,15,1,15,5,15,293,8,15,10,15,12,15,296,9,15,3,15,298,8,15,1,15,1,15,
3,15,302,8,15,1,16,1,16,1,17,1,17,1,17,0,1,26,18,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,0,1,1,0,27,28,338,0,39,1,0,0,0,2,52,1,0,0,0,4,54,
1,0,0,0,6,57,1,0,0,0,8,79,1,0,0,0,10,97,1,0,0,0,12,113,1,0,0,0,14,129,1,
0,0,0,16,136,1,0,0,0,18,141,1,0,0,0,20,176,1,0,0,0,22,178,1,0,0,0,24,194,
1,0,0,0,26,231,1,0,0,0,28,277,1,0,0,0,30,301,1,0,0,0,32,303,1,0,0,0,34,305,
1,0,0,0,36,38,3,2,1,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,
0,0,0,40,42,1,0,0,0,41,39,1,0,0,0,42,43,5,0,0,1,43,1,1,0,0,0,44,53,3,4,2,
0,45,53,3,6,3,0,46,53,3,14,7,0,47,53,3,8,4,0,48,53,3,10,5,0,49,53,3,12,6,
0,50,53,3,16,8,0,51,53,3,18,9,0,52,44,1,0,0,0,52,45,1,0,0,0,52,46,1,0,0,
0,52,47,1,0,0,0,52,48,1,0,0,0,52,49,1,0,0,0,52,50,1,0,0,0,52,51,1,0,0,0,
53,3,1,0,0,0,54,55,5,1,0,0,55,56,3,30,15,0,56,5,1,0,0,0,57,58,5,2,0,0,58,
59,3,32,16,0,59,60,5,3,0,0,60,61,3,24,12,0,61,64,5,4,0,0,62,63,5,5,0,0,63,
65,3,26,13,0,64,62,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,70,5,6,0,0,67,
69,3,22,11,0,68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,
76,1,0,0,0,72,70,1,0,0,0,73,75,3,20,10,0,74,73,1,0,0,0,75,78,1,0,0,0,76,
74,1,0,0,0,76,77,1,0,0,0,77,7,1,0,0,0,78,76,1,0,0,0,79,80,5,7,0,0,80,81,
3,32,16,0,81,82,5,3,0,0,82,83,3,24,12,0,83,84,5,4,0,0,84,88,5,6,0,0,85,87,
3,22,11,0,86,85,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,94,
1,0,0,0,90,88,1,0,0,0,91,93,3,20,10,0,92,91,1,0,0,0,93,96,1,0,0,0,94,92,
1,0,0,0,94,95,1,0,0,0,95,9,1,0,0,0,96,94,1,0,0,0,97,98,5,8,0,0,98,99,3,32,
16,0,99,100,5,3,0,0,100,101,3,24,12,0,101,104,5,4,0,0,102,103,5,5,0,0,103,
105,3,26,13,0,104,102,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,106,110,5,
6,0,0,107,109,3,22,11,0,108,107,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,
110,111,1,0,0,0,111,11,1,0,0,0,112,110,1,0,0,0,113,114,5,9,0,0,114,115,3,
32,16,0,115,116,5,3,0,0,116,117,3,24,12,0,117,120,5,4,0,0,118,119,5,5,0,
0,119,121,3,26,13,0,120,118,1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,
126,5,6,0,0,123,125,3,22,11,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,
0,0,0,126,127,1,0,0,0,127,13,1,0,0,0,128,126,1,0,0,0,129,130,5,10,0,0,130,
132,5,6,0,0,131,133,3,20,10,0,132,131,1,0,0,0,133,134,1,0,0,0,134,132,1,
0,0,0,134,135,1,0,0,0,135,15,1,0,0,0,136,137,5,11,0,0,137,138,3,32,16,0,
138,139,5,12,0,0,139,140,3,30,15,0,140,17,1,0,0,0,141,142,5,13,0,0,142,143,
3,32,16,0,143,144,5,12,0,0,144,145,3,30,15,0,145,19,1,0,0,0,146,147,5,14,
0,0,147,148,3,28,14,0,148,149,5,15,0,0,149,150,3,26,13,0,150,177,1,0,0,0,
151,152,5,16,0,0,152,153,3,28,14,0,153,154,5,15,0,0,154,155,3,26,13,0,155,
177,1,0,0,0,156,157,5,17,0,0,157,158,3,28,14,0,158,159,5,18,0,0,159,160,
3,26,13,0,160,177,1,0,0,0,161,162,5,19,0,0,162,163,3,28,14,0,163,164,5,18,
0,0,164,165,3,26,13,0,165,177,1,0,0,0,166,167,5,20,0,0,167,168,3,26,13,0,
168,170,5,21,0,0,169,171,3,20,10,0,170,169,1,0,0,0,171,172,1,0,0,0,172,170,
1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,5,22,0,0,175,177,1,0,0,0,
176,146,1,0,0,0,176,151,1,0,0,0,176,156,1,0,0,0,176,161,1,0,0,0,176,166,
1,0,0,0,177,21,1,0,0,0,178,179,5,23,0,0,179,180,3,26,13,0,180,23,1,0,0,0,
181,182,3,32,16,0,182,183,5,12,0,0,183,191,3,30,15,0,184,185,5,24,0,0,185,
186,3,32,16,0,186,187,5,12,0,0,187,188,3,30,15,0,188,190,1,0,0,0,189,184,
1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,195,1,0,0,0,
193,191,1,0,0,0,194,181,1,0,0,0,194,195,1,0,0,0,195,25,1,0,0,0,196,197,6,
13,-1,0,197,198,5,3,0,0,198,199,3,26,13,0,199,200,5,4,0,0,200,232,1,0,0,
0,201,232,5,38,0,0,202,203,3,32,16,0,203,204,5,25,0,0,204,209,3,26,13,0,
205,206,5,24,0,0,206,208,3,26,13,0,207,205,1,0,0,0,208,211,1,0,0,0,209,207,
1,0,0,0,209,210,1,0,0,0,210,212,1,0,0,0,211,209,1,0,0,0,212,213,5,26,0,0,
213,232,1,0,0,0,214,232,3,28,14,0,215,216,3,32,16,0,216,225,5,3,0,0,217,
222,3,26,13,0,218,219,5,24,0,0,219,221,3,26,13,0,220,218,1,0,0,0,221,224,
1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,
225,217,1,0,0,0,225,226,1,0,0,0,226,227,1,0,0,0,227,228,5,4,0,0,228,232,
1,0,0,0,229,230,7,0,0,0,230,232,3,26,13,9,231,196,1,0,0,0,231,201,1,0,0,
0,231,202,1,0,0,0,231,214,1,0,0,0,231,215,1,0,0,0,231,229,1,0,0,0,232,259,
1,0,0,0,233,234,10,8,0,0,234,235,5,29,0,0,235,258,3,26,13,9,236,237,10,7,
0,0,237,238,5,30,0,0,238,258,3,26,13,8,239,240,10,6,0,0,240,241,5,31,0,0,
241,258,3,26,13,7,242,243,10,5,0,0,243,244,5,32,0,0,244,258,3,26,13,6,245,
246,10,4,0,0,246,247,5,33,0,0,247,258,3,26,13,5,248,249,10,3,0,0,249,250,
5,34,0,0,250,258,3,26,13,4,251,252,10,2,0,0,252,253,5,35,0,0,253,258,3,26,
13,3,254,255,10,1,0,0,255,256,5,36,0,0,256,258,3,26,13,2,257,233,1,0,0,0,
257,236,1,0,0,0,257,239,1,0,0,0,257,242,1,0,0,0,257,245,1,0,0,0,257,248,
1,0,0,0,257,251,1,0,0,0,257,254,1,0,0,0,258,261,1,0,0,0,259,257,1,0,0,0,
259,260,1,0,0,0,260,27,1,0,0,0,261,259,1,0,0,0,262,278,3,32,16,0,263,264,
3,32,16,0,264,273,5,25,0,0,265,270,3,26,13,0,266,267,5,24,0,0,267,269,3,
26,13,0,268,266,1,0,0,0,269,272,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,
271,274,1,0,0,0,272,270,1,0,0,0,273,265,1,0,0,0,273,274,1,0,0,0,274,275,
1,0,0,0,275,276,5,26,0,0,276,278,1,0,0,0,277,262,1,0,0,0,277,263,1,0,0,0,
278,29,1,0,0,0,279,302,3,32,16,0,280,283,3,32,16,0,281,282,5,29,0,0,282,
284,3,32,16,0,283,281,1,0,0,0,284,285,1,0,0,0,285,283,1,0,0,0,285,286,1,
0,0,0,286,302,1,0,0,0,287,288,3,32,16,0,288,297,5,34,0,0,289,294,3,26,13,
0,290,291,5,24,0,0,291,293,3,26,13,0,292,290,1,0,0,0,293,296,1,0,0,0,294,
292,1,0,0,0,294,295,1,0,0,0,295,298,1,0,0,0,296,294,1,0,0,0,297,289,1,0,
0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,300,5,33,0,0,300,302,1,0,0,0,301,
279,1,0,0,0,301,280,1,0,0,0,301,287,1,0,0,0,302,31,1,0,0,0,303,304,5,37,
0,0,304,33,1,0,0,0,305,306,5,38,0,0,306,35,1,0,0,0,29,39,52,64,70,76,88,
94,104,110,120,126,134,172,176,191,194,209,222,225,231,257,259,270,273,277,
285,294,297,301];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LudiParser extends antlr4.Parser {

    static grammarFileName = "Ludi.g4";
    static literalNames = [ null, "'players'", "'action'", "'('", "')'", 
                            "'for'", "':'", "'trigger'", "'win'", "'loss'", 
                            "'setup'", "'kind'", "'a'", "'state'", "'change'", 
                            "'to'", "'set'", "'increase'", "'by'", "'decrease'", 
                            "'if'", "'then'", "'end'", "'when'", "','", 
                            "'['", "']'", "'not'", "'!'", "'or'", "'and'", 
                            "'='", "'!='", "'>'", "'<'", "'>='", "'<='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "IDENTIFIER", 
                             "NUMBER", "WS" ];
    static ruleNames = [ "game", "definition", "players", "action", "trigger", 
                         "win", "loss", "setup", "kind", "state_definition", 
                         "statement", "when", "parameterList", "expression", 
                         "lvalue", "typeExpression", "identifier", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LudiParser.ruleNames;
        this.literalNames = LudiParser.literalNames;
        this.symbolicNames = LudiParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
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
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	game() {
	    let localctx = new GameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LudiParser.RULE_game);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 12166) !== 0)) {
	            this.state = 36;
	            this.definition();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(LudiParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LudiParser.RULE_definition);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.players();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.action();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.setup();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.trigger();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 48;
	            this.win();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 49;
	            this.loss();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 50;
	            this.kind();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 51;
	            this.state_definition();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	players() {
	    let localctx = new PlayersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LudiParser.RULE_players);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(LudiParser.T__0);
	        this.state = 55;
	        localctx.type = this.typeExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LudiParser.RULE_action);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(LudiParser.T__1);
	        this.state = 58;
	        localctx.name = this.identifier();
	        this.state = 59;
	        this.match(LudiParser.T__2);
	        this.state = 60;
	        this.parameterList();
	        this.state = 61;
	        this.match(LudiParser.T__3);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 62;
	            this.match(LudiParser.T__4);
	            this.state = 63;
	            localctx.player = this.expression(0);
	        }

	        this.state = 66;
	        this.match(LudiParser.T__5);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 67;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1785856) !== 0)) {
	            this.state = 73;
	            this.statement();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	trigger() {
	    let localctx = new TriggerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LudiParser.RULE_trigger);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(LudiParser.T__6);
	        this.state = 80;
	        localctx.name = this.identifier();
	        this.state = 81;
	        this.match(LudiParser.T__2);
	        this.state = 82;
	        this.parameterList();
	        this.state = 83;
	        this.match(LudiParser.T__3);
	        this.state = 84;
	        this.match(LudiParser.T__5);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 85;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1785856) !== 0)) {
	            this.state = 91;
	            this.statement();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	win() {
	    let localctx = new WinContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LudiParser.RULE_win);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(LudiParser.T__7);
	        this.state = 98;
	        localctx.name = this.identifier();
	        this.state = 99;
	        this.match(LudiParser.T__2);
	        this.state = 100;
	        this.parameterList();
	        this.state = 101;
	        this.match(LudiParser.T__3);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 102;
	            this.match(LudiParser.T__4);
	            this.state = 103;
	            localctx.player = this.expression(0);
	        }

	        this.state = 106;
	        this.match(LudiParser.T__5);
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 107;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loss() {
	    let localctx = new LossContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LudiParser.RULE_loss);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(LudiParser.T__8);
	        this.state = 114;
	        localctx.name = this.identifier();
	        this.state = 115;
	        this.match(LudiParser.T__2);
	        this.state = 116;
	        this.parameterList();
	        this.state = 117;
	        this.match(LudiParser.T__3);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 118;
	            this.match(LudiParser.T__4);
	            this.state = 119;
	            localctx.player = this.expression(0);
	        }

	        this.state = 122;
	        this.match(LudiParser.T__5);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 123;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setup() {
	    let localctx = new SetupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LudiParser.RULE_setup);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(LudiParser.T__9);
	        this.state = 130;
	        this.match(LudiParser.T__5);
	        this.state = 132; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 131;
	            this.statement();
	            this.state = 134; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1785856) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kind() {
	    let localctx = new KindContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LudiParser.RULE_kind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(LudiParser.T__10);
	        this.state = 137;
	        localctx.name = this.identifier();
	        this.state = 138;
	        this.match(LudiParser.T__11);
	        this.state = 139;
	        localctx.type = this.typeExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	state_definition() {
	    let localctx = new State_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LudiParser.RULE_state_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(LudiParser.T__12);
	        this.state = 142;
	        localctx.name = this.identifier();
	        this.state = 143;
	        this.match(LudiParser.T__11);
	        this.state = 144;
	        localctx.type = this.typeExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LudiParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 176;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new ChangeStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.match(LudiParser.T__13);
	            this.state = 147;
	            this.lvalue();
	            this.state = 148;
	            this.match(LudiParser.T__14);
	            this.state = 149;
	            this.expression(0);
	            break;
	        case 16:
	            localctx = new SetStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 151;
	            this.match(LudiParser.T__15);
	            this.state = 152;
	            this.lvalue();
	            this.state = 153;
	            this.match(LudiParser.T__14);
	            this.state = 154;
	            this.expression(0);
	            break;
	        case 17:
	            localctx = new IncreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 156;
	            this.match(LudiParser.T__16);
	            this.state = 157;
	            this.lvalue();
	            this.state = 158;
	            this.match(LudiParser.T__17);
	            this.state = 159;
	            this.expression(0);
	            break;
	        case 19:
	            localctx = new DecreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 161;
	            this.match(LudiParser.T__18);
	            this.state = 162;
	            this.lvalue();
	            this.state = 163;
	            this.match(LudiParser.T__17);
	            this.state = 164;
	            this.expression(0);
	            break;
	        case 20:
	            localctx = new IfStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 166;
	            this.match(LudiParser.T__19);
	            this.state = 167;
	            this.expression(0);
	            this.state = 168;
	            this.match(LudiParser.T__20);
	            this.state = 170; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 169;
	                this.statement();
	                this.state = 172; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1785856) !== 0));
	            this.state = 174;
	            this.match(LudiParser.T__21);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	when() {
	    let localctx = new WhenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LudiParser.RULE_when);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(LudiParser.T__22);
	        this.state = 179;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LudiParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 181;
	            localctx._identifier = this.identifier();
	            localctx.names.push(localctx._identifier);
	            this.state = 182;
	            this.match(LudiParser.T__11);
	            this.state = 183;
	            localctx._typeExpression = this.typeExpression();
	            localctx.types.push(localctx._typeExpression);
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===24) {
	                this.state = 184;
	                this.match(LudiParser.T__23);
	                this.state = 185;
	                localctx._identifier = this.identifier();
	                localctx.names.push(localctx._identifier);
	                this.state = 186;
	                this.match(LudiParser.T__11);
	                this.state = 187;
	                localctx._typeExpression = this.typeExpression();
	                localctx.types.push(localctx._typeExpression);
	                this.state = 193;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, LudiParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParenthizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 197;
	            this.match(LudiParser.T__2);
	            this.state = 198;
	            this.expression(0);
	            this.state = 199;
	            this.match(LudiParser.T__3);
	            break;

	        case 2:
	            localctx = new NumberExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 201;
	            this.match(LudiParser.NUMBER);
	            break;

	        case 3:
	            localctx = new IndexExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 202;
	            localctx.name = this.identifier();
	            this.state = 203;
	            this.match(LudiParser.T__24);
	            this.state = 204;
	            localctx._expression = this.expression(0);
	            localctx.arguments.push(localctx._expression);
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===24) {
	                this.state = 205;
	                this.match(LudiParser.T__23);
	                this.state = 206;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 211;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 212;
	            this.match(LudiParser.T__25);
	            break;

	        case 4:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 214;
	            localctx.name = this.lvalue();
	            break;

	        case 5:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 215;
	            localctx.name = this.identifier();
	            this.state = 216;
	            this.match(LudiParser.T__2);
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 402653192) !== 0) || _la===37 || _la===38) {
	                this.state = 217;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 222;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===24) {
	                    this.state = 218;
	                    this.match(LudiParser.T__23);
	                    this.state = 219;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 224;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 227;
	            this.match(LudiParser.T__3);
	            break;

	        case 6:
	            localctx = new NegationExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 229;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===28)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 230;
	            this.expression(9);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 259;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 257;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 233;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 234;
	                    localctx.operator = this.match(LudiParser.T__28);
	                    this.state = 235;
	                    localctx.right = this.expression(9);
	                    break;

	                case 2:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 236;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 237;
	                    localctx.operator = this.match(LudiParser.T__29);
	                    this.state = 238;
	                    localctx.right = this.expression(8);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 239;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 240;
	                    localctx.operator = this.match(LudiParser.T__30);
	                    this.state = 241;
	                    localctx.right = this.expression(7);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 242;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 243;
	                    localctx.operator = this.match(LudiParser.T__31);
	                    this.state = 244;
	                    localctx.right = this.expression(6);
	                    break;

	                case 5:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 245;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 246;
	                    localctx.operator = this.match(LudiParser.T__32);
	                    this.state = 247;
	                    localctx.right = this.expression(5);
	                    break;

	                case 6:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 248;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 249;
	                    localctx.operator = this.match(LudiParser.T__33);
	                    this.state = 250;
	                    localctx.right = this.expression(4);
	                    break;

	                case 7:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 251;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 252;
	                    localctx.operator = this.match(LudiParser.T__34);
	                    this.state = 253;
	                    localctx.right = this.expression(3);
	                    break;

	                case 8:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 254;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 255;
	                    localctx.operator = this.match(LudiParser.T__35);
	                    this.state = 256;
	                    localctx.right = this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 261;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	lvalue() {
	    let localctx = new LvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LudiParser.RULE_lvalue);
	    var _la = 0;
	    try {
	        this.state = 277;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdentifierLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 262;
	            this.identifier();
	            break;

	        case 2:
	            localctx = new IndexLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 263;
	            this.identifier();
	            this.state = 264;
	            this.match(LudiParser.T__24);
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 402653192) !== 0) || _la===37 || _la===38) {
	                this.state = 265;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 270;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===24) {
	                    this.state = 266;
	                    this.match(LudiParser.T__23);
	                    this.state = 267;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 272;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 275;
	            this.match(LudiParser.T__25);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeExpression() {
	    let localctx = new TypeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LudiParser.RULE_typeExpression);
	    var _la = 0;
	    try {
	        this.state = 301;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TypeIdentifierExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 279;
	            this.identifier();
	            break;

	        case 2:
	            localctx = new UnionTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 280;
	            localctx._identifier = this.identifier();
	            localctx.values.push(localctx._identifier);
	            this.state = 283; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 281;
	                this.match(LudiParser.T__28);
	                this.state = 282;
	                localctx._identifier = this.identifier();
	                localctx.values.push(localctx._identifier);
	                this.state = 285; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===29);
	            break;

	        case 3:
	            localctx = new ParameterizedTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 287;
	            localctx.name = this.identifier();
	            this.state = 288;
	            this.match(LudiParser.T__33);
	            this.state = 297;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 402653192) !== 0) || _la===37 || _la===38) {
	                this.state = 289;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 294;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===24) {
	                    this.state = 290;
	                    this.match(LudiParser.T__23);
	                    this.state = 291;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 296;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 299;
	            this.match(LudiParser.T__32);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LudiParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(LudiParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LudiParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.match(LudiParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LudiParser.EOF = antlr4.Token.EOF;
LudiParser.T__0 = 1;
LudiParser.T__1 = 2;
LudiParser.T__2 = 3;
LudiParser.T__3 = 4;
LudiParser.T__4 = 5;
LudiParser.T__5 = 6;
LudiParser.T__6 = 7;
LudiParser.T__7 = 8;
LudiParser.T__8 = 9;
LudiParser.T__9 = 10;
LudiParser.T__10 = 11;
LudiParser.T__11 = 12;
LudiParser.T__12 = 13;
LudiParser.T__13 = 14;
LudiParser.T__14 = 15;
LudiParser.T__15 = 16;
LudiParser.T__16 = 17;
LudiParser.T__17 = 18;
LudiParser.T__18 = 19;
LudiParser.T__19 = 20;
LudiParser.T__20 = 21;
LudiParser.T__21 = 22;
LudiParser.T__22 = 23;
LudiParser.T__23 = 24;
LudiParser.T__24 = 25;
LudiParser.T__25 = 26;
LudiParser.T__26 = 27;
LudiParser.T__27 = 28;
LudiParser.T__28 = 29;
LudiParser.T__29 = 30;
LudiParser.T__30 = 31;
LudiParser.T__31 = 32;
LudiParser.T__32 = 33;
LudiParser.T__33 = 34;
LudiParser.T__34 = 35;
LudiParser.T__35 = 36;
LudiParser.IDENTIFIER = 37;
LudiParser.NUMBER = 38;
LudiParser.WS = 39;

LudiParser.RULE_game = 0;
LudiParser.RULE_definition = 1;
LudiParser.RULE_players = 2;
LudiParser.RULE_action = 3;
LudiParser.RULE_trigger = 4;
LudiParser.RULE_win = 5;
LudiParser.RULE_loss = 6;
LudiParser.RULE_setup = 7;
LudiParser.RULE_kind = 8;
LudiParser.RULE_state_definition = 9;
LudiParser.RULE_statement = 10;
LudiParser.RULE_when = 11;
LudiParser.RULE_parameterList = 12;
LudiParser.RULE_expression = 13;
LudiParser.RULE_lvalue = 14;
LudiParser.RULE_typeExpression = 15;
LudiParser.RULE_identifier = 16;
LudiParser.RULE_number = 17;

class GameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_game;
    }

	EOF() {
	    return this.getToken(LudiParser.EOF, 0);
	};

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterGame(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitGame(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitGame(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_definition;
    }

	players() {
	    return this.getTypedRuleContext(PlayersContext,0);
	};

	action() {
	    return this.getTypedRuleContext(ActionContext,0);
	};

	setup() {
	    return this.getTypedRuleContext(SetupContext,0);
	};

	trigger() {
	    return this.getTypedRuleContext(TriggerContext,0);
	};

	win() {
	    return this.getTypedRuleContext(WinContext,0);
	};

	loss() {
	    return this.getTypedRuleContext(LossContext,0);
	};

	kind() {
	    return this.getTypedRuleContext(KindContext,0);
	};

	state_definition() {
	    return this.getTypedRuleContext(State_definitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitDefinition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitDefinition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PlayersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_players;
        this.type = null;
    }

	typeExpression() {
	    return this.getTypedRuleContext(TypeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterPlayers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitPlayers(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitPlayers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_action;
        this.name = null;
        this.player = null;
        this._when = null;
        this.conditions = [];
    }

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	when = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WhenContext);
	    } else {
	        return this.getTypedRuleContext(WhenContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitAction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitAction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TriggerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_trigger;
        this.name = null;
        this._when = null;
        this.conditions = [];
    }

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	when = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WhenContext);
	    } else {
	        return this.getTypedRuleContext(WhenContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterTrigger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitTrigger(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitTrigger(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_win;
        this.name = null;
        this.player = null;
        this._when = null;
        this.conditions = [];
    }

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	when = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WhenContext);
	    } else {
	        return this.getTypedRuleContext(WhenContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterWin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitWin(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitWin(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LossContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_loss;
        this.name = null;
        this.player = null;
        this._when = null;
        this.conditions = [];
    }

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	when = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WhenContext);
	    } else {
	        return this.getTypedRuleContext(WhenContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterLoss(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitLoss(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitLoss(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SetupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_setup;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterSetup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitSetup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitSetup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class KindContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_kind;
        this.name = null;
        this.type = null;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	typeExpression() {
	    return this.getTypedRuleContext(TypeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterKind(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitKind(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitKind(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class State_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_state_definition;
        this.name = null;
        this.type = null;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	typeExpression() {
	    return this.getTypedRuleContext(TypeExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterState_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitState_definition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitState_definition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_statement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IfStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.IfStatementContext = IfStatementContext;

class IncreaseStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterIncreaseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitIncreaseStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitIncreaseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.IncreaseStatementContext = IncreaseStatementContext;

class ChangeStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterChangeStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitChangeStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitChangeStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.ChangeStatementContext = ChangeStatementContext;

class DecreaseStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterDecreaseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitDecreaseStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitDecreaseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.DecreaseStatementContext = DecreaseStatementContext;

class SetStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterSetStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitSetStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitSetStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.SetStatementContext = SetStatementContext;

class WhenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_when;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterWhen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitWhen(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitWhen(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_parameterList;
        this._identifier = null;
        this.names = [];
        this._typeExpression = null;
        this.types = [];
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	typeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(TypeExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitParameterList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ComparisonExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterComparisonExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitComparisonExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitComparisonExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.ComparisonExpressionContext = ComparisonExpressionContext;

class IndexExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        this._expression = null;;
        this.arguments = [];;
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterIndexExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitIndexExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitIndexExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.IndexExpressionContext = IndexExpressionContext;

class NumberExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(LudiParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterNumberExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitNumberExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitNumberExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.NumberExpressionContext = NumberExpressionContext;

class NegationExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterNegationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitNegationExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitNegationExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.NegationExpressionContext = NegationExpressionContext;

class ParenthizedExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterParenthizedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitParenthizedExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitParenthizedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.ParenthizedExpressionContext = ParenthizedExpressionContext;

class FunctionCallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        this._expression = null;;
        this.arguments = [];;
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterFunctionCallExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitFunctionCallExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitFunctionCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.FunctionCallExpressionContext = FunctionCallExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        super.copyFrom(ctx);
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.IdentifierExpressionContext = IdentifierExpressionContext;

class ConjunctionExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.operator = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterConjunctionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitConjunctionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitConjunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.ConjunctionExpressionContext = ConjunctionExpressionContext;

class LvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_lvalue;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IndexLValueContext extends LvalueContext {

    constructor(parser, ctx) {
        super(parser);
        this._expression = null;;
        this.arguments = [];;
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterIndexLValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitIndexLValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitIndexLValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.IndexLValueContext = IndexLValueContext;

class IdentifierLValueContext extends LvalueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterIdentifierLValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitIdentifierLValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitIdentifierLValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.IdentifierLValueContext = IdentifierLValueContext;

class TypeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_typeExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TypeIdentifierExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterTypeIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitTypeIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitTypeIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.TypeIdentifierExpressionContext = TypeIdentifierExpressionContext;

class UnionTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this._identifier = null;;
        this.values = [];;
        super.copyFrom(ctx);
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterUnionTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitUnionTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitUnionTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.UnionTypeExpressionContext = UnionTypeExpressionContext;

class ParameterizedTypeExpressionContext extends TypeExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        this._expression = null;;
        this.arguments = [];;
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterParameterizedTypeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitParameterizedTypeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitParameterizedTypeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.ParameterizedTypeExpressionContext = ParameterizedTypeExpressionContext;

class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(LudiParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(LudiParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LudiParser.GameContext = GameContext; 
LudiParser.DefinitionContext = DefinitionContext; 
LudiParser.PlayersContext = PlayersContext; 
LudiParser.ActionContext = ActionContext; 
LudiParser.TriggerContext = TriggerContext; 
LudiParser.WinContext = WinContext; 
LudiParser.LossContext = LossContext; 
LudiParser.SetupContext = SetupContext; 
LudiParser.KindContext = KindContext; 
LudiParser.State_definitionContext = State_definitionContext; 
LudiParser.StatementContext = StatementContext; 
LudiParser.WhenContext = WhenContext; 
LudiParser.ParameterListContext = ParameterListContext; 
LudiParser.ExpressionContext = ExpressionContext; 
LudiParser.LvalueContext = LvalueContext; 
LudiParser.TypeExpressionContext = TypeExpressionContext; 
LudiParser.IdentifierContext = IdentifierContext; 
LudiParser.NumberContext = NumberContext; 
