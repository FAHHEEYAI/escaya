import { Expression } from './expressions';
import { Statement } from './statements';
import { ImportExport } from './module';
import { Module } from './module-node';
import { Script } from './script-node';
import { RootNode } from './root-node';

/**
 * The set of all syntax item types.
 */
export type Node = ImportExport | Statement | Expression | Script | Module | RootNode;
