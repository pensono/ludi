export interface Game {
    setup?: Action;
    actions: Record<string, Action>;
}

export interface Action {
    conditions: Condition[];
    statements: Statement[];
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

export type Expression = ConstantExpression | FunctionCallExpression;

export interface ConstantExpression {
    type: "constant";
    value: any;
}

export interface FunctionCallExpression {
    type: "function-call";
    name: string;
    arguments: Expression[];
}


export interface GameState {
    variables: Record<string, any>;
    ply: number;
}

export interface LudiFunction {
    argument_types: string[];
    return_type: string;
    /** Can have "side-effects" on the game state */
    invoke: (state: GameState, args: any[]) => any;
}