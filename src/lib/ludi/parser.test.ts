import { describe, expect, it } from 'vitest';
import { fromFile } from './parse-from-file';

describe('games can parse', () => {
	it(`number-guessing.ludi parses`, () => {
		const game = fromFile(`./static/games/number-guessing.ludi`);
		
		expect(game.stateVariables).toEqual(expect.arrayContaining([
				{ name: "HiddenNumber", type: { name: "Number", parameters: { min: 1, max: 10 } } },
				{ name: "RemainingGuesses", type: { name: "Number", parameters: {min: 0, max: 10 } } },
			])
		);
	});
	it(`tic-tac-toe.ludi parses`, () => {
		const game = fromFile(`./static/games/tic-tac-toe.ludi`);
	});
});
