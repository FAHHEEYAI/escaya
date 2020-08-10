import * as t from 'assert';
import { parseScript, recovery } from '../../../src/escaya';

describe('Expressions - Arrow', () => {
  // Invalid cases
  for (const arg of ['(x, y) => {}.x', '() => {}.x', '[', '(x, /x/g) => x', '(/x/) => x']) {
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
    `(interface, eval) => {}`,
    `(w, o, e, m) => { "use strict"; "use strict" }`,
    `(eval, interface) => {}`,
    `(bar, eval) => {}`,
    `(bar, yield) => {}`,
    `(bar, interface) => {}`,
    '() => ok()',
    '(x => {})()',
    `arguments => {}`,
    `eval => 42;`,
    `(a) => 00;`,
    `()=>{}
    [x]`,
    `() => {};
    ([x,]);`,
    `x => y => 42;`,
    `e => ({ property: 42 });`,
    `foo(() => {});`,
    `const a = () => {}
    [a]`,
    `({})=>0`,
    `foo = (eval) => eval`,
    `af = eval => eval`,
    `af = (...x) => { return x.length; }`,
    `(() => 1)(), 1`,
    `(a => a + 1)(1), 2`,
    `(a => { return a + 3; })(1), 4`,
    `() => f1({x: 1})`,
    `() => f10({x: 6}, 2)`,
    `foo(({x}, [y], z) => x)`,
    `foo(foo => x => (x = 20) => (x = 20) => x)`,
    'let => x',
    'let => x.y',
    'let => x.y',
    '() => b',
    '(a) => b',
    '(...a) => b',
    '(a, ...b) => {}',
    '(x = delete ((eval) = f)) => {}',
    '(6)[x => (y)] in 3;',
    '6[(x=>y)]in 3',
    '({ident: {x: y}.join(1)})',
    '()=>{} \n /foo/',
    'let => x = b',
    'let => x, let => x',
    '({...obj} = {}) => {}',
    '(() => {}).x',
    '([a]) => b;',
    '([a=[b.c]=d]) => e;',
    '( () => x )',
    '([...x]) => x',
    '(z = [...x.y]) => z',
    '(bar, yield) => {}',
    'f = ([[,] = g()]) => {};',
    'f = (x = class{}) => {};',
    '(a) => 00;',
    '(() => 5)() === 5 ? a : b;',
    '(x, ...[y = b = c = d]) => 1',
    '({790: this}) => x',
    '({"foo": this}) => x',
    '([x = 0]) => {}',
    'a, b => 0',
    'a, b, (c, d) => 0',
    '(a, b, (c, d) => 0)',
    '(a, b) => 0, (c, d) => 1',
    '(a, b => {}, a => a + 1)',
    '((a, b) => {}, (a => a + 1))',
    'foo ? bar : baz => {}',
    '({}) => {}',
    '(a, {}) => {}',
    '({}, a) => {}',
    '([]) => {}',
    '(a, []) => {}',
    '([], a) => {}',
    '(a = b) => {}',
    '(a = b, c) => {}',
    '(a, b = c) => {}',
    '({a}) => {}',
    '(x = 9) => {}',
    '(x, y = 9) => {}',
    '(x = 9, y) => {}',
    '(x, y = 9, z) => {}',
    '(x, y = 9, z = 8) => {}',
    '(...a) => {}',
    '(x, ...a) => {}',
    '(x = 9, ...a) => {}',
    '(x, y = 9, ...a) => {}',
    '(x, y = 9, {b}, z = 8, ...a) => {}',
    'a, b, (c, d) => 0;',
    '(a, b) => 0, (c, d) => 1;',
    '(a, b => {}, a => a + 1);',
    '((a, b) => {}, (a => a + 1));',
    '(a, (a, (b, c) => 0));',
    'foo ? bar : baz => {};',
    '(a, {}) => {};',
    '({a}) => {};',
    '(x = 9) => {};',
    '(x = 9, y) => {};',
    '(x, y = 9, z = 8) => {};',
    '({a} = {}) => {};',
    '([x = 0]) => {};',
    '({a} = {}) => {}',
    '([x] = []) => {}',
    '({a = 42}) => {}',
    'const a = () => {return (3, 4);};',
    'bar ? ( (x, y) => (u, v) => x*u + y*v ) : baz;',
    `() => {}`,
    `a => {}`,
    `a => {a => {a => {a => {a => {a => {}}}}}}`,
    `(...await) => x`,
    `([a = await]) => x`,
    `({await}) => x`,
    `({a: b = await}) => x`,
    `() => {}
  a()
  async()`,
    `(z = [...x.y]) => z`,
    `a => a => a => async a => a`,
    `a => a => a => a => a => a => a => a => a => a => a => a => a => a => a => async a => a`,
    'var f = (function() { return z => arguments[0]; }(5));',
    '(...{x}) => x',
    'new (() => {});',
    'bar ? ( (x) => x ) : baz;',
    '(x = 9) => {}',
    '([x = 0]) => {}',
    '(a, (a, (b, c) => 0))',
    `a => 0`,
    `() => () => 0`,
    '() => 0, 1',
    '() => 0 + 1',
    '(a,b) => 0 + 1',
    `(a,b,...c) => 0 + 1`,
    '() => (a) = 0',
    'a => b => c => 0',
    '(e) => "test"',
    '(a, ...[]) => 1',
    '(a, ...[{b = (c) - 2}]) => 1',
    '(x, ...[y = b = c = d]) => 1',
    '(x, ...[y = b = c = d => 1]) => 1',
    '(x, ...[]) => (y, ...[]) => 1',
    "(x)=>{'use strict';}",
    '(() => 5)() === 5;',
    '(() => 5)() === 5 ? a : b;',
    '(() => 5)() === 5 ? a : b => a + b - yield / 1;',
    '() => a + b - yield / 1',
    '(() => { try { Function("0 || () => 2")(); } catch(e) { return true; } })();',
    'var f = (function() { return z => arguments[0]; }(5));',
    'yield => { "use strict"; 0 }',
    "interface => { 'use strict'; 0 }",
    '({y}) => x;',
    '([x = 10]) => x',
    '([x = 10]) => x = ([x = 10]) => x',
    '({x = 10, y: { z = 10 }}) => [x, z]',
    `({})[x => x]`,
    `() => () => 0`,
    `() => x => (a, b, c) => 0`,
    `y => () => (a) => 0`,
    `function * foo() { yield ()=>{}; }`,
    '() => { `use strict`; with (x) y; }',
    `function foo() { }; foo((x, y) => "abc"); foo(b => "abc", 123);`,
    `(a, b) => { return a * b; }`,
    `a = () => {return (3, 4);};`,
    `"use strict";
((one, two) => {});`,
    `([])=>0;`,
    `(function (x) { return x => x; })(20)(10)`,
    `(function () { return x => x; })()(10)`,
    ` (function () {  return x => x; })()(10)`,
    `() => true ? 1 : (() => false ? 1 : (0))`,
    `([,,])=>0`,
    `([a,...b])=>0;`,
    `([a,b])=>0;`,
    `([a]) => [0];`,
    `({a,b=b,a:c,[a]:[d]})=>0;`,
    `(() => {}) || true;
    (() => {}) ? a : b;`,
    '(() => {}) + 2',
    'new (() => {});',
    'bar ? ( (x) => x ) : baz;',
    'bar ? ( (x, y) => (u, v) => x*u + y*v ) : baz;',
    'bar ? ( (a, b) => 0, (c, d) => 1 ) : baz;',
    'bar ? ( (a, (a, (b, c) => 0)) ) : baz;',
    'bar ? ( foo ? bar : baz => {} ) : baz;',
    'bar ? ( (a, {}) => {} ) : baz;',
    'bar ? ( (x, y = 9) => {} ) : baz;',
    'bar ? ( (...a) => {} ) : baz;',
    'bar ? ( ([x] = []) => {} ) : baz;',
    'bar ? ( (x = 9, ...a) => {} ) : baz;',
    '(x, y = 9, {b}, z = 8, ...a) => {}',
    '(x = 9) => {}',
    '([x = 0]) => {}',
    '(a, (a, (b, c) => 0))',
    `a => 0`,
    `() => () => 0`,
    '() => 0, 1',
    '() => 0 + 1',
    '(a,b) => 0 + 1',
    `(a,b,...c) => 0 + 1`,
    '() => (a) = 0',
    'a => b => c => 0',
    '(e) => "test"',
    '(a, ...[]) => 1',
    "(x)=>{'use strict';}",
    '(() => 5)() === 5;',
    'a, b => 0',
    'a, b, (c, d) => 0',
    '(a, b, (c, d) => 0)',
    '(a, b) => 0, (c, d) => 1',
    '(a, b => {}, a => a + 1)',
    '((a, b) => {}, (a => a + 1))',
    '(x, y = 9, ...a) => {}',
    '(x, y = 9, {b}, z = 8, ...a) => {}',
    '({a} = {}) => {}',
    '([x] = []) => {}',
    '({a = 42}) => {}',
    '([x = 0]) => {}',
    '(a, (a, (b, c) => 0))',
    '() => a + b - yield / 1',
    'f = (function() { return z => arguments[0]; }(5));',
    '({y}) => x;',
    '([x = 10]) => x',
    '({x = 10, y: { z = 10 }}) => [x, z]',
    '({x = 10}) => x',
    `([y]) => x;`,
    '1 ? 0 : a => {}, 17, 42;',
    '17, 42, 1 ? 0 : a => {};',
    '({ ...0 ? 1 : a => {} })',
    'function f1(x = 0 ? 1 : a => {}) { return x; }',
    '(x=1) => x * x;',
    '(eval = 10) => 42;',
    '(a, {}) => {}',
    '({}, a) => {}',
    '([]) => {}',
    '(a, []) => {}',
    '([], a) => {}',
    '(a = b) => {}',
    '(a = b, c) => {}',
    '(a, b = c) => {}',
    '({a}) => {}',
    '(x = 9) => {}',
    '(a, b=(c)=>{}) => {}',
    '(async function foo(a) { await a });',
    '(a,b) =>{}',
    'x = (a,b) =>{}',
    '(a,...b) =>{}',
    'x = (a,...b) =>{}',
    'foo((x, y) => {});',
    'e => { 42; };',
    'e => ({ property: 42 });',
    '(a, b) => { 42; };',
    '(x) => ((y, z) => (x, y, z));',
    '(a) => 00;',
    'e => "test";',
    'e => t => "test";',
    'a =>{}',
    '(...a) =>{}',
    'x = a =>{}',
    '(a,b) => [a]',
    '() => { value: b}',
    '(x, y) => { x.a = y; }',
    '(x, y) => x.a = y',
    'x => (y, z) => z * (x + y)',
    '(a = b, c) => {}',
    'x => x * x',
    '(x) => x',
    '(x) => x * x',
    '(x, y) => x + y',
    '(x, y, z) => x, y, z',
    '(x, y) => x.a = y',
    "() => ({'value': 42})",
    'x => y => x + y',
    '(x, y) => (u, v) => x*u + y*v',
    '(x, y) => z => z * (x + y)',
    'x => (y, z) => z * (x + y)',
    '(x, ...a) => {}',
    '({a} = {}) => {}',
    '({a} = {}) => {}',
    '(interface, eval) => {}',
    'yield => {}',
    'arguments => {}',
    '(...[]) => 0',
    '(()=>0)',
    '((a)=>0)',
    '() => 0',
    '(...a) => 0',
    '(a, b) => { 42; }',
    'arguments => 42',
    '(x) => ((y, z) => (x, y, z))',
    'foo(() => {})',
    'foo((x, y) => {})',
    'x => { function x() {} }',
    '(a, ...b) => {}',
    '(...a) => {}',
    '(x) => { function x() {} }',
    '([x, y] = z) => x;',
    '([...x]) => x',
    '([x, ...y]) => x',
    '([[x, y] = z]) => x;',
    '(x, y)=>x;',
    '(a = 1, b = 2) => x;',
    'a = (b) => c;',
    '({x});',
    '({ident: {x: y}}) => x',
    '({ident: {x}}) => x',
    '({a} = b,) => {}',
    '(a, b, (c, d) => 0)',
    '([a]) => 0',
    'eval => {}',
    'arguments => {}',
    'yield => {}',
    '([a,[b],...c])=>0',
    'foo(([a,b]) => 42)',
    'foo((a=1) => 42)',
    '(...a) => 42',
    '([a, b], ...c) => 42',
    '({a, b}, ...c) => 42',
    '({a, b}) => (([a, b]) => 42)',
    'foo(([a, b]) => 42);',
    '(a, b, ...c) => 42',
    'interface => {}',
    '(eval) => {}',
    '(arguments) => {}',
    '(yield) => {}',
    '(interface) => {}',
    '(eval, bar) => {}',
    '(bar, eval) => {}',
    '(bar, arguments) => {}',
    '(bar, yield) => {}',
    '(bar, interface) => {}',
    '_ => {}\n/foo/',
    '_ => {}\n/foo/g',
    'f(new /z/())',
    'f(new /z/.foo)',
    '(arguments, interface) => {}',
    '(() => null)();',
    '(() => {})()',
    'async let => {}',
    '() => { [a, b] = [1, 2] }',
    '() => [a, b] = [1, 2]',
    '(...args) => console.log( args );',
    'double = (x) => x * 2',
    'Y = F => (x=>F(y=>(x(x))(y)))(x=>F(y=>(x(x))(y)))',
    'factorial = x =>  x < 1 ? 1 : x * factorial(x-1)',
    'a => (a + 1)',
    'sum = ( ...nums ) => nums.reduce( ( t, n ) => t + n, 0 );',
    `'use strict';
     setTimeout( () => console.log( this ) );
      function foo () {
      'use strict';
      setTimeout( () => console.log( this ) );
    }`,
    '([x = 0]) => {}',
    '(a, (a, (b, c) => 0))',
    '() => {}',
    '() => { return 42 }',
    'x => { return x; }',
    '(x) => { return x; }',
    '(x, y) => { return x + y; }',
    '(x, y, z) => { return x + y + z; }',
    '(x, y) => { x.a = y; }',
    '() => 42',
    'x => x',
    'x => x * x',
    '(x) => x',
    '(x) => x * x',
    '(x, y) => x + y',
    '(x, y, z) => x, y, z',
    '(x, y) => x.a = y',
    "() => ({'value': 42})",
    'x => y => x + y',
    '(x, y) => (u, v) => x*u + y*v',
    '(x, y) => z => z * (x + y)',
    'x => (y, z) => z * (x + y)',
    '([a]) => [0]',
    '([a,b])=>0',
    '({})=>0',
    'foo = (eval) => eval',
    'af = eval => eval',
    'af = arguments => arguments',
    '(x) => { return x }',
    'af = (...x) => { return x.length; }',
    '(() => 1)(), 1',
    '(a => a + 1)(1), 2',
    '(() => { return 3; })(), 3',
    '(a => { return a + 3; })(1), 4',
    '() => f1({x: 1})',
    '() => f10({x: 6}, 2)',
    '((a, b) => a + b)(1, 4), 5',
    'foo(({x}, [y], z) => x)',
    'foo(({x = 30}, [y], z) => x)',
    'foo(([x] = 20, y) => x)',
    'foo(foo => x => (x = 20) => (x = 20) => x)',
    'foo(foo => x => x => x => {x})',
    '((a, b) => { return a + b; })(1, 5), 6',
    'foo((a=1) => 42)',
    '([a,[b],...c])=>0',
    '(a, b=(c)=>{}) => {}',
    '({x = y}) => z',
    '(() => 1)(), 1',
    'for ([{x = y}] in y);',
    '[(x, y) => ok].x',
    '[() => ok].x',
    '[(x, y) => {}].x',
    '(x=(await)=y)=>z',
    'foo(() => ok)',
    '([x],) => x',
    '[x => {}].x',
    '[x => ok].x',
    'x = {arrow: (x) => ok}.y',
    '[(x, y) => {}].x',
    '([{x = y}]) => z',
    `() => { let
      {} = y }`,
    'foo((x) => {})',
    'foo((x) => ok)',
    'foo((x => {}))',
    'foo(x => {})',
    `await => async.await[foo]`,
    `async g => (x = [await y])`,
    'foo(() => ok).bar',
    'delete ((x => {}))',
    'delete ((x) => ok)',
    'delete (() => ok)',
    'delete (x => {})',
    '() => ok.x',
    '(x => {}).x',
    '(x) => ok.x',
    'x => ok.x',
    'foo((x) => {}).bar',
    'foo((x) => ok).bar',
    'foo((x => {})).bar',
    'foo(x => {}).bar',
    '(x => {}), (x => {})',
    '(x => {}) * x',
    '(a = b,) => x',
    '({a} = b,) => x',
    'x * ((x) => ok)',
    'a, (x) => ok',
    'let => {}',
    '() => { let x }',
    'let => a + b',
    'let => {}, let => {}',
    'f = ([[,] = g()]) => {}',
    'a => a + x',
    '(a = await/r/g) => {}',
    'a => a / x',
    'a => x.foo',
    '(() => {}) << x',
    'a => x[foo]',
    '() => {}\n+function(){}',
    '(interface)',
    '(x = yield = x) => x',
    '([x = yield]) => x',
    '([x, {y: [yield]}])',
    '([], a) => {}',
    `(expect, subject, typeName) => {
      typeName = /^reg(?:exp?|ular expression)$/.test(typeName)
        ? 'regexp'
        : typeName;
      expect.argsOutput[0] = output => {
        output.jsString(typeName);
      };
      if (!expect.getType(typeName)) {
        expect.errorMode = 'nested';
        expect.fail(output => {
          output
            .error('Unknown type:')
            .sp()
            .jsString(typeName);
        });
      }
    }`,
    '(a, b = c) => {}',
    'let x = ({y=z}=e) => d',
    'a, (x, y) => {}',
    '(arguments) => {}',
    'arguments => {}',
    '(a, arguments) => {}',
    'arguments => {"use strict";}',
    'eval => {}',
    'a, (x, y) => ok',
    '(x => {}) (x => {})',
    '((x => {})) * x',
    '((x, y) => ok) * x',
    '(x)=>x;',
    'x * ((x, y) => ok)',
    'x * (x => {})',
    `_ => {}
    /foo/`,
    '`a ${(x, y) => ok} b`',
    '`a ${() => {}} b`',
    '`a ${(x) => ok} b`',
    '(x, ...y) => x',
    '({...(obj)}) => {}',
    '({...obj} = {}) => {}',
    'f(((a, b) => a + b));',
    'x=>x;',
    '(x)=>{x}',
    'x = {arrow: (x => {})}.y',
    'x = {arrow: x => {}}',
    'x = {arrow: (x) => ok}',
    'x = {arrow: (x => {})}',
    'x = {arrow: (x, y) => ok}',
    '([{x = y}]) => z',
    '({a,b=b,a:c,[a]:[d]})=>0;'
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
