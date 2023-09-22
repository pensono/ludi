import { fromString } from './parser';
import { describe, it, expect } from 'vitest';
import { enumerateMoves, initialize } from './engine';
import { fromFile } from './parse-from-file';

describe('starting position', () => {
    it(`number-guessing.ludi`, () => {
        const game = fromFile(`./static/games/number-guessing.ludi`);
        const initialState = initialize(game, 0);

        expect(initialState).toEqual({
            ply: 0,
            variables: {
                "HiddenNumber": 8,
                "RemainingGuesses": 3,
                "__seed": 1,
            }
        });
    });
})

describe('enumerate moves', () => {
    it(`number-guessing.ludi`, () => {
        const game = fromFile(`./static/games/number-guessing.ludi`);
        let state = initialize(game, 0);

        let moves = [...enumerateMoves(game, state)];

        expect(moves).toEqual([
            {actionName: "Guess", args: [1]},
            {actionName: "Guess", args: [2]},
            {actionName: "Guess", args: [3]},
            {actionName: "Guess", args: [4]},
            {actionName: "Guess", args: [5]},
            {actionName: "Guess", args: [6]},
            {actionName: "Guess", args: [7]},
            {actionName: "Guess", args: [8]},
            {actionName: "Guess", args: [9]},
            {actionName: "Guess", args: [10]},
        ]);
    });
    
    it(`One move`, () => {
        const game = fromString(`
            action OnlyThingToDo():
        `);
        let state = initialize(game);

        let moves = [...enumerateMoves(game, state)];

        expect(moves).toEqual([
            {actionName: "OnlyThingToDo", args: []},
        ]);
    });
    
    it(`No moves`, () => {
        const game = fromString("");
        let state = initialize(game);

        let moves = [...enumerateMoves(game, state)];

        expect(moves).toEqual([]);
    });

    it(`Conditional move`, () => {
        const game = fromString(`
            state Minimum a Number<1, 10>

            setup:
                set Minimum to 5

            action Action(number a Number<1, 10>):
                when number > Minimum
        `);
        let state = initialize(game);

        let moves = [...enumerateMoves(game, state)];

        expect(moves).toEqual([
            {actionName: "Action", args: [6]},
            {actionName: "Action", args: [7]},
            {actionName: "Action", args: [8]},
            {actionName: "Action", args: [9]},
            {actionName: "Action", args: [10]},
        ]);
    });
    
    it(`Change`, () => {
        const game = fromString(`
            state LastGuess a Number<1, 3>

            setup:
                set LastGuess to 2

            action Action(number a Number<1, 3>):
                change LastGuess to number
        `);
        let state = initialize(game);

        let moves = [...enumerateMoves(game, state)];

        expect(moves).toEqual([
            {actionName: "Action", args: [1]},
            {actionName: "Action", args: [3]},
        ]);
    });
    
    it(`Change after mutation`, () => {
        const game = fromString(`
            state LastGuess a Number<1, 3>

            setup:
                set LastGuess to 2

            action Action(number a Number<1, 3>):
                change LastGuess to 3
                change LastGuess to number
        `);
        let state = initialize(game);

        let moves = [...enumerateMoves(game, state)];

        expect(moves).toEqual([
            {actionName: "Action", args: [1]},
            {actionName: "Action", args: [2]},
        ]);
    });
})