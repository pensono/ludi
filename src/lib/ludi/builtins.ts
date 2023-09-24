import seedrandom from 'seedrandom';
import type { GameState, LudiFunction, LudiType, ParametricType } from './types';
import { enumerateType, defaultValue } from './engine';

export const functions: Record<string, LudiFunction> = {
    'RandomNumber': {
        parameter_types: [
            'number',
            'number',
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

    '=': comparison((left, right) => left === right),
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
                name: 'Enumaretion',
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