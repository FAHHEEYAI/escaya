import * as t from 'assert';
import { parseScript, recovery } from '../../../src/escaya';

describe('Expressions - Member', () => {
  // Invalid cases
  for (const arg of ['foo[...x];', '[,', '[] += a']) {
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
    '[x()[y] = a + b] = z',
    'await[x]',
    'let.x',
    'let(x)',
    'let?.x',
    'let f = () => { import("foo"); };',
    'foo["bar"];',
    'foo.bar;',
    'foo.bar.foo;',
    'foo.bar["foo"];',
    'foo["foo"]["bar"];',
    'foo[test()][bar()];',
    'foo[5000000] = 256;',
    'yield[100]',
    'foo[1] = 15.5;',
    'm.set({}, 3);',
    'o.x = true;',
    'foo([a, b] = arr);',
    '0..toString();',
    '0.5.toString();',
    '1.0.toString();',
    '1.000.toString();',
    'abc.package',
    'x[a, b]',
    '(2[x,x],x)>x',
    '(a[b]||(c[d]=e))',
    'a&&(b=c)&&(d=e)',
    'X.count.bind({hits: 77})()',
    'X.count instanceof Function',
    'a.$._.B0',
    'a.if',
    'a().b',
    'x.y / z',
    'a[b, c]',
    'a[b]||(c[d]=e)',
    'a&&(b=c)'
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
