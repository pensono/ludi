// Generated from Ludi.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LudiListener from './LudiListener.js';
import LudiVisitor from './LudiVisitor.js';

const serializedATN = [4,1,51,435,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,5,0,46,8,0,10,0,12,0,49,9,0,1,0,1,0,1,1,1,1,1,1,5,
1,56,8,1,10,1,12,1,59,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,70,8,2,
1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,82,8,4,1,4,1,4,5,4,86,8,4,10,
4,12,4,89,9,4,1,4,5,4,92,8,4,10,4,12,4,95,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,5,5,104,8,5,10,5,12,5,107,9,5,1,5,5,5,110,8,5,10,5,12,5,113,9,5,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,3,6,122,8,6,1,6,1,6,5,6,126,8,6,10,6,12,6,129,9,6,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,138,8,7,1,7,1,7,5,7,142,8,7,10,7,12,7,145,
9,7,1,8,1,8,1,8,4,8,150,8,8,11,8,12,8,151,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,182,8,11,10,11,12,11,185,9,11,3,11,
187,8,11,1,11,1,11,3,11,191,8,11,1,11,1,11,3,11,195,8,11,1,11,1,11,1,11,
1,11,5,11,201,8,11,10,11,12,11,204,9,11,1,11,1,11,1,11,3,11,209,8,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,4,11,227,8,11,11,11,12,11,228,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
5,11,239,8,11,10,11,12,11,242,9,11,3,11,244,8,11,1,11,1,11,1,11,3,11,249,
8,11,1,11,1,11,1,11,1,11,1,11,3,11,256,8,11,1,12,1,12,1,12,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,5,13,269,8,13,10,13,12,13,272,9,13,3,13,274,8,13,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,287,8,14,10,
14,12,14,290,9,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,300,8,14,
10,14,12,14,303,9,14,3,14,305,8,14,1,14,1,14,1,14,1,14,3,14,311,8,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,337,8,14,10,14,12,14,340,
9,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,348,8,15,10,15,12,15,351,9,15,3,
15,353,8,15,1,15,1,15,3,15,357,8,15,1,16,1,16,1,16,5,16,362,8,16,10,16,12,
16,365,9,16,1,16,1,16,1,16,1,16,1,16,5,16,372,8,16,10,16,12,16,375,9,16,
3,16,377,8,16,1,16,1,16,3,16,381,8,16,1,17,1,17,1,17,1,17,5,17,387,8,17,
10,17,12,17,390,9,17,1,17,1,17,1,18,1,18,1,18,5,18,397,8,18,10,18,12,18,
400,9,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,408,8,18,10,18,12,18,411,9,18,
1,18,1,18,5,18,415,8,18,10,18,12,18,418,9,18,1,18,1,18,1,18,1,18,1,18,3,
18,425,8,18,1,19,1,19,1,19,1,19,1,20,1,20,1,21,1,21,1,21,0,1,28,22,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,2,1,0,37,38,2,0,
6,6,48,48,480,0,47,1,0,0,0,2,52,1,0,0,0,4,69,1,0,0,0,6,71,1,0,0,0,8,74,1,
0,0,0,10,96,1,0,0,0,12,114,1,0,0,0,14,130,1,0,0,0,16,146,1,0,0,0,18,153,
1,0,0,0,20,158,1,0,0,0,22,255,1,0,0,0,24,257,1,0,0,0,26,273,1,0,0,0,28,310,
1,0,0,0,30,356,1,0,0,0,32,380,1,0,0,0,34,382,1,0,0,0,36,424,1,0,0,0,38,426,
1,0,0,0,40,430,1,0,0,0,42,432,1,0,0,0,44,46,3,4,2,0,45,44,1,0,0,0,46,49,
1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,
0,0,1,51,1,1,0,0,0,52,57,3,22,11,0,53,54,5,1,0,0,54,56,3,22,11,0,55,53,1,
0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,3,1,0,0,0,59,57,1,0,0,
0,60,70,3,6,3,0,61,70,3,8,4,0,62,70,3,16,8,0,63,70,3,10,5,0,64,70,3,12,6,
0,65,70,3,14,7,0,66,70,3,18,9,0,67,70,3,20,10,0,68,70,3,36,18,0,69,60,1,
0,0,0,69,61,1,0,0,0,69,62,1,0,0,0,69,63,1,0,0,0,69,64,1,0,0,0,69,65,1,0,
0,0,69,66,1,0,0,0,69,67,1,0,0,0,69,68,1,0,0,0,70,5,1,0,0,0,71,72,5,2,0,0,
72,73,3,32,16,0,73,7,1,0,0,0,74,75,5,3,0,0,75,76,3,40,20,0,76,77,5,4,0,0,
77,78,3,26,13,0,78,81,5,5,0,0,79,80,5,6,0,0,80,82,3,28,14,0,81,79,1,0,0,
0,81,82,1,0,0,0,82,83,1,0,0,0,83,87,5,7,0,0,84,86,3,24,12,0,85,84,1,0,0,
0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,93,1,0,0,0,89,87,1,0,0,0,
90,92,3,22,11,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,
94,9,1,0,0,0,95,93,1,0,0,0,96,97,5,8,0,0,97,98,3,40,20,0,98,99,5,4,0,0,99,
100,3,26,13,0,100,101,5,5,0,0,101,105,5,7,0,0,102,104,3,24,12,0,103,102,
1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,111,1,0,0,0,
107,105,1,0,0,0,108,110,3,22,11,0,109,108,1,0,0,0,110,113,1,0,0,0,111,109,
1,0,0,0,111,112,1,0,0,0,112,11,1,0,0,0,113,111,1,0,0,0,114,115,5,9,0,0,115,
116,3,40,20,0,116,117,5,4,0,0,117,118,3,26,13,0,118,121,5,5,0,0,119,120,
5,6,0,0,120,122,3,28,14,0,121,119,1,0,0,0,121,122,1,0,0,0,122,123,1,0,0,
0,123,127,5,7,0,0,124,126,3,24,12,0,125,124,1,0,0,0,126,129,1,0,0,0,127,
125,1,0,0,0,127,128,1,0,0,0,128,13,1,0,0,0,129,127,1,0,0,0,130,131,5,10,
0,0,131,132,3,40,20,0,132,133,5,4,0,0,133,134,3,26,13,0,134,137,5,5,0,0,
135,136,5,6,0,0,136,138,3,28,14,0,137,135,1,0,0,0,137,138,1,0,0,0,138,139,
1,0,0,0,139,143,5,7,0,0,140,142,3,24,12,0,141,140,1,0,0,0,142,145,1,0,0,
0,143,141,1,0,0,0,143,144,1,0,0,0,144,15,1,0,0,0,145,143,1,0,0,0,146,147,
5,11,0,0,147,149,5,7,0,0,148,150,3,22,11,0,149,148,1,0,0,0,150,151,1,0,0,
0,151,149,1,0,0,0,151,152,1,0,0,0,152,17,1,0,0,0,153,154,5,12,0,0,154,155,
3,40,20,0,155,156,5,13,0,0,156,157,3,32,16,0,157,19,1,0,0,0,158,159,5,14,
0,0,159,160,3,40,20,0,160,161,5,13,0,0,161,162,3,32,16,0,162,21,1,0,0,0,
163,164,5,15,0,0,164,165,3,30,15,0,165,166,5,16,0,0,166,167,3,28,14,0,167,
256,1,0,0,0,168,169,5,17,0,0,169,170,3,30,15,0,170,171,5,16,0,0,171,172,
3,28,14,0,172,256,1,0,0,0,173,174,5,18,0,0,174,175,3,30,15,0,175,176,5,16,
0,0,176,186,3,30,15,0,177,178,5,19,0,0,178,183,3,34,17,0,179,180,5,1,0,0,
180,182,3,34,17,0,181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,
1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,186,177,1,0,0,0,186,187,1,0,0,0,
187,190,1,0,0,0,188,189,5,20,0,0,189,191,3,40,20,0,190,188,1,0,0,0,190,191,
1,0,0,0,191,194,1,0,0,0,192,193,5,21,0,0,193,195,3,42,21,0,194,192,1,0,0,
0,194,195,1,0,0,0,195,208,1,0,0,0,196,197,5,22,0,0,197,202,3,40,20,0,198,
199,5,1,0,0,199,201,3,40,20,0,200,198,1,0,0,0,201,204,1,0,0,0,202,200,1,
0,0,0,202,203,1,0,0,0,203,205,1,0,0,0,204,202,1,0,0,0,205,206,5,23,0,0,206,
207,3,40,20,0,207,209,1,0,0,0,208,196,1,0,0,0,208,209,1,0,0,0,209,256,1,
0,0,0,210,211,5,24,0,0,211,256,3,30,15,0,212,213,5,25,0,0,213,214,3,30,15,
0,214,215,5,19,0,0,215,216,3,28,14,0,216,256,1,0,0,0,217,218,5,26,0,0,218,
219,3,30,15,0,219,220,5,19,0,0,220,221,3,28,14,0,221,256,1,0,0,0,222,223,
5,27,0,0,223,224,3,28,14,0,224,226,5,28,0,0,225,227,3,22,11,0,226,225,1,
0,0,0,227,228,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,230,1,0,0,0,230,
231,5,29,0,0,231,256,1,0,0,0,232,233,5,30,0,0,233,234,3,40,20,0,234,243,
5,4,0,0,235,240,3,28,14,0,236,237,5,31,0,0,237,239,3,28,14,0,238,236,1,0,
0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,241,244,1,0,0,0,242,
240,1,0,0,0,243,235,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,248,5,5,
0,0,246,247,5,6,0,0,247,249,3,28,14,0,248,246,1,0,0,0,248,249,1,0,0,0,249,
256,1,0,0,0,250,251,5,32,0,0,251,252,3,28,14,0,252,253,5,33,0,0,253,254,
3,40,20,0,254,256,1,0,0,0,255,163,1,0,0,0,255,168,1,0,0,0,255,173,1,0,0,
0,255,210,1,0,0,0,255,212,1,0,0,0,255,217,1,0,0,0,255,222,1,0,0,0,255,232,
1,0,0,0,255,250,1,0,0,0,256,23,1,0,0,0,257,258,5,34,0,0,258,259,3,28,14,
0,259,25,1,0,0,0,260,261,3,40,20,0,261,262,5,13,0,0,262,270,3,32,16,0,263,
264,5,31,0,0,264,265,3,40,20,0,265,266,5,13,0,0,266,267,3,32,16,0,267,269,
1,0,0,0,268,263,1,0,0,0,269,272,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,
271,274,1,0,0,0,272,270,1,0,0,0,273,260,1,0,0,0,273,274,1,0,0,0,274,27,1,
0,0,0,275,276,6,14,-1,0,276,277,5,4,0,0,277,278,3,28,14,0,278,279,5,5,0,
0,279,311,1,0,0,0,280,311,5,49,0,0,281,282,3,40,20,0,282,283,5,35,0,0,283,
288,3,28,14,0,284,285,5,31,0,0,285,287,3,28,14,0,286,284,1,0,0,0,287,290,
1,0,0,0,288,286,1,0,0,0,288,289,1,0,0,0,289,291,1,0,0,0,290,288,1,0,0,0,
291,292,5,36,0,0,292,311,1,0,0,0,293,311,3,30,15,0,294,295,3,40,20,0,295,
304,5,4,0,0,296,301,3,28,14,0,297,298,5,31,0,0,298,300,3,28,14,0,299,297,
1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,305,1,0,0,0,
303,301,1,0,0,0,304,296,1,0,0,0,304,305,1,0,0,0,305,306,1,0,0,0,306,307,
5,5,0,0,307,311,1,0,0,0,308,309,7,0,0,0,309,311,3,28,14,9,310,275,1,0,0,
0,310,280,1,0,0,0,310,281,1,0,0,0,310,293,1,0,0,0,310,294,1,0,0,0,310,308,
1,0,0,0,311,338,1,0,0,0,312,313,10,8,0,0,313,314,5,39,0,0,314,337,3,28,14,
9,315,316,10,7,0,0,316,317,5,40,0,0,317,337,3,28,14,8,318,319,10,6,0,0,319,
320,5,41,0,0,320,337,3,28,14,7,321,322,10,5,0,0,322,323,5,42,0,0,323,337,
3,28,14,6,324,325,10,4,0,0,325,326,5,43,0,0,326,337,3,28,14,5,327,328,10,
3,0,0,328,329,5,44,0,0,329,337,3,28,14,4,330,331,10,2,0,0,331,332,5,1,0,
0,332,337,3,28,14,3,333,334,10,1,0,0,334,335,5,45,0,0,335,337,3,28,14,2,
336,312,1,0,0,0,336,315,1,0,0,0,336,318,1,0,0,0,336,321,1,0,0,0,336,324,
1,0,0,0,336,327,1,0,0,0,336,330,1,0,0,0,336,333,1,0,0,0,337,340,1,0,0,0,
338,336,1,0,0,0,338,339,1,0,0,0,339,29,1,0,0,0,340,338,1,0,0,0,341,357,3,
40,20,0,342,343,3,40,20,0,343,352,5,35,0,0,344,349,3,28,14,0,345,346,5,31,
0,0,346,348,3,28,14,0,347,345,1,0,0,0,348,351,1,0,0,0,349,347,1,0,0,0,349,
350,1,0,0,0,350,353,1,0,0,0,351,349,1,0,0,0,352,344,1,0,0,0,352,353,1,0,
0,0,353,354,1,0,0,0,354,355,5,36,0,0,355,357,1,0,0,0,356,341,1,0,0,0,356,
342,1,0,0,0,357,31,1,0,0,0,358,363,3,40,20,0,359,360,5,1,0,0,360,362,3,40,
20,0,361,359,1,0,0,0,362,365,1,0,0,0,363,361,1,0,0,0,363,364,1,0,0,0,364,
381,1,0,0,0,365,363,1,0,0,0,366,367,3,40,20,0,367,376,5,42,0,0,368,373,3,
28,14,0,369,370,5,31,0,0,370,372,3,28,14,0,371,369,1,0,0,0,372,375,1,0,0,
0,373,371,1,0,0,0,373,374,1,0,0,0,374,377,1,0,0,0,375,373,1,0,0,0,376,368,
1,0,0,0,376,377,1,0,0,0,377,378,1,0,0,0,378,379,5,41,0,0,379,381,1,0,0,0,
380,358,1,0,0,0,380,366,1,0,0,0,381,33,1,0,0,0,382,383,5,35,0,0,383,388,
3,42,21,0,384,385,5,31,0,0,385,387,3,42,21,0,386,384,1,0,0,0,387,390,1,0,
0,0,388,386,1,0,0,0,388,389,1,0,0,0,389,391,1,0,0,0,390,388,1,0,0,0,391,
392,5,36,0,0,392,35,1,0,0,0,393,394,5,42,0,0,394,398,3,40,20,0,395,397,3,
38,19,0,396,395,1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,
399,401,1,0,0,0,400,398,1,0,0,0,401,402,5,46,0,0,402,403,5,41,0,0,403,425,
1,0,0,0,404,405,5,42,0,0,405,409,3,40,20,0,406,408,3,38,19,0,407,406,1,0,
0,0,408,411,1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,410,412,1,0,0,0,411,
409,1,0,0,0,412,416,5,41,0,0,413,415,3,36,18,0,414,413,1,0,0,0,415,418,1,
0,0,0,416,414,1,0,0,0,416,417,1,0,0,0,417,419,1,0,0,0,418,416,1,0,0,0,419,
420,5,42,0,0,420,421,5,46,0,0,421,422,3,40,20,0,422,423,5,41,0,0,423,425,
1,0,0,0,424,393,1,0,0,0,424,404,1,0,0,0,425,37,1,0,0,0,426,427,3,40,20,0,
427,428,5,39,0,0,428,429,5,47,0,0,429,39,1,0,0,0,430,431,7,1,0,0,431,41,
1,0,0,0,432,433,5,49,0,0,433,43,1,0,0,0,44,47,57,69,81,87,93,105,111,121,
127,137,143,151,183,186,190,194,202,208,228,240,243,248,255,270,273,288,
301,304,310,336,338,349,352,356,363,373,376,380,388,398,409,416,424];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LudiParser extends antlr4.Parser {

    static grammarFileName = "Ludi.g4";
    static literalNames = [ null, "'or'", "'players'", "'action'", "'('", 
                            "')'", "'for'", "':'", "'trigger'", "'win'", 
                            "'loss'", "'setup'", "'kind'", "'a'", "'state'", 
                            "'change'", "'to'", "'set'", "'move'", "'by'", 
                            "'direction'", "'distance'", "'over'", "'named'", 
                            "'remove'", "'increase'", "'decrease'", "'if'", 
                            "'then'", "'end'", "'play'", "','", "'remember'", 
                            "'as'", "'when'", "'['", "']'", "'not'", "'!'", 
                            "'='", "'!='", "'>'", "'<'", "'>='", "'<='", 
                            "'and'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "QUOTED_STRING", 
                             "IDENTIFIER", "NUMBER", "WS", "COMMENT" ];
    static ruleNames = [ "rules", "interaction", "definition", "players", 
                         "action", "trigger", "win", "loss", "setup", "kind", 
                         "state_definition", "statement", "when", "parameterList", 
                         "expression", "lvalue", "typeExpression", "coordinate", 
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
    	case 14:
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




	rules() {
	    let localctx = new RulesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LudiParser.RULE_rules);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 24332) !== 0) || _la===42) {
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



	interaction() {
	    let localctx = new InteractionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LudiParser.RULE_interaction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        localctx._statement = this.statement();
	        localctx.statements.push(localctx._statement);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 53;
	            this.match(LudiParser.T__0);
	            this.state = 54;
	            localctx._statement = this.statement();
	            localctx.statements.push(localctx._statement);
	            this.state = 59;
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LudiParser.RULE_definition);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.players();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.action();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.setup();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 63;
	            this.trigger();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 64;
	            this.win();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 65;
	            this.loss();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 66;
	            this.kind();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 67;
	            this.state_definition();
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 68;
	            localctx.view = this.viewElement();
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
	    this.enterRule(localctx, 6, LudiParser.RULE_players);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(LudiParser.T__1);
	        this.state = 72;
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
	    this.enterRule(localctx, 8, LudiParser.RULE_action);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(LudiParser.T__2);
	        this.state = 75;
	        localctx.name = this.identifier();
	        this.state = 76;
	        this.match(LudiParser.T__3);
	        this.state = 77;
	        this.parameterList();
	        this.state = 78;
	        this.match(LudiParser.T__4);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 79;
	            this.match(LudiParser.T__5);
	            this.state = 80;
	            localctx.player = this.expression(0);
	        }

	        this.state = 83;
	        this.match(LudiParser.T__6);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 84;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 171533) !== 0)) {
	            this.state = 90;
	            this.statement();
	            this.state = 95;
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
	    this.enterRule(localctx, 10, LudiParser.RULE_trigger);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(LudiParser.T__7);
	        this.state = 97;
	        localctx.name = this.identifier();
	        this.state = 98;
	        this.match(LudiParser.T__3);
	        this.state = 99;
	        this.parameterList();
	        this.state = 100;
	        this.match(LudiParser.T__4);
	        this.state = 101;
	        this.match(LudiParser.T__6);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 102;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 171533) !== 0)) {
	            this.state = 108;
	            this.statement();
	            this.state = 113;
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
	    this.enterRule(localctx, 12, LudiParser.RULE_win);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(LudiParser.T__8);
	        this.state = 115;
	        localctx.name = this.identifier();
	        this.state = 116;
	        this.match(LudiParser.T__3);
	        this.state = 117;
	        this.parameterList();
	        this.state = 118;
	        this.match(LudiParser.T__4);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 119;
	            this.match(LudiParser.T__5);
	            this.state = 120;
	            localctx.player = this.expression(0);
	        }

	        this.state = 123;
	        this.match(LudiParser.T__6);
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 124;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 129;
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
	    this.enterRule(localctx, 14, LudiParser.RULE_loss);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(LudiParser.T__9);
	        this.state = 131;
	        localctx.name = this.identifier();
	        this.state = 132;
	        this.match(LudiParser.T__3);
	        this.state = 133;
	        this.parameterList();
	        this.state = 134;
	        this.match(LudiParser.T__4);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 135;
	            this.match(LudiParser.T__5);
	            this.state = 136;
	            localctx.player = this.expression(0);
	        }

	        this.state = 139;
	        this.match(LudiParser.T__6);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 140;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 145;
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
	    this.enterRule(localctx, 16, LudiParser.RULE_setup);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(LudiParser.T__10);
	        this.state = 147;
	        this.match(LudiParser.T__6);
	        this.state = 149; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 148;
	            this.statement();
	            this.state = 151; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 171533) !== 0));
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
	    this.enterRule(localctx, 18, LudiParser.RULE_kind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(LudiParser.T__11);
	        this.state = 154;
	        localctx.name = this.identifier();
	        this.state = 155;
	        this.match(LudiParser.T__12);
	        this.state = 156;
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
	    this.enterRule(localctx, 20, LudiParser.RULE_state_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(LudiParser.T__13);
	        this.state = 159;
	        localctx.name = this.identifier();
	        this.state = 160;
	        this.match(LudiParser.T__12);
	        this.state = 161;
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
	    this.enterRule(localctx, 22, LudiParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 255;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            localctx = new ChangeStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 163;
	            this.match(LudiParser.T__14);
	            this.state = 164;
	            this.lvalue();
	            this.state = 165;
	            this.match(LudiParser.T__15);
	            this.state = 166;
	            this.expression(0);
	            break;
	        case 17:
	            localctx = new SetStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 168;
	            this.match(LudiParser.T__16);
	            this.state = 169;
	            this.lvalue();
	            this.state = 170;
	            this.match(LudiParser.T__15);
	            this.state = 171;
	            this.expression(0);
	            break;
	        case 18:
	            localctx = new MoveStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 173;
	            this.match(LudiParser.T__17);
	            this.state = 174;
	            localctx.from = this.lvalue();
	            this.state = 175;
	            this.match(LudiParser.T__15);
	            this.state = 176;
	            localctx.to = this.lvalue();
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 177;
	                this.match(LudiParser.T__18);
	                this.state = 178;
	                localctx._coordinate = this.coordinate();
	                localctx.movements.push(localctx._coordinate);
	                this.state = 183;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 179;
	                        this.match(LudiParser.T__0);
	                        this.state = 180;
	                        localctx._coordinate = this.coordinate();
	                        localctx.movements.push(localctx._coordinate); 
	                    }
	                    this.state = 185;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	                }

	            }

	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 188;
	                this.match(LudiParser.T__19);
	                this.state = 189;
	                localctx.direction = this.identifier();
	            }

	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 192;
	                this.match(LudiParser.T__20);
	                this.state = 193;
	                localctx.distance = this.number();
	            }

	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22) {
	                this.state = 196;
	                this.match(LudiParser.T__21);
	                this.state = 197;
	                localctx._identifier = this.identifier();
	                localctx.over.push(localctx._identifier);
	                this.state = 202;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===1) {
	                    this.state = 198;
	                    this.match(LudiParser.T__0);
	                    this.state = 199;
	                    localctx._identifier = this.identifier();
	                    localctx.over.push(localctx._identifier);
	                    this.state = 204;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	                this.state = 205;
	                this.match(LudiParser.T__22);
	                this.state = 206;
	                localctx.overName = this.identifier();
	            }

	            break;
	        case 24:
	            localctx = new RemoveStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 210;
	            this.match(LudiParser.T__23);
	            this.state = 211;
	            this.lvalue();
	            break;
	        case 25:
	            localctx = new IncreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 212;
	            this.match(LudiParser.T__24);
	            this.state = 213;
	            this.lvalue();
	            this.state = 214;
	            this.match(LudiParser.T__18);
	            this.state = 215;
	            this.expression(0);
	            break;
	        case 26:
	            localctx = new DecreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 217;
	            this.match(LudiParser.T__25);
	            this.state = 218;
	            this.lvalue();
	            this.state = 219;
	            this.match(LudiParser.T__18);
	            this.state = 220;
	            this.expression(0);
	            break;
	        case 27:
	            localctx = new IfStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 222;
	            this.match(LudiParser.T__26);
	            this.state = 223;
	            this.expression(0);
	            this.state = 224;
	            this.match(LudiParser.T__27);
	            this.state = 226; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 225;
	                this.statement();
	                this.state = 228; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 171533) !== 0));
	            this.state = 230;
	            this.match(LudiParser.T__28);
	            break;
	        case 30:
	            localctx = new PlayStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 232;
	            this.match(LudiParser.T__29);
	            this.state = 233;
	            localctx.actionName = this.identifier();
	            this.state = 234;
	            this.match(LudiParser.T__3);
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 6147) !== 0)) {
	                this.state = 235;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 240;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===31) {
	                    this.state = 236;
	                    this.match(LudiParser.T__30);
	                    this.state = 237;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 242;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 245;
	            this.match(LudiParser.T__4);
	            this.state = 248;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6) {
	                this.state = 246;
	                this.match(LudiParser.T__5);
	                this.state = 247;
	                localctx.playerExpression = this.expression(0);
	            }

	            break;
	        case 32:
	            localctx = new RememberStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 250;
	            this.match(LudiParser.T__31);
	            this.state = 251;
	            this.expression(0);
	            this.state = 252;
	            this.match(LudiParser.T__32);
	            this.state = 253;
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
	    this.enterRule(localctx, 24, LudiParser.RULE_when);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(LudiParser.T__33);
	        this.state = 258;
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
	    this.enterRule(localctx, 26, LudiParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6 || _la===48) {
	            this.state = 260;
	            localctx._identifier = this.identifier();
	            localctx.names.push(localctx._identifier);
	            this.state = 261;
	            this.match(LudiParser.T__12);
	            this.state = 262;
	            localctx._typeExpression = this.typeExpression();
	            localctx.types.push(localctx._typeExpression);
	            this.state = 270;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===31) {
	                this.state = 263;
	                this.match(LudiParser.T__30);
	                this.state = 264;
	                localctx._identifier = this.identifier();
	                localctx.names.push(localctx._identifier);
	                this.state = 265;
	                this.match(LudiParser.T__12);
	                this.state = 266;
	                localctx._typeExpression = this.typeExpression();
	                localctx.types.push(localctx._typeExpression);
	                this.state = 272;
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
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, LudiParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParenthizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 276;
	            this.match(LudiParser.T__3);
	            this.state = 277;
	            this.expression(0);
	            this.state = 278;
	            this.match(LudiParser.T__4);
	            break;

	        case 2:
	            localctx = new NumberExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 280;
	            this.match(LudiParser.NUMBER);
	            break;

	        case 3:
	            localctx = new IndexExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 281;
	            localctx.name = this.identifier();
	            this.state = 282;
	            this.match(LudiParser.T__34);
	            this.state = 283;
	            localctx._expression = this.expression(0);
	            localctx.arguments.push(localctx._expression);
	            this.state = 288;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===31) {
	                this.state = 284;
	                this.match(LudiParser.T__30);
	                this.state = 285;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 290;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 291;
	            this.match(LudiParser.T__35);
	            break;

	        case 4:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 293;
	            localctx.name = this.lvalue();
	            break;

	        case 5:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 294;
	            localctx.name = this.identifier();
	            this.state = 295;
	            this.match(LudiParser.T__3);
	            this.state = 304;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 6147) !== 0)) {
	                this.state = 296;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 301;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===31) {
	                    this.state = 297;
	                    this.match(LudiParser.T__30);
	                    this.state = 298;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 303;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 306;
	            this.match(LudiParser.T__4);
	            break;

	        case 6:
	            localctx = new NegationExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 308;
	            _la = this._input.LA(1);
	            if(!(_la===37 || _la===38)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 309;
	            this.expression(9);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 338;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 336;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 312;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 313;
	                    localctx.operator = this.match(LudiParser.T__38);
	                    this.state = 314;
	                    localctx.right = this.expression(9);
	                    break;

	                case 2:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 315;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 316;
	                    localctx.operator = this.match(LudiParser.T__39);
	                    this.state = 317;
	                    localctx.right = this.expression(8);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 318;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 319;
	                    localctx.operator = this.match(LudiParser.T__40);
	                    this.state = 320;
	                    localctx.right = this.expression(7);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 321;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 322;
	                    localctx.operator = this.match(LudiParser.T__41);
	                    this.state = 323;
	                    localctx.right = this.expression(6);
	                    break;

	                case 5:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 324;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 325;
	                    localctx.operator = this.match(LudiParser.T__42);
	                    this.state = 326;
	                    localctx.right = this.expression(5);
	                    break;

	                case 6:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 327;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 328;
	                    localctx.operator = this.match(LudiParser.T__43);
	                    this.state = 329;
	                    localctx.right = this.expression(4);
	                    break;

	                case 7:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 330;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 331;
	                    localctx.operator = this.match(LudiParser.T__0);
	                    this.state = 332;
	                    localctx.right = this.expression(3);
	                    break;

	                case 8:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 333;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 334;
	                    localctx.operator = this.match(LudiParser.T__44);
	                    this.state = 335;
	                    localctx.right = this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 340;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
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
	    this.enterRule(localctx, 30, LudiParser.RULE_lvalue);
	    var _la = 0;
	    try {
	        this.state = 356;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdentifierLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 341;
	            this.identifier();
	            break;

	        case 2:
	            localctx = new IndexLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 342;
	            this.identifier();
	            this.state = 343;
	            this.match(LudiParser.T__34);
	            this.state = 352;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 6147) !== 0)) {
	                this.state = 344;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 349;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===31) {
	                    this.state = 345;
	                    this.match(LudiParser.T__30);
	                    this.state = 346;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 351;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 354;
	            this.match(LudiParser.T__35);
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
	    this.enterRule(localctx, 32, LudiParser.RULE_typeExpression);
	    var _la = 0;
	    try {
	        this.state = 380;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnionTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 358;
	            localctx._identifier = this.identifier();
	            localctx.values.push(localctx._identifier);
	            this.state = 363;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1) {
	                this.state = 359;
	                this.match(LudiParser.T__0);
	                this.state = 360;
	                localctx._identifier = this.identifier();
	                localctx.values.push(localctx._identifier);
	                this.state = 365;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            localctx = new ParameterizedTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 366;
	            localctx.name = this.identifier();
	            this.state = 367;
	            this.match(LudiParser.T__41);
	            this.state = 376;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6 || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 6147) !== 0)) {
	                this.state = 368;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 373;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===31) {
	                    this.state = 369;
	                    this.match(LudiParser.T__30);
	                    this.state = 370;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 375;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 378;
	            this.match(LudiParser.T__40);
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



	coordinate() {
	    let localctx = new CoordinateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LudiParser.RULE_coordinate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(LudiParser.T__34);
	        this.state = 383;
	        this.number();
	        this.state = 388;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 384;
	            this.match(LudiParser.T__30);
	            this.state = 385;
	            this.number();
	            this.state = 390;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 391;
	        this.match(LudiParser.T__35);
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
	        this.state = 424;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LeafViewContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 393;
	            this.match(LudiParser.T__41);
	            this.state = 394;
	            localctx.name = this.identifier();
	            this.state = 398;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6 || _la===48) {
	                this.state = 395;
	                localctx._viewAttribute = this.viewAttribute();
	                localctx.attributes.push(localctx._viewAttribute);
	                this.state = 400;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 401;
	            this.match(LudiParser.T__45);
	            this.state = 402;
	            this.match(LudiParser.T__40);
	            break;

	        case 2:
	            localctx = new StemViewContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 404;
	            this.match(LudiParser.T__41);
	            this.state = 405;
	            localctx.name = this.identifier();
	            this.state = 409;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6 || _la===48) {
	                this.state = 406;
	                localctx._viewAttribute = this.viewAttribute();
	                localctx.attributes.push(localctx._viewAttribute);
	                this.state = 411;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 412;
	            this.match(LudiParser.T__40);
	            this.state = 416;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 413;
	                    localctx._viewElement = this.viewElement();
	                    localctx.childViews.push(localctx._viewElement); 
	                }
	                this.state = 418;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	            }

	            this.state = 419;
	            this.match(LudiParser.T__41);
	            this.state = 420;
	            this.match(LudiParser.T__45);
	            this.state = 421;
	            localctx.name2 = this.identifier();
	            this.state = 422;
	            this.match(LudiParser.T__40);
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
	        this.state = 426;
	        localctx.key = this.identifier();
	        this.state = 427;
	        this.match(LudiParser.T__38);
	        this.state = 428;
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
	        this.state = 430;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===48)) {
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
	        this.state = 432;
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
LudiParser.T__41 = 42;
LudiParser.T__42 = 43;
LudiParser.T__43 = 44;
LudiParser.T__44 = 45;
LudiParser.T__45 = 46;
LudiParser.QUOTED_STRING = 47;
LudiParser.IDENTIFIER = 48;
LudiParser.NUMBER = 49;
LudiParser.WS = 50;
LudiParser.COMMENT = 51;

LudiParser.RULE_rules = 0;
LudiParser.RULE_interaction = 1;
LudiParser.RULE_definition = 2;
LudiParser.RULE_players = 3;
LudiParser.RULE_action = 4;
LudiParser.RULE_trigger = 5;
LudiParser.RULE_win = 6;
LudiParser.RULE_loss = 7;
LudiParser.RULE_setup = 8;
LudiParser.RULE_kind = 9;
LudiParser.RULE_state_definition = 10;
LudiParser.RULE_statement = 11;
LudiParser.RULE_when = 12;
LudiParser.RULE_parameterList = 13;
LudiParser.RULE_expression = 14;
LudiParser.RULE_lvalue = 15;
LudiParser.RULE_typeExpression = 16;
LudiParser.RULE_coordinate = 17;
LudiParser.RULE_viewElement = 18;
LudiParser.RULE_viewAttribute = 19;
LudiParser.RULE_identifier = 20;
LudiParser.RULE_number = 21;

class RulesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_rules;
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
	        listener.enterRules(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitRules(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitRules(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InteractionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_interaction;
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
	        listener.enterInteraction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitInteraction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitInteraction(this);
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
        this.view = null;
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

	viewElement() {
	    return this.getTypedRuleContext(ViewElementContext,0);
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

class MoveStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.from = null;;
        this.to = null;;
        this._coordinate = null;;
        this.movements = [];;
        this.direction = null;;
        this.distance = null;;
        this._identifier = null;;
        this.over = [];;
        this.overName = null;;
        super.copyFrom(ctx);
    }

	lvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LvalueContext);
	    } else {
	        return this.getTypedRuleContext(LvalueContext,i);
	    }
	};

	coordinate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CoordinateContext);
	    } else {
	        return this.getTypedRuleContext(CoordinateContext,i);
	    }
	};

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

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterMoveStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitMoveStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitMoveStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.MoveStatementContext = MoveStatementContext;

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

class RemoveStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterRemoveStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitRemoveStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitRemoveStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LudiParser.RemoveStatementContext = RemoveStatementContext;

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

class CoordinateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_coordinate;
    }

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.enterCoordinate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitCoordinate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitCoordinate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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




LudiParser.RulesContext = RulesContext; 
LudiParser.InteractionContext = InteractionContext; 
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
LudiParser.CoordinateContext = CoordinateContext; 
LudiParser.ViewElementContext = ViewElementContext; 
LudiParser.ViewAttributeContext = ViewAttributeContext; 
LudiParser.IdentifierContext = IdentifierContext; 
LudiParser.NumberContext = NumberContext; 
