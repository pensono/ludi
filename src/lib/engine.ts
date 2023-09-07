import type { Action, Expression, Game, GameState, Statement } from './types'
import * as builtins from './builtins'

export function initialize(game: Game, seed?: number) : GameState {
    let state = {
        variables: {
            ...(seed !== undefined ? {__seed: seed} : {})
        },
        ply: 0
    }

    if (game.setup) {
        runAction(game, state, game.setup);
    }

    return state;
}

export function runAction(game: Game, state: GameState, action: Action) : GameState {
    // const action = game.actions[actionName];
    // if (!action) {
    //     throw new Error(`Action ${actionName} not found`);
    // }

    // Don't modify the original- this is useful when simulating alternatives
    state = {...state}

    for (const statement of action.statements) {
        runStatement(game, state, statement);
    }

    state.ply++;

    return state;
}

export function runStatement(game: Game, state: GameState, statement: Statement) {
    switch (statement.type) {
        case 'change': {
            const oldValue = state.variables[statement.variable];
            const newValue = evaluateExpression(state, statement.value);

            if (oldValue === newValue) {
                // Typechecking should prevent this from happening
                throw new Error(`Change statement would not change anything. This indicates an error in the engine. Old value: ${oldValue}, new value: ${newValue}`);
            }

            state.variables[statement.variable] = newValue;
            return;
        }
        case 'set': {
            const newValue = evaluateExpression(state, statement.value);
            state.variables[statement.variable] = newValue;
            return;
        }
        case 'increase': {
            const oldValue = state.variables[statement.variable];
            if (typeof oldValue !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot increment a non-number. This indicates an error in the engine. Variable ${statement.variable}, Value: ${oldValue}`);
            }

            const amount = evaluateExpression(state, statement.amount);
            if (typeof amount !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot increment by a non-number. This indicates an error in the engine. Value: ${amount}`);
            }

            state.variables[statement.variable] = oldValue + amount;
            return;
        }
        case 'decrease': {
            const oldValue = state.variables[statement.variable];
            if (typeof oldValue !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot decrement a non-number. This indicates an error in the engine. Variable ${statement.variable}, Value: ${oldValue}`);
            }

            const amount = evaluateExpression(state, statement.amount);
            if (typeof amount !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot decrement by a non-number. This indicates an error in the engine. Value: ${amount}`);
            }

            state.variables[statement.variable] = oldValue + amount;
            return;
        }
        default:
            throw new Error(`Unknown statement ${JSON.stringify(statement)}`);
    }
}

export function evaluateExpression(state: GameState, expression: Expression) : any {
    switch (expression.type) {
        case 'constant':
            return expression.value;
        case 'function-call': {
            // Only builtins for now
            const func = builtins.functions[expression.name];
            if (func === undefined) {
                throw new Error(`Function ${expression.name} not found. This indicates an error in the engine.`);
            }

            const args = expression.arguments.map(arg => evaluateExpression(state, arg));
            return func.invoke(state, args);
        }
        default:
            throw new Error(`Unknown expression ${JSON.stringify(expression)}`);
    }
}