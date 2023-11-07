import type { Action, Expression, Game, GameState, LValue, LudiType, Move, Parameter, Statement } from './types'
import * as builtins from './builtins';

export function initialize(game: Game, seed?: number) : GameState {
    let state: GameState = {
        position: {
            winner: null,
            variables: {
                ...(seed !== undefined ? {__seed: seed} : {})
            },
        },
        ply: 0,
        transientVariables: {},
        history: [],
    }

    // Default all state variables
    for (const stateVariable of game.stateVariables) {
        state.position.variables[stateVariable.name] = defaultValue(stateVariable.type);
    }

    if (game.setup) {
        for (const statement of game.setup.statements) {
            applyStatement(game, state, {}, statement);
        }
    }

    state.history.push({
        position: structuredClone(state.position),
        move: { actionName: 'setup', player: 'system', args: [] },
        ply: 0,
    });

    return state;
}

export function *enumerateMoves(game: Game, state: GameState) : IterableIterator<Move> {
    if (state.position.winner) {
        return;
    }

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
        const locals = action.parameters.reduce((intermediate, parameter, i) => ({...intermediate, [parameter.name]: args[i]}), {});

        if (!action.player) {
            // This should work, but I'm not sure of the semantics yet
            throw new Error(`Action ${JSON.stringify(action)} has no player`);
        }

        const player = evaluateExpression(game, state, locals, action.player);
        const move = {
            actionName: action.name!,
            player,
            args,
        };

        if (!nextPosition(game, state, move)) {
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

export function execute(game: Game, state: GameState, statements: Statement[], locals: Record<string, any>): GameState | null {
    const newState = structuredClone(state)

    for (const statement of statements) {
        if (!checkPreconditions(game, newState, locals, statement)) {
            return null;
        }
        applyStatement(game, newState, locals, statement);
    }

    return newState;
}

/** Returns the state which follows after playing `move`, or null if no valid state exists */
export function nextPosition(game: Game, state: GameState, move: Move, {inPlace} = {inPlace: false}): GameState | null {
    if (state.position.winner) {
        return null;
    }
    
    if (move.player !== state.position.variables[builtins.Variables.CurrentPlayer]) {
        return null;
    }

    const action = game.actions[move.actionName];
    const args = action.parameters.reduce((locals, parameter, i) => ({...locals, [parameter.name]: move.args[i]}), {});

    if (!action.conditions.every(condition => evaluateExpression(game, state, args, condition.expression))) {
        return null;
    }

    if (!inPlace) {
        state = structuredClone(state);
    }

    for (const statement of action.statements) {
        if (!checkPreconditions(game, state, args, statement)) {
            return null;
        }

        applyStatement(game, state, args, statement);
    }

    for (const winConditionName in game.winConditions) {
        const winCondition = game.winConditions[winConditionName];
        
        // Just enumerate all players for now
        for (const player of enumerateType(game.constants["Player"])){
            if (winCondition.conditions.every(c => evaluateExpression(game, state, {...args, player}, c.expression))) {
                state.position.winner = player;
                break;
            }
        }
    }

    state.ply++;
    state.history.push({
        move: move,
        position: structuredClone(state.position),
        ply: state.ply,
    });

    state.transientVariables = {};

    return state;
}

export function rewindTo(state: GameState, ply: number) {
    state = structuredClone(state);

    const historyItem = state.history[ply]

    return {
        ...state,
        ply: ply,
        position: structuredClone(historyItem.position),
        history: state.history.slice(0, ply+1),
    }
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
        case 'move':
            // OPTIMIZE Double evaluation with regular running of the action.
            const from = toReference(game, state, locals, statement.from);
            const to = toReference(game, state, locals, statement.from);

            return from.getValue() !== builtins.Variables.Empty && to.getValue() === builtins.Variables.Empty;
        case 'remember':
            return true;
        case 'increase':
        case 'decrease':
            // Must look at variable types and check that it's in range
            return true;
        case 'play':
            const move: Move = {
                actionName: statement.actionName,
                player: evaluateExpression(game, state, locals, statement.player),
                args: statement.arguments.map(arg => evaluateExpression(game, state, locals, arg))
            };
            return nextPosition(game, state, move) != null;
        default:
            throw new Error(`Unknown statement ${JSON.stringify(statement)}`);
    }
}

function applyStatement(game: Game, state: GameState, locals: Record<string, any>, statement: Statement) {
    try {
        switch (statement.type) {
            case 'play': {
                const move: Move = {
                    actionName: statement.actionName,
                    player: evaluateExpression(game, state, locals, statement.player),
                    args: statement.arguments.map(arg => evaluateExpression(game, state, locals, arg))
                };
                nextPosition(game, state, move, {inPlace: true});
                return;
            }
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
            case 'move': {
                const from = toReference(game, state, locals, statement.from);
                const to = toReference(game, state, locals, statement.to);

                to.setValue(from.getValue());
                from.setValue(builtins.Variables.Empty);
                return;
            }
            case 'set': {
                const variable = toReference(game, state, locals, statement.variable);
                const newValue = evaluateExpression(game, state, locals, statement.value);
                variable.setValue(newValue);
                return;
            }
            case 'remember': {
                const value = evaluateExpression(game, state, locals, statement.value);
                state.transientVariables[statement.variable] = value;
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
    } catch (e: any) {
        throw new Error(`Error running statement ${JSON.stringify(statement)}: ${e.message}`);
    }
}

interface Reference {
    getValue: () => any;
    setValue: (value: any) => void;
}

function toReference(game: Game, state: GameState, locals: Record<string, any>, lvalue: LValue): Reference {
    // subtract one to one-index everything
    let indexValues = lvalue.indexes.map(index => evaluateExpression(game, state, locals, index) - 1);

    let target = state.position.variables;
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
            const stateValue = state.position.variables[expression.name];
            const constantValue = game.constants[expression.name];
            const transientValue = state.transientVariables[expression.name];

            if ([transientValue, localValue, stateValue, constantValue].filter(v => v !== undefined).length > 1) {
                throw new Error(`Variable ${expression.name} found in more than one place. This indicates an error in the engine.`);
            }

            const value = transientValue ?? localValue ?? stateValue ?? constantValue;
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

export function nextPlayer(game: Game, currentPlayers: string[]): string | null {
    const allPlayers = enumerateType(game.constants["Player"]);
    const nextPlayer = allPlayers.filter(p => !currentPlayers.includes(p))[0];

    return nextPlayer;
}

export function unfilledPlayers(game: Game, currentPlayers: string[]): string[] {
    const allPlayers = enumerateType(game.constants["Player"]);
    return allPlayers.filter(p => !currentPlayers.includes(p));
}


export function enumerateType(type: LudiType) {
    return builtins.types[type.name].enumerate(type);
}

export function defaultValue(type: LudiType) {
    return builtins.types[type.name].defaultValue(type);
}

export function typeOfVariable(game: Game, variableName: string) {
    return game.stateVariables.find(s => s.name === variableName)?.type;
}
