// Generated from Ludi.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LudiListener from './LudiListener.js';
import LudiVisitor from './LudiVisitor.js';

const serializedATN = [4,1,46,393,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,3,1,62,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
3,3,74,8,3,1,3,1,3,5,3,78,8,3,10,3,12,3,81,9,3,1,3,5,3,84,8,3,10,3,12,3,
87,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,96,8,4,10,4,12,4,99,9,4,1,4,5,4,102,
8,4,10,4,12,4,105,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,114,8,5,1,5,1,5,5,
5,118,8,5,10,5,12,5,121,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,130,8,6,1,6,
1,6,5,6,134,8,6,10,6,12,6,137,9,6,1,7,1,7,1,7,4,7,142,8,7,11,7,12,7,143,
1,8,1,8,1,8,1,8,1,8,1,9,1,9,3,9,153,8,9,1,9,5,9,156,8,9,10,9,12,9,159,9,
9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,5,11,169,8,11,10,11,12,11,172,
9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,4,12,198,8,12,11,12,
12,12,199,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,210,8,12,10,12,12,
12,213,9,12,3,12,215,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,
12,226,8,12,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,
239,8,14,10,14,12,14,242,9,14,3,14,244,8,14,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,5,15,257,8,15,10,15,12,15,260,9,15,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,5,15,270,8,15,10,15,12,15,273,9,15,3,15,275,
8,15,1,15,1,15,1,15,1,15,3,15,281,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,5,15,307,8,15,10,15,12,15,310,9,15,1,16,1,16,1,16,1,16,1,16,
1,16,5,16,318,8,16,10,16,12,16,321,9,16,3,16,323,8,16,1,16,1,16,3,16,327,
8,16,1,17,1,17,1,17,4,17,332,8,17,11,17,12,17,333,1,17,1,17,1,17,1,17,1,
17,5,17,341,8,17,10,17,12,17,344,9,17,3,17,346,8,17,1,17,1,17,3,17,350,8,
17,1,18,1,18,1,18,5,18,355,8,18,10,18,12,18,358,9,18,1,18,1,18,1,18,1,18,
1,18,1,18,5,18,366,8,18,10,18,12,18,369,9,18,1,18,1,18,5,18,373,8,18,10,
18,12,18,376,9,18,1,18,1,18,1,18,1,18,1,18,3,18,383,8,18,1,19,1,19,1,19,
1,19,1,20,1,20,1,21,1,21,1,21,0,1,30,22,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,0,2,1,0,31,32,2,0,5,5,43,43,430,0,47,1,0,0,0,
2,61,1,0,0,0,4,63,1,0,0,0,6,66,1,0,0,0,8,88,1,0,0,0,10,106,1,0,0,0,12,122,
1,0,0,0,14,138,1,0,0,0,16,145,1,0,0,0,18,150,1,0,0,0,20,160,1,0,0,0,22,165,
1,0,0,0,24,225,1,0,0,0,26,227,1,0,0,0,28,243,1,0,0,0,30,280,1,0,0,0,32,326,
1,0,0,0,34,349,1,0,0,0,36,382,1,0,0,0,38,384,1,0,0,0,40,388,1,0,0,0,42,390,
1,0,0,0,44,46,3,2,1,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,
0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,0,0,1,51,1,1,0,0,0,52,62,3,4,2,
0,53,62,3,6,3,0,54,62,3,14,7,0,55,62,3,8,4,0,56,62,3,10,5,0,57,62,3,12,6,
0,58,62,3,16,8,0,59,62,3,20,10,0,60,62,3,22,11,0,61,52,1,0,0,0,61,53,1,0,
0,0,61,54,1,0,0,0,61,55,1,0,0,0,61,56,1,0,0,0,61,57,1,0,0,0,61,58,1,0,0,
0,61,59,1,0,0,0,61,60,1,0,0,0,62,3,1,0,0,0,63,64,5,1,0,0,64,65,3,34,17,0,
65,5,1,0,0,0,66,67,5,2,0,0,67,68,3,40,20,0,68,69,5,3,0,0,69,70,3,28,14,0,
70,73,5,4,0,0,71,72,5,5,0,0,72,74,3,30,15,0,73,71,1,0,0,0,73,74,1,0,0,0,
74,75,1,0,0,0,75,79,5,6,0,0,76,78,3,26,13,0,77,76,1,0,0,0,78,81,1,0,0,0,
79,77,1,0,0,0,79,80,1,0,0,0,80,85,1,0,0,0,81,79,1,0,0,0,82,84,3,24,12,0,
83,82,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,7,1,0,0,0,87,
85,1,0,0,0,88,89,5,7,0,0,89,90,3,40,20,0,90,91,5,3,0,0,91,92,3,28,14,0,92,
93,5,4,0,0,93,97,5,6,0,0,94,96,3,26,13,0,95,94,1,0,0,0,96,99,1,0,0,0,97,
95,1,0,0,0,97,98,1,0,0,0,98,103,1,0,0,0,99,97,1,0,0,0,100,102,3,24,12,0,
101,100,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,9,1,
0,0,0,105,103,1,0,0,0,106,107,5,8,0,0,107,108,3,40,20,0,108,109,5,3,0,0,
109,110,3,28,14,0,110,113,5,4,0,0,111,112,5,5,0,0,112,114,3,30,15,0,113,
111,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,119,5,6,0,0,116,118,3,26,
13,0,117,116,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,
11,1,0,0,0,121,119,1,0,0,0,122,123,5,9,0,0,123,124,3,40,20,0,124,125,5,3,
0,0,125,126,3,28,14,0,126,129,5,4,0,0,127,128,5,5,0,0,128,130,3,30,15,0,
129,127,1,0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,135,5,6,0,0,132,134,
3,26,13,0,133,132,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,
0,136,13,1,0,0,0,137,135,1,0,0,0,138,139,5,10,0,0,139,141,5,6,0,0,140,142,
3,24,12,0,141,140,1,0,0,0,142,143,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,
0,144,15,1,0,0,0,145,146,5,11,0,0,146,147,3,40,20,0,147,148,5,12,0,0,148,
149,3,34,17,0,149,17,1,0,0,0,150,152,3,24,12,0,151,153,5,13,0,0,152,151,
1,0,0,0,152,153,1,0,0,0,153,157,1,0,0,0,154,156,3,24,12,0,155,154,1,0,0,
0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,19,1,0,0,0,159,157,
1,0,0,0,160,161,5,14,0,0,161,162,3,40,20,0,162,163,5,12,0,0,163,164,3,34,
17,0,164,21,1,0,0,0,165,166,5,15,0,0,166,170,5,6,0,0,167,169,3,36,18,0,168,
167,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,23,1,0,0,
0,172,170,1,0,0,0,173,174,5,16,0,0,174,175,3,32,16,0,175,176,5,17,0,0,176,
177,3,30,15,0,177,226,1,0,0,0,178,179,5,18,0,0,179,180,3,32,16,0,180,181,
5,17,0,0,181,182,3,30,15,0,182,226,1,0,0,0,183,184,5,19,0,0,184,185,3,32,
16,0,185,186,5,20,0,0,186,187,3,30,15,0,187,226,1,0,0,0,188,189,5,21,0,0,
189,190,3,32,16,0,190,191,5,20,0,0,191,192,3,30,15,0,192,226,1,0,0,0,193,
194,5,22,0,0,194,195,3,30,15,0,195,197,5,23,0,0,196,198,3,24,12,0,197,196,
1,0,0,0,198,199,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,
201,202,5,24,0,0,202,226,1,0,0,0,203,204,5,25,0,0,204,205,3,40,20,0,205,
214,5,3,0,0,206,211,3,30,15,0,207,208,5,13,0,0,208,210,3,30,15,0,209,207,
1,0,0,0,210,213,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,215,1,0,0,0,
213,211,1,0,0,0,214,206,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,
5,4,0,0,217,218,5,5,0,0,218,219,3,30,15,0,219,226,1,0,0,0,220,221,5,26,0,
0,221,222,3,30,15,0,222,223,5,27,0,0,223,224,3,40,20,0,224,226,1,0,0,0,225,
173,1,0,0,0,225,178,1,0,0,0,225,183,1,0,0,0,225,188,1,0,0,0,225,193,1,0,
0,0,225,203,1,0,0,0,225,220,1,0,0,0,226,25,1,0,0,0,227,228,5,28,0,0,228,
229,3,30,15,0,229,27,1,0,0,0,230,231,3,40,20,0,231,232,5,12,0,0,232,240,
3,34,17,0,233,234,5,13,0,0,234,235,3,40,20,0,235,236,5,12,0,0,236,237,3,
34,17,0,237,239,1,0,0,0,238,233,1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,0,
240,241,1,0,0,0,241,244,1,0,0,0,242,240,1,0,0,0,243,230,1,0,0,0,243,244,
1,0,0,0,244,29,1,0,0,0,245,246,6,15,-1,0,246,247,5,3,0,0,247,248,3,30,15,
0,248,249,5,4,0,0,249,281,1,0,0,0,250,281,5,44,0,0,251,252,3,40,20,0,252,
253,5,29,0,0,253,258,3,30,15,0,254,255,5,13,0,0,255,257,3,30,15,0,256,254,
1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,261,1,0,0,0,
260,258,1,0,0,0,261,262,5,30,0,0,262,281,1,0,0,0,263,281,3,32,16,0,264,265,
3,40,20,0,265,274,5,3,0,0,266,271,3,30,15,0,267,268,5,13,0,0,268,270,3,30,
15,0,269,267,1,0,0,0,270,273,1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,
275,1,0,0,0,273,271,1,0,0,0,274,266,1,0,0,0,274,275,1,0,0,0,275,276,1,0,
0,0,276,277,5,4,0,0,277,281,1,0,0,0,278,279,7,0,0,0,279,281,3,30,15,9,280,
245,1,0,0,0,280,250,1,0,0,0,280,251,1,0,0,0,280,263,1,0,0,0,280,264,1,0,
0,0,280,278,1,0,0,0,281,308,1,0,0,0,282,283,10,8,0,0,283,284,5,33,0,0,284,
307,3,30,15,9,285,286,10,7,0,0,286,287,5,34,0,0,287,307,3,30,15,8,288,289,
10,6,0,0,289,290,5,35,0,0,290,307,3,30,15,7,291,292,10,5,0,0,292,293,5,36,
0,0,293,307,3,30,15,6,294,295,10,4,0,0,295,296,5,37,0,0,296,307,3,30,15,
5,297,298,10,3,0,0,298,299,5,38,0,0,299,307,3,30,15,4,300,301,10,2,0,0,301,
302,5,39,0,0,302,307,3,30,15,3,303,304,10,1,0,0,304,305,5,40,0,0,305,307,
3,30,15,2,306,282,1,0,0,0,306,285,1,0,0,0,306,288,1,0,0,0,306,291,1,0,0,
0,306,294,1,0,0,0,306,297,1,0,0,0,306,300,1,0,0,0,306,303,1,0,0,0,307,310,
1,0,0,0,308,306,1,0,0,0,308,309,1,0,0,0,309,31,1,0,0,0,310,308,1,0,0,0,311,
327,3,40,20,0,312,313,3,40,20,0,313,322,5,29,0,0,314,319,3,30,15,0,315,316,
5,13,0,0,316,318,3,30,15,0,317,315,1,0,0,0,318,321,1,0,0,0,319,317,1,0,0,
0,319,320,1,0,0,0,320,323,1,0,0,0,321,319,1,0,0,0,322,314,1,0,0,0,322,323,
1,0,0,0,323,324,1,0,0,0,324,325,5,30,0,0,325,327,1,0,0,0,326,311,1,0,0,0,
326,312,1,0,0,0,327,33,1,0,0,0,328,331,3,40,20,0,329,330,5,33,0,0,330,332,
3,40,20,0,331,329,1,0,0,0,332,333,1,0,0,0,333,331,1,0,0,0,333,334,1,0,0,
0,334,350,1,0,0,0,335,336,3,40,20,0,336,345,5,38,0,0,337,342,3,30,15,0,338,
339,5,13,0,0,339,341,3,30,15,0,340,338,1,0,0,0,341,344,1,0,0,0,342,340,1,
0,0,0,342,343,1,0,0,0,343,346,1,0,0,0,344,342,1,0,0,0,345,337,1,0,0,0,345,
346,1,0,0,0,346,347,1,0,0,0,347,348,5,37,0,0,348,350,1,0,0,0,349,328,1,0,
0,0,349,335,1,0,0,0,350,35,1,0,0,0,351,352,5,38,0,0,352,356,3,40,20,0,353,
355,3,38,19,0,354,353,1,0,0,0,355,358,1,0,0,0,356,354,1,0,0,0,356,357,1,
0,0,0,357,359,1,0,0,0,358,356,1,0,0,0,359,360,5,41,0,0,360,361,5,37,0,0,
361,383,1,0,0,0,362,363,5,38,0,0,363,367,3,40,20,0,364,366,3,38,19,0,365,
364,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,370,1,0,
0,0,369,367,1,0,0,0,370,374,5,37,0,0,371,373,3,36,18,0,372,371,1,0,0,0,373,
376,1,0,0,0,374,372,1,0,0,0,374,375,1,0,0,0,375,377,1,0,0,0,376,374,1,0,
0,0,377,378,5,38,0,0,378,379,5,41,0,0,379,380,3,40,20,0,380,381,5,37,0,0,
381,383,1,0,0,0,382,351,1,0,0,0,382,362,1,0,0,0,383,37,1,0,0,0,384,385,3,
40,20,0,385,386,5,35,0,0,386,387,5,42,0,0,387,39,1,0,0,0,388,389,7,1,0,0,
389,41,1,0,0,0,390,391,5,44,0,0,391,43,1,0,0,0,38,47,61,73,79,85,97,103,
113,119,129,135,143,152,157,170,199,211,214,225,240,243,258,271,274,280,
306,308,319,322,326,333,342,345,349,356,367,374,382];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LudiParser extends antlr4.Parser {

    static grammarFileName = "Ludi.g4";
    static literalNames = [ null, "'players'", "'action'", "'('", "')'", 
                            "'for'", "':'", "'trigger'", "'win'", "'loss'", 
                            "'setup'", "'kind'", "'a'", "','", "'state'", 
                            "'view'", "'change'", "'to'", "'set'", "'increase'", 
                            "'by'", "'decrease'", "'if'", "'then'", "'end'", 
                            "'play'", "'remember'", "'as'", "'when'", "'['", 
                            "']'", "'not'", "'!'", "'or'", "'and'", "'='", 
                            "'!='", "'>'", "'<'", "'>='", "'<='", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "QUOTED_STRING", "IDENTIFIER", 
                             "NUMBER", "WS", "COMMENT" ];
    static ruleNames = [ "game", "definition", "players", "action", "trigger", 
                         "win", "loss", "setup", "kind", "statementList", 
                         "state_definition", "view", "statement", "when", 
                         "parameterList", "expression", "lvalue", "typeExpression", 
                         "viewElement", "viewAttribute", "identifier", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LudiParser.ruleNames;
        this.literalNames = LudiParser.literalNames;
        this.symbolicNames = LudiParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 15:
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
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 53126) !== 0)) {
	            this.state = 44;
	            this.definition();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
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
	        this.state = 61;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.players();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.action();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.setup();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.trigger();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.win();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 57;
	            this.loss();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 58;
	            this.kind();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 59;
	            this.state_definition();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 60;
	            this.view();
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
	        this.state = 63;
	        this.match(LudiParser.T__0);
	        this.state = 64;
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
	        this.state = 66;
	        this.match(LudiParser.T__1);
	        this.state = 67;
	        localctx.name = this.identifier();
	        this.state = 68;
	        this.match(LudiParser.T__2);
	        this.state = 69;
	        this.parameterList();
	        this.state = 70;
	        this.match(LudiParser.T__3);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 71;
	            this.match(LudiParser.T__4);
	            this.state = 72;
	            localctx.player = this.expression(0);
	        }

	        this.state = 75;
	        this.match(LudiParser.T__5);
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 76;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 107806720) !== 0)) {
	            this.state = 82;
	            this.statement();
	            this.state = 87;
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
	        this.state = 88;
	        this.match(LudiParser.T__6);
	        this.state = 89;
	        localctx.name = this.identifier();
	        this.state = 90;
	        this.match(LudiParser.T__2);
	        this.state = 91;
	        this.parameterList();
	        this.state = 92;
	        this.match(LudiParser.T__3);
	        this.state = 93;
	        this.match(LudiParser.T__5);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 94;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 107806720) !== 0)) {
	            this.state = 100;
	            this.statement();
	            this.state = 105;
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
	        this.state = 106;
	        this.match(LudiParser.T__7);
	        this.state = 107;
	        localctx.name = this.identifier();
	        this.state = 108;
	        this.match(LudiParser.T__2);
	        this.state = 109;
	        this.parameterList();
	        this.state = 110;
	        this.match(LudiParser.T__3);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 111;
	            this.match(LudiParser.T__4);
	            this.state = 112;
	            localctx.player = this.expression(0);
	        }

	        this.state = 115;
	        this.match(LudiParser.T__5);
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 116;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 121;
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
	        this.state = 122;
	        this.match(LudiParser.T__8);
	        this.state = 123;
	        localctx.name = this.identifier();
	        this.state = 124;
	        this.match(LudiParser.T__2);
	        this.state = 125;
	        this.parameterList();
	        this.state = 126;
	        this.match(LudiParser.T__3);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 127;
	            this.match(LudiParser.T__4);
	            this.state = 128;
	            localctx.player = this.expression(0);
	        }

	        this.state = 131;
	        this.match(LudiParser.T__5);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 132;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 137;
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
	        this.state = 138;
	        this.match(LudiParser.T__9);
	        this.state = 139;
	        this.match(LudiParser.T__5);
	        this.state = 141; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 140;
	            this.statement();
	            this.state = 143; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 107806720) !== 0));
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
	        this.state = 145;
	        this.match(LudiParser.T__10);
	        this.state = 146;
	        localctx.name = this.identifier();
	        this.state = 147;
	        this.match(LudiParser.T__11);
	        this.state = 148;
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



	statementList() {
	    let localctx = new StatementListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LudiParser.RULE_statementList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        localctx._statement = this.statement();
	        localctx.statements.push(localctx._statement);

	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 151;
	            this.match(LudiParser.T__12);
	        }

	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 107806720) !== 0)) {
	            this.state = 154;
	            localctx._statement = this.statement();
	            localctx.statements.push(localctx._statement);
	            this.state = 159;
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



	state_definition() {
	    let localctx = new State_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LudiParser.RULE_state_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(LudiParser.T__13);
	        this.state = 161;
	        localctx.name = this.identifier();
	        this.state = 162;
	        this.match(LudiParser.T__11);
	        this.state = 163;
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



	view() {
	    let localctx = new ViewContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LudiParser.RULE_view);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(LudiParser.T__14);
	        this.state = 166;
	        this.match(LudiParser.T__5);
	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 167;
	            localctx._viewElement = this.viewElement();
	            localctx.elements.push(localctx._viewElement);
	            this.state = 172;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LudiParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 225;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new ChangeStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            this.match(LudiParser.T__15);
	            this.state = 174;
	            this.lvalue();
	            this.state = 175;
	            this.match(LudiParser.T__16);
	            this.state = 176;
	            this.expression(0);
	            break;
	        case 18:
	            localctx = new SetStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.match(LudiParser.T__17);
	            this.state = 179;
	            this.lvalue();
	            this.state = 180;
	            this.match(LudiParser.T__16);
	            this.state = 181;
	            this.expression(0);
	            break;
	        case 19:
	            localctx = new IncreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 183;
	            this.match(LudiParser.T__18);
	            this.state = 184;
	            this.lvalue();
	            this.state = 185;
	            this.match(LudiParser.T__19);
	            this.state = 186;
	            this.expression(0);
	            break;
	        case 21:
	            localctx = new DecreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 188;
	            this.match(LudiParser.T__20);
	            this.state = 189;
	            this.lvalue();
	            this.state = 190;
	            this.match(LudiParser.T__19);
	            this.state = 191;
	            this.expression(0);
	            break;
	        case 22:
	            localctx = new IfStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 193;
	            this.match(LudiParser.T__21);
	            this.state = 194;
	            this.expression(0);
	            this.state = 195;
	            this.match(LudiParser.T__22);
	            this.state = 197; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 196;
	                this.statement();
	                this.state = 199; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 107806720) !== 0));
	            this.state = 201;
	            this.match(LudiParser.T__23);
	            break;
	        case 25:
	            localctx = new PlayStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 203;
	            this.match(LudiParser.T__24);
	            this.state = 204;
	            localctx.actionName = this.identifier();
	            this.state = 205;
	            this.match(LudiParser.T__2);
	            this.state = 214;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147483688) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 6145) !== 0)) {
	                this.state = 206;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 211;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===13) {
	                    this.state = 207;
	                    this.match(LudiParser.T__12);
	                    this.state = 208;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 213;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 216;
	            this.match(LudiParser.T__3);
	            this.state = 217;
	            this.match(LudiParser.T__4);
	            this.state = 218;
	            localctx.playerExpression = this.expression(0);
	            break;
	        case 26:
	            localctx = new RememberStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 220;
	            this.match(LudiParser.T__25);
	            this.state = 221;
	            this.expression(0);
	            this.state = 222;
	            this.match(LudiParser.T__26);
	            this.state = 223;
	            localctx.variableName = this.identifier();
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
	    this.enterRule(localctx, 26, LudiParser.RULE_when);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.match(LudiParser.T__27);
	        this.state = 228;
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
	    this.enterRule(localctx, 28, LudiParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===43) {
	            this.state = 230;
	            localctx._identifier = this.identifier();
	            localctx.names.push(localctx._identifier);
	            this.state = 231;
	            this.match(LudiParser.T__11);
	            this.state = 232;
	            localctx._typeExpression = this.typeExpression();
	            localctx.types.push(localctx._typeExpression);
	            this.state = 240;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===13) {
	                this.state = 233;
	                this.match(LudiParser.T__12);
	                this.state = 234;
	                localctx._identifier = this.identifier();
	                localctx.names.push(localctx._identifier);
	                this.state = 235;
	                this.match(LudiParser.T__11);
	                this.state = 236;
	                localctx._typeExpression = this.typeExpression();
	                localctx.types.push(localctx._typeExpression);
	                this.state = 242;
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
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, LudiParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParenthizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 246;
	            this.match(LudiParser.T__2);
	            this.state = 247;
	            this.expression(0);
	            this.state = 248;
	            this.match(LudiParser.T__3);
	            break;

	        case 2:
	            localctx = new NumberExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 250;
	            this.match(LudiParser.NUMBER);
	            break;

	        case 3:
	            localctx = new IndexExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 251;
	            localctx.name = this.identifier();
	            this.state = 252;
	            this.match(LudiParser.T__28);
	            this.state = 253;
	            localctx._expression = this.expression(0);
	            localctx.arguments.push(localctx._expression);
	            this.state = 258;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===13) {
	                this.state = 254;
	                this.match(LudiParser.T__12);
	                this.state = 255;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 260;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 261;
	            this.match(LudiParser.T__29);
	            break;

	        case 4:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 263;
	            localctx.name = this.lvalue();
	            break;

	        case 5:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 264;
	            localctx.name = this.identifier();
	            this.state = 265;
	            this.match(LudiParser.T__2);
	            this.state = 274;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147483688) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 6145) !== 0)) {
	                this.state = 266;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 271;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===13) {
	                    this.state = 267;
	                    this.match(LudiParser.T__12);
	                    this.state = 268;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 273;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 276;
	            this.match(LudiParser.T__3);
	            break;

	        case 6:
	            localctx = new NegationExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 278;
	            _la = this._input.LA(1);
	            if(!(_la===31 || _la===32)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 279;
	            this.expression(9);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 308;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 306;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 282;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 283;
	                    localctx.operator = this.match(LudiParser.T__32);
	                    this.state = 284;
	                    localctx.right = this.expression(9);
	                    break;

	                case 2:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 285;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 286;
	                    localctx.operator = this.match(LudiParser.T__33);
	                    this.state = 287;
	                    localctx.right = this.expression(8);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 288;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 289;
	                    localctx.operator = this.match(LudiParser.T__34);
	                    this.state = 290;
	                    localctx.right = this.expression(7);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 291;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 292;
	                    localctx.operator = this.match(LudiParser.T__35);
	                    this.state = 293;
	                    localctx.right = this.expression(6);
	                    break;

	                case 5:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 294;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 295;
	                    localctx.operator = this.match(LudiParser.T__36);
	                    this.state = 296;
	                    localctx.right = this.expression(5);
	                    break;

	                case 6:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 297;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 298;
	                    localctx.operator = this.match(LudiParser.T__37);
	                    this.state = 299;
	                    localctx.right = this.expression(4);
	                    break;

	                case 7:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 300;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 301;
	                    localctx.operator = this.match(LudiParser.T__38);
	                    this.state = 302;
	                    localctx.right = this.expression(3);
	                    break;

	                case 8:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 303;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 304;
	                    localctx.operator = this.match(LudiParser.T__39);
	                    this.state = 305;
	                    localctx.right = this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 310;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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
	    this.enterRule(localctx, 32, LudiParser.RULE_lvalue);
	    var _la = 0;
	    try {
	        this.state = 326;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdentifierLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 311;
	            this.identifier();
	            break;

	        case 2:
	            localctx = new IndexLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 312;
	            this.identifier();
	            this.state = 313;
	            this.match(LudiParser.T__28);
	            this.state = 322;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147483688) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 6145) !== 0)) {
	                this.state = 314;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 319;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===13) {
	                    this.state = 315;
	                    this.match(LudiParser.T__12);
	                    this.state = 316;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 321;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 324;
	            this.match(LudiParser.T__29);
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
	    this.enterRule(localctx, 34, LudiParser.RULE_typeExpression);
	    var _la = 0;
	    try {
	        this.state = 349;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnionTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 328;
	            localctx._identifier = this.identifier();
	            localctx.values.push(localctx._identifier);
	            this.state = 331; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 329;
	                this.match(LudiParser.T__32);
	                this.state = 330;
	                localctx._identifier = this.identifier();
	                localctx.values.push(localctx._identifier);
	                this.state = 333; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===33);
	            break;

	        case 2:
	            localctx = new ParameterizedTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 335;
	            localctx.name = this.identifier();
	            this.state = 336;
	            this.match(LudiParser.T__37);
	            this.state = 345;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147483688) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 6145) !== 0)) {
	                this.state = 337;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 342;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===13) {
	                    this.state = 338;
	                    this.match(LudiParser.T__12);
	                    this.state = 339;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 344;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 347;
	            this.match(LudiParser.T__36);
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



	viewElement() {
	    let localctx = new ViewElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LudiParser.RULE_viewElement);
	    var _la = 0;
	    try {
	        this.state = 382;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LeafViewContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.match(LudiParser.T__37);
	            this.state = 352;
	            localctx.name = this.identifier();
	            this.state = 356;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5 || _la===43) {
	                this.state = 353;
	                localctx._viewAttribute = this.viewAttribute();
	                localctx.attributes.push(localctx._viewAttribute);
	                this.state = 358;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 359;
	            this.match(LudiParser.T__40);
	            this.state = 360;
	            this.match(LudiParser.T__36);
	            break;

	        case 2:
	            localctx = new StemViewContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 362;
	            this.match(LudiParser.T__37);
	            this.state = 363;
	            localctx.name = this.identifier();
	            this.state = 367;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5 || _la===43) {
	                this.state = 364;
	                localctx._viewAttribute = this.viewAttribute();
	                localctx.attributes.push(localctx._viewAttribute);
	                this.state = 369;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 370;
	            this.match(LudiParser.T__36);
	            this.state = 374;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 371;
	                    localctx._viewElement = this.viewElement();
	                    localctx.childViews.push(localctx._viewElement); 
	                }
	                this.state = 376;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
	            }

	            this.state = 377;
	            this.match(LudiParser.T__37);
	            this.state = 378;
	            this.match(LudiParser.T__40);
	            this.state = 379;
	            localctx.name2 = this.identifier();
	            this.state = 380;
	            this.match(LudiParser.T__36);
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



	viewAttribute() {
	    let localctx = new ViewAttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LudiParser.RULE_viewAttribute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        localctx.key = this.identifier();
	        this.state = 385;
	        this.match(LudiParser.T__34);
	        this.state = 386;
	        localctx.value = this.match(LudiParser.QUOTED_STRING);
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
	    this.enterRule(localctx, 40, LudiParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 388;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===43)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LudiParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
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
LudiParser.T__36 = 37;
LudiParser.T__37 = 38;
LudiParser.T__38 = 39;
LudiParser.T__39 = 40;
LudiParser.T__40 = 41;
LudiParser.QUOTED_STRING = 42;
LudiParser.IDENTIFIER = 43;
LudiParser.NUMBER = 44;
LudiParser.WS = 45;
LudiParser.COMMENT = 46;

LudiParser.RULE_game = 0;
LudiParser.RULE_definition = 1;
LudiParser.RULE_players = 2;
LudiParser.RULE_action = 3;
LudiParser.RULE_trigger = 4;
LudiParser.RULE_win = 5;
LudiParser.RULE_loss = 6;
LudiParser.RULE_setup = 7;
LudiParser.RULE_kind = 8;
LudiParser.RULE_statementList = 9;
LudiParser.RULE_state_definition = 10;
LudiParser.RULE_view = 11;
LudiParser.RULE_statement = 12;
LudiParser.RULE_when = 13;
LudiParser.RULE_parameterList = 14;
LudiParser.RULE_expression = 15;
LudiParser.RULE_lvalue = 16;
LudiParser.RULE_typeExpression = 17;
LudiParser.RULE_viewElement = 18;
LudiParser.RULE_viewAttribute = 19;
LudiParser.RULE_identifier = 20;
LudiParser.RULE_number = 21;

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

	view() {
	    return this.getTypedRuleContext(ViewContext,0);
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



class StatementListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_statementList;
        this._statement = null;
        this.statements = [];
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
	        listener.enterStatementList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitStatementList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitStatementList(this);
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



class ViewContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_view;
        this._viewElement = null;
        this.elements = [];
    }

	viewElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ViewElementContext);
	    } else {
	        return this.getTypedRuleContext(ViewElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterView(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitView(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitView(this);
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


class PlayStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.actionName = null;;
        this._expression = null;;
        this.arguments = [];;
        this.playerExpression = null;;
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
	        listener.enterPlayStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitPlayStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitPlayStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.PlayStatementContext = PlayStatementContext;

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

class RememberStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.variableName = null;;
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterRememberStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitRememberStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitRememberStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.RememberStatementContext = RememberStatementContext;

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

class ViewElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_viewElement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StemViewContext extends ViewElementContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        this._viewAttribute = null;;
        this.attributes = [];;
        this._viewElement = null;;
        this.childViews = [];;
        this.name2 = null;;
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

	viewAttribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ViewAttributeContext);
	    } else {
	        return this.getTypedRuleContext(ViewAttributeContext,i);
	    }
	};

	viewElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ViewElementContext);
	    } else {
	        return this.getTypedRuleContext(ViewElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterStemView(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitStemView(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitStemView(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.StemViewContext = StemViewContext;

class LeafViewContext extends ViewElementContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null;;
        this._viewAttribute = null;;
        this.attributes = [];;
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	viewAttribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ViewAttributeContext);
	    } else {
	        return this.getTypedRuleContext(ViewAttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterLeafView(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitLeafView(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitLeafView(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.LeafViewContext = LeafViewContext;

class ViewAttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_viewAttribute;
        this.key = null;
        this.value = null;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	QUOTED_STRING() {
	    return this.getToken(LudiParser.QUOTED_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterViewAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitViewAttribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitViewAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
LudiParser.StatementListContext = StatementListContext; 
LudiParser.State_definitionContext = State_definitionContext; 
LudiParser.ViewContext = ViewContext; 
LudiParser.StatementContext = StatementContext; 
LudiParser.WhenContext = WhenContext; 
LudiParser.ParameterListContext = ParameterListContext; 
LudiParser.ExpressionContext = ExpressionContext; 
LudiParser.LvalueContext = LvalueContext; 
LudiParser.TypeExpressionContext = TypeExpressionContext; 
LudiParser.ViewElementContext = ViewElementContext; 
LudiParser.ViewAttributeContext = ViewAttributeContext; 
LudiParser.IdentifierContext = IdentifierContext; 
LudiParser.NumberContext = NumberContext; 
