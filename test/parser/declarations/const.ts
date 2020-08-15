import * as t from 'assert';
import { parseScript, recovery } from '../../../src/escaya';

describe('Declarations - Const', () => {
  // Invalid cases
  for (const arg of ['const const;', 'const let']) {
    it(`${arg}`, () => {
      t.throws(() => {
        parseScript(`${arg}`, { loc: true });
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        recovery(`${arg}`, 'recovery.js');
      });
    });
  }

  // Valid cases. Testing random cases to verify we have no issues with bit masks
  for (const arg of [
    'const [,,] = x;',
    'const [...bar] = ob',
    'const {x,} = obj;',
    'const [,,foo] = x;',
    'const [x, ...[a, b]] = obj;',
    'const [a=[...b], ...c] = obj;',
    'const [foo=a] = c;',
    'const [foo=a,bar] = x;',
    'const [foo,bar] = x;',
    'const { [i]: val, ...rest } = a',
    'const { ["1"]: number2, ...rest2 } = obj',
    'const { 1: value } = obj;',
    'const a = { 1: 0, 2: 1, 3: 2 }',
    'const i = 1',
    'const [foo=a,bar] = x;',
    'const [foo,bar=b] = x;',
    'const [foo=a,bar=b] = x;',
    'const [...bar] = obj;',
    'for (const [,] of x);',
    'for (const {a, [x]: y} in obj);',
    'for (const {x : y, z, a : b = c} in obj);',
    'const [foo, ...bar] = obj;',
    'const {foo,} = x;',
    'const {foo} = x, {bar} = y;',
    'const {foo} = x, b = y;',
    'const [foo, bar=b] = arr;',
    'const a = {b: {c: Function()}}',
    'const {c} = a.b',
    'const [foo=a, bar] = arr;',
    'const [foo=a] = arr;',
    'const [foo] = arr;',
    'const oo = {c: 23, ...o}',
    'const o = {a: 1, b: 2, e: 4}',
    '({a, b, ...other} = oo)',
    'const oo = {c: 23, ...o}({a, b, ...other} = oo)',
    'const o = {a: 1, b: 2, e: 4}',
    'const {a, b, ...other} = oo;',
    'const [] = x;',
    'const { data: { courses: oldCourses = [] } = {} } = getState();',
    'const { [(() => 1)()]: a, ...rest } = { 1: "a" };',
    'const [foo,bar] = arr;',
    'const [,foo] = arr;',
    'const x = y, {foo} = z;',
    'const {foo=a} = x;',
    'const { [eval]: []} = a;',
    'const {foo=a,bar} = x;',
    'const {foo,bar=b} = x;',
    'const {foo=a,bar=b} = x;',
    'const {foo:a} = x;',
    'const foo = bar',
    '"use strict"; const foo = bar',
    'const [a = 1] = [];',
    'const [[a]] = [[]];',
    'const {foo:a,bar} = x;',
    'const {foo,bar:b} = x;',
    'const a = Infinity;',
    'const b = -Infinity;',
    'const c = +Infinity;',
    'const d = /abc/;',
    'const e = /abc/g;',
    'const f = /abc/gi;',
    'const [] = x;',
    'const [,] = x;',
    'const [,,] = x;',
    'const key = 2;',
    'const {[a]: c} = v;',
    'const {x} = v;',
    'const {[a.b]: c} = v;',
    `const {
    [({ ...rest }) => {
      let { ...b } = {};
    }]: a,
    [({ ...d } = {})]: c,
  } = {};`,
    `const {
    a = ({ ...rest }) => {
      let { ...b } = {};
    },
    c = ({ ...d } = {}),
  } = {};`,
    'const { a: { ...bar }, b: { ...baz }, ...foo } = obj;',
    `var z = {};
            var { ...x } = z;
            var { ...a } = { a: 1 };
            var { ...x } = a.b;
            var { ...x } = a();
            var {x1, ...y1} = z;
            x1++;
            var { [a]: b, ...c } = z;
            var {x1, ...y1} = z;
            let {x2, y2, ...z2} = z;
            const {w3, x3, y3, ...z4} = z;
            let {
              x: { a: xa, [d]: f, ...asdf },
              y: { ...d },
              ...g
            } = complex;
            let { x4: { ...y4 } } = z;`,
    `let {
              a: [b, ...arrayRest],
              c = function(...functionRest){},
              ...objectRest
            } = {
              a: [1, 2, 3, 4],
              d: "oyez"
            };`,
    'const state = { [key]: "foo", bar: "baz" };',
    'const { [a]: b, ...c } = d;',
    'const { [String(a)]: b, ...c } = d;',
    'const [foo] = x;',
    'const [foo,] = x;',
    'const [foo,,] = x;',
    'const [,foo] = x;',
    'const [,,foo] = x;',
    'const [foo,bar] = x;',
    'const { [i]: val, ...rest } = a',
    'const { ["1"]: number2, ...rest2 } = obj',
    'const { 1: value } = obj;',
    'const a = { 1: 0, 2: 1, 3: 2 }',
    'const i = 1',
    'const foo = () => { return bar, baz; };',
    'const val = (function f(a, b = (() => a)) {})',
    'const { a, b, ...c } = { a: 1, b: 2, c: 3 };',
    'const [foo,bar=b] = x;',
    'const [foo,,bar] = x;',
    'const [foo, ...bar] = obj;',
    `const value = true ?.30 : false;`,
    'const x = y, [foo] = z;',
    'const [foo] = x, [foo] = y;',
    'const [foo,,] = arr;',
    'const [] = x;',
    'const [,foo] = arr;',
    'const [foo=a, bar=b] = arr;',
    'const [foo] = arr;',
    'const {[x]: y = z} = a;',
    'const {[x]: y} = z;',
    'const {x = y, z = a} = obj;',
    'const {x : y, z : a} = obj;',
    'const {x : y, z, a : b = c} = obj;',
    'const {x, y = z} = obj;',
    'const {x, y} = obj;',
    'const {x = y} = obj;',
    'const arguments = x;',
    'const t = () => ({ v: (v) => v in z })',
    'const xg = (xxes -= ((((true)) ** (/[^[-|-]/gim)))((((v = ((("")))))), ...(h), (((false)[(2e308)]))))',
    'const [foo] = x;',
    'const [foo] = x, b = y;',
    'const [foo,,] = x;'
  ]) {
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseScript(`${arg}`);
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        recovery(`${arg}`, 'recovery.js');
      });
    });
  }
});