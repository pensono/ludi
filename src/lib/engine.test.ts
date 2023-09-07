import { fromFile, fromString } from '$lib/ludi';
import { describe, it, expect, assert } from 'vitest';
import { enumerateMoves, initialize } from './engine';

describe('starting position', () => {
	it(`number-guessing.ludi`, () => {
		const game = fromFile(`./games/number-guessing.ludi`);
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
		const game = fromFile(`./games/number-guessing.ludi`);
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
})