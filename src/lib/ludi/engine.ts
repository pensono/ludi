import type { Action, Expression, Rules, GameState, LValue, LudiType, Move, Parameter, Statement } from './types'
import * as builtins from './builtins';
import { diagonalCoordinatesBetweenExclusive } from './builtins';

export function initialize(rules: Rules, seed?: number) : GameState {
    let state: GameState = {
        position: {
            variables: {
                ...(seed !== undefined ? {__seed: seed} : {})
            },
        },
        ply: 0,
        transientVariables: {},
        references: {},
        history: [],
    }

    // Default all state variables
    for (const stateVariable of rules.stateVariables) {
        state.position.variables[stateVariable.name] = defaultValue(stateVariable.type);
    }

    if (rules.setup) {
        for (const statement of rules.setup.statements) {
            executeStatement(rules, state, "initialize", {}, statement);
        }
    }

    state.history.push({
        position: structuredClone(state.position),
        move: { actionName: 'setup', player: 'system', args: [] },
        ply: 0,
    });

    return state;
}

export function *enumerateMoves(rules: Rules, state: GameState) : IterableIterator<Move> {
    if (state.position.result) {
        return;
    }

    for (const role of enumerateType(rules.playerType)) {
        for (const action of rules.actions) {
            for (const args of legalArguments(rules, state, action, role)) {
                yield {
                    actionName: action.name!,
                    player: role,
                    args,
                };
            }
        }
    }
}

function *legalArguments(rules: Rules, state: GameState, action: Action, role: string | null = null) : IterableIterator<any[]> {
    if (action.player) {
        const expectedPlayer = evaluateExpression(rules, state, {}, action.player);
        if (role !== expectedPlayer) {
            return;
        }

        // Need to find a better way to only let the current player play for games where multiple players may action
        if (role != state.position.variables[builtins.Variables.CurrentPlayer]) {
            return;
        }
    }

    yield* legalArgumentsImpl(rules, state, action, role, action.parameters, []);
}

function *legalArgumentsImpl(rules: Rules, state: GameState, action: Action, role: string | null, remainingParameters: Parameter[], args: any[]) : IterableIterator<any[]> {
    // There are many faster ways to do this, but this is easy to implement and fast enough for most games
    // Using something like SMT is ideal
    if (remainingParameters.length === 0) {
        if (action.name === undefined) {
            throw new Error(`Action ${JSON.stringify(action)} has no name`);
        }

        // This extra transformation is sad but fine for now
        const locals = action.parameters.reduce((intermediate, parameter, i) => ({...intermediate, [parameter.name]: args[i]}), {});

        if (role != null && !action.player) {
            // This should work, but I'm not sure of the semantics yet
            throw new Error(`Action ${JSON.stringify(action)} has no player`);
        }

        if (!executeBlock(rules, state, action, role, args)) {
            return;
        }

        yield args;
        return;
    }

    const parameter = remainingParameters[0];
    const newRemainingParameters = remainingParameters.slice(1);
    for (const value of enumerateType(parameter.type)) {
        yield* legalArgumentsImpl(rules, state, action, role, newRemainingParameters, [...args, value]);
    }
}

export function execute(rules: Rules, state: GameState, role: string, statements: Statement[], locals: Record<string, any>): GameState | null {
    const newState = structuredClone(state)

    for (const statement of statements) {
        if (!executeStatement(rules, newState, role, locals, statement)) {
            return null;
        }
    }

    return newState;
}

export function playMove(rules: Rules, state: GameState, move: Move): GameState | null {
    let action = rules.actions.filter(a => a.name === move.actionName && move.player == evaluateExpression(rules, state, {}, a.player))[0];
    if (!action) {
        throw Error(`Action ${move.actionName} not found`)
    }

    const newState = executeBlock(rules, state, action, move.player, move.args);
    if (!newState) {
        return null;
    }

    // Run available triggers
    // !! Scary! possible infinite loop!
    outer: while (true) {
        for (const trigger of rules.triggers) {
            const argsIter = legalArguments(rules, newState, trigger).next();
            if (argsIter.done) {
                continue;
            }

            executeBlock(rules, newState, trigger, null, argsIter.value, {inPlace: true});

            // Triggers are run from top to bottom, and each time one fires it begins again from the top
            continue outer;
        }

        break;
    }

    for (const winCondition of rules.winConditions) {
        // Just enumerate all players for now
        for (const player of enumerateType(rules.playerType)){
            if (winCondition.conditions.every(c => evaluateExpression(rules, newState, {player}, c.expression))) {
                newState.position.result = {winner: player};
                break;
            }
        }
    }
    
    // Wins always happen before draws (? yes? desired behavior?)
    if (!newState.position.result) {
        for (const drawCondition of rules.drawConditions) {
            if (drawCondition.conditions.every(c => evaluateExpression(rules, newState, {}, c.expression))) {
                newState.position.result = 'draw'
                break;
            }
        }
    }


    newState.ply++;
    newState.history.push({
        move: move,
        position: structuredClone(newState.position),
        ply: newState.ply,
    });

    newState.transientVariables = {};
    newState.references = {};

    return newState;
}

/** Returns the state which follows after playing `move`, or null if no valid state exists */
export function executeBlock(rules: Rules, state: GameState, action: Action, role: string | null, args: any[], {inPlace} = {inPlace: false}): GameState | null {
    if (state.position.result) {
        return null;
    }

    const argsMap = action.parameters.reduce((locals, parameter, i) => ({...locals, [parameter.name]: args[i]}), {});

    if (!action.conditions.every(condition => evaluateExpression(rules, state, argsMap, condition.expression))) {
        return null;
    }

    if (!inPlace) {
        state = structuredClone(state);
    }

    for (const statement of action.statements) {
        if (!executeStatement(rules, state, role, argsMap, statement)) {
            return null;
        }
    }

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

export function toMove(rules: Rules, state: GameState, locals: Record<string, any>, statement: Statement): Move {
    if (statement.type != 'play') {
        throw new Error("Not a play statement")
    }
    const player = evaluateExpression(rules, state, locals, statement.player);
    const args = statement.arguments.map(arg => evaluateExpression(rules, state, locals, arg));

    // playMove will also execute triggers/evaluate wins/increase ply etc
    return {
        actionName: statement.actionName,
        player,
        args
    };
}

function executeStatement(rules: Rules, state: GameState, role: string | null, locals: Record<string, any>, statement: Statement) : boolean {
    switch (statement.type) {
        case 'play': {
            const player = evaluateExpression(rules, state, locals, statement.player);
            if (player != role) {
                console.log("Player", player, "is not", role);
                return false;
            }

            let action = rules.actions.filter(a => a.name === statement.actionName && player == evaluateExpression(rules, state, {}, a.player))[0];
            if (!action) {
                throw Error(`Action ${statement.actionName} not found`)
            }

            const args = statement.arguments.map(arg => evaluateExpression(rules, state, locals, arg));

            // playMove will also execute triggers/evaluate wins/increase ply etc
            return executeBlock(rules, state, action, player, args, {inPlace: true}) !== null;
        }
        case 'change': {
            const variable = toReference(rules, state, locals, statement.variable);
            const newValue = evaluateExpression(rules, state, locals, statement.value);

            // Changing a value always works when it's being set for the first time
            if (variable.hasValue() && variable.getValue() === newValue) {
                return false;
            }

            variable.setValue(newValue);
            return true;
        }
        case 'move': {
            const from = toReference(rules, state, locals, statement.from);
            const to = toReference(rules, state, locals, statement.to);

            if (statement.movements?.length) {
                // TODO multi-dimensional
                const delta = {
                    x: to.indexes[0] - from.indexes[0],
                    y: to.indexes[1] - from.indexes[1]
                }

                if (statement.movements.every(m => m.x != delta.x || m.y != delta.y)) {
                    return false;
                }
            }

            if (statement.direction) {
                switch (statement.direction) {
                    // Lots of gross going on here
                    case "Diagonal": {
                        if (!builtins.onSameDiagonal(from.indexes[0], from.indexes[1], to.indexes[0], to.indexes[1])) {
                            return false;
                        }
                        break;
                    }
                    default:
                        throw new Error(`Unknown direction ${statement.direction}`);
                }
            }

            if (statement.distance) {
                if (!statement.direction) {
                    throw new Error(`Distance cannot be specified without a direction`);
                }

                if (statement.distance != builtins.axisDistance(from.indexes[0], from.indexes[1], to.indexes[0], to.indexes[1])) {
                    return false;
                }
            }

            if (statement.over) {
                if (!statement.direction) {
                    throw new Error(`Over cannot be specified without a direction`);
                }
                
                let overCoordinates = undefined;
                switch (statement.direction) {
                    // Lots of gross going on here
                    case "Diagonal": {
                        const board = state.position.variables[statement.from.name]
                        for (const {x, y} of diagonalCoordinatesBetweenExclusive(from.indexes[0]+1, from.indexes[1]+1, to.indexes[0]+1, to.indexes[1]+1)) {
                            // Semantics are ambiguous here- Can it be only over empty or the piece, or must be over the piece at some point?
                            // Do the first for now
                            if (statement.over.set.includes(board[x-1][y-1])) {
                                overCoordinates = {x, y};
                                break;
                            }
                        }

                        if (!overCoordinates) {
                            return false;
                        }

                        if (statement.over.name) {
                            // What scope to put this into?
                            state.references[statement.over.name] = {
                                name: statement.from.name,
                                indexes: [
                                    {type: "constant", value: overCoordinates.x}, 
                                    {type: "constant", value: overCoordinates.y}
                                ],
                            };
                        }

                        break;
                    }
                    default:
                        throw new Error(`Unknown direction ${statement.direction}`);
                }
            }

            to.setValue(from.getValue());
            from.setValue(builtins.Variables.Empty);
            return true;
        }
        case 'remove': {
            const variable = toReference(rules, state, locals, statement.what);

            if (variable.getValue() === builtins.Variables.Empty) {
                // Must remove something
                return false;
            }

            variable.setValue(builtins.Variables.Empty);
            return true;
        }
        case 'set': {
            const variable = toReference(rules, state, locals, statement.variable);
            const newValue = evaluateExpression(rules, state, locals, statement.value);
            variable.setValue(newValue);
            return true;
        }
        case 'remember': {
            const value = evaluateExpression(rules, state, locals, statement.value);
            state.transientVariables[statement.variable] = value;
            return true;
        }
        case 'increase': {
            const variable = toReference(rules, state, locals, statement.variable);
            if (typeof variable.getValue() !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot increment a non-number. This indicates an error in the engine. Variable ${statement.variable}, Value: ${variable.getValue()}`);
            }

            const amount = evaluateExpression(rules, state, locals, statement.amount);
            if (typeof amount !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot increment by a non-number. This indicates an error in the engine. Value: ${amount}`);
            }

            variable.setValue(variable.getValue() + amount);
            return true;
        }
        case 'decrease': {
            const variable = toReference(rules, state, locals, statement.variable);
            if (typeof variable.getValue() !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot decrement a non-number. This indicates an error in the engine. Variable ${statement.variable}, Value: ${variable.getValue()}`);
            }

            const amount = evaluateExpression(rules, state, locals, statement.amount);
            if (typeof amount !== 'number') {
                // Typechecking should prevent this from happening
                throw new Error(`Cannot decrement by a non-number. This indicates an error in the engine. Value: ${amount}`);
            }

            variable.setValue(variable.getValue() - amount);
            return true;
        }
        default:
            throw new Error(`Unknown statement ${JSON.stringify(statement)}`);
    }
}

interface Reference {
    getValue: () => any;
    hasValue: () => boolean;
    setValue: (value: any) => void;
    indexes: number[]
}

function toReference(rules: Rules, state: GameState, locals: Record<string, any>, lvalue: LValue): Reference {
    if (state.references[lvalue.name]) {
        return toReference(rules, state, locals, state.references[lvalue.name]);
    }

    // subtract one to one-index everything
    let indexValues = lvalue.indexes.map(index => evaluateExpression(rules, state, locals, index) - 1);

    let target = state.position.variables;
    let index: any = lvalue.name;

    for (const indexValue of indexValues) {
        target = target[index];
        index = indexValue;
    }

    return {
        getValue: () => {
            const result = target[index];
            if (result === undefined) {
                throw new Error(`Index ${index} not found`);
            }
            return result;
        },
        hasValue: () => target[index] !== undefined,
        setValue: (value: any) => target[index] = value,
        indexes: indexValues
    };
}

export function evaluateExpression(rules: Rules, state: GameState, locals: Record<string, any>, expression: Expression) : any {
    switch (expression.type) {
        case 'constant':
            return expression.value;
        case 'function-call': {
            // Only builtins for now
            const func = builtins.functions[expression.name];
            if (func === undefined) {
                throw new Error(`Function ${expression.name} not found when evaluating ${JSON.stringify(expression)}. This indicates an error in the engine.`);
            }

            const args = expression.arguments.map(arg => evaluateExpression(rules, state, locals, arg));
            return func.invoke(rules, state, args);
        }
        case 'identifier': {
            const localValue = locals[expression.name];
            const stateValue = state.position.variables[expression.name];
            const constantValue = rules.constants[expression.name];
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
            let value = evaluateExpression(rules, state, locals, {type: 'identifier', name: expression.variable});
            const indexes = expression.indexes.map(index => evaluateExpression(rules, state, locals, index) - 1);

            for (const index of indexes) {
                value = value[index];
            }

            return value;
        }
        default:
            throw new Error(`Unknown expression ${JSON.stringify(expression)}`);
    }
}

export function nextPlayer(rules: Rules, currentPlayers: string[]): string | null {
    const allPlayers = enumerateType(rules.constants["Player"]);
    const nextPlayer = allPlayers.filter(p => !currentPlayers.includes(p))[0];

    return nextPlayer;
}

export function unfilledPlayers(rules: Rules, currentPlayers: string[]): string[] {
    const allPlayers = enumerateType(rules.constants["Player"]);
    return allPlayers.filter(p => !currentPlayers.includes(p));
}


export function enumerateType(type: LudiType) {
    return builtins.types[type.name].enumerate(type);
}

export function defaultValue(type: LudiType) {
    return builtins.types[type.name].defaultValue(type);
}

export function typeOfVariable(rules: Rules, variableName: string) {
    return rules.stateVariables.find(s => s.name === variableName)?.type;
}
