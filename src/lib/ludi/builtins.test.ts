import { functions } from './builtins';
import { describe, it, expect } from 'vitest';

describe('InARow', () => {
    const inARow = functions.InARow;

    it(`Basic`, () => {
        const actual = inARow.invoke(null!, [1, [[0, 0, 0], [0, 1, 0], [0, 0, 0]], 3]);
        expect(actual).toBe(false);
    });
});