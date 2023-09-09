import type { Action, Expression, Game, GameState, LudiType, Move, Parameter, Statement } from './types'
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


export function *enumerateMoves(game: Game, state: GameState) : IterableIterator<Move> {
    for (const actionName in game.actions) {
        const action = game.actions[actionName];

        yield* enumerateActionMoves(game, state, action, action.parameters, []);
    }
}

function *enumerateActionMoves(game: Game, state: GameState, action: Action, remainingParameters: Parameter[], args: any[]) : IterableIterator<Move> {
    // There are many faster ways to do this, but this is easy to implement and fast enough for most games
    // Using something like SMT is ideal
    if (remainingParameters.length === 0) {
        if (action.name === undefined) {
            new Error(`Action ${JSON.stringify(action)} has no name`);
        }

        // This extra transformation is sad but fine for now
        const locals = action.parameters.reduce((locals, parameter, i) => ({...locals, [parameter.name]: args[i]}), {});

        if (action.conditions.every(condition => evaluateExpression(state, locals, condition.expression))) {
            yield {
                actionName: action.name!,
                args
            };
        }
        return;
    }

    const parameter = remainingParameters[0];
    const newRemainingParameters = remainingParameters.slice(1);
    for (const value of enumerateValues(parameter.type)) {
        yield* enumerateActionMoves(game, state, action, newRemainingParameters, [...args, value]);
    }
}

function enumerateValues(type: LudiType) {
    switch (type.type) {
        case 'number':
            return new Array(type.max - type.min + 1).fill(null).map((_, i) => i + type.min);
        case 'enumeration':
            return type.values;
        default:
            throw new Error(`Unknown type ${type}`);
    }
}

export function runAction(game: Game, state: GameState, action: Action) : GameState {
    // const action = game.actions[actionName];
    // if (!action) {
    //     throw new Error(`Action ${actionName} not found`);
    // }

    // Don't modify the original- this is useful when simulating alternatives
    state = {...state}

    for (const statement of action.statements) {
        runStatement(game, state, {}, statement);
    }

    state.ply++;

    return state;
}

export function runStatement(game: Game, state: GameState, locals: Record<string, any>, statement: Statement) {
    switch (statement.type) {
        case 'change': {
            const oldValue = state.variables[statement.variable];
            const newValue = evaluateExpression(state, locals, statement.value);

            if (oldValue === newValue) {
                // Typechecking should prevent this from happening
                throw new Error(`Change statement would not change anything. This indicates an error in the engine. Old value: ${oldValue}, new value: ${newValue}`);
            }

            state.variables[statement.variable] = newValue;
            return;
        }
        case 'set': {
            const newValue = evaluateExpression(state, locals, statement.value);
            state.variables[statement.variable] = newValue;
            return;
        }
        case 'increase': {
            const oldValue = state.variables[statement.variable];
            if (typeof oldValue !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot increment a non-number. This indicates an error in the engine. Variable ${statement.variable}, Value: ${oldValue}`);
            }

            const amount = evaluateExpression(state, locals, statement.amount);
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

            const amount = evaluateExpression(state, locals, statement.amount);
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

export function evaluateExpression(state: GameState, locals: Record<string, any>, expression: Expression) : any {
    switch (expression.type) {
        case 'constant':
            return expression.value;
        case 'function-call': {
            // Only builtins for now
            const func = builtins.functions[expression.name];
            if (func === undefined) {
                throw new Error(`Function ${expression.name} not found when evaluating ${JSON.stringify(expression)}. This indicates an error in the engine.`);
            }

            const args = expression.arguments.map(arg => evaluateExpression(state, locals, arg));
            return func.invoke(state, args);
        }
        case 'identifier': {
            const localValue = locals[expression.name];
            const stateValue = state.variables[expression.name];
            if (localValue !== undefined && stateValue !== undefined) {
                throw new Error(`Variable ${expression.name} found in both locals and global state. This indicates an error in the engine.`);
            }

            const value = localValue ?? stateValue;
            if (value === undefined) {
                throw new Error(`Variable ${expression.name} not found. This indicates an error in the engine.`);
            }

            return value;
        }
        default:
            throw new Error(`Unknown expression ${JSON.stringify(expression)}`);
    }
}