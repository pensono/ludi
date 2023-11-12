import { fromString, ludi, parseStatementList } from './parser';
import { describe, it, expect } from 'vitest';
import { enumerateMoves, enumerateType, execute, initialize, nextPosition } from './engine';
import { fromFile } from './parse-from-file';

describe('starting position', () => {
    it(`number-guessing.ludi`, () => {
        const game = fromFile(`./static/games/number-guessing.ludi`);
        const initialState = initialize(game, 0);

        expect(initialState.position).toEqual({
            winner: null,
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
            {actionName: "Guess", args: [1], player: undefined},
            {actionName: "Guess", args: [2], player: undefined},
            {actionName: "Guess", args: [3], player: undefined},
            {actionName: "Guess", args: [4], player: undefined},
            {actionName: "Guess", args: [5], player: undefined},
            {actionName: "Guess", args: [6], player: undefined},
            {actionName: "Guess", args: [7], player: undefined},
            {actionName: "Guess", args: [8], player: undefined},
            {actionName: "Guess", args: [9], player: undefined},
            {actionName: "Guess", args: [10], player: undefined},
        ]);
    });
    
    it(`number-guessing-2player.ludi`, () => {
        const game = fromFile(`./static/games/number-guessing-2player.ludi`);
        let state = initialize(game, 0);

        let moves = [...enumerateMoves(game, state)];

        expect(moves).toEqual([
            {actionName: "Choose", args: [1], player: "Chooser"},
            {actionName: "Choose", args: [2], player: "Chooser"},
            {actionName: "Choose", args: [3], player: "Chooser"},
            {actionName: "Choose", args: [4], player: "Chooser"},
            {actionName: "Choose", args: [5], player: "Chooser"},
            {actionName: "Choose", args: [6], player: "Chooser"},
            {actionName: "Choose", args: [7], player: "Chooser"},
            {actionName: "Choose", args: [8], player: "Chooser"},
            {actionName: "Choose", args: [9], player: "Chooser"},
            {actionName: "Choose", args: [10], player: "Chooser"},
        ]);
    });
    
    it(`tic-tac-toe.ludi`, () => {
        const game = fromFile(`./static/games/tic-tac-toe.ludi`);
        let state = initialize(game, 0);

        let moves = [...enumerateMoves(game, state)];

        expect(moves).toEqual([
            {actionName: "PlacePiece", args: [1, 1], player: "X"},
            {actionName: "PlacePiece", args: [1, 2], player: "X"},
            {actionName: "PlacePiece", args: [1, 3], player: "X"},
            {actionName: "PlacePiece", args: [2, 1], player: "X"},
            {actionName: "PlacePiece", args: [2, 2], player: "X"},
            {actionName: "PlacePiece", args: [2, 3], player: "X"},
            {actionName: "PlacePiece", args: [3, 1], player: "X"},
            {actionName: "PlacePiece", args: [3, 2], player: "X"},
            {actionName: "PlacePiece", args: [3, 3], player: "X"},
        ]);

        state = nextPosition(game, state,  "X", moves[0])!;
        expect(state).not.toBeNull()

        moves = [...enumerateMoves(game, state)];
        expect(moves).toEqual([
            {actionName: "PlacePiece", args: [1, 2], player: "O"},
            {actionName: "PlacePiece", args: [1, 3], player: "O"},
            {actionName: "PlacePiece", args: [2, 1], player: "O"},
            {actionName: "PlacePiece", args: [2, 2], player: "O"},
            {actionName: "PlacePiece", args: [2, 3], player: "O"},
            {actionName: "PlacePiece", args: [3, 1], player: "O"},
            {actionName: "PlacePiece", args: [3, 2], player: "O"},
            {actionName: "PlacePiece", args: [3, 3], player: "O"},
        ]);
    });
    
    it(`One move`, () => {
        const game = ludi`
            action OnlyThingToDo():
        `;
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
        const game = ludi`
            state Minimum a Number<1, 10>

            setup:
                set Minimum to 5

            action Action(number a Number<1, 10>):
                when number > Minimum
        `;
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
        const game = ludi`
            players A
            state LastGuess a Number<1, 3>

            setup:
                set LastGuess to 2

            action Action(number a Number<1, 3>) for CurrentPlayer:
                change LastGuess to 3
                change LastGuess to number
        `;
        let state = initialize(game);

        let moves = [...enumerateMoves(game, state)];

        expect(moves).toEqual([
            {actionName: "Action", args: [1]},
            {actionName: "Action", args: [2]},
        ]);
    });
})

describe('players', () => {
    it(`tic-tac-toe.ludi`, () => {
        const game = fromFile(`./static/games/tic-tac-toe.ludi`);
        expect(enumerateType(game.playerType)).toEqual(['X', 'O']);
    });
})

describe('triggers', () => {
    it(`basic`, () => {
        const game = ludi`
            players X
            state LastGuess a Number<1, 10>

            setup:
                set LastGuess to 0

            action Action(number a Number<1, 10>) for X:
                change LastGuess to number
            
            trigger Adjust():
                when LastGuess < 5
                increase LastGuess by 1
        `;
        let state = initialize(game);

        const statements = parseStatementList("play Action(3) for X")
        const actual = execute(game, state, "X", statements, {})!;

        expect(actual.position).toEqual({
            winner: null,
            variables: {
                "LastGuess": 5,
                "CurrentPlayer": "X",
            }
        });
    });
})

describe('execute', () => {
    it(`tic-tac-toe.ludi`, () => {
        const game = ludi`
            players X or Y
            state Result a Number<1, 3>

            setup:
                set Result to 1

            action Action() for X:
                set Result to 2

            action Action() for Y:
                set Result to 3
        `;
        const state = initialize(game);

        const statements = parseStatementList("play PlacePiece(x, y) for X")
        const actual = execute(game, state,  "X", statements, {x: 1, y: 1})!;

        expect(actual.position).toEqual({
            winner: null,
            variables: {
                "Board": [
                    ["X", "Empty", "Empty"],
                    ["Empty", "Empty", "Empty"],
                    ["Empty", "Empty", "Empty"],
                ],
                "CurrentPlayer": "O",
            }
        });
    });

    it(`Choose based on player`, () => {
        const game = ludi`
            players X or Y
            state Result a Number<1, 3>

            setup:
                set Result to 1

            action Action() for X:
                set Result to 2

            action Action() for Y:
                set Result to 3
        `;
        let state = initialize(game);

        const statements = parseStatementList("play Action() for X")
        const actual = execute(game, state,  "X", statements, {})!;

        expect(actual.position).toEqual({
            winner: null,
            variables: {
                "Result": 2,
                "CurrentPlayer": "X",
            }
        });
    });
})

describe('win conditions', () => {
    it(`Basic wins`, () => {
        const game = fromString(`
            players A or B
            state LastGuess a Number<1, 3>

            setup:
                set LastGuess to 1

            action Action(number a Number<1, 3>):
                change LastGuess to number

            win Win() for player:
                when LastGuess = 3
        `);
        let state = initialize(game);

        state = nextPosition(game, state,  "A", {actionName: "Action", args: [3], player: "A"})!;
        expect(state).not.toBeNull();

        expect(state.position.winner).toEqual("A");
    });
});