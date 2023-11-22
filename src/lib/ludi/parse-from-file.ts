import { FileStream }  from 'antlr4';
import type { Rules } from './types'
import { fromStream } from './parser';

export function fromFile(fileName: string): Rules {
    return fromStream(new FileStream(fileName))
}