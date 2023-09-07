import { fromFile, fromString } from '$lib/ludi';
import { describe, it, expect, assert } from 'vitest';
import { initialize } from './engine';

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