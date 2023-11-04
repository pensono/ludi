import { functions } from './builtins';
import { describe, it, expect } from 'vitest';

describe('InARow', () => {
    const inARow = functions.InARow;

    it(`Basic`, () => {
        const actual = inARow.invoke(null!, [1, [[0, 0, 0], [0, 1, 0], [0, 0, 0]], 3]);
        expect(actual).toBe(false);
    });
    
    it(`Diagonal Forward`, () => {
        const actual = inARow.invoke(null!, [1, [[1, 0, 0], [0, 1, 0], [0, 0, 1]], 3]);
        expect(actual).toBe(true);
    });

    it(`Diagonal Reverse`, () => {
        const actual = inARow.invoke(null!, [1, [[0, 0, 1], [0, 1, 0], [1, 0, 0]], 3]);
        expect(actual).toBe(true);
    });

    it('bug 1', () => {
        const board =  [
            ["Empty","Black","Empty","Empty"],
            ["Black","Empty","Empty","Empty"],
            ["Empty","Empty","Empty","Black"],
          ];
        const actual = inARow.invoke(null!, ["Black", board, 3]);
        expect(actual).toBe(false);
    })
});