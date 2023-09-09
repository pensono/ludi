grammar Ludi;

// Philosophy
// - Be consistent
// - Don't overload
// - Don't be implicit
// - Avoid symbols which are not well known. High school should be enough education

game: definition* EOF;

definition
    : action
    | setup
    | trigger
    | win
    | loss
    | kind
    | state_definition;

action: 'action' name=identifier '(' parameterList ')' ':' conditions+=when* statement*;

trigger: 'trigger' name=identifier '(' parameterList ')' ':' conditions+=when* statement*;

win: 'win' name=identifier '(' parameterList ')' ':' conditions+=when*;
    
loss: 'loss' name=identifier '(' parameterList ')' ':' conditions+=when*;

setup: 'setup' ':' statement+;

// players: 'players' ':' identifier (',' identifier)*; // Need something for unnamed players too, variable number of players etc

kind: 'kind' name=identifier 'a' typeExpression;
    
// Must name state_definition to avoid conflicts with antlr internals
state_definition: 'state' name=identifier 'a' typeExpression;

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
    | name=lvalue # IdentifierExpression
    | NUMBER # NumberExpression
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
    : identifier
    | identifier '[' (arguments+=expression (',' arguments+=expression)*)? ']'; // Not sure about this syntax at all

// Don't let these be recursive, instead force users to write everything out so it's clearer
typeExpression
    : identifier # TypeIdentifierExpression
    | identifier ('or' identifier)+ # UnionTypeExpression
    // | '{' name=identifier type=identifier '}'  // Record
    | identifier '<' (arguments+=expression (',' arguments+=expression)*)? '>' # ParameterizedTypeExpression; // Somehow the args must be constants

identifier: IDENTIFIER;

number: NUMBER;

IDENTIFIER
    // Include numbers too as long as there's at least one letter
    // Should eliminate one extra point of confusion for non-programmers
    : [A-Za-z] [A-Za-z0-9]*
    | [A-Za-z0-9]+ [A-Za-z] [A-Za-z0-9]*;

NUMBER: [0-9]+; // No floats! Discrete games ftw! (for now)

WS: [ \t\r\n]+ -> skip;