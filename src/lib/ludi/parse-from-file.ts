import { FileStream }  from 'antlr4';
import type { Game, } from './types'
import { fromStream } from './parser';

export function fromFile(fileName: string): Game {
    return fromStream(new FileStream(fileName))
}