export interface Game {
    setup?: Action;
    playerType: LudiType;
    actions: Record<string, Action>;
    stateVariables: Record<string, StateVariable>;
    constants: Record<string, any>;
    views: ViewElement[];
}

export interface Action {
    name?: string;
    player: Expression;
    conditions: Condition[];
    statements: Statement[];
    parameters: Parameter[];
}

export type Statement = ChangeStatement | SetStatement | IncreaseStatement | DecreaseStatement;

export interface ChangeStatement {
    type: "change";
    variable: LValue;
    value: Expression;
}

export interface SetStatement {
    type: "set";
    variable: LValue;
    value: Expression;
}

export interface IncreaseStatement {
    type: "increase";
    variable: LValue;
    amount: Expression;
}

export interface DecreaseStatement {
    type: "decrease";
    variable: LValue;
    amount: Expression;
}

export interface Condition {
    expression: Expression;
}

export type Expression = ConstantExpression | IdentifierExpression | FunctionCallExpression | IndexExpression;

export interface ConstantExpression {
    type: "constant";
    value: any;
}

export interface IdentifierExpression {
    type: "identifier";
    name: string;
}

export interface FunctionCallExpression {
    type: "function-call";
    name: string;
    arguments: Expression[];
}

export interface IndexExpression {
    type: "index";
    variable: string;
    indexes: Expression[];
}

export interface Parameter {
    name: string;
    type: LudiType;
}

export interface StateVariable {
    name: string;
    type: LudiType;
}

export interface Move {
    actionName: string;
    player: string;
    args: any[];
}

// Combine straight variables and indexes for now
export interface LValue {
    name: string;
    indexes: Expression[];
}

export interface LudiFunction {
    parameter_types: string[];
    return_type: string;
    /** Can have "side-effects" on the game state */
    invoke: (state: GameState, args: any[]) => any;
}

export interface LudiType {
    name: string;
    parameters: Record<string, any>;
}

export interface ViewElement {
    name: string;
    attributes: Record<string, string>;
    children: ViewElement[];
}

export interface GameState {
    variables: Record<string, any>;
    ply: number;
}

export interface HistoryItem {
    move: Move;

    /** The state that was obtained after playing `move` */
    state: GameState;
}