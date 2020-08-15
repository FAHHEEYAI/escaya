import * as t from 'assert';
import { parseScript, recovery } from '../../../src/escaya';

describe('Expressions - Async arrow', () => {
  // Invalid cases
  for (const arg of [
    // 'async ({} + 1) => x;',
    //'async([].x) => x;',
    '[] += a'
  ]) {
    it(`${arg}`, () => {
      t.throws(() => {
        parseScript(`${arg}`);
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
    'async X => {yield}',
    'async yield => {X}',
    'async yield => {yield}',
    'function* g() { async X => yield }',
    'async ([a])',
    'async ([a, b])',
    'async ({a})',
    'async ({a = 1}) => {};',
    'async ({a = 1}, {b = 2}) => {};',
    'async ({a = 1}, {b = 2}, {c = 3}) => {};',
    'async ({a = 1} = {}, {b = 2}, {c = 3}) => {};',
    'async ({a = 1} = {}, {b = 2} = {}, {c = 3}) => {};',
    'async ({a = 1} = {}, {b = 2} = {}, {c = 3} = {}) => {};',
    'async ({a, b})',
    `()=>{}
    + a`,
    'a ? async () => {1} : b',
    'a ? b : async () => {1}',
    'async ([{a = 0}]) => {};',
    'async ([...[{a = 0}]]) => {};',
    'async (a, (a, (b, c) => 0))',
    'async (a, (a) => 0)',
    'async (a, async (a) => 0)',
    'async (a, async (a = b => 0) => 0)',
    'async ({x}, [y], z) => x',
    'async ({x = 30}, [y], z) => x;',
    'async r => result = [...{ x = await x }] = y;',
    'async  (x = 20) => x;',
    'async ([x] = 20, y) => x;',
    'async ([x = 20] = 20) => x;',
    'async ([x = 25]) => x => x => ({x} = {});',
    'foo(async ({x}, [y], z) => x)',
    'foo(async ({x = 30}, [y], z) => x)',
    'foo(async foo => x)',
    'foo(async foo => x => (x = 20) => (x = 20) => x)',
    'foo(async foo => x => x => x => x)',
    'var f = cond ? async x=> x : async x=>2',
    'async () => await (5)',
    'async (a, b, c, d, e, f) => { return "" + a + b + c + d + e + f; };',
    'async x => () => x;',
    'async x => x => x;',
    `async=>{}
    (foo)`,
    'async x => x',
    'async () => bar;',
    'async foo => bar;',
    'async (x, y, z) => x + y + z;',
    'async x => () => x;',
    'async (x, y) => { return x + y; };',
    'async () => { return () => { return this; } };',
    'async x => { return () => x; }',
    'async ({})[x => x]',
    'async function a() { await 0; }',
    '(async function a() { await 0; })',
    'async () => await 0',
    '({ async a(){ await 0; } })',
    'async;\n(a, b) => 0',
    'async\nfunction a(){}',
    `y = async x => await x`,
    `async x => async (a = await b - a)`,
    `async x => async (a = await b - a / (async))`,
    `async x => async (a = await b - a / await(async))`,
    `async x => async ((a = await b) - a / (async))`,
    `async x => async ((a = b) => a - a / (await))`,
    `async x => async (a = await b)`,
    `async x => async ([a = await b])`,
    `async x => async ({a: b = await c})`,
    'async (a, ...b) => a;',
    `({a = await}) => x`,
    `({await}) => x`,
    `({a: b = await}) => x`,
    'new async()',
    'async()``',
    '(async x => { return x }).toString()',
    '() => ({ async f() { return "test4"; } }).f()',
    '() => ({ async f() { return "test4"; } }).f()',
    'async a => a',
    'async a => a',
    'async a => a',
    'async a => a',
    'async a => a',
    'async function foo(a = async () => await b) {}',
    '({async: 1})',
    'async yield => 1',
    'f(a, async (b, c) => await [b, c], d)',
    'f(a, async (b, c) => await [b, c], d)',
    'async()',
    'async(a, b)',
    'async(...a, ...b)',
    '({ ...async () => { }})',
    '(async x => y)',
    '(async (x, z) => y)',
    '({x: async (y,w) => z})',
    'async({x = yield}) => 1; ',
    'async (icefapper = bad) => {  }',
    'async ({a: b = c})',
    'async ((a))',
    'async function a(){}(0)',
    '(async function a(){}(0))',
    '(async function() { (await y); })',
    'async function a(){}',
    '(async function a(){})',
    'async function a() { function b(c = await (0)) {} }',
    '({ async })',
    'async("foo".bar);',
    'var asyncFn = async({ foo = 1 }) => foo;',
    'var asyncFn = async({ foo = 1 } = {}) => foo;',
    'async (async) => 1',
    'async ([a]) => 1',
    'async ([a, b]) => 1',
    'async ({a}) => 1',
    'async ({a, b}) => 1',
    'async () => () => 0',
    'async () => x => (a, b, c) => 0',
    'async y => () => (a) => 0',
    'async () => (("๏บบ"))',
    'async () => ("\\u{20ac}")',
    'async () => (() => (123))',
    'async() => a = ({});',
    'async () => a = (() => b = (123))',
    'async() => a = (async() => b = ("str"));',
    'async () => true ? 1 : (0)',
    'async () => true ? 1 : ("๏บบ")',
    'async() => true ? 1 : (() => false ? 1 : (0))',
    'async (argMath139 = (/a/ instanceof ((typeof Boolean == "function" ) ? Boolean : Object)),argMath140,argMath141) => {  return await ("valueOf" in i32);  }',
    'async x => { return x => x; }',
    'async (a = b => await (0)) => {}',
    '(async(a, b, ...c) => await 1)',
    'async () => (async(foo, { a = NaN }) => foo + a)("1", { a: "0" })',
    'async () => (async(foo, { a = "0" }) => foo + a)("2", { a: undefined })',
    `async x => {}
     async (x) =>  {}`,
    `async (x) =>  {}
     async x => {}`,
    'var f = cond ? x=>{x.foo } : x=>x + x + x + x + x + x + (x =>x)',
    '(a, b, (c, d) => 0)',
    'async (a = (...await) => {});',
    '(a, b) => 0, (c, d) => 1',
    '(a, b => {}, a => a + 1)',
    'async((a, b) => {}, (a => a + 1))',
    'async ({}) => {}',
    'async (a, {}) => {}',
    'async ({}, a) => {}',
    'async ([]) => {}',
    'async (a, []) => {}',
    'async ([], a) => {}',
    'async (a = b) => {}',
    'async x => (let) = 1',
    'async x => y => x + y',
    'async(a = (await) => {});',
    'async (x, y) => (u, v) => x*u + y*v',
    'async (x, y) => z => z * (x + y)',
    'async x => (y, z) => z * (x + y)',
    'async ([a]) => [0]',
    'async ([a,b])=>0',
    'async ({})=>0',
    'async g => (x = [await y])',
    'async (eval) => eval',
    'async eval => eval',
    'async arguments => arguments',
    'async (x) => { return x }',
    'async (...x) => { return x.length; }',
    'async (() => 1)(), 1',
    '(async a => a + 1)(1), 2',
    'async (() => { return 3; })(), 3',
    '(async a => { return a + 3; })(1), 4',
    'async () => f1({x: 1})',
    'async () => f10({x: 6}, 2)',
    'async x => (arguments) = 1',
    '(async (a, b) => a + b)(1, 4), 5',
    'async x => {}, a',
    'async x => ok, a',
    'a, async () => ok',
    'a, async (x) => {}',
    `async=>{}
    [x]`,
    `async=>x
    , y`,
    /*`a => {}
    () => {}`, */
    'async=>x, y',
    `async g => (x = [await y])`,
    'async => async',
    `async ({await: a}) => 1`,
    'async (arguments) => {}',
    'async arguments => {}',
    'async (arguments) => {"use strict";}',
    'async arguments => {"use strict";}',
    'async eval => {}',
    'a, async (x, y) => ok',
    'a, async async => {}',
    'a, async x => ok',
    '(async => {}) (async => {})',
    '(async (x) => {}) * x',
    '(async (x, y) => {}) * x',
    '(async => {}) * x',
    '(async => ok) * x',
    '(async x => ok) * x',
    'f(async ()=>c)',
    'x * (async => ok)',
    'x * ((x, y) => ok)',
    'x * (async () => {})',
    'x * (async () => ok)',
    'x = {arrow: async (x) => ok}',
    'x = {arrow: async (x, y) => ok}',
    'x = {arrow: async async => ok}',
    `async=>{}
    {x}`,
    `async => {}
    ++foo`,
    '(async => {}) * x',
    '(async => ok) * x',
    '(async x => ok) * x',
    '(async (x) => {}) * x',
    '(async (x, y) => {}) * x',
    '(async => {}) * x',
    '(async => ok) * x',
    '(async x => ok) * x'
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
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        recovery(`${arg}`, 'recovery.js', { module: true });
      });
    });
  }
});