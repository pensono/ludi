// Generated from Ludi.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LudiListener from './LudiListener.js';
import LudiVisitor from './LudiVisitor.js';

const serializedATN = [4,1,52,450,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,1,
1,1,1,1,5,1,58,8,1,10,1,12,1,61,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,3,2,73,8,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,85,8,4,1,4,1,
4,5,4,89,8,4,10,4,12,4,92,9,4,1,4,5,4,95,8,4,10,4,12,4,98,9,4,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,5,5,107,8,5,10,5,12,5,110,9,5,1,5,5,5,113,8,5,10,5,12,
5,116,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,125,8,6,1,6,1,6,5,6,129,8,6,10,
6,12,6,132,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,141,8,7,1,7,1,7,5,7,145,8,
7,10,7,12,7,148,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,157,8,8,10,8,12,8,160,
9,8,1,9,1,9,1,9,4,9,165,8,9,11,9,12,9,166,1,10,1,10,1,10,1,10,1,10,1,11,
1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,197,8,12,10,12,12,12,200,9,12,
3,12,202,8,12,1,12,1,12,3,12,206,8,12,1,12,1,12,3,12,210,8,12,1,12,1,12,
1,12,1,12,5,12,216,8,12,10,12,12,12,219,9,12,1,12,1,12,1,12,3,12,224,8,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,4,12,242,8,12,11,12,12,12,243,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,5,12,254,8,12,10,12,12,12,257,9,12,3,12,259,8,12,1,12,1,12,1,12,3,12,
264,8,12,1,12,1,12,1,12,1,12,1,12,3,12,271,8,12,1,13,1,13,1,13,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,5,14,284,8,14,10,14,12,14,287,9,14,3,14,289,
8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,302,8,15,
10,15,12,15,305,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,315,8,
15,10,15,12,15,318,9,15,3,15,320,8,15,1,15,1,15,1,15,1,15,3,15,326,8,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,352,8,15,10,15,12,15,
355,9,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,363,8,16,10,16,12,16,366,9,16,
3,16,368,8,16,1,16,1,16,3,16,372,8,16,1,17,1,17,1,17,5,17,377,8,17,10,17,
12,17,380,9,17,1,17,1,17,1,17,1,17,1,17,5,17,387,8,17,10,17,12,17,390,9,
17,3,17,392,8,17,1,17,1,17,3,17,396,8,17,1,18,1,18,1,18,1,18,5,18,402,8,
18,10,18,12,18,405,9,18,1,18,1,18,1,19,1,19,1,19,5,19,412,8,19,10,19,12,
19,415,9,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,423,8,19,10,19,12,19,426,
9,19,1,19,1,19,5,19,430,8,19,10,19,12,19,433,9,19,1,19,1,19,1,19,1,19,1,
19,3,19,440,8,19,1,20,1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,22,0,1,30,23,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,2,1,0,
38,39,2,0,6,6,49,49,496,0,49,1,0,0,0,2,54,1,0,0,0,4,72,1,0,0,0,6,74,1,0,
0,0,8,77,1,0,0,0,10,99,1,0,0,0,12,117,1,0,0,0,14,133,1,0,0,0,16,149,1,0,
0,0,18,161,1,0,0,0,20,168,1,0,0,0,22,173,1,0,0,0,24,270,1,0,0,0,26,272,1,
0,0,0,28,288,1,0,0,0,30,325,1,0,0,0,32,371,1,0,0,0,34,395,1,0,0,0,36,397,
1,0,0,0,38,439,1,0,0,0,40,441,1,0,0,0,42,445,1,0,0,0,44,447,1,0,0,0,46,48,
3,4,2,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,
0,0,0,51,49,1,0,0,0,52,53,5,0,0,1,53,1,1,0,0,0,54,59,3,24,12,0,55,56,5,1,
0,0,56,58,3,24,12,0,57,55,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,
0,0,60,3,1,0,0,0,61,59,1,0,0,0,62,73,3,6,3,0,63,73,3,8,4,0,64,73,3,18,9,
0,65,73,3,10,5,0,66,73,3,12,6,0,67,73,3,14,7,0,68,73,3,16,8,0,69,73,3,20,
10,0,70,73,3,22,11,0,71,73,3,38,19,0,72,62,1,0,0,0,72,63,1,0,0,0,72,64,1,
0,0,0,72,65,1,0,0,0,72,66,1,0,0,0,72,67,1,0,0,0,72,68,1,0,0,0,72,69,1,0,
0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,5,1,0,0,0,74,75,5,2,0,0,75,76,3,34,17,
0,76,7,1,0,0,0,77,78,5,3,0,0,78,79,3,42,21,0,79,80,5,4,0,0,80,81,3,28,14,
0,81,84,5,5,0,0,82,83,5,6,0,0,83,85,3,30,15,0,84,82,1,0,0,0,84,85,1,0,0,
0,85,86,1,0,0,0,86,90,5,7,0,0,87,89,3,26,13,0,88,87,1,0,0,0,89,92,1,0,0,
0,90,88,1,0,0,0,90,91,1,0,0,0,91,96,1,0,0,0,92,90,1,0,0,0,93,95,3,24,12,
0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,9,1,0,0,0,98,
96,1,0,0,0,99,100,5,8,0,0,100,101,3,42,21,0,101,102,5,4,0,0,102,103,3,28,
14,0,103,104,5,5,0,0,104,108,5,7,0,0,105,107,3,26,13,0,106,105,1,0,0,0,107,
110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,114,1,0,0,0,110,108,1,0,
0,0,111,113,3,24,12,0,112,111,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,
115,1,0,0,0,115,11,1,0,0,0,116,114,1,0,0,0,117,118,5,9,0,0,118,119,3,42,
21,0,119,120,5,4,0,0,120,121,3,28,14,0,121,124,5,5,0,0,122,123,5,6,0,0,123,
125,3,30,15,0,124,122,1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,130,5,
7,0,0,127,129,3,26,13,0,128,127,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,
130,131,1,0,0,0,131,13,1,0,0,0,132,130,1,0,0,0,133,134,5,10,0,0,134,135,
3,42,21,0,135,136,5,4,0,0,136,137,3,28,14,0,137,140,5,5,0,0,138,139,5,6,
0,0,139,141,3,30,15,0,140,138,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,
146,5,7,0,0,143,145,3,26,13,0,144,143,1,0,0,0,145,148,1,0,0,0,146,144,1,
0,0,0,146,147,1,0,0,0,147,15,1,0,0,0,148,146,1,0,0,0,149,150,5,11,0,0,150,
151,3,42,21,0,151,152,5,4,0,0,152,153,3,28,14,0,153,154,5,5,0,0,154,158,
5,7,0,0,155,157,3,26,13,0,156,155,1,0,0,0,157,160,1,0,0,0,158,156,1,0,0,
0,158,159,1,0,0,0,159,17,1,0,0,0,160,158,1,0,0,0,161,162,5,12,0,0,162,164,
5,7,0,0,163,165,3,24,12,0,164,163,1,0,0,0,165,166,1,0,0,0,166,164,1,0,0,
0,166,167,1,0,0,0,167,19,1,0,0,0,168,169,5,13,0,0,169,170,3,42,21,0,170,
171,5,14,0,0,171,172,3,34,17,0,172,21,1,0,0,0,173,174,5,15,0,0,174,175,3,
42,21,0,175,176,5,14,0,0,176,177,3,34,17,0,177,23,1,0,0,0,178,179,5,16,0,
0,179,180,3,32,16,0,180,181,5,17,0,0,181,182,3,30,15,0,182,271,1,0,0,0,183,
184,5,18,0,0,184,185,3,32,16,0,185,186,5,17,0,0,186,187,3,30,15,0,187,271,
1,0,0,0,188,189,5,19,0,0,189,190,3,32,16,0,190,191,5,17,0,0,191,201,3,32,
16,0,192,193,5,20,0,0,193,198,3,36,18,0,194,195,5,1,0,0,195,197,3,36,18,
0,196,194,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,202,
1,0,0,0,200,198,1,0,0,0,201,192,1,0,0,0,201,202,1,0,0,0,202,205,1,0,0,0,
203,204,5,21,0,0,204,206,3,42,21,0,205,203,1,0,0,0,205,206,1,0,0,0,206,209,
1,0,0,0,207,208,5,22,0,0,208,210,3,44,22,0,209,207,1,0,0,0,209,210,1,0,0,
0,210,223,1,0,0,0,211,212,5,23,0,0,212,217,3,42,21,0,213,214,5,1,0,0,214,
216,3,42,21,0,215,213,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,
0,0,0,218,220,1,0,0,0,219,217,1,0,0,0,220,221,5,24,0,0,221,222,3,42,21,0,
222,224,1,0,0,0,223,211,1,0,0,0,223,224,1,0,0,0,224,271,1,0,0,0,225,226,
5,25,0,0,226,271,3,32,16,0,227,228,5,26,0,0,228,229,3,32,16,0,229,230,5,
20,0,0,230,231,3,30,15,0,231,271,1,0,0,0,232,233,5,27,0,0,233,234,3,32,16,
0,234,235,5,20,0,0,235,236,3,30,15,0,236,271,1,0,0,0,237,238,5,28,0,0,238,
239,3,30,15,0,239,241,5,29,0,0,240,242,3,24,12,0,241,240,1,0,0,0,242,243,
1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,246,5,30,0,0,
246,271,1,0,0,0,247,248,5,31,0,0,248,249,3,42,21,0,249,258,5,4,0,0,250,255,
3,30,15,0,251,252,5,32,0,0,252,254,3,30,15,0,253,251,1,0,0,0,254,257,1,0,
0,0,255,253,1,0,0,0,255,256,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,258,
250,1,0,0,0,258,259,1,0,0,0,259,260,1,0,0,0,260,263,5,5,0,0,261,262,5,6,
0,0,262,264,3,30,15,0,263,261,1,0,0,0,263,264,1,0,0,0,264,271,1,0,0,0,265,
266,5,33,0,0,266,267,3,30,15,0,267,268,5,34,0,0,268,269,3,42,21,0,269,271,
1,0,0,0,270,178,1,0,0,0,270,183,1,0,0,0,270,188,1,0,0,0,270,225,1,0,0,0,
270,227,1,0,0,0,270,232,1,0,0,0,270,237,1,0,0,0,270,247,1,0,0,0,270,265,
1,0,0,0,271,25,1,0,0,0,272,273,5,35,0,0,273,274,3,30,15,0,274,27,1,0,0,0,
275,276,3,42,21,0,276,277,5,14,0,0,277,285,3,34,17,0,278,279,5,32,0,0,279,
280,3,42,21,0,280,281,5,14,0,0,281,282,3,34,17,0,282,284,1,0,0,0,283,278,
1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,289,1,0,0,0,
287,285,1,0,0,0,288,275,1,0,0,0,288,289,1,0,0,0,289,29,1,0,0,0,290,291,6,
15,-1,0,291,292,5,4,0,0,292,293,3,30,15,0,293,294,5,5,0,0,294,326,1,0,0,
0,295,326,5,50,0,0,296,297,3,42,21,0,297,298,5,36,0,0,298,303,3,30,15,0,
299,300,5,32,0,0,300,302,3,30,15,0,301,299,1,0,0,0,302,305,1,0,0,0,303,301,
1,0,0,0,303,304,1,0,0,0,304,306,1,0,0,0,305,303,1,0,0,0,306,307,5,37,0,0,
307,326,1,0,0,0,308,326,3,32,16,0,309,310,3,42,21,0,310,319,5,4,0,0,311,
316,3,30,15,0,312,313,5,32,0,0,313,315,3,30,15,0,314,312,1,0,0,0,315,318,
1,0,0,0,316,314,1,0,0,0,316,317,1,0,0,0,317,320,1,0,0,0,318,316,1,0,0,0,
319,311,1,0,0,0,319,320,1,0,0,0,320,321,1,0,0,0,321,322,5,5,0,0,322,326,
1,0,0,0,323,324,7,0,0,0,324,326,3,30,15,9,325,290,1,0,0,0,325,295,1,0,0,
0,325,296,1,0,0,0,325,308,1,0,0,0,325,309,1,0,0,0,325,323,1,0,0,0,326,353,
1,0,0,0,327,328,10,8,0,0,328,329,5,40,0,0,329,352,3,30,15,9,330,331,10,7,
0,0,331,332,5,41,0,0,332,352,3,30,15,8,333,334,10,6,0,0,334,335,5,42,0,0,
335,352,3,30,15,7,336,337,10,5,0,0,337,338,5,43,0,0,338,352,3,30,15,6,339,
340,10,4,0,0,340,341,5,44,0,0,341,352,3,30,15,5,342,343,10,3,0,0,343,344,
5,45,0,0,344,352,3,30,15,4,345,346,10,2,0,0,346,347,5,1,0,0,347,352,3,30,
15,3,348,349,10,1,0,0,349,350,5,46,0,0,350,352,3,30,15,2,351,327,1,0,0,0,
351,330,1,0,0,0,351,333,1,0,0,0,351,336,1,0,0,0,351,339,1,0,0,0,351,342,
1,0,0,0,351,345,1,0,0,0,351,348,1,0,0,0,352,355,1,0,0,0,353,351,1,0,0,0,
353,354,1,0,0,0,354,31,1,0,0,0,355,353,1,0,0,0,356,372,3,42,21,0,357,358,
3,42,21,0,358,367,5,36,0,0,359,364,3,30,15,0,360,361,5,32,0,0,361,363,3,
30,15,0,362,360,1,0,0,0,363,366,1,0,0,0,364,362,1,0,0,0,364,365,1,0,0,0,
365,368,1,0,0,0,366,364,1,0,0,0,367,359,1,0,0,0,367,368,1,0,0,0,368,369,
1,0,0,0,369,370,5,37,0,0,370,372,1,0,0,0,371,356,1,0,0,0,371,357,1,0,0,0,
372,33,1,0,0,0,373,378,3,42,21,0,374,375,5,1,0,0,375,377,3,42,21,0,376,374,
1,0,0,0,377,380,1,0,0,0,378,376,1,0,0,0,378,379,1,0,0,0,379,396,1,0,0,0,
380,378,1,0,0,0,381,382,3,42,21,0,382,391,5,43,0,0,383,388,3,30,15,0,384,
385,5,32,0,0,385,387,3,30,15,0,386,384,1,0,0,0,387,390,1,0,0,0,388,386,1,
0,0,0,388,389,1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,391,383,1,0,0,0,391,
392,1,0,0,0,392,393,1,0,0,0,393,394,5,42,0,0,394,396,1,0,0,0,395,373,1,0,
0,0,395,381,1,0,0,0,396,35,1,0,0,0,397,398,5,36,0,0,398,403,3,44,22,0,399,
400,5,32,0,0,400,402,3,44,22,0,401,399,1,0,0,0,402,405,1,0,0,0,403,401,1,
0,0,0,403,404,1,0,0,0,404,406,1,0,0,0,405,403,1,0,0,0,406,407,5,37,0,0,407,
37,1,0,0,0,408,409,5,43,0,0,409,413,3,42,21,0,410,412,3,40,20,0,411,410,
1,0,0,0,412,415,1,0,0,0,413,411,1,0,0,0,413,414,1,0,0,0,414,416,1,0,0,0,
415,413,1,0,0,0,416,417,5,47,0,0,417,418,5,42,0,0,418,440,1,0,0,0,419,420,
5,43,0,0,420,424,3,42,21,0,421,423,3,40,20,0,422,421,1,0,0,0,423,426,1,0,
0,0,424,422,1,0,0,0,424,425,1,0,0,0,425,427,1,0,0,0,426,424,1,0,0,0,427,
431,5,42,0,0,428,430,3,38,19,0,429,428,1,0,0,0,430,433,1,0,0,0,431,429,1,
0,0,0,431,432,1,0,0,0,432,434,1,0,0,0,433,431,1,0,0,0,434,435,5,43,0,0,435,
436,5,47,0,0,436,437,3,42,21,0,437,438,5,42,0,0,438,440,1,0,0,0,439,408,
1,0,0,0,439,419,1,0,0,0,440,39,1,0,0,0,441,442,3,42,21,0,442,443,5,40,0,
0,443,444,5,48,0,0,444,41,1,0,0,0,445,446,7,1,0,0,446,43,1,0,0,0,447,448,
5,50,0,0,448,45,1,0,0,0,45,49,59,72,84,90,96,108,114,124,130,140,146,158,
166,198,201,205,209,217,223,243,255,258,263,270,285,288,303,316,319,325,
351,353,364,367,371,378,388,391,395,403,413,424,431,439];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LudiParser extends antlr4.Parser {

    static grammarFileName = "Ludi.g4";
    static literalNames = [ null, "'or'", "'players'", "'action'", "'('", 
                            "')'", "'for'", "':'", "'trigger'", "'win'", 
                            "'loss'", "'draw'", "'setup'", "'kind'", "'a'", 
                            "'state'", "'change'", "'to'", "'set'", "'move'", 
                            "'by'", "'direction'", "'distance'", "'over'", 
                            "'named'", "'remove'", "'increase'", "'decrease'", 
                            "'if'", "'then'", "'end'", "'play'", "','", 
                            "'remember'", "'as'", "'when'", "'['", "']'", 
                            "'not'", "'!'", "'='", "'!='", "'>'", "'<'", 
                            "'>='", "'<='", "'and'", "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "QUOTED_STRING", "IDENTIFIER", "NUMBER", "WS", 
                             "COMMENT" ];
    static ruleNames = [ "rules", "interaction", "definition", "players", 
                         "action", "trigger", "win", "loss", "draw", "setup", 
                         "kind", "state_definition", "statement", "when", 
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




	rules() {
	    let localctx = new RulesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LudiParser.RULE_rules);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 48908) !== 0) || _la===43) {
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



	interaction() {
	    let localctx = new InteractionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LudiParser.RULE_interaction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        localctx._statement = this.statement();
	        localctx.statements.push(localctx._statement);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 55;
	            this.match(LudiParser.T__0);
	            this.state = 56;
	            localctx._statement = this.statement();
	            localctx.statements.push(localctx._statement);
	            this.state = 61;
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
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.players();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.action();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.setup();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 65;
	            this.trigger();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 66;
	            this.win();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 67;
	            this.loss();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 68;
	            this.draw();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 69;
	            this.kind();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 70;
	            this.state_definition();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 71;
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
	        this.state = 74;
	        this.match(LudiParser.T__1);
	        this.state = 75;
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
	        this.state = 77;
	        this.match(LudiParser.T__2);
	        this.state = 78;
	        localctx.name = this.identifier();
	        this.state = 79;
	        this.match(LudiParser.T__3);
	        this.state = 80;
	        this.parameterList();
	        this.state = 81;
	        this.match(LudiParser.T__4);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 82;
	            this.match(LudiParser.T__5);
	            this.state = 83;
	            localctx.player = this.expression(0);
	        }

	        this.state = 86;
	        this.match(LudiParser.T__6);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 87;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 171533) !== 0)) {
	            this.state = 93;
	            this.statement();
	            this.state = 98;
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
	        this.state = 99;
	        this.match(LudiParser.T__7);
	        this.state = 100;
	        localctx.name = this.identifier();
	        this.state = 101;
	        this.match(LudiParser.T__3);
	        this.state = 102;
	        this.parameterList();
	        this.state = 103;
	        this.match(LudiParser.T__4);
	        this.state = 104;
	        this.match(LudiParser.T__6);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 105;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 110;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 171533) !== 0)) {
	            this.state = 111;
	            this.statement();
	            this.state = 116;
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
	        this.state = 117;
	        this.match(LudiParser.T__8);
	        this.state = 118;
	        localctx.name = this.identifier();
	        this.state = 119;
	        this.match(LudiParser.T__3);
	        this.state = 120;
	        this.parameterList();
	        this.state = 121;
	        this.match(LudiParser.T__4);
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 122;
	            this.match(LudiParser.T__5);
	            this.state = 123;
	            localctx.player = this.expression(0);
	        }

	        this.state = 126;
	        this.match(LudiParser.T__6);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 127;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 132;
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
	        this.state = 133;
	        this.match(LudiParser.T__9);
	        this.state = 134;
	        localctx.name = this.identifier();
	        this.state = 135;
	        this.match(LudiParser.T__3);
	        this.state = 136;
	        this.parameterList();
	        this.state = 137;
	        this.match(LudiParser.T__4);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 138;
	            this.match(LudiParser.T__5);
	            this.state = 139;
	            localctx.player = this.expression(0);
	        }

	        this.state = 142;
	        this.match(LudiParser.T__6);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 143;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 148;
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



	draw() {
	    let localctx = new DrawContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LudiParser.RULE_draw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(LudiParser.T__10);
	        this.state = 150;
	        localctx.name = this.identifier();
	        this.state = 151;
	        this.match(LudiParser.T__3);
	        this.state = 152;
	        this.parameterList();
	        this.state = 153;
	        this.match(LudiParser.T__4);
	        this.state = 154;
	        this.match(LudiParser.T__6);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 155;
	            localctx._when = this.when();
	            localctx.conditions.push(localctx._when);
	            this.state = 160;
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
	    this.enterRule(localctx, 18, LudiParser.RULE_setup);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(LudiParser.T__11);
	        this.state = 162;
	        this.match(LudiParser.T__6);
	        this.state = 164; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 163;
	            this.statement();
	            this.state = 166; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 171533) !== 0));
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
	    this.enterRule(localctx, 20, LudiParser.RULE_kind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(LudiParser.T__12);
	        this.state = 169;
	        localctx.name = this.identifier();
	        this.state = 170;
	        this.match(LudiParser.T__13);
	        this.state = 171;
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
	    this.enterRule(localctx, 22, LudiParser.RULE_state_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(LudiParser.T__14);
	        this.state = 174;
	        localctx.name = this.identifier();
	        this.state = 175;
	        this.match(LudiParser.T__13);
	        this.state = 176;
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
	    this.enterRule(localctx, 24, LudiParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 270;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new ChangeStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.match(LudiParser.T__15);
	            this.state = 179;
	            this.lvalue();
	            this.state = 180;
	            this.match(LudiParser.T__16);
	            this.state = 181;
	            this.expression(0);
	            break;
	        case 18:
	            localctx = new SetStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 183;
	            this.match(LudiParser.T__17);
	            this.state = 184;
	            this.lvalue();
	            this.state = 185;
	            this.match(LudiParser.T__16);
	            this.state = 186;
	            this.expression(0);
	            break;
	        case 19:
	            localctx = new MoveStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 188;
	            this.match(LudiParser.T__18);
	            this.state = 189;
	            localctx.from = this.lvalue();
	            this.state = 190;
	            this.match(LudiParser.T__16);
	            this.state = 191;
	            localctx.to = this.lvalue();
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 192;
	                this.match(LudiParser.T__19);
	                this.state = 193;
	                localctx._coordinate = this.coordinate();
	                localctx.movements.push(localctx._coordinate);
	                this.state = 198;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 194;
	                        this.match(LudiParser.T__0);
	                        this.state = 195;
	                        localctx._coordinate = this.coordinate();
	                        localctx.movements.push(localctx._coordinate); 
	                    }
	                    this.state = 200;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	                }

	            }

	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===21) {
	                this.state = 203;
	                this.match(LudiParser.T__20);
	                this.state = 204;
	                localctx.direction = this.identifier();
	            }

	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22) {
	                this.state = 207;
	                this.match(LudiParser.T__21);
	                this.state = 208;
	                localctx.distance = this.number();
	            }

	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===23) {
	                this.state = 211;
	                this.match(LudiParser.T__22);
	                this.state = 212;
	                localctx._identifier = this.identifier();
	                localctx.over.push(localctx._identifier);
	                this.state = 217;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===1) {
	                    this.state = 213;
	                    this.match(LudiParser.T__0);
	                    this.state = 214;
	                    localctx._identifier = this.identifier();
	                    localctx.over.push(localctx._identifier);
	                    this.state = 219;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }

	                this.state = 220;
	                this.match(LudiParser.T__23);
	                this.state = 221;
	                localctx.overName = this.identifier();
	            }

	            break;
	        case 25:
	            localctx = new RemoveStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 225;
	            this.match(LudiParser.T__24);
	            this.state = 226;
	            this.lvalue();
	            break;
	        case 26:
	            localctx = new IncreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 227;
	            this.match(LudiParser.T__25);
	            this.state = 228;
	            this.lvalue();
	            this.state = 229;
	            this.match(LudiParser.T__19);
	            this.state = 230;
	            this.expression(0);
	            break;
	        case 27:
	            localctx = new DecreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 232;
	            this.match(LudiParser.T__26);
	            this.state = 233;
	            this.lvalue();
	            this.state = 234;
	            this.match(LudiParser.T__19);
	            this.state = 235;
	            this.expression(0);
	            break;
	        case 28:
	            localctx = new IfStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 237;
	            this.match(LudiParser.T__27);
	            this.state = 238;
	            this.expression(0);
	            this.state = 239;
	            this.match(LudiParser.T__28);
	            this.state = 241; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 240;
	                this.statement();
	                this.state = 243; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 16)) & ~0x1f) === 0 && ((1 << (_la - 16)) & 171533) !== 0));
	            this.state = 245;
	            this.match(LudiParser.T__29);
	            break;
	        case 31:
	            localctx = new PlayStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 247;
	            this.match(LudiParser.T__30);
	            this.state = 248;
	            localctx.actionName = this.identifier();
	            this.state = 249;
	            this.match(LudiParser.T__3);
	            this.state = 258;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6 || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 6147) !== 0)) {
	                this.state = 250;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 255;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===32) {
	                    this.state = 251;
	                    this.match(LudiParser.T__31);
	                    this.state = 252;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 257;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 260;
	            this.match(LudiParser.T__4);
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6) {
	                this.state = 261;
	                this.match(LudiParser.T__5);
	                this.state = 262;
	                localctx.playerExpression = this.expression(0);
	            }

	            break;
	        case 33:
	            localctx = new RememberStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 265;
	            this.match(LudiParser.T__32);
	            this.state = 266;
	            this.expression(0);
	            this.state = 267;
	            this.match(LudiParser.T__33);
	            this.state = 268;
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
	        this.state = 272;
	        this.match(LudiParser.T__34);
	        this.state = 273;
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
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6 || _la===49) {
	            this.state = 275;
	            localctx._identifier = this.identifier();
	            localctx.names.push(localctx._identifier);
	            this.state = 276;
	            this.match(LudiParser.T__13);
	            this.state = 277;
	            localctx._typeExpression = this.typeExpression();
	            localctx.types.push(localctx._typeExpression);
	            this.state = 285;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===32) {
	                this.state = 278;
	                this.match(LudiParser.T__31);
	                this.state = 279;
	                localctx._identifier = this.identifier();
	                localctx.names.push(localctx._identifier);
	                this.state = 280;
	                this.match(LudiParser.T__13);
	                this.state = 281;
	                localctx._typeExpression = this.typeExpression();
	                localctx.types.push(localctx._typeExpression);
	                this.state = 287;
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
	        this.state = 325;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParenthizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 291;
	            this.match(LudiParser.T__3);
	            this.state = 292;
	            this.expression(0);
	            this.state = 293;
	            this.match(LudiParser.T__4);
	            break;

	        case 2:
	            localctx = new NumberExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 295;
	            this.match(LudiParser.NUMBER);
	            break;

	        case 3:
	            localctx = new IndexExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 296;
	            localctx.name = this.identifier();
	            this.state = 297;
	            this.match(LudiParser.T__35);
	            this.state = 298;
	            localctx._expression = this.expression(0);
	            localctx.arguments.push(localctx._expression);
	            this.state = 303;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===32) {
	                this.state = 299;
	                this.match(LudiParser.T__31);
	                this.state = 300;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 305;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 306;
	            this.match(LudiParser.T__36);
	            break;

	        case 4:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 308;
	            localctx.name = this.lvalue();
	            break;

	        case 5:
	            localctx = new FunctionCallExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 309;
	            localctx.name = this.identifier();
	            this.state = 310;
	            this.match(LudiParser.T__3);
	            this.state = 319;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6 || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 6147) !== 0)) {
	                this.state = 311;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 316;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===32) {
	                    this.state = 312;
	                    this.match(LudiParser.T__31);
	                    this.state = 313;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 318;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 321;
	            this.match(LudiParser.T__4);
	            break;

	        case 6:
	            localctx = new NegationExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 323;
	            _la = this._input.LA(1);
	            if(!(_la===38 || _la===39)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 324;
	            this.expression(9);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 353;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 351;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 327;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 328;
	                    localctx.operator = this.match(LudiParser.T__39);
	                    this.state = 329;
	                    localctx.right = this.expression(9);
	                    break;

	                case 2:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 330;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 331;
	                    localctx.operator = this.match(LudiParser.T__40);
	                    this.state = 332;
	                    localctx.right = this.expression(8);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 333;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 334;
	                    localctx.operator = this.match(LudiParser.T__41);
	                    this.state = 335;
	                    localctx.right = this.expression(7);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 336;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 337;
	                    localctx.operator = this.match(LudiParser.T__42);
	                    this.state = 338;
	                    localctx.right = this.expression(6);
	                    break;

	                case 5:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 339;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 340;
	                    localctx.operator = this.match(LudiParser.T__43);
	                    this.state = 341;
	                    localctx.right = this.expression(5);
	                    break;

	                case 6:
	                    localctx = new ComparisonExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 342;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 343;
	                    localctx.operator = this.match(LudiParser.T__44);
	                    this.state = 344;
	                    localctx.right = this.expression(4);
	                    break;

	                case 7:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 345;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 346;
	                    localctx.operator = this.match(LudiParser.T__0);
	                    this.state = 347;
	                    localctx.right = this.expression(3);
	                    break;

	                case 8:
	                    localctx = new ConjunctionExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, LudiParser.RULE_expression);
	                    this.state = 348;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 349;
	                    localctx.operator = this.match(LudiParser.T__45);
	                    this.state = 350;
	                    localctx.right = this.expression(2);
	                    break;

	                } 
	            }
	            this.state = 355;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
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
	        this.state = 371;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IdentifierLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 356;
	            this.identifier();
	            break;

	        case 2:
	            localctx = new IndexLValueContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 357;
	            this.identifier();
	            this.state = 358;
	            this.match(LudiParser.T__35);
	            this.state = 367;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6 || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 6147) !== 0)) {
	                this.state = 359;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 364;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===32) {
	                    this.state = 360;
	                    this.match(LudiParser.T__31);
	                    this.state = 361;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 366;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 369;
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



	typeExpression() {
	    let localctx = new TypeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LudiParser.RULE_typeExpression);
	    var _la = 0;
	    try {
	        this.state = 395;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnionTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 373;
	            localctx._identifier = this.identifier();
	            localctx.values.push(localctx._identifier);
	            this.state = 378;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===1) {
	                this.state = 374;
	                this.match(LudiParser.T__0);
	                this.state = 375;
	                localctx._identifier = this.identifier();
	                localctx.values.push(localctx._identifier);
	                this.state = 380;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            localctx = new ParameterizedTypeExpressionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 381;
	            localctx.name = this.identifier();
	            this.state = 382;
	            this.match(LudiParser.T__42);
	            this.state = 391;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4 || _la===6 || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 6147) !== 0)) {
	                this.state = 383;
	                localctx._expression = this.expression(0);
	                localctx.arguments.push(localctx._expression);
	                this.state = 388;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===32) {
	                    this.state = 384;
	                    this.match(LudiParser.T__31);
	                    this.state = 385;
	                    localctx._expression = this.expression(0);
	                    localctx.arguments.push(localctx._expression);
	                    this.state = 390;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 393;
	            this.match(LudiParser.T__41);
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
	        this.state = 397;
	        this.match(LudiParser.T__35);
	        this.state = 398;
	        this.number();
	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 399;
	            this.match(LudiParser.T__31);
	            this.state = 400;
	            this.number();
	            this.state = 405;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 406;
	        this.match(LudiParser.T__36);
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
	        this.state = 439;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LeafViewContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 408;
	            this.match(LudiParser.T__42);
	            this.state = 409;
	            localctx.name = this.identifier();
	            this.state = 413;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6 || _la===49) {
	                this.state = 410;
	                localctx._viewAttribute = this.viewAttribute();
	                localctx.attributes.push(localctx._viewAttribute);
	                this.state = 415;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 416;
	            this.match(LudiParser.T__46);
	            this.state = 417;
	            this.match(LudiParser.T__41);
	            break;

	        case 2:
	            localctx = new StemViewContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 419;
	            this.match(LudiParser.T__42);
	            this.state = 420;
	            localctx.name = this.identifier();
	            this.state = 424;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6 || _la===49) {
	                this.state = 421;
	                localctx._viewAttribute = this.viewAttribute();
	                localctx.attributes.push(localctx._viewAttribute);
	                this.state = 426;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 427;
	            this.match(LudiParser.T__41);
	            this.state = 431;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 428;
	                    localctx._viewElement = this.viewElement();
	                    localctx.childViews.push(localctx._viewElement); 
	                }
	                this.state = 433;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
	            }

	            this.state = 434;
	            this.match(LudiParser.T__42);
	            this.state = 435;
	            this.match(LudiParser.T__46);
	            this.state = 436;
	            localctx.name2 = this.identifier();
	            this.state = 437;
	            this.match(LudiParser.T__41);
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
	        this.state = 441;
	        localctx.key = this.identifier();
	        this.state = 442;
	        this.match(LudiParser.T__39);
	        this.state = 443;
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
	        this.state = 445;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===49)) {
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
	        this.state = 447;
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
LudiParser.T__46 = 47;
LudiParser.QUOTED_STRING = 48;
LudiParser.IDENTIFIER = 49;
LudiParser.NUMBER = 50;
LudiParser.WS = 51;
LudiParser.COMMENT = 52;

LudiParser.RULE_rules = 0;
LudiParser.RULE_interaction = 1;
LudiParser.RULE_definition = 2;
LudiParser.RULE_players = 3;
LudiParser.RULE_action = 4;
LudiParser.RULE_trigger = 5;
LudiParser.RULE_win = 6;
LudiParser.RULE_loss = 7;
LudiParser.RULE_draw = 8;
LudiParser.RULE_setup = 9;
LudiParser.RULE_kind = 10;
LudiParser.RULE_state_definition = 11;
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

	draw() {
	    return this.getTypedRuleContext(DrawContext,0);
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



class DrawContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LudiParser.RULE_draw;
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
	        listener.enterDraw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LudiListener ) {
	        listener.exitDraw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LudiVisitor ) {
	        return visitor.visitDraw(this);
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
LudiParser.DrawContext = DrawContext; 
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
