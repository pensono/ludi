import { fromString } from '$lib/lang/ludi';
import fs from 'fs';
import { describe, it, expect } from 'vitest';

describe('games can parse', () => {
	it(`number-guessing.ludi parses`, () => {
		const game = fs.readFileSync(`./games/number-guessing.ludi`);
		fromString(game.toString());
	});
	it(`tic-tac-toe.ludi parses`, () => {
		const game = fs.readFileSync(`./games/tic-tac-toe.ludi`);
		fromString(game.toString());
	});
});