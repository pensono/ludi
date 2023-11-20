import { describe, expect, it } from 'vitest';
import { fromFile } from './parse-from-file';
import { ludi } from './parser';

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

describe('prescience', () => {
	it(`and/or and operators`, () => {
		const game = ludi`
		action Test():
			when x = 1 and y = 2
		`;
		
		expect(game.actions[0].conditions).toEqual(
			[
				{
					expression: {
						type: "function-call",
						name: "and",
						arguments: [
							{ type: "function-call", name: "=", arguments: [{ type: "identifier", name: "x" }, { type: "constant", value: 1 }] },
							{ type: "function-call", name: "=", arguments: [{ type: "identifier", name: "y" }, { type: "constant", value: 2 }] },
						]
					}
				}
			]
		);
	});
});
