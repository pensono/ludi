grammar Ludi;

// Philosophy
// - Be consistent
// - Don't overload
// - Don't be implicit
// - Avoid symbols which are not well known. High school should be enough education

game: definition* EOF;

definition
    : players
    | action
    | setup
    | trigger
    | win
    | loss
    | kind
    | state_definition
    | view;

players: 'players' type=typeExpression;

action: 'action' name=identifier '(' parameterList ')' ('for' player=expression)? ':' conditions+=when* statement*;

trigger: 'trigger' name=identifier '(' parameterList ')' ':' conditions+=when* statement*;

win: 'win' name=identifier '(' parameterList ')' ('for' player=expression)? ':' conditions+=when*;
    
loss: 'loss' name=identifier '(' parameterList ')' ('for' player=expression)? ':' conditions+=when*;

setup: 'setup' ':' statement+;

// players: 'players' ':' identifier (',' identifier)*; // Need something for unnamed players too, variable number of players etc

kind: 'kind' name=identifier 'a' type=typeExpression;
    
// Must name state_definition to avoid conflicts with antlr internals
state_definition: 'state' name=identifier 'a' type=typeExpression;

view: 'view' ':' elements+=viewElement*;

statement
    : 'change' lvalue 'to' expression # ChangeStatement
    | 'set' lvalue 'to' expression # SetStatement
    | 'increase' lvalue 'by' expression # IncreaseStatement
    | 'decrease' lvalue 'by' expression # DecreaseStatement
    | 'if' expression 'then' statement+ 'end' # IfStatement;

when: 'when' expression;

parameterList: (names+=identifier 'a' types+=typeExpression (',' names+=identifier 'a' types+=typeExpression)*)?;

expression
    : '(' expression ')' # ParenthizedExpression
    | NUMBER # NumberExpression
    | name=identifier '[' arguments+=expression (',' arguments+=expression)*']' # IndexExpression
    | name=lvalue # IdentifierExpression
    | name=identifier '(' (arguments+=expression (',' arguments+=expression)*)? ')' # FunctionCallExpression
    | ('not' | '!') expression # NegationExpression // Would be good to settle on some syntax here...
    | left=expression operator='or' right=expression # ConjunctionExpression
    | left=expression operator='and' right=expression # ConjunctionExpression
    | left=expression operator='=' right=expression # ComparisonExpression
    | left=expression operator='!=' right=expression # ComparisonExpression
    | left=expression operator='>' right=expression # ComparisonExpression
    | left=expression operator='<' right=expression # ComparisonExpression
    | left=expression operator='>=' right=expression # ComparisonExpression
    | left=expression operator='<=' right=expression # ComparisonExpression;


lvalue
    : identifier # IdentifierLValue
    | identifier '[' (arguments+=expression (',' arguments+=expression)*)? ']' # IndexLValue; // Not sure about this syntax at all

// Don't let these be recursive, instead force users to write everything out so it's clearer
typeExpression
    : identifier # TypeIdentifierExpression
    | values+=identifier ('or' values+=identifier)+ # UnionTypeExpression
    // | '{' name=identifier type=identifier '}'  // Record
    | name=identifier '<' (arguments+=expression (',' arguments+=expression)*)? '>' # ParameterizedTypeExpression; // Somehow the args must be constants

viewElement
    : '<' name=identifier attributes+=viewAttribute* '/' '>' # LeafView
    | '<' name=identifier attributes+=viewAttribute* '>' children+=viewElement* '<' '/' name2=identifier '>' # StemView;

viewAttribute: key=identifier '=' value=QUOTED_STRING;

identifier: IDENTIFIER | 'for';

number: NUMBER;

QUOTED_STRING: '"' ( '\\"' | ~["] )*? '"';

IDENTIFIER
    // Include numbers too as long as there's at least one letter
    // Should eliminate one extra point of confusion for non-programmers
    : [A-Za-z] [A-Za-z0-9]*
    | [A-Za-z0-9]+ [A-Za-z] [A-Za-z0-9]*;

NUMBER: [0-9]+; // No floats! Discrete games ftw! (for now)

WS: [ \t\r\n]+ -> channel(HIDDEN);