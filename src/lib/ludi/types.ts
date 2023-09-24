export interface Game {
    setup?: Action;
    playerType: LudiType;
    actions: Record<string, Action>;
    stateVariables: StateVariable[];
}

export interface Action {
    name?: string;
    conditions: Condition[];
    statements: Statement[];
    parameters: Parameter[];
}

export type Statement = ChangeStatement | SetStatement | IncreaseStatement | DecreaseStatement;

export interface ChangeStatement {
    type: "change";
    variable: string;
    value: Expression;
}

export interface SetStatement {
    type: "set";
    variable: string;
    value: Expression;
}

export interface IncreaseStatement {
    type: "increase";
    variable: string;
    amount: Expression;
}

export interface DecreaseStatement {
    type: "decrease";
    variable: string;
    amount: Expression;
}

export interface Condition {
    expression: Expression;
}

export type Expression = ConstantExpression | IdentifierExpression | FunctionCallExpression;

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
    args: any[];
}

export interface LudiFunction {
    parameter_types: string[];
    return_type: string;
    /** Can have "side-effects" on the game state */
    invoke: (state: GameState, args: any[]) => any;
}

export type LudiType = NumberType | EnumerationType;

export interface NumberType {
    type: "number";
    min: number;
    max: number;
}

export interface EnumerationType {
    type: "enumeration";
    values: string[];
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