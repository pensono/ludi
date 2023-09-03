grammar Ludi;

game: definition* EOF;

definition
    : action
    | setup
    | trigger
    | win
    | loss
    | kind
    | state_definition;

action: 'action' name=identifier '(' (args+=identifier (',' args+=identifier)*)? ')' ':' conditions+=when* statement+;

trigger: 'trigger' name=identifier '(' (args+=identifier (',' args+=identifier)*)? ')' ':' conditions+=when* statement+;

win: 'win' name=identifier '(' (args+=identifier (',' args+=identifier)*)? ')' ':' conditions+=when*;
    
loss: 'loss' name=identifier '(' (args+=identifier (',' args+=identifier)*)? ')' ':' conditions+=when*;

setup: 'setup' ':' statement+;

// players: 'players' ':' identifier (',' identifier)*; // Need something for unnamed players too, variable number of players etc

kind: 'kind' name=identifier ':' typeExpression;
    
// Must name state_definition to avoid conflicts with antlr internals
state_definition: 'state' name=identifier ':' typeExpression;

statement
    : 'change' lvalue 'to' expression # ChangeStatement
    | 'set' lvalue 'to' expression # SetStatement
    | 'increase' lvalue 'by' expression # IncreaseStatement
    | 'decrease' lvalue 'by' expression # DecreaseStatement
    | 'if' condition 'then' statement+ 'end' # IfStatement;

when: 'when' condition;

condition
    : ('not' | '!') condition # Negation // Would be good to settle on some syntax here...
    | left=condition operator='or' right=condition # Conjunction
    | left=condition operator='and' right=condition # Conjunction
    | left=expression operator='=' right=expression # Comparison
    | left=expression operator='!=' right=expression # Comparison
    | left=expression operator='>' right=expression # Comparison
    | left=expression operator='<' right=expression # Comparison
    | left=expression operator='>=' right=expression # Comparison
    | left=expression operator='<=' right=expression # Comparison;

expression
    : '(' expression ')' # ParenthizedExpression
    |  lvalue # IdentifierExpression
    | NUMBER # NumberExpression
    | identifier '(' (args+=expression (',' args+=expression)*)? ')' # FunctionCallExpression;


lvalue
    : identifier;

typeExpression
    : identifier
    | identifier 'or' identifier // Union
    | '{' name=identifier type=typeExpression '}' // Record
    | identifier '[' (args+=expression (',' args+=expression)*)? ']'; // Parameters. Somehow the args must be constants

identifier: IDENTIFIER;

number: NUMBER;

IDENTIFIER
    // Include numbers too as long as there's at least one letter
    // Should eliminate one extra point of confusion for non-programmers
    : [A-Za-z] [A-Za-z0-9]+
    | [A-Za-z0-9]+ [A-Za-z] [A-Za-z0-9]+;

NUMBER: [0-9]+; // No floats! Discrete games ftw! (for now)

WS: [ \t\r\n]+ -> skip;