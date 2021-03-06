import * as t from 'assert';
import { recovery } from '../../../src/escaya';

describe('Recovery - Let', () => {
  it('"use strict"; let { package } = x;', () => {
    t.deepEqual(recovery('"use strict"; let { package } = x;', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [
        {
          type: 'Directive',
          value: 'use strict',
          raw: 'use strict',
          start: 0,
          end: 12,
          kind: 229,
          flags: 0
        }
      ],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingIdentifier',
                    name: 'package',
                    start: 19,
                    end: 27,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 17,
                end: 29,
                kind: 169,
                flags: 0
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'x',
                start: 31,
                end: 33,
                kind: 13,
                flags: 0
              },
              start: 17,
              end: 33,
              kind: 146,
              flags: 0
            }
          ],
          start: 13,
          end: 34,
          kind: 145,
          flags: 0
        }
      ],
      text: '"use strict"; let { package } = x;',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'Unexpected reserved word in strict mode',
          code: 18,
          start: 19,
          length: 10
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 34,
      end: 34
    });
  });

  it('let { for } = x;', () => {
    t.deepEqual(recovery('let { for } = x;', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingIdentifier',
                    name: 'for',
                    start: 5,
                    end: 9,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 3,
                end: 11,
                kind: 169,
                flags: 0
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'x',
                start: 13,
                end: 15,
                kind: 13,
                flags: 0
              },
              start: 3,
              end: 15,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 16,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let { for } = x;',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'Invalid use of keyword as an identifier',
          code: 131,
          start: 5,
          length: 6
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 16,
      end: 16
    });
  });

  it('let {{for', () => {
    t.deepEqual(recovery('let {{for', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [],
                start: 3,
                end: 5,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 5,
              kind: 146,
              flags: 0
            },
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingIdentifier',
                    name: 'for',
                    start: 6,
                    end: 9,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 5,
                end: 9,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 5,
              end: 9,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 9,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let {{for',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 5,
          length: 1
        },
        {
          kind: 3,
          source: 2,
          message: 'Invalid use of keyword as an identifier',
          code: 131,
          start: 6,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 9,
      end: 9
    });
  });

  it('let {of', () => {
    t.deepEqual(recovery('let {of', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingIdentifier',
                    name: 'of',
                    start: 5,
                    end: 7,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 3,
                end: 7,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 7,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 7,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let {of',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 5,
          length: 2
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 7,
      end: 7
    });
  });

  it('let {of =', () => {
    t.deepEqual(recovery('let {of =', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingElement',
                    left: {
                      type: 'BindingIdentifier',
                      name: 'of',
                      start: 5,
                      end: 7,
                      kind: 168,
                      flags: 0
                    },
                    right: {
                      type: 'IdentifierReference',
                      name: '',
                      start: 9,
                      end: 9,
                      kind: 13,
                      flags: 2
                    },
                    start: 5,
                    end: 9,
                    kind: 172,
                    flags: 0
                  }
                ],
                start: 3,
                end: 9,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 9,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 9,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let {of =',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 8,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 9,
      end: 9
    });
  });

  it('"use strict"; let {[ of =', () => {
    t.deepEqual(recovery('"use strict"; let {[ of =', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [
        {
          type: 'Directive',
          value: 'use strict',
          raw: 'use strict',
          start: 0,
          end: 12,
          kind: 229,
          flags: 0
        }
      ],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'PropertyName',
                    key: {
                      type: 'ComputedPropertyName',
                      expression: {
                        type: 'AssignmentExpression',
                        left: {
                          type: 'IdentifierReference',
                          name: 'of',
                          start: 20,
                          end: 23,
                          kind: 13,
                          flags: 0
                        },
                        operator: '=',
                        right: {
                          type: 'IdentifierReference',
                          name: '',
                          start: 25,
                          end: 25,
                          kind: 13,
                          flags: 2
                        },
                        start: 20,
                        end: 25,
                        kind: 152,
                        flags: 0
                      },
                      start: 19,
                      end: 25,
                      kind: 171,
                      flags: 0
                    },
                    value: {
                      type: 'BindingIdentifier',
                      name: '',
                      start: 25,
                      end: 25,
                      kind: 168,
                      flags: 0
                    },
                    start: 19,
                    end: 25,
                    kind: 227,
                    flags: 0
                  }
                ],
                start: 17,
                end: 25,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 17,
              end: 25,
              kind: 146,
              flags: 0
            }
          ],
          start: 13,
          end: 25,
          kind: 145,
          flags: 0
        }
      ],
      text: '"use strict"; let {[ of =',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 24,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 25,
      end: 25
    });
  });

  it('let {x = y} = [z]', () => {
    t.deepEqual(recovery('let {x = y} = [z]', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingElement',
                    left: {
                      type: 'BindingIdentifier',
                      name: 'x',
                      start: 5,
                      end: 6,
                      kind: 168,
                      flags: 0
                    },
                    right: {
                      type: 'IdentifierReference',
                      name: 'y',
                      start: 8,
                      end: 10,
                      kind: 13,
                      flags: 0
                    },
                    start: 5,
                    end: 10,
                    kind: 172,
                    flags: 0
                  }
                ],
                start: 3,
                end: 11,
                kind: 169,
                flags: 0
              },
              initializer: {
                type: 'ArrayLiteral',
                elements: [
                  {
                    type: 'IdentifierReference',
                    name: 'z',
                    start: 15,
                    end: 16,
                    kind: 13,
                    flags: 0
                  }
                ],
                start: 13,
                end: 17,
                kind: 178,
                flags: 0
              },
              start: 3,
              end: 17,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 17,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let {x = y} = [z]',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 17,
      end: 17
    });
  });

  it('let {package} = x', () => {
    t.deepEqual(recovery('let {package} = x', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingIdentifier',
                    name: 'package',
                    start: 5,
                    end: 12,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 3,
                end: 13,
                kind: 169,
                flags: 0
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'x',
                start: 15,
                end: 17,
                kind: 13,
                flags: 0
              },
              start: 3,
              end: 17,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 17,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let {package} = x',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 17,
      end: 17
    });
  });

  it('let {of:', () => {
    t.deepEqual(recovery('let {of:', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'PropertyName',
                    key: {
                      type: 'IdentifierName',
                      name: 'of',
                      start: 5,
                      end: 8,
                      kind: 13,
                      flags: 0
                    },
                    value: {
                      type: 'BindingIdentifier',
                      name: '',
                      start: 8,
                      end: 8,
                      kind: 168,
                      flags: 0
                    },
                    start: 5,
                    end: 8,
                    kind: 227,
                    flags: 0
                  }
                ],
                start: 3,
                end: 8,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 8,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 8,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let {of:',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expected an binding identifier',
          code: 19,
          start: 7,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 8,
      end: 8
    });
  });

  it('"use strict"; let [package] = x;', () => {
    t.deepEqual(recovery('"use strict"; let [package] = x;', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [
        {
          type: 'Directive',
          value: 'use strict',
          raw: 'use strict',
          start: 0,
          end: 12,
          kind: 229,
          flags: 0
        }
      ],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                elements: [
                  {
                    type: 'BindingIdentifier',
                    name: '',
                    start: 19,
                    end: 26,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 17,
                end: 27,
                kind: 174,
                flags: 0
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'x',
                start: 29,
                end: 31,
                kind: 13,
                flags: 0
              },
              start: 17,
              end: 31,
              kind: 146,
              flags: 0
            }
          ],
          start: 13,
          end: 32,
          kind: 145,
          flags: 0
        }
      ],
      text: '"use strict"; let [package] = x;',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Unexpected reserved word in strict mode',
          code: 18,
          start: 19,
          length: 7
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 32,
      end: 32
    });
  });

  it('let [package] = x;', () => {
    t.deepEqual(recovery('let [package] = x;', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                elements: [
                  {
                    type: 'BindingIdentifier',
                    name: 'package',
                    start: 5,
                    end: 12,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 3,
                end: 13,
                kind: 174,
                flags: 0
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'x',
                start: 15,
                end: 17,
                kind: 13,
                flags: 0
              },
              start: 3,
              end: 17,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 18,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let [package] = x;',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 18,
      end: 18
    });
  });

  it('let [a of', () => {
    t.deepEqual(recovery('let [a of', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                elements: [
                  {
                    type: 'BindingIdentifier',
                    name: 'a',
                    start: 5,
                    end: 6,
                    kind: 168,
                    flags: 0
                  },
                  {
                    type: 'BindingIdentifier',
                    name: 'of',
                    start: 6,
                    end: 9,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 3,
                end: 9,
                kind: 174,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 9,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 9,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let [a of',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 7,
          length: 2
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 9,
      end: 9
    });
  });

  it('let [a for', () => {
    t.deepEqual(recovery('let [a for', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                elements: [
                  {
                    type: 'BindingIdentifier',
                    name: 'a',
                    start: 5,
                    end: 6,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 3,
                end: 6,
                kind: 174,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 6,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 6,
          kind: 145,
          flags: 0
        },
        {
          type: 'ForStatement',
          variableDeclarationList: false,
          initializer: {
            type: 'IdentifierReference',
            name: '',
            start: 10,
            end: 10,
            kind: 13,
            flags: 2
          },
          condition: {
            type: 'IdentifierReference',
            name: '',
            start: 10,
            end: 10,
            kind: 13,
            flags: 2
          },
          incrementor: {
            type: 'IdentifierReference',
            name: '',
            start: 10,
            end: 10,
            kind: 13,
            flags: 2
          },
          statement: {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 10,
              end: 10,
              kind: 13,
              flags: 2
            },
            start: 10,
            end: 10,
            kind: 122,
            flags: 0
          },
          start: 6,
          end: 10,
          kind: 132,
          flags: 0
        }
      ],
      text: 'let [a for',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 7,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 10,
      end: 10
    });
  });

  it('let {...a, b}', () => {
    t.deepEqual(recovery('let {...a, b}', 'recovery.js'), {
      children: [],
      context: 0,
      detached: false,
      diagnostics: [
        {
          code: 107,
          kind: 3,
          length: 1,
          message: 'A rest element must be last in destructuring pattern',
          source: 2,
          start: 11
        },
        {
          code: 45,
          kind: 3,
          length: 1,
          message: 'Missing initializer in destructuring declaration',
          source: 2,
          start: 12
        }
      ],
      directives: [],
      end: 13,
      fileName: 'recovery.js',
      incremental: false,
      kind: 209,
      webCompat: true,
      leafs: [
        {
          declarations: [
            {
              binding: {
                end: 13,
                flags: 0,
                kind: 169,
                properties: [
                  {
                    argument: {
                      end: 9,
                      flags: 0,
                      kind: 168,
                      name: 'a',
                      start: 8,
                      type: 'BindingIdentifier'
                    },
                    end: 9,
                    flags: 0,
                    kind: 167,
                    start: 5,
                    type: 'BindingRestProperty'
                  },
                  {
                    end: 12,
                    flags: 0,
                    kind: 168,
                    name: 'b',
                    start: 10,
                    type: 'BindingIdentifier'
                  }
                ],
                start: 3,
                type: 'ObjectBindingPattern'
              },
              end: 13,
              flags: 0,
              initializer: null,
              kind: 146,
              start: 3,
              type: 'LexicalBinding'
            }
          ],
          end: 13,
          flags: 0,
          isConst: false,
          kind: 145,
          start: 0,
          type: 'LexicalDeclaration'
        }
      ],
      length: 13,
      mutualFlags: 0,
      parent: null,
      start: 0,
      text: 'let {...a, b}'
    });
  });

  it('let of', () => {
    t.deepEqual(recovery('let of', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'BindingIdentifier',
                name: 'of',
                start: 3,
                end: 6,
                kind: 168,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 6,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 6,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let of',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 6,
      end: 6
    });
  });

  it('let [', () => {
    t.deepEqual(recovery('let [', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                elements: [],
                start: 3,
                end: 5,
                kind: 174,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 5,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 5,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let [',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`]` expected',
          code: 5,
          start: 4,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 5,
      end: 5
    });
  });

  it('let [', () => {
    t.deepEqual(recovery('let [', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                elements: [],
                start: 3,
                end: 5,
                kind: 174,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 5,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 5,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let [',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`]` expected',
          code: 5,
          start: 4,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 5,
      end: 5
    });
  });

  it('while let [', () => {
    t.deepEqual(recovery('while let [', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'WhileStatement',
          expression: {
            type: 'MemberExpression',
            member: {
              type: 'IdentifierReference',
              name: 'let',
              start: 5,
              end: 9,
              kind: 13,
              flags: 0
            },
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 11,
              end: 11,
              kind: 13,
              flags: 2
            },
            computed: true,
            start: 5,
            end: 11,
            kind: 154,
            flags: 0
          },
          statement: {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 11,
              end: 11,
              kind: 13,
              flags: 2
            },
            start: 11,
            end: 11,
            kind: 122,
            flags: 0
          },
          start: 0,
          end: 11,
          kind: 139,
          flags: 0
        }
      ],
      text: 'while let [',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`(` expected',
          code: 5,
          start: 6,
          length: 3
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 10,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 11,
      end: 11
    });
  });

  it('! let [', () => {
    t.deepEqual(recovery('! let [', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'MemberExpression',
              member: {
                type: 'IdentifierReference',
                name: 'let',
                start: 1,
                end: 5,
                kind: 13,
                flags: 0
              },
              expression: {
                type: 'IdentifierReference',
                name: '',
                start: 7,
                end: 7,
                kind: 13,
                flags: 2
              },
              computed: true,
              start: 1,
              end: 7,
              kind: 154,
              flags: 0
            },
            start: 0,
            end: 7,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: '! let [',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 6,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 7,
      end: 7
    });
  });

  it('let const var', () => {
    t.deepEqual(recovery('let const var', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [],
          start: 0,
          end: 3,
          kind: 145,
          flags: 0
        },
        {
          type: 'LexicalDeclaration',
          isConst: true,
          declarations: [],
          start: 3,
          end: 9,
          kind: 145,
          flags: 0
        },
        {
          type: 'VariableStatement',
          declarations: [],
          start: 9,
          end: 13,
          kind: 143,
          flags: 0
        }
      ],
      text: 'let const var',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 4,
          length: 5
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 10,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 13,
      end: 13
    });
  });

  it('let 123', () => {
    t.deepEqual(recovery('let 123', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'let',
            start: 0,
            end: 3,
            kind: 13,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 123,
            start: 3,
            end: 7,
            kind: 10,
            flags: 0
          },
          start: 3,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let 123',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 4,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 7,
      end: 7
    });
  });

  it(',,,,,,,,,,,,let', () => {
    t.deepEqual(recovery(',,,,,,,,,,,,let', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'let',
            start: 12,
            end: 15,
            kind: 13,
            flags: 0
          },
          start: 12,
          end: 15,
          kind: 122,
          flags: 0
        }
      ],
      text: ',,,,,,,,,,,,let',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 0,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 1,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 2,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 3,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 4,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 5,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 6,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 7,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 8,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 9,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 10,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 11,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 15,
      end: 15
    });
  });

  it('let {...( = foo', () => {
    t.deepEqual(recovery('let {...( = foo', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingRestProperty',
                    argument: {
                      type: 'BindingIdentifier',
                      name: '',
                      start: 5,
                      end: 8,
                      kind: 168,
                      flags: 0
                    },
                    start: 5,
                    end: 8,
                    kind: 167,
                    flags: 0
                  }
                ],
                start: 3,
                end: 8,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 8,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 8,
          kind: 145,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'IdentifierReference',
                name: '',
                start: 9,
                end: 9,
                kind: 13,
                flags: 2
              },
              operator: '=',
              right: {
                type: 'IdentifierReference',
                name: 'foo',
                start: 11,
                end: 15,
                kind: 13,
                flags: 0
              },
              start: 9,
              end: 15,
              kind: 152,
              flags: 0
            },
            start: 8,
            end: 15,
            kind: 189,
            flags: 0
          },
          start: 8,
          end: 15,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let {...( = foo',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expected an binding identifier',
          code: 19,
          start: 8,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 10,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 12,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 15,
      end: 15
    });
  });

  it('let [++', () => {
    t.deepEqual(recovery('let [++', 'recovery.js'), {
      children: [],
      context: 0,
      detached: false,
      diagnostics: [
        {
          code: 5,
          kind: 2,
          length: 2,
          message: '`]` expected',
          source: 2,
          start: 5
        }
      ],
      directives: [],
      end: 7,
      fileName: 'recovery.js',
      incremental: false,
      kind: 209,
      webCompat: true,
      leafs: [
        {
          declarations: [
            {
              binding: {
                elements: [],
                end: 5,
                flags: 0,
                kind: 174,
                start: 3,
                type: 'ArrayBindingPattern'
              },
              end: 5,
              flags: 0,
              initializer: null,
              kind: 146,
              start: 3,
              type: 'LexicalBinding'
            }
          ],
          end: 5,
          flags: 0,
          isConst: false,
          kind: 145,
          start: 0,
          type: 'LexicalDeclaration'
        },
        {
          end: 7,
          expression: {
            end: 7,
            flags: 0,
            kind: 161,
            operand: {
              end: 7,
              flags: 2,
              kind: 13,
              name: '',
              start: 7,
              type: 'IdentifierReference'
            },
            operator: '++',
            start: 5,
            type: 'PrefixUpdateExpression'
          },
          flags: 0,
          kind: 122,
          start: 5,
          type: 'ExpressionStatement'
        }
      ],
      length: 7,
      mutualFlags: 0,
      parent: null,
      start: 0,
      text: 'let [++'
    });
  });

  it('let { ++', () => {
    t.deepEqual(recovery('let { ++', 'recovery.js'), {
      children: [],
      context: 0,
      detached: false,
      diagnostics: [
        {
          code: 5,
          kind: 2,
          length: 2,
          message: '`}` expected',
          source: 2,
          start: 6
        }
      ],
      directives: [],
      end: 8,
      fileName: 'recovery.js',
      incremental: false,
      kind: 209,
      webCompat: true,
      leafs: [
        {
          declarations: [
            {
              binding: {
                end: 5,
                flags: 0,
                kind: 169,
                properties: [],
                start: 3,
                type: 'ObjectBindingPattern'
              },
              end: 5,
              flags: 0,
              initializer: null,
              kind: 146,
              start: 3,
              type: 'LexicalBinding'
            }
          ],
          end: 5,
          flags: 0,
          isConst: false,
          kind: 145,
          start: 0,
          type: 'LexicalDeclaration'
        },
        {
          end: 8,
          expression: {
            end: 8,
            flags: 0,
            kind: 161,
            operand: {
              end: 8,
              flags: 2,
              kind: 13,
              name: '',
              start: 8,
              type: 'IdentifierReference'
            },
            operator: '++',
            start: 5,
            type: 'PrefixUpdateExpression'
          },
          flags: 0,
          kind: 122,
          start: 5,
          type: 'ExpressionStatement'
        }
      ],
      length: 8,
      mutualFlags: 0,
      parent: null,
      start: 0,
      text: 'let { ++'
    });
  });

  it('let {...', () => {
    t.deepEqual(recovery('let {...', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingRestProperty',
                    argument: {
                      type: 'BindingIdentifier',
                      name: '',
                      start: 5,
                      end: 8,
                      kind: 168,
                      flags: 0
                    },
                    start: 5,
                    end: 8,
                    kind: 167,
                    flags: 0
                  }
                ],
                start: 3,
                end: 8,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 8,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 8,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let {...',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expected an binding identifier',
          code: 19,
          start: 5,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 8,
      end: 8
    });
  });

  it('let {...(obj', () => {
    t.deepEqual(recovery('let {...(obj', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingRestProperty',
                    argument: {
                      type: 'BindingIdentifier',
                      name: '',
                      start: 5,
                      end: 8,
                      kind: 168,
                      flags: 0
                    },
                    start: 5,
                    end: 8,
                    kind: 167,
                    flags: 0
                  }
                ],
                start: 3,
                end: 8,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 8,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 8,
          kind: 145,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'IdentifierReference',
              name: 'obj',
              start: 9,
              end: 12,
              kind: 13,
              flags: 0
            },
            start: 8,
            end: 12,
            kind: 189,
            flags: 0
          },
          start: 8,
          end: 12,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let {...(obj',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expected an binding identifier',
          code: 19,
          start: 8,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 9,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 12,
      end: 12
    });
  });

  it('let {...(a, b', () => {
    t.deepEqual(recovery('let {...(a, b', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'BindingRestProperty',
                    argument: {
                      type: 'BindingIdentifier',
                      name: '',
                      start: 5,
                      end: 8,
                      kind: 168,
                      flags: 0
                    },
                    start: 5,
                    end: 8,
                    kind: 167,
                    flags: 0
                  }
                ],
                start: 3,
                end: 8,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 8,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 8,
          kind: 145,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'CommaOperator',
              expressions: [
                {
                  type: 'IdentifierReference',
                  name: 'a',
                  start: 9,
                  end: 10,
                  kind: 13,
                  flags: 0
                },
                {
                  type: 'IdentifierReference',
                  name: 'b',
                  start: 11,
                  end: 13,
                  kind: 13,
                  flags: 0
                }
              ],
              start: 8,
              end: 13,
              kind: 147,
              flags: 0
            },
            start: 8,
            end: 13,
            kind: 189,
            flags: 0
          },
          start: 8,
          end: 13,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let {...(a, b',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expected an binding identifier',
          code: 19,
          start: 8,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 12,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 13,
      end: 13
    });
  });

  it('let', () => {
    t.deepEqual(recovery('let', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            kind: 13,
            name: 'let',
            start: 0,
            end: 3,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('let {', () => {
    t.deepEqual(recovery('let {', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [],
                start: 3,
                end: 5,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 5,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 5,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let {',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 4,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 5,
      end: 5
    });
  });

  it('let.', () => {
    t.deepEqual(recovery('let.', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'MemberExpression',
            member: {
              type: 'IdentifierReference',
              kind: 13,
              name: 'let',
              start: 0,
              end: 3,
              flags: 0
            },
            expression: {
              type: 'IdentifierReference',
              kind: 13,
              name: '',
              start: 4,
              end: 4,
              flags: 2
            },
            computed: false,
            start: 0,
            end: 4,
            kind: 154,
            flags: 0
          },
          start: 0,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let.',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 3,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 4,
      end: 4
    });
  });

  it('let =>', () => {
    t.deepEqual(recovery('let =>', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ArrowFunction',
            params: [
              {
                type: 'BindingIdentifier',
                name: 'let',
                start: 0,
                end: 3,
                kind: 168,
                flags: 0
              }
            ],
            contents: {
              type: 'IdentifierReference',
              name: '',
              start: 6,
              end: 6,
              kind: 13,
              flags: 2
            },
            async: false,
            start: 0,
            end: 6,
            kind: 188,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let =>',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 4,
          length: 2
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 6,
      webCompat: true,
      end: 6
    });
  });

  it('=> let {', () => {
    t.deepEqual(recovery('=> let {', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [],
                start: 6,
                end: 8,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 6,
              end: 8,
              kind: 146,
              flags: 0
            }
          ],
          start: 2,
          end: 8,
          kind: 145,
          flags: 0
        }
      ],
      text: '=> let {',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 0,
          length: 2
        },
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 7,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 8,
      webCompat: true,
      end: 8
    });
  });

  it('let a.b[[', () => {
    t.deepEqual(recovery('let a.b[[', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'BindingIdentifier',
                name: 'a',
                start: 3,
                end: 5,
                kind: 168,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 5,
              kind: 146,
              flags: 0
            },
            {
              type: 'LexicalBinding',
              binding: {
                type: 'BindingIdentifier',
                name: 'b',
                start: 6,
                end: 7,
                kind: 168,
                flags: 0
              },
              initializer: null,
              start: 6,
              end: 7,
              kind: 146,
              flags: 0
            },
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                elements: [
                  {
                    type: 'ArrayBindingPattern',
                    elements: [],
                    start: 8,
                    end: 9,
                    kind: 174,
                    flags: 0
                  }
                ],
                start: 7,
                end: 9,
                kind: 174,
                flags: 0
              },
              initializer: null,
              start: 7,
              end: 9,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 9,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let a.b[[',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 6,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Lexical binding expected',
          code: 16,
          start: 7,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`]` expected',
          code: 5,
          start: 8,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 9,
      webCompat: true,
      end: 9
    });
  });

  it('let [a', () => {
    t.deepEqual(recovery('let [a', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                elements: [
                  {
                    type: 'BindingIdentifier',
                    name: 'a',
                    start: 5,
                    end: 6,
                    kind: 168,
                    flags: 0
                  }
                ],
                start: 3,
                end: 6,
                kind: 174,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 6,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 6,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let [a',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 5,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 6,
      end: 6
    });
  });

  it('Unclosed block statemendfdsft', () => {
    t.deepEqual(recovery('let [break] = x', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ArrayBindingPattern',
                elements: [],
                start: 3,
                end: 5,
                kind: 174,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 5,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 5,
          kind: 145,
          flags: 0
        },
        {
          type: 'BreakStatement',
          label: null,
          start: 5,
          end: 10,
          kind: 124,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'x',
            start: 13,
            end: 15,
            kind: 13,
            flags: 0
          },
          start: 13,
          end: 15,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let [break] = x',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`]` expected',
          code: 5,
          start: 5,
          length: 5
        },
        {
          kind: 3,
          source: 2,
          message: 'A `break` statement can only be used within an enclosing iteration or switch',
          code: 41,
          start: 10,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 12,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 15,
      end: 15
    });
  });

  it('let catch', () => {
    t.deepEqual(recovery('let catch', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [],
          start: 0,
          end: 3,
          kind: 145,
          flags: 0
        },
        {
          type: 'TryStatement',
          block: {
            type: 'BlockStatement',
            leafs: [],
            start: 3,
            end: 3,
            kind: 123,
            flags: 0
          },
          catchClause: {
            type: 'CatchClause',
            binding: null,
            block: {
              type: 'BlockStatement',
              leafs: [],
              start: 9,
              end: 9,
              kind: 123,
              flags: 0
            },
            start: 3,
            end: 9,
            kind: 140,
            flags: 0
          },
          finalizer: null,
          start: 3,
          end: 9,
          kind: 138,
          flags: 0
        }
      ],
      text: 'let catch',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 4,
          length: 5
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 9,
      end: 9
    });
  });

  it('let (catch)', () => {
    t.deepEqual(recovery('let (catch)', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'CallExpression',
            expression: {
              type: 'IdentifierReference',
              name: 'let',
              start: 0,
              end: 3,
              kind: 13,
              flags: 0
            },
            arguments: [],
            start: 0,
            end: 5,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        },
        {
          type: 'TryStatement',
          block: {
            type: 'BlockStatement',
            leafs: [],
            start: 5,
            end: 5,
            kind: 123,
            flags: 0
          },
          catchClause: {
            type: 'CatchClause',
            kind: 140,
            binding: null,
            block: {
              type: 'BlockStatement',
              leafs: [],
              start: 10,
              end: 10,
              kind: 123,
              flags: 0
            },
            flags: 0,
            start: 5,
            end: 10
          },
          finalizer: null,
          start: 5,
          end: 10,
          kind: 138,
          flags: 0
        }
      ],
      text: 'let (catch)',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 5,
          length: 5
        },
        {
          kind: 2,
          source: 2,
          message: '`{` expected',
          code: 5,
          start: 10,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 11,
      end: 11
    });
  });

  it('let.catch', () => {
    t.deepEqual(recovery('let.catch', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'MemberExpression',
            member: {
              type: 'IdentifierReference',
              kind: 13,
              name: 'let',
              start: 0,
              end: 3,
              flags: 0
            },
            expression: {
              type: 'IdentifierName',
              name: 'catch',
              start: 4,
              end: 9,
              kind: 13,
              flags: 0
            },
            computed: false,
            start: 0,
            end: 9,
            kind: 154,
            flags: 0
          },
          start: 0,
          end: 9,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let.catch',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 9,
      end: 9
    });
  });

  it('let let let ! let . let /a/', () => {
    t.deepEqual(recovery('let let let ! let . let /a/', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'BindingIdentifier',
                name: 'let',
                start: 3,
                end: 7,
                kind: 168,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 7,
              kind: 146,
              flags: 0
            },
            {
              type: 'LexicalBinding',
              binding: {
                type: 'BindingIdentifier',
                name: 'let',
                start: 7,
                end: 11,
                kind: 168,
                flags: 0
              },
              initializer: null,
              start: 7,
              end: 11,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 11,
          kind: 145,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'BinaryExpression',
              left: {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'MemberExpression',
                  member: {
                    type: 'IdentifierReference',
                    name: 'let',
                    start: 13,
                    end: 17,
                    kind: 13,
                    flags: 0
                  },
                  expression: {
                    type: 'IdentifierName',
                    name: 'let',
                    start: 19,
                    end: 23,
                    kind: 13,
                    flags: 0
                  },
                  computed: false,
                  start: 13,
                  end: 23,
                  kind: 154,
                  flags: 0
                },
                start: 11,
                end: 23,
                kind: 160,
                flags: 0
              },
              operator: '/',
              right: {
                type: 'IdentifierReference',
                name: 'a',
                start: 25,
                end: 26,
                kind: 13,
                flags: 0
              },
              start: 11,
              end: 26,
              kind: 155,
              flags: 0
            },
            operator: '/',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 27,
              end: 27,
              kind: 13,
              flags: 2
            },
            start: 11,
            end: 27,
            kind: 155,
            flags: 0
          },
          start: 11,
          end: 27,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let let let ! let . let /a/',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'A lexical declaration can not define a `let` binding',
          code: 87,
          start: 4,
          length: 3
        },
        {
          kind: 2,
          source: 2,
          message: 'Lexical binding expected',
          code: 16,
          start: 8,
          length: 3
        },
        {
          kind: 2,
          source: 2,
          message: 'Lexical binding expected',
          code: 16,
          start: 12,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 26,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 27,
      end: 27
    });
  });

  it('let const y = ;', () => {
    t.deepEqual(recovery('let const y = ;', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [],
          start: 0,
          end: 3,
          kind: 145,
          flags: 0
        },
        {
          type: 'LexicalDeclaration',
          isConst: true,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'BindingIdentifier',
                name: 'y',
                start: 9,
                end: 11,
                kind: 168,
                flags: 0
              },
              initializer: {
                type: 'IdentifierReference',
                name: '',
                start: 13,
                end: 13,
                kind: 13,
                flags: 2
              },
              start: 9,
              end: 13,
              kind: 146,
              flags: 0
            }
          ],
          start: 3,
          end: 15,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let const y = ;',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 4,
          length: 5
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 14,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 15,
      end: 15
    });
  });
  it('let const = b', () => {
    t.deepEqual(recovery('let const = b', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [],
          start: 0,
          end: 3,
          kind: 145,
          flags: 0
        },
        {
          type: 'LexicalDeclaration',
          isConst: true,
          declarations: [],
          start: 3,
          end: 9,
          kind: 145,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'b',
            start: 11,
            end: 13,
            kind: 13,
            flags: 0
          },
          start: 11,
          end: 13,
          kind: 122,
          flags: 0
        }
      ],
      text: 'let const = b',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 4,
          length: 5
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 10,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 13,
      end: 13
    });
  });

  it('let { =', () => {
    t.deepEqual(recovery('let { =', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [],
                start: 3,
                end: 5,
                kind: 169,
                flags: 0
              },
              initializer: {
                type: 'IdentifierReference',
                name: '',
                start: 7,
                end: 7,
                kind: 13,
                flags: 2
              },
              start: 3,
              end: 7,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 7,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let { =',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 6,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 7,
      end: 7
    });
  });
  it('let { x: b = c /', () => {
    t.deepEqual(recovery('let { x: b = c /', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LexicalDeclaration',
          isConst: false,
          declarations: [
            {
              type: 'LexicalBinding',
              binding: {
                type: 'ObjectBindingPattern',
                properties: [
                  {
                    type: 'PropertyName',
                    key: {
                      type: 'IdentifierName',
                      name: 'x',
                      start: 5,
                      end: 8,
                      kind: 13,
                      flags: 0
                    },
                    value: {
                      type: 'BindingElement',
                      left: {
                        type: 'BindingIdentifier',
                        name: 'b',
                        start: 8,
                        end: 10,
                        kind: 168,
                        flags: 0
                      },
                      right: {
                        type: 'BinaryExpression',
                        left: {
                          type: 'IdentifierReference',
                          name: 'c',
                          start: 12,
                          end: 14,
                          kind: 13,
                          flags: 0
                        },
                        operator: '/',
                        right: {
                          type: 'IdentifierReference',
                          name: '',
                          start: 16,
                          end: 16,
                          kind: 13,
                          flags: 2
                        },
                        start: 12,
                        end: 16,
                        kind: 155,
                        flags: 0
                      },
                      start: 8,
                      end: 16,
                      kind: 172,
                      flags: 0
                    },
                    start: 5,
                    end: 16,
                    kind: 227,
                    flags: 0
                  }
                ],
                start: 3,
                end: 16,
                kind: 169,
                flags: 0
              },
              initializer: null,
              start: 3,
              end: 16,
              kind: 146,
              flags: 0
            }
          ],
          start: 0,
          end: 16,
          kind: 145,
          flags: 0
        }
      ],
      text: 'let { x: b = c /',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 15,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 16,
      end: 16
    });
  });
});
