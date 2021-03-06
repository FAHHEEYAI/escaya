import { Node } from '../node';
import { Expression } from '.';
import { TemplateExpression } from './template-expression';

/**
 * Template element.
 */
export interface TemplateElement extends Node {
  readonly raw: string;
  readonly value: string;
  readonly expression: Expression | null;
  /* @internal */
  readonly parent?: TemplateExpression;
}

export function createTemplateElement(raw: string, value: string, expression: Expression | null): TemplateElement {
  return {
    type: 'TemplateElement',
    raw,
    value,
    expression
  };
}
