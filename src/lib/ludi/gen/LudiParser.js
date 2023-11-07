// Generated from Ludi.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LudiListener from './LudiListener.js';
import LudiVisitor from './LudiVisitor.js';

const serializedATN = [4,1,47,421,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,64,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,3,3,76,8,3,1,3,1,3,5,3,80,8,3,10,3,12,3,83,9,3,1,3,5,3,86,8,3,
10,3,12,3,89,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,98,8,4,10,4,12,4,101,9,
4,1,4,5,4,104,8,4,10,4,12,4,107,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,116,
8,5,1,5,1,5,5,5,120,8,5,10,5,12,5,123,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,
6,132,8,6,1,6,1,6,5,6,136,8,6,10,6,12,6,139,9,6,1,7,1,7,1,7,4,7,144,8,7,
11,7,12,7,145,1,8,1,8,1,8,1,8,1,8,1,9,1,9,3,9,155,8,9,1,9,5,9,158,8,9,10,
9,12,9,161,9,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,5,11,171,8,11,10,
11,12,11,174,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,194,8,12,10,12,12,12,197,9,12,3,
12,199,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,4,12,215,8,12,11,12,12,12,216,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,5,12,227,8,12,10,12,12,12,230,9,12,3,12,232,8,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,3,12,243,8,12,1,13,1,13,1,13,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,5,14,256,8,14,10,14,12,14,259,9,14,3,14,261,8,14,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,274,8,15,10,
15,12,15,277,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,287,8,15,
10,15,12,15,290,9,15,3,15,292,8,15,1,15,1,15,1,15,1,15,3,15,298,8,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,324,8,15,10,15,12,15,327,
9,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,335,8,16,10,16,12,16,338,9,16,3,
16,340,8,16,1,16,1,16,3,16,344,8,16,1,17,1,17,1,17,4,17,349,8,17,11,17,12,
17,350,1,17,1,17,1,17,1,17,1,17,5,17,358,8,17,10,17,12,17,361,9,17,3,17,
363,8,17,1,17,1,17,3,17,367,8,17,1,18,1,18,1,18,1,18,5,18,373,8,18,10,18,
12,18,376,9,18,1,18,1,18,1,19,1,19,1,19,5,19,383,8,19,10,19,12,19,386,9,
19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,394,8,19,10,19,12,19,397,9,19,1,19,
1,19,5,19,401,8,19,10,19,12,19,404,9,19,1,19,1,19,1,19,1,19,1,19,3,19,411,
8,19,1,20,1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,22,0,1,30,23,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,2,1,0,33,34,2,0,5,5,
44,44,461,0,49,1,0,0,0,2,63,1,0,0,0,4,65,1,0,0,0,6,68,1,0,0,0,8,90,1,0,0,
0,10,108,1,0,0,0,12,124,1,0,0,0,14,140,1,0,0,0,16,147,1,0,0,0,18,152,1,0,
0,0,20,162,1,0,0,0,22,167,1,0,0,0,24,242,1,0,0,0,26,244,1,0,0,0,28,260,1,
0,0,0,30,297,1,0,0,0,32,343,1,0,0,0,34,366,1,0,0,0,36,368,1,0,0,0,38,410,
1,0,0,0,40,412,1,0,0,0,42,416,1,0,0,0,44,418,1,0,0,0,46,48,3,2,1,0,47,46,
1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,
0,0,0,52,53,5,0,0,1,53,1,1,0,0,0,54,64,3,4,2,0,55,64,3,6,3,0,56,64,3,14,
7,0,57,64,3,8,4,0,58,64,3,10,5,0,59,64,3,12,6,0,60,64,3,16,8,0,61,64,3,20,
10,0,62,64,3,22,11,0,63,54,1,0,0,0,63,55,1,0,0,0,63,56,1,0,0,0,63,57,1,0,
0,0,63,58,1,0,0,0,63,59,1,0,0,0,63,60,1,0,0,0,63,61,1,0,0,0,63,62,1,0,0,
0,64,3,1,0,0,0,65,66,5,1,0,0,66,67,3,34,17,0,67,5,1,0,0,0,68,69,5,2,0,0,
69,70,3,42,21,0,70,71,5,3,0,0,71,72,3,28,14,0,72,75,5,4,0,0,73,74,5,5,0,
0,74,76,3,30,15,0,75,73,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,81,5,6,0,
0,78,80,3,26,13,0,79,78,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,
0,82,87,1,0,0,0,83,81,1,0,0,0,84,86,3,24,12,0,85,84,1,0,0,0,86,89,1,0,0,
0,87,85,1,0,0,0,87,88,1,0,0,0,88,7,1,0,0,0,89,87,1,0,0,0,90,91,5,7,0,0,91,
92,3,42,21,0,92,93,5,3,0,0,93,94,3,28,14,0,94,95,5,4,0,0,95,99,5,6,0,0,96,
98,3,26,13,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,
105,1,0,0,0,101,99,1,0,0,0,102,104,3,24,12,0,103,102,1,0,0,0,104,107,1,0,
0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,9,1,0,0,0,107,105,1,0,0,0,108,109,
5,8,0,0,109,110,3,42,21,0,110,111,5,3,0,0,111,112,3,28,14,0,112,115,5,4,
0,0,113,114,5,5,0,0,114,116,3,30,15,0,115,113,1,0,0,0,115,116,1,0,0,0,116,
117,1,0,0,0,117,121,5,6,0,0,118,120,3,26,13,0,119,118,1,0,0,0,120,123,1,
0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,11,1,0,0,0,123,121,1,0,0,0,124,
125,5,9,0,0,125,126,3,42,21,0,126,127,5,3,0,0,127,128,3,28,14,0,128,131,
5,4,0,0,129,130,5,5,0,0,130,132,3,30,15,0,131,129,1,0,0,0,131,132,1,0,0,
0,132,133,1,0,0,0,133,137,5,6,0,0,134,136,3,26,13,0,135,134,1,0,0,0,136,
139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,13,1,0,0,0,139,137,1,0,0,
0,140,141,5,10,0,0,141,143,5,6,0,0,142,144,3,24,12,0,143,142,1,0,0,0,144,
145,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,15,1,0,0,0,147,148,5,11,
0,0,148,149,3,42,21,0,149,150,5,12,0,0,150,151,3,34,17,0,151,17,1,0,0,0,
152,154,3,24,12,0,153,155,5,13,0,0,154,153,1,0,0,0,154,155,1,0,0,0,155,159,
1,0,0,0,156,158,3,24,12,0,157,156,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,
0,159,160,1,0,0,0,160,19,1,0,0,0,161,159,1,0,0,0,162,163,5,14,0,0,163,164,
3,42,21,0,164,165,5,12,0,0,165,166,3,34,17,0,166,21,1,0,0,0,167,168,5,15,
0,0,168,172,5,6,0,0,169,171,3,38,19,0,170,169,1,0,0,0,171,174,1,0,0,0,172,
170,1,0,0,0,172,173,1,0,0,0,173,23,1,0,0,0,174,172,1,0,0,0,175,176,5,16,
0,0,176,177,3,32,16,0,177,178,5,17,0,0,178,179,3,30,15,0,179,243,1,0,0,0,
180,181,5,18,0,0,181,182,3,32,16,0,182,183,5,17,0,0,183,184,3,30,15,0,184,
243,1,0,0,0,185,186,5,19,0,0,186,187,3,32,16,0,187,188,5,17,0,0,188,198,
3,32,16,0,189,190,5,20,0,0,190,195,3,36,18,0,191,192,5,21,0,0,192,194,3,
36,18,0,193,191,1,0,0,0,194,197,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,
196,199,1,0,0,0,197,195,1,0,0,0,198,189,1,0,0,0,198,199,1,0,0,0,199,243,
1,0,0,0,200,201,5,22,0,0,201,202,3,32,16,0,202,203,5,20,0,0,203,204,3,30,
15,0,204,243,1,0,0,0,205,206,5,23,0,0,206,207,3,32,16,0,207,208,5,20,0,0,
208,209,3,30,15,0,209,243,1,0,0,0,210,211,5,24,0,0,211,212,3,30,15,0,212,
214,5,25,0,0,213,215,3,24,12,0,214,213,1,0,0,0,215,216,1,0,0,0,216,214,1,
0,0,0,216,217,1,0,0,0,217,218,1,0,0,0,218,219,5,26,0,0,219,243,1,0,0,0,220,
221,5,27,0,0,221,222,3,42,21,0,222,231,5,3,0,0,223,228,3,30,15,0,224,225,
5,13,0,0,225,227,3,30,15,0,226,224,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,
0,228,229,1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,231,223,1,0,0,0,231,232,
1,0,0,0,232,233,1,0,0,0,233,234,5,4,0,0,234,235,5,5,0,0,235,236,3,30,15,
0,236,243,1,0,0,0,237,238,5,28,0,0,238,239,3,30,15,0,239,240,5,29,0,0,240,
241,3,42,21,0,241,243,1,0,0,0,242,175,1,0,0,0,242,180,1,0,0,0,242,185,1,
0,0,0,242,200,1,0,0,0,242,205,1,0,0,0,242,210,1,0,0,0,242,220,1,0,0,0,242,
237,1,0,0,0,243,25,1,0,0,0,244,245,5,30,0,0,245,246,3,30,15,0,246,27,1,0,
0,0,247,248,3,42,21,0,248,249,5,12,0,0,249,257,3,34,17,0,250,251,5,13,0,
0,251,252,3,42,21,0,252,253,5,12,0,0,253,254,3,34,17,0,254,256,1,0,0,0,255,
250,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,261,1,0,
0,0,259,257,1,0,0,0,260,247,1,0,0,0,260,261,1,0,0,0,261,29,1,0,0,0,262,263,
6,15,-1,0,263,264,5,3,0,0,264,265,3,30,15,0,265,266,5,4,0,0,266,298,1,0,
0,0,267,298,5,45,0,0,268,269,3,42,21,0,269,270,5,31,0,0,270,275,3,30,15,
0,271,272,5,13,0,0,272,274,3,30,15,0,273,271,1,0,0,0,274,277,1,0,0,0,275,
273,1,0,0,0,275,276,1,0,0,0,276,278,1,0,0,0,277,275,1,0,0,0,278,279,5,32,
0,0,279,298,1,0,0,0,280,298,3,32,16,0,281,282,3,42,21,0,282,291,5,3,0,0,
283,288,3,30,15,0,284,285,5,13,0,0,285,287,3,30,15,0,286,284,1,0,0,0,287,
290,1,0,0,0,288,286,1,0,0,0,288,289,1,0,0,0,289,292,1,0,0,0,290,288,1,0,
0,0,291,283,1,0,0,0,291,292,1,0,0,0,292,293,1,0,0,0,293,294,5,4,0,0,294,
298,1,0,0,0,295,296,7,0,0,0,296,298,3,30,15,9,297,262,1,0,0,0,297,267,1,
0,0,0,297,268,1,0,0,0,297,280,1,0,0,0,297,281,1,0,0,0,297,295,1,0,0,0,298,
325,1,0,0,0,299,300,10,8,0,0,300,301,5,21,0,0,301,324,3,30,15,9,302,303,
10,7,0,0,303,304,5,35,0,0,304,324,3,30,15,8,305,306,10,6,0,0,306,307,5,36,
0,0,307,324,3,30,15,7,308,309,10,5,0,0,309,310,5,37,0,0,310,324,3,30,15,
6,311,312,10,4,0,0,312,313,5,38,0,0,313,324,3,30,15,5,314,315,10,3,0,0,315,
316,5,39,0,0,316,324,3,30,15,4,317,318,10,2,0,0,318,319,5,40,0,0,319,324,
3,30,15,3,320,321,10,1,0,0,321,322,5,41,0,0,322,324,3,30,15,2,323,299,1,
0,0,0,323,302,1,0,0,0,323,305,1,0,0,0,323,308,1,0,0,0,323,311,1,0,0,0,323,
314,1,0,0,0,323,317,1,0,0,0,323,320,1,0,0,0,324,327,1,0,0,0,325,323,1,0,
0,0,325,326,1,0,0,0,326,31,1,0,0,0,327,325,1,0,0,0,328,344,3,42,21,0,329,
330,3,42,21,0,330,339,5,31,0,0,331,336,3,30,15,0,332,333,5,13,0,0,333,335,
3,30,15,0,334,332,1,0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,337,1,0,0,
0,337,340,1,0,0,0,338,336,1,0,0,0,339,331,1,0,0,0,339,340,1,0,0,0,340,341,
1,0,0,0,341,342,5,32,0,0,342,344,1,0,0,0,343,328,1,0,0,0,343,329,1,0,0,0,
344,33,1,0,0,0,345,348,3,42,21,0,346,347,5,21,0,0,347,349,3,42,21,0,348,
346,1,0,0,0,349,350,1,0,0,0,350,348,1,0,0,0,350,351,1,0,0,0,351,367,1,0,
0,0,352,353,3,42,21,0,353,362,5,39,0,0,354,359,3,30,15,0,355,356,5,13,0,
0,356,358,3,30,15,0,357,355,1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,359,
360,1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,0,362,354,1,0,0,0,362,363,1,0,
0,0,363,364,1,0,0,0,364,365,5,38,0,0,365,367,1,0,0,0,366,345,1,0,0,0,366,
352,1,0,0,0,367,35,1,0,0,0,368,369,5,31,0,0,369,374,3,44,22,0,370,371,5,
13,0,0,371,373,3,44,22,0,372,370,1,0,0,0,373,376,1,0,0,0,374,372,1,0,0,0,
374,375,1,0,0,0,375,377,1,0,0,0,376,374,1,0,0,0,377,378,5,32,0,0,378,37,
1,0,0,0,379,380,5,39,0,0,380,384,3,42,21,0,381,383,3,40,20,0,382,381,1,0,
0,0,383,386,1,0,0,0,384,382,1,0,0,0,384,385,1,0,0,0,385,387,1,0,0,0,386,
384,1,0,0,0,387,388,5,42,0,0,388,389,5,38,0,0,389,411,1,0,0,0,390,391,5,
39,0,0,391,395,3,42,21,0,392,394,3,40,20,0,393,392,1,0,0,0,394,397,1,0,0,
0,395,393,1,0,0,0,395,396,1,0,0,0,396,398,1,0,0,0,397,395,1,0,0,0,398,402,
5,38,0,0,399,401,3,38,19,0,400,399,1,0,0,0,401,404,1,0,0,0,402,400,1,0,0,
0,402,403,1,0,0,0,403,405,1,0,0,0,404,402,1,0,0,0,405,406,5,39,0,0,406,407,
5,42,0,0,407,408,3,42,21,0,408,409,5,38,0,0,409,411,1,0,0,0,410,379,1,0,
0,0,410,390,1,0,0,0,411,39,1,0,0,0,412,413,3,42,21,0,413,414,5,36,0,0,414,
415,5,43,0,0,415,41,1,0,0,0,416,417,7,1,0,0,417,43,1,0,0,0,418,419,5,45,
0,0,419,45,1,0,0,0,41,49,63,75,81,87,99,105,115,121,131,137,145,154,159,
172,195,198,216,228,231,242,257,260,275,288,291,297,323,325,336,339,343,
350,359,362,366,374,384,395,402,410];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LudiParser extends antlr4.Parser {

    static grammarFileName = "Ludi.g4";
    static literalNames = [ null, "'players'", "'action'", "'('", "')'", 
                            "'for'", "':'", "'trigger'", "'win'", "'loss'", 
                            "'setup'", "'kind'", "'a'", "','", "'state'", 
                            "'view'", "'change'", "'to'", "'set'", "'move'", 
                            "'by'", "'or'", "'increase'", "'decrease'", 
                            "'if'", "'then'", "'end'", "'play'", "'remember'", 
                            "'as'", "'when'", "'['", "']'", "'not'", "'!'", 
                            "'and'", "'='", "'!='", "'>'", "'<'", "'>='", 
                            "'<='", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "QUOTED_STRING", "IDENTIFIER", 
                             "NUMBER", "WS", "COMMENT" ];
    static ruleNames = [ "game", "definition", "players", "action", "trigger", 
                         "win", "loss", "setup", "kind", "statementList", 
                         "state_definition", "view", "statement", "when", 
                         "parameterList", "expression", "lvalue", "typeExpression", 
                         "coordinate", "viewElement", "viewAttribute", "identifier", 
                         "number" ];

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
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 53126) !== 0)) {
	            this.state = 46;
	            this.definition();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
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
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.players();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.action();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.setup();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.trigger();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.win();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
	            this.loss();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 60;
	            this.kind();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 61;
	            this.state_definition();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 62;
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
	        this.state = 65;
	        this.match(LudiParser.T__0);
	        this.state = 66;
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
	        this.state = 68;
	        this.match(LudiParser.T__1);
	        this.state = 69;
	        localctx.name = this.identifier();
	        this.state = 70;
	        this.match(LudiParser.T__2);
	        this.state = 71;
	        this.parameterList();
	        this.state = 72;
	        this.match(LudiParser.T__3);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 73;
	            this.match(LudiParser.T__4);
	            this.state = 74;
	            localctx.player = this.expression(0);
	        }

	        this.state = 77;
	        this.match(LudiParser.T__5);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 78;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 432865280) !== 0)) {
	            this.state = 84;
	            this.statement();
	            this.state = 89;
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
	        this.state = 90;
	        this.match(LudiParser.T__6);
	        this.state = 91;
	        localctx.name = this.identifier();
	        this.state = 92;
	        this.match(LudiParser.T__2);
	        this.state = 93;
	        this.parameterList();
	        this.state = 94;
	        this.match(LudiParser.T__3);
	        this.state = 95;
	        this.match(LudiParser.T__5);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 96;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 432865280) !== 0)) {
	            this.state = 102;
	            this.statement();
	            this.state = 107;
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
	        this.state = 108;
	        this.match(LudiParser.T__7);
	        this.state = 109;
	        localctx.name = this.identifier();
	        this.state = 110;
	        this.match(LudiParser.T__2);
	        this.state = 111;
	        this.parameterList();
	        this.state = 112;
	        this.match(LudiParser.T__3);
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 113;
	            this.match(LudiParser.T__4);
	            this.state = 114;
	            localctx.player = this.expression(0);
	        }

	        this.state = 117;
	        this.match(LudiParser.T__5);
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 118;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 123;
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
	        this.state = 124;
	        this.match(LudiParser.T__8);
	        this.state = 125;
	        localctx.name = this.identifier();
	        this.state = 126;
	        this.match(LudiParser.T__2);
	        this.state = 127;
	        this.parameterList();
	        this.state = 128;
	        this.match(LudiParser.T__3);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 129;
	            this.match(LudiParser.T__4);
	            this.state = 130;
	            localctx.player = this.expression(0);
	        }

	        this.state = 133;
	        this.match(LudiParser.T__5);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 134;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 139;
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
	        this.state = 140;
	        this.match(LudiParser.T__9);
	        this.state = 141;
	        this.match(LudiParser.T__5);
	        this.state = 143; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 142;
	            this.statement();
	            this.state = 145; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 432865280) !== 0));
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
	        this.state = 147;
	        this.match(LudiParser.T__10);
	        this.state = 148;
	        localctx.name = this.identifier();
	        this.state = 149;
	        this.match(LudiParser.T__11);
	        this.state = 150;
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
	        this.state = 152;
	        localctx._statement = this.statement();
	        localctx.statements.push(localctx._statement);

	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 153;
	            this.match(LudiParser.T__12);
	        }

	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 432865280) !== 0)) {
	            this.state = 156;
	            localctx._statement = this.statement();
	            localctx.statements.push(localctx._statement);
	            this.state = 161;
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
	        this.state = 162;
	        this.match(LudiParser.T__13);
	        this.state = 163;
	        localctx.name = this.identifier();
	        this.state = 164;
	        this.match(LudiParser.T__11);
	        this.state = 165;
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
	        this.state = 167;
	        this.match(LudiParser.T__14);
	        this.state = 168;
	        this.match(LudiParser.T__5);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 169;
	            localctx._viewElement = this.viewElement();
	            localctx.elements.push(localctx._viewElement);
	            this.state = 174;
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
	        this.state = 242;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new ChangeStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 175;
	            this.match(LudiParser.T__15);
	            this.state = 176;
	            this.lvalue();
	            this.state = 177;
	            this.match(LudiParser.T__16);
	            this.state = 178;
	            this.expression(0);
	            break;
	        case 18:
	            localctx = new SetStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 180;
	            this.match(LudiParser.T__17);
	            this.state = 181;
	            this.lvalue();
	            this.state = 182;
	            this.match(LudiParser.T__16);
	            this.state = 183;
	            this.expression(0);
	            break;
	        case 19:
	            localctx = new MoveStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 185;
	            this.match(LudiParser.T__18);
	            this.state = 186;
	            localctx.from = this.lvalue();
	            this.state = 187;
	            this.match(LudiParser.T__16);
	            this.state = 188;
	            localctx.to = this.lvalue();
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 189;
	                this.match(LudiParser.T__19);
	                this.state = 190;
	                localctx._coordinate = this.coordinate();
	                localctx.movements.push(localctx._coordinate);
	                this.state = 195;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===21) {
	                    this.state = 191;
	                    this.match(LudiParser.T__20);
	                    this.state = 192;
	                    localctx._coordinate = this.coordinate();
	                    localctx.movements.push(localctx._coordinate);
	                    this.state = 197;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            break;
	        case 22:
	            localctx = new IncreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 200;
	            this.match(LudiParser.T__21);
	            this.state = 201;
	            this.lvalue();
	            this.state = 202;
	            this.match(LudiParser.T__19);
	            this.state = 203;
	            this.expression(0);
	            break;
	        case 23:
	            localctx = new DecreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 205;
	            this.match(LudiParser.T__22);
	            this.state = 206;
	            this.lvalue();
	            this.state = 207;
	            this.match(LudiParser.T__19);
	            this.state = 208;
	            this.expression(0);
	            break;
	        case 24:
	            localctx = new IfStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 210;
	            this.match(LudiParser.T__23);
	            this.state = 211;
	            this.expression(0);
	            this.state = 212;
	            this.match(LudiParser.T__24);
	            this.state = 214; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 213;
	                this.statement();
	                this.state = 216; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 432865280) !== 0));
	            this.state = 218;
	            this.match(LudiParser.T__25);
	            break;
	        case 27:
	            localctx = new PlayStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 220;
	            this.match(LudiParser.T__26);
	            this.state = 221;
	            localctx.actionName = this.identifier();
	            this.state = 222;
	            this.match(LudiParser.T__2);
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3 || _la===5 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 6147) !== 0)) {
	                this.state = 223;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 228;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===13) {
	                    this.state = 224;
	                    this.match(LudiParser.T__12);
	                    this.state = 225;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 230;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 233;
	            this.match(LudiParser.T__3);
	            this.state = 234;
	            this.match(LudiParser.T__4);
	            this.state = 235;
	            localctx.playerExpression = this.expression(0);
	            break;
	        case 28:
	            localctx = new RememberStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 237;
	            this.match(LudiParser.T__27);
	            this.state = 238;
	            this.expression(0);
	            this.state = 239;
	            this.match(LudiParser.T__28);
	            this.state = 240;
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
	        this.state = 244;
	        this.match(LudiParser.T__29);
	        this.state = 245;
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
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===44) {
	            this.state = 247;
	            localctx._identifier = this.identifier();
	            localctx.names.push(localctx._identifier);
	            this.state = 248;
	            this.match(LudiParser.T__11);
	            this.state = 249;
	            localctx._typeExpression = this.typeExpression();
	            localctx.types.push(localctx._typeExpression);
	            this.state = 257;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===13) {
	                this.state = 250;
	                this.match(LudiParser.T__12);
	                this.state = 251;
	                localctx._identifier = this.identifier();
	                localctx.names.push(localctx._identifier);
	                this.state = 252;
	                this.match(LudiParser.T__11);
	                this.state = 253;
	                localctx._typeExpression = this.typeExpression();
	                localctx.types.push(localctx._typeExpression);
	                this.state = 259;
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
	        this.state = 297;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParenthizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 263;
	            this.match(LudiParser.T__2);
	            this.state = 264;
	            this.expression(0);
	            this.state = 265;
	            this.match(LudiParser.T__3);
	            break;

	        case 2:
	            localctx = new NumberExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 267;
	            this.match(LudiParser.NUMBER);
	            break;

	        case 3:
	            localctx = new IndexExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 268;
	            localctx.name = this.identifier();
	            this.state = 269;
	            this.match(LudiParser.T__30);
	            this.state = 270;
	            localctx._expression = this.expression(0);
	            localctx.arguments.push(localctx._expression);
	            this.state = 275;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===13) {
	                this.state = 271;
	                this.match(LudiParser.T__12);
	                this.state = 272;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 277;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 278;
	            this.match(LudiParser.T__31);
	            break;

	        case 4:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 280;
	            localctx.name = this.lvalue();
	            break;

	        case 5:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 281;
	            localctx.name = this.identifier();
	            this.state = 282;
	            this.match(LudiParser.T__2);
	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3 || _la===5 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 6147) !== 0)) {
	                this.state = 283;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 288;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===13) {
	                    this.state = 284;
	                    this.match(LudiParser.T__12);
	                    this.state = 285;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 290;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 293;
	            this.match(LudiParser.T__3);
	            break;

	        case 6:
	            localctx = new NegationExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 295;
	            _la = this._input.LA(1);
	            if(!(_la===33 || _la===34)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 296;
	            this.expression(9);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 325;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 323;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 299;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 300;
	                    localctx.operator = this.match(LudiParser.T__20);
	                    this.state = 301;
	                    localctx.right = this.expression(9);
	                    break;

	                case 2:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 302;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 303;
	                    localctx.operator = this.match(LudiParser.T__34);
	                    this.state = 304;
	                    localctx.right = this.expression(8);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 305;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 306;
	                    localctx.operator = this.match(LudiParser.T__35);
	                    this.state = 307;
	                    localctx.right = this.expression(7);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 308;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 309;
	                    localctx.operator = this.match(LudiParser.T__36);
	                    this.state = 310;
	                    localctx.right = this.expression(6);
	                    break;

	                case 5:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 311;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 312;
	                    localctx.operator = this.match(LudiParser.T__37);
	                    this.state = 313;
	                    localctx.right = this.expression(5);
	                    break;

	                case 6:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 314;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 315;
	                    localctx.operator = this.match(LudiParser.T__38);
	                    this.state = 316;
	                    localctx.right = this.expression(4);
	                    break;

	                case 7:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 317;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 318;
	                    localctx.operator = this.match(LudiParser.T__39);
	                    this.state = 319;
	                    localctx.right = this.expression(3);
	                    break;

	                case 8:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 320;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 321;
	                    localctx.operator = this.match(LudiParser.T__40);
	                    this.state = 322;
	                    localctx.right = this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 327;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
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
	        this.state = 343;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdentifierLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 328;
	            this.identifier();
	            break;

	        case 2:
	            localctx = new IndexLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            this.identifier();
	            this.state = 330;
	            this.match(LudiParser.T__30);
	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3 || _la===5 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 6147) !== 0)) {
	                this.state = 331;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 336;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===13) {
	                    this.state = 332;
	                    this.match(LudiParser.T__12);
	                    this.state = 333;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 338;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 341;
	            this.match(LudiParser.T__31);
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
	        this.state = 366;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnionTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 345;
	            localctx._identifier = this.identifier();
	            localctx.values.push(localctx._identifier);
	            this.state = 348; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 346;
	                this.match(LudiParser.T__20);
	                this.state = 347;
	                localctx._identifier = this.identifier();
	                localctx.values.push(localctx._identifier);
	                this.state = 350; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===21);
	            break;

	        case 2:
	            localctx = new ParameterizedTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
	            localctx.name = this.identifier();
	            this.state = 353;
	            this.match(LudiParser.T__38);
	            this.state = 362;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3 || _la===5 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 6147) !== 0)) {
	                this.state = 354;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 359;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===13) {
	                    this.state = 355;
	                    this.match(LudiParser.T__12);
	                    this.state = 356;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 361;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 364;
	            this.match(LudiParser.T__37);
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
	    this.enterRule(localctx, 36, LudiParser.RULE_coordinate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 368;
	        this.match(LudiParser.T__30);
	        this.state = 369;
	        this.number();
	        this.state = 374;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 370;
	            this.match(LudiParser.T__12);
	            this.state = 371;
	            this.number();
	            this.state = 376;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 377;
	        this.match(LudiParser.T__31);
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
	    this.enterRule(localctx, 38, LudiParser.RULE_viewElement);
	    var _la = 0;
	    try {
	        this.state = 410;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LeafViewContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 379;
	            this.match(LudiParser.T__38);
	            this.state = 380;
	            localctx.name = this.identifier();
	            this.state = 384;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5 || _la===44) {
	                this.state = 381;
	                localctx._viewAttribute = this.viewAttribute();
	                localctx.attributes.push(localctx._viewAttribute);
	                this.state = 386;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 387;
	            this.match(LudiParser.T__41);
	            this.state = 388;
	            this.match(LudiParser.T__37);
	            break;

	        case 2:
	            localctx = new StemViewContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 390;
	            this.match(LudiParser.T__38);
	            this.state = 391;
	            localctx.name = this.identifier();
	            this.state = 395;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5 || _la===44) {
	                this.state = 392;
	                localctx._viewAttribute = this.viewAttribute();
	                localctx.attributes.push(localctx._viewAttribute);
	                this.state = 397;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 398;
	            this.match(LudiParser.T__37);
	            this.state = 402;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 399;
	                    localctx._viewElement = this.viewElement();
	                    localctx.childViews.push(localctx._viewElement); 
	                }
	                this.state = 404;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
	            }

	            this.state = 405;
	            this.match(LudiParser.T__38);
	            this.state = 406;
	            this.match(LudiParser.T__41);
	            this.state = 407;
	            localctx.name2 = this.identifier();
	            this.state = 408;
	            this.match(LudiParser.T__37);
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
	    this.enterRule(localctx, 40, LudiParser.RULE_viewAttribute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        localctx.key = this.identifier();
	        this.state = 413;
	        this.match(LudiParser.T__35);
	        this.state = 414;
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
	    this.enterRule(localctx, 42, LudiParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 416;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===44)) {
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
	    this.enterRule(localctx, 44, LudiParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
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
LudiParser.QUOTED_STRING = 43;
LudiParser.IDENTIFIER = 44;
LudiParser.NUMBER = 45;
LudiParser.WS = 46;
LudiParser.COMMENT = 47;

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
LudiParser.RULE_coordinate = 18;
LudiParser.RULE_viewElement = 19;
LudiParser.RULE_viewAttribute = 20;
LudiParser.RULE_identifier = 21;
LudiParser.RULE_number = 22;

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

class MoveStatementContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        this.from = null;;
        this.to = null;;
        this._coordinate = null;;
        this.movements = [];;
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
LudiParser.CoordinateContext = CoordinateContext; 
LudiParser.ViewElementContext = ViewElementContext; 
LudiParser.ViewAttributeContext = ViewAttributeContext; 
LudiParser.IdentifierContext = IdentifierContext; 
LudiParser.NumberContext = NumberContext; 
