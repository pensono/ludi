import { fromFile, fromString } from '$lib/ludi';
import fs from 'fs';
import { describe, it, expect } from 'vitest';

describe('games can parse', () => {
	it(`number-guessing.ludi parses`, () => {
		fromFile(`./games/number-guessing.ludi`);
	});
	it(`tic-tac-toe.ludi parses`, () => {
		fromString(`./games/tic-tac-toe.ludi`);
	});
});