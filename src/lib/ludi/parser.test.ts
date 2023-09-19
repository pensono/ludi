import { fromFile, fromString } from './parser';
import { describe, it, expect } from 'vitest';

describe('games can parse', () => {
	it(`number-guessing.ludi parses`, () => {
		fromFile(`./games/number-guessing.ludi`);
	});
	it(`tic-tac-toe.ludi parses`, () => {
		fromFile(`./games/tic-tac-toe.ludi`);
	});
});