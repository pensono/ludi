import { fromString } from '$lib/lang/ludi';
import fs from 'fs';
import { describe, it, expect } from 'vitest';

describe('games can parse', () => {
	it('number guessing', () => {
		const game = fs.readFileSync('./games/number-guessing.ludi');
		fromString(game.toString());
	});
});
