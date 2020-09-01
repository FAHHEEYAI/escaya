import * as t from 'assert';
import { parseModule, recovery } from '../../../src/escaya';

describe('Module - Misc', () => {
  // Invalid cases
  for (const arg of [
    'throw yield = await',
    `for ({__proto__: 1, __proto__: 2};;);`,
    'throw await',
    `{ async *[await = 5]()
    {}
  }`,
    `{ (x = [yield]) }`,
    `{ (x = [yield]) => z }`
  ]) {
    it(`${arg}`, () => {
      t.throws(() => {
        parseModule(`${arg}`);
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        recovery(`${arg}`, 'recovery.js', { module: true });
      });
    });
  }

  // Valid cases. Testing random cases to verify we have no issues with bit masks
  for (const arg of [
    'function x() {  "a" ? ((this)) : ((true));  }',
    `{}`,
    `{ let x }`,
    `{debugger;}`,
    `{a}`,
    `{ { var f; } var f }`,
    `{ function f() {} async function* f() {} }`,
    `{ function f() {} ; function f() {} }`,
    //`{ if (x) function f() {} ; function f() {} }`,
    //  { let f = 123; if (false) ; else function f() {  } }
    `{ async function f(){} } async function f(){}`,
    `{ let foo = 1; { let foo = 2; } }
    { let foo = 1; { let foo = 2; } }`,

    `{ let x; } var x`,
    `{ var f; var f; }`,
    `{ function a(){} function a(){} }`,
    `{ function* f() {} async function f() {} }`,

    `{ function f(){} async function f(){} }`,
    `{}[];;`,
    `{}() => 42;;`,
    'async function * f() { for await\n(var [a = 1, ...b] of []) { } }',
    'async function * f() { for await\n({[Symbol.iterator]: a = 1} of []) { } }',
    'async function f() { "use strict"; for await\n(const {a: a = 1} of []) ; }',
    'async function f() { "use strict"; for await\n(const {a: a} of []) ; }',
    'async function f() { "use strict"; for await\n(const [a = 1, ...b] of []) ; }',
    'async function f() { "use strict"; for await\n(const [a = 1] of []) { } }',
    `for ({a: b.c} of d) e`,
    `for ({a: b.c}.foo of d) e`,
    'for ([...x] of {ab: 1}) {}',
    'for (x of { x : foo().y } = {});',
    'for (x of { x : foo()[y] } = {});',
    'for (x of { x : y.z } = {});',
    'for (x of { x : y[z] } = {});',
    'for (x of { x : { y } } = {});',
    'for (x of { x : { foo: y } } = {});',
    'for (x of { x : { foo: foo().y } } = {});',
    'for (x of { x : { foo: foo()[y] } } = {});',
    'for (x of { x : { foo: y.z } } = {});',
    'for (x of { x : { foo: y[z] } } = {});',
    'for (x of { x : [ y ] } = {});',
    'for (x of { x : [ foo().y ] } = {});',
    'for (x of { x : [ foo()[y] ] } = {});',
    'for (x of { x : [ y.z ] } = {});',
    `for (((x)=>{}) ;;);`,
    `for(function(){while(x in y)t};;)x`,
    `for(function(){do;while(x in t)};;)x`,
    `for (function(){};;);`,
    `for (function(){ }[foo];;);`,
    `for (function(){ if (a in b); };;);`,
    `for (function(){ a in b; };;);`,
    `for ({x,...x}=x ;;) ;`,
    `for (x--;;);`,
    `for (true ? a in b : {}; false; ) ;`,
    `for (var a;;) { let a; }`,
    `for (var x of obj) { const x = 1 }`,
    `for (const foo = bar, zoo = boo;;);`,
    `for ("abc" + b;;);`,
    `for ([] !== x;;);`,
    `for ({}[y] ^= x;;) x;`,
    `for ({}.u |= c;;) x;`,
    `for ({}[y] ^= x;;) x;`,
    'throw function (x) {}',
    'throw class x {}',
    'throw !foo',
    'throw 123',
    'throw async',
    'throw ((x))',
    'throw (a,b,c = d, 123, [a], {x})',
    'throw {x}',
    'throw {x:y}',
    'throw {[x]:y}',
    'throw [x, /a/]',
    'throw [x, ...y]',
    'throw [x, y]',
    'throw x > class x {}',
    'throw class x {}',
    'throw () => class x {}',
    'throw a >= /** comment */ /a/',
    'throw a ** b',
    'throw x ? y : z',
    'throw !x ? y : z',
    'throw x++ ? (y) : z / 1',
    `if(foo) a = b;`,
    //`if (a) function a(){}`,
    `if (foo) bar; else doo;`,
    `if (a) b()`,
    `if(a)b;else c;`,
    'if (++a);',
    'if (a) --a;',
    `if (1) { eval(42) }`,
    `if (true) if (false) {} else ; else {}`,
    'try { throw [,]; } catch ([x = 23]) {}',
    `try { throw [1, 2, 3]; } catch ([...x]) {}`,
    `try {try { let e; } catch { let e; } finally { let e; }} catch (e) { }`,
    `try {try { } catch { } finally { }} catch ({e}) { }`,
    `try {} catch(x) { x = 0; }`,
    `try {} catch ([a,b,c]) { }`,
    `try { throw null; } catch ({}) {}`,
    `try {} catch(e) { try {} catch (e) {} }`,
    `var foo; try {} catch (_) { let foo; }`,
    `try {} catch (e) { { let e = x; } }`,
    'try {} finally {}',
    'try {} catch({e}){}',
    `try {} catch (foo) {} let foo;`,
    `try {} catch (e) { let b = x; }`,
    'async function f() { for\nawait ({0: a} of []) { } }',
    'async function f() { for\nawait ({a = 1} of []) ; }',
    'async function f() { for\nawait ({a: a = 1} of []) ; }',
    'async function f() { for\nawait ({[Symbol.iterator]: a = 1} of []) ; }',
    'async function f() { for\nawait ({0: a = 1} of []) ; }',
    'async function f() { for\nawait (var [a] of []) ; }',
    "import { a, b as d, c, } from 'baz';",
    "import * as foob from 'bar.js';",
    'import { as, get, set, from } from "baz"',
    "import {} from 'x'",
    "import {a} from 'x'",
    "import {a as b} from 'x'",
    "import {a,b,} from 'x'",
    "import foo, * as bar from 'baz';",
    'import $ from "foo"',
    'import {} from "foo";',
    "import n from 'n.js';",
    'import a from "module";',
    'import b, * as c from "module";',
    "import { yield as y } from 'm.js';",
    "import { static as s } from 'm.js';",
    "import { yield as y } from 'foo';",
    'import async from "foo";',
    'import defexp, {x,} from "foo";',
    'import { Cocoa as async } from "foo"',
    "import 'somemodule.js';",
    "import { } from 'm.js';",
    "import { a } from 'm.js';",
    "import 'foo';",
    "import { a } from 'foo';",
    'import { a as of } from "k";',
    // Runtime errors
    'import foo from "foo.js"; try { (() => { foo = 12; })() } catch(e) {}',
    'import { foo } from "foo.js"; try { (() => { foo = 12; })() } catch(e) { assert.areEqual("Assignment to const", e.message); }',
    'import * as foo from "foo.js"; try { (() => { foo = 12; })() } catch(e) { assert.areEqual("Assignment to const", e.message); }',
    'import { foo as foo22 } from "foo.js"; try { (() => { foo22 = 12; })() } catch(e) { assert.areEqual("Assignment to const", e.message); }'
  ]) {
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        parseModule(`${arg}`);
      });
    });
    it(`${arg}`, () => {
      t.doesNotThrow(() => {
        recovery(`${arg}`, 'recovery.js', { module: true });
      });
    });
  }
});
