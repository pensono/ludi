grammar Ludi;

// Philosophy
// - Be consistent
// - Don't overload
// - Don't be implicit
// - Avoid symbols which are not well known. High school should be enough education
// - Use english words, but computer syntax

// Top level .ludi file
rules: definition* EOF;

// Top level "code" within a view
interaction: statements+=statement ('or' statements+=statement)*;

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
    : 'change' lvalue 'to' expression # ChangeStatement // change x from Y to Z ??
    | 'set' lvalue 'to' expression # SetStatement
    | 'move' from=lvalue 'to' to=lvalue
        ('by' movements+=coordinate ('or' movements+=coordinate)*)? 
        ('direction' direction=identifier)? 
        ('distance' distance=number)? 
        // Should over be a type instead? Merge types/sets together?
        ('over' over+=identifier ('or' over+=identifier)* ('named' overName=identifier))? # MoveStatement
    | 'remove' lvalue # RemoveStatement
    | 'increase' lvalue 'by' expression # IncreaseStatement
    | 'decrease' lvalue 'by' expression # DecreaseStatement
    | 'if' expression 'then' statement+ 'end' # IfStatement
    | 'play' actionName=identifier '(' (arguments+=expression (',' arguments+=expression)*)? ')' ('for' playerExpression=expression)? # PlayStatement
    | 'remember' expression 'as' variableName=identifier # RememberStatement;

when: 'when' expression;

parameterList: (names+=identifier 'a' types+=typeExpression (',' names+=identifier 'a' types+=typeExpression)*)?;

expression
    : '(' expression ')' # ParenthizedExpression
    | NUMBER # NumberExpression
    | name=identifier '[' arguments+=expression (',' arguments+=expression)*']' # IndexExpression
    | name=lvalue # IdentifierExpression
    | name=identifier '(' (arguments+=expression (',' arguments+=expression)*)? ')' # FunctionCallExpression
    | ('not' | '!') expression # NegationExpression // Would be good to settle on some syntax here...
    | left=expression operator='=' right=expression # ComparisonExpression
    | left=expression operator='!=' right=expression # ComparisonExpression
    | left=expression operator='>' right=expression # ComparisonExpression
    | left=expression operator='<' right=expression # ComparisonExpression
    | left=expression operator='>=' right=expression # ComparisonExpression
    | left=expression operator='<=' right=expression # ComparisonExpression
    | left=expression operator='or' right=expression # ConjunctionExpression
    | left=expression operator='and' right=expression # ConjunctionExpression;


lvalue
    : identifier # IdentifierLValue
    | identifier '[' (arguments+=expression (',' arguments+=expression)*)? ']' # IndexLValue; // Not sure about this syntax at all

// Don't let these be recursive, instead force users to write everything out so it's clearer
typeExpression
    // : identifier # TypeIdentifierExpression // Is this one even necesseary?
    : values+=identifier ('or' values+=identifier)* # UnionTypeExpression
    // | '{' name=identifier type=identifier '}'  // Record
    | name=identifier '<' (arguments+=expression (',' arguments+=expression)*)? '>' # ParameterizedTypeExpression; // Somehow the args must be constants

coordinate: '[' number (',' number)* ']';

viewElement
    : '<' name=identifier attributes+=viewAttribute* '/' '>' # LeafView
    | '<' name=identifier attributes+=viewAttribute* '>' childViews+=viewElement* '<' '/' name2=identifier '>' # StemView;

viewAttribute: key=identifier '=' value=QUOTED_STRING;

identifier: IDENTIFIER | 'for';

number: NUMBER;

QUOTED_STRING: '"' ( '\\"' | ~["] )*? '"';

IDENTIFIER
    // Include numbers too as long as there's at least one letter
    // Should eliminate one extra point of confusion for non-programmers
    : [A-Za-z] [A-Za-z0-9]*
    | [A-Za-z0-9]+ [A-Za-z] [A-Za-z0-9]*;

NUMBER: '-'? [0-9]+; // No floats! Discrete games ftw! (for now)

WS: [ \t\r\n]+ -> channel(HIDDEN);

COMMENT: '//' ~[\r\n]* -> channel(HIDDEN);