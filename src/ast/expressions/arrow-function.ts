import { FunctionBody } from './function-body';
import { BindingRestElement } from './binding-rest-element';
import { BindingIdentifier } from './binding-identifier';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { Expression } from './';
import { Node } from '../node';

export type ArrowFormals = BindingIdentifier | BindingRestElement | ArrayBindingPattern | ObjectBindingPattern;

export interface ArrowFunction extends Node {
  readonly params: ArrowFormals[];
  readonly contents: Expression | FunctionBody;
  // True for `AsyncArrowFunction`, false otherwise.
  async: boolean;
}

export function createArrowFunction(
  params: ArrowFormals[],
  contents: Expression | FunctionBody,
  async: boolean
): ArrowFunction {
  return {
    type: 'ArrowFunction',
    params,
    contents,
    async
  };
}
