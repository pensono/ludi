import seedrandom from 'seedrandom';
import type { GameState, LudiFunction } from './types';

export const functions: Record<string, LudiFunction> = {
    'RandomNumber': {
        parameter_types: [
            'number'
        ],
        return_type: 'number',
        invoke: (state: GameState, args: any[]): any => {
            if (state.variables.__seed === undefined) {
                state.variables.__seed = Math.floor(Math.random() * 100000);
            }
            const min = args[0];
            const max = args[1];

            var rng = seedrandom(state.variables.__seed.toString());
            const result = Math.floor(rng() * (max - min + 1) + min);
            
            state.variables.__seed++;

            return result;
        }
    },
    
    '<': comparison((left, right) => left < right),
    '>': comparison((left, right) => left > right),
    '<=': comparison((left, right) => left <= right),
    '>=': comparison((left, right) => left >= right),
}

function comparison(operator: (left: number, right: number) => boolean) {
    return {
        parameter_types: [
            'number',
            'number'
        ],
        return_type: 'boolean',
        invoke: (state: GameState, args: any[]): any => {
            const left = args[0];
            const right = args[1];

            return operator(left, right);
        }
    }
}