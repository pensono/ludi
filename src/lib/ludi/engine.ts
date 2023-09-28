import type { Action, Expression, Game, GameState, LValue, LudiType, Move, Parameter, Statement } from './types'
import * as builtins from './builtins'
import { parseMoveExpression } from './parser';

export function initialize(game: Game, seed?: number) : GameState {
    let state: GameState = {
        variables: {
            ...(seed !== undefined ? {__seed: seed} : {})
        },
        ply: 0,
    }

    // Default all state variables
    for (const variableName in game.stateVariables) {
        state.variables[variableName] = defaultValue(game.stateVariables[variableName].type);
    }

    if (game.setup) {
        for (const statement of game.setup.statements) {
            runStatement(game, state, {}, statement);
        }
    }

    return state;
}


export function *enumerateMoves(game: Game, state: GameState) : IterableIterator<Move> {
    for (const actionName in game.actions) {
        const action = game.actions[actionName];

        yield* enumerateActionMoves(game, state, action, action.parameters, []);
    }
}

export function playMove(game: Game, state: GameState, move: Move): GameState {
    state = structuredClone(state)

    const action = game.actions[move.actionName];
    const locals = action.parameters.reduce((locals, parameter, i) => ({...locals, [parameter.name]: move.args[i]}), {});

    for (const statement of action.statements) {
        runStatement(game, state, locals, statement);
    }

    state.ply++;

    return state;
}

/** Returns null if the move is not possible with the given game state. Parse errors/etc will throw */
export function parseAndEvaluateMove(game: Game, state: GameState, moveText: string, locals: Record<string, any>): Move | null {
    // TODO Somehow this should be either embedded into the game, or better split between the parser?
    // Very hacky to have this "just do it" sort of method in the engine which is only used by the UI
    const moveExpression = parseMoveExpression(moveText);
    const args = moveExpression.arguments.map(arg => evaluateExpression(game, state, locals, arg));
    const player = evaluateExpression(game, state, locals, moveExpression.player);

    const move: Move = {
        actionName: moveExpression.actionName,
        player: player,
        args: args,
    }

    if (!checkMove(game, state, locals, move)) {
        return null;
    }

    return move;
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
        const player = evaluateExpression(game, state, locals, action.player);
        const move = {
            actionName: action.name!,
            player,
            args,
        };

        if (!checkMove(game, state, locals, move)) {
            return;
        }

        yield move;
        return;
    }

    const parameter = remainingParameters[0];
    const newRemainingParameters = remainingParameters.slice(1);
    for (const value of enumerateType(parameter.type)) {
        yield* enumerateActionMoves(game, state, action, newRemainingParameters, [...args, value]);
    }
}

function checkMove(game: Game, state: GameState, locals: Record<string, any>, move: Move): boolean {
    const action = game.actions[move.actionName];
    if (!action.conditions.every(condition => evaluateExpression(game, state, locals, condition.expression))) {
        return false;
    }

    if (move.player !== state.variables['CurrentPlayer']) {
        return false;
    }

    // Duplication with runAction :(
    var dummyState = structuredClone(state)
    for (const statement of action.statements) {
        if (!checkPreconditions(game, dummyState, locals, statement)) {
            return false;
        }
        runStatement(game, dummyState, locals, statement);
    }

    return true;
}

export function enumerateType(type: LudiType) {
    return builtins.types[type.name].enumerate(type);
}

export function defaultValue(type: LudiType) {
    return builtins.types[type.name].defaultValue(type);
}


function checkPreconditions(game: Game, state: GameState, locals: Record<string, any>, statement: Statement): boolean {
    // OPTIMIZE cache this somehow?
    switch (statement.type) {
        case 'change':
            // OPTIMIZE Double evaluation with regular running of the action.
            const variable = toReference(game, state, locals, statement.variable);
            return variable.getValue() !== evaluateExpression(game, state, locals, statement.value);
        case 'set':
            return true;
        case 'increase':
        case 'decrease':
            // Must look at variable types and check that it's in range
            return true;
        default:
            throw new Error(`Unknown statement ${JSON.stringify(statement)}`);
    }
}

interface Reference {
    getValue: () => any;
    setValue: (value: any) => void;
}

function toReference(game: Game, state: GameState, locals: Record<string, any>, lvalue: LValue): Reference {
    // subtract one to one-index everything
    let indexValues = lvalue.indexes.map(index => evaluateExpression(game, state, locals, index) - 1);

    let target = state.variables;
    let index: any = lvalue.name;

    for (const indexValue of indexValues) {
        target = target[index];
        index = indexValue;
    }

    return {
        getValue: () => target[index],
        setValue: (value: any) => target[index] = value,
    };
}

function runStatement(game: Game, state: GameState, locals: Record<string, any>, statement: Statement) {
    switch (statement.type) {
        case 'change': {
            const variable = toReference(game, state, locals, statement.variable);
            const newValue = evaluateExpression(game, state, locals, statement.value);

            if (variable.getValue() === newValue) {
                // Typechecking should prevent this from happening
                throw new Error(`Change statement would not change anything. This indicates an error in the engine. Old value: ${variable.getValue()}, new value: ${newValue}`);
            }

            variable.setValue(newValue);
            return;
        }
        case 'set': {
            const variable = toReference(game, state, locals, statement.variable);
            const newValue = evaluateExpression(game, state, locals, statement.value);
            variable.setValue(newValue);
            return;
        }
        case 'increase': {
            const variable = toReference(game, state, locals, statement.variable);
            if (typeof variable.getValue() !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot increment a non-number. This indicates an error in the engine. Variable ${statement.variable}, Value: ${variable.getValue()}`);
            }

            const amount = evaluateExpression(game, state, locals, statement.amount);
            if (typeof amount !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot increment by a non-number. This indicates an error in the engine. Value: ${amount}`);
            }

            variable.setValue(variable.getValue() + amount);
            return;
        }
        case 'decrease': {
            const variable = toReference(game, state, locals, statement.variable);
            if (typeof variable.getValue() !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot decrement a non-number. This indicates an error in the engine. Variable ${statement.variable}, Value: ${variable.getValue()}`);
            }

            const amount = evaluateExpression(game, state, locals, statement.amount);
            if (typeof amount !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot decrement by a non-number. This indicates an error in the engine. Value: ${amount}`);
            }

            variable.setValue(variable.getValue() - amount);
            return;
        }
        default:
            throw new Error(`Unknown statement ${JSON.stringify(statement)}`);
    }
}

export function evaluateExpression(game: Game, state: GameState, locals: Record<string, any>, expression: Expression) : any {
    switch (expression.type) {
        case 'constant':
            return expression.value;
        case 'function-call': {
            // Only builtins for now
            const func = builtins.functions[expression.name];
            if (func === undefined) {
                throw new Error(`Function ${expression.name} not found when evaluating ${JSON.stringify(expression)}. This indicates an error in the engine.`);
            }

            const args = expression.arguments.map(arg => evaluateExpression(game, state, locals, arg));
            return func.invoke(state, args);
        }
        case 'identifier': {
            const localValue = locals[expression.name];
            const stateValue = state.variables[expression.name];
            const constantValue = game.constants[expression.name];

            if ([localValue, stateValue, constantValue].filter(v => v !== undefined).length > 1) {
                throw new Error(`Variable ${expression.name} found in more than one place. This indicates an error in the engine.`);
            }

            const value = localValue ?? stateValue ?? constantValue;
            if (value === undefined) {
                throw new Error(`Variable ${expression.name} not found. This indicates an error in the engine.`);
            }

            return value;
        }
        case 'index': {
            let value = evaluateExpression(game, state, locals, {type: 'identifier', name: expression.variable});
            const indexes = expression.indexes.map(index => evaluateExpression(game, state, locals, index) - 1);
            
            for (const index of indexes) {
                value = value[index];
            }

            return value;
        }
        default:
            throw new Error(`Unknown expression ${JSON.stringify(expression)}`);
    }
}
