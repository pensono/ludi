import seedrandom from 'seedrandom';
import type { GameState, LudiFunction, LudiType } from './types';
import { enumerateType, defaultValue } from './engine';

export const functions: Record<string, LudiFunction> = {
    '=': comparison((left, right) => left === right),
    '<': comparison((left, right) => left < right),
    '>': comparison((left, right) => left > right),
    '<=': comparison((left, right) => left <= right),
    '>=': comparison((left, right) => left >= right),

    'RandomNumber': {
        parameter_types: [
            'number',
            'number',
        ],
        return_type: 'number',
        invoke: (state: GameState, args: any[]): any => {
            if (state.position.variables.__seed === undefined) {
                state.position.variables.__seed = Math.floor(Math.random() * 100000);
            }
            const min = args[0];
            const max = args[1];

            var rng = seedrandom(state.position.variables.__seed.toString());
            const result = Math.floor(rng() * (max - min + 1) + min);
            
            state.position.variables.__seed++;

            return result;
        }
    },
    
    // Sucky name
    'NextInSequence': {
        parameter_types: [
            'any',
            'type'
        ],
        return_type: 'any',
        invoke: (state: GameState, args: any[]): any => {
            const current = args[0];
            const type = args[1];

            const typeValues = enumerateType(type);
            const currentIndex = typeValues.indexOf(current as never);
            const nextIndex = (currentIndex + 1) % typeValues.length;

            return typeValues[nextIndex];
        }
    },

    'InARow': {
        parameter_types: [
            'any',
            'Grid',
            'number'
        ],
        return_type: 'boolean',
        invoke: (state: GameState, args: any[]): any => {
            const needle = args[0];
            const haystack = args[1];
            const count = args[2];
            // 4th arg can be the direction, horizontal, vertical, or diagonal

            if (count < 1) {
                throw Error(`InARow count must be at least 1`)
            }

            // Check horizontal
            for (let y = 0; y < haystack.length; y++) {
                let currentCount = 0;
                for (let x = 0; x < haystack[y].length; x++) {
                    if (haystack[y][x] === needle) {
                        currentCount++;
                    } else {
                        currentCount = 0;
                    }

                    if (currentCount >= count) {
                        return true;
                    }
                }
            }

            // check vertical
            for (let x = 0; x < haystack[0].length; x++) {
                let currentCount = 0;
                for (let y = 0; y < haystack.length; y++) {
                    if (haystack[y][x] === needle) {
                        currentCount++;
                    } else {
                        currentCount = 0;
                    }

                    if (currentCount >= count) {
                        return true;
                    }
                }
            }

            // Check \ diagonal
            for (let y = 0; y <= haystack.length - count; y++) {
                square:
                for (let x = 0; x <= haystack[y].length - count; x++) {
                    for (let i = 0; i < count; i++) {
                        if (haystack[y + i]?.[x + i] !== needle) {
                            continue square;
                        }
                    }
                    return true;
                }
            } 
            
            // Check / diagonal
            for (let y = count - 1; y < haystack.length; y++) {
                square:
                for (let x = 0; x <= haystack[y].length - count; x++) {
                    for (let i = 0; i < count; i++) {
                        if (haystack[y - i]?.[x + i] !== needle) {
                            continue square;
                        }
                    }
                    return true;
                }
            }

            return false;
        }
    },
    
    'IsDiagonal': {
        parameter_types: [
            'Grid',
            'number',
            'number',
            'number',
            'number',
        ],
        return_type: 'number',
        invoke: (state: GameState, args: any[]): any => {
            if (state.position.variables.__seed === undefined) {
                state.position.variables.__seed = Math.floor(Math.random() * 100000);
            }
            const min = args[0];
            const max = args[1];

            var rng = seedrandom(state.position.variables.__seed.toString());
            const result = Math.floor(rng() * (max - min + 1) + min);
            
            state.position.variables.__seed++;

            return result;
        }
    },
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

export interface TypeSpecification {
    construct: (values: any[]) => LudiType;
    defaultValue: (type: LudiType) => any;
    enumerate: (type: LudiType) => any[];
}

export const types: Record<string, TypeSpecification> = {
    'Number': {
        construct(values: any[]) {
            return {
                name: 'Number',
                parameters: {
                    min: values[0],
                    max: values[1],
                }
            }
        },
        defaultValue(type: LudiType) {
            return type.parameters.min;
        },
        enumerate(type: LudiType) {
            return new Array(type.parameters.max - type.parameters.min + 1).fill(null).map((_, i) => i + type.parameters.min);
        }
    },
    'Enumeration': {
        construct(values: any[]) {
            return {
                name: 'Enumeration',
                parameters: {
                    values: values,
                }
            }
        },
        defaultValue(type: LudiType) {
            return type.parameters.values[0];
        },
        enumerate(type: LudiType) { 
            return type.parameters.values;
        }
    },
    'Grid': {
        construct(values: any[]) {
            return {
                name: 'Grid',
                parameters: {
                    elementType: values[0],
                    width: values[1],
                    height: values[2],
                }
            }
        },
        defaultValue(type: LudiType) {
            const defaultElementValue = defaultValue(type.parameters.elementType as LudiType);
            const width = type.parameters.width;
            const height = type.parameters.height;

            return new Array(width).fill(null).map(() => new Array(height).fill(defaultElementValue));
        },
        enumerate(type: LudiType) {
            const elementValues = enumerateType(type.parameters.elementType as LudiType);

            throw new Error(`Not implemented`);
        }
    }
}

// This is definitely not the right type for this, but I want to make a list of special values
export enum Variables {
    CurrentPlayer = 'CurrentPlayer',
    Empty = 'Empty',
}