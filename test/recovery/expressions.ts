import * as t from 'assert';
import { recovery } from '../../src/escaya';

describe('Recovery - Expressions', () => {
  it('= ((b)) = (!', () => {
    t.deepEqual(recovery('= ((b)) = (!', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'AssignmentExpression',
            left: {
              type: 'ParenthesizedExpression',
              expression: {
                type: 'ParenthesizedExpression',
                expression: {
                  type: 'IdentifierReference',
                  name: 'b',
                  start: 4,
                  end: 5,
                  kind: 13,
                  flags: 0
                },
                start: 3,
                end: 6,
                kind: 189,
                flags: 0
              },
              start: 1,
              end: 7,
              kind: 189,
              flags: 0
            },
            operator: '=',
            right: {
              type: 'ParenthesizedExpression',
              expression: {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 12,
                  end: 12,
                  kind: 13,
                  flags: 2
                },
                start: 11,
                end: 12,
                kind: 160,
                flags: 0
              },
              start: 9,
              end: 12,
              kind: 189,
              flags: 0
            },
            start: 1,
            end: 12,
            kind: 152,
            flags: 0
          },
          start: 1,
          end: 12,
          kind: 122,
          flags: 0
        }
      ],
      text: '= ((b)) = (!',
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
          message: 'Expression expected',
          code: 7,
          start: 11,
          length: 1
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

  it('[(a = 0', () => {
    t.deepEqual(recovery('[(a = 0', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ArrayLiteral',
            elements: [
              {
                type: 'ParenthesizedExpression',
                expression: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'IdentifierReference',
                    name: 'a',
                    start: 2,
                    end: 3,
                    kind: 13,
                    flags: 0
                  },
                  operator: '=',
                  right: {
                    type: 'NumericLiteral',

                    value: 0,
                    start: 5,
                    end: 7,
                    kind: 10,
                    flags: 0
                  },
                  start: 2,
                  end: 7,
                  kind: 152,
                  flags: 0
                },
                start: 1,
                end: 7,
                kind: 189,
                flags: 0
              }
            ],
            start: 0,
            end: 7,
            kind: 178,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: '[(a = 0',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
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

  it('x in [2', () => {
    t.deepEqual(recovery('x in [2', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'IdentifierReference',
              name: 'x',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            operator: 'in',
            right: {
              type: 'ArrayLiteral',
              elements: [
                {
                  type: 'NumericLiteral',

                  value: 2,
                  start: 6,
                  end: 7,
                  kind: 10,
                  flags: 0
                }
              ],
              start: 4,
              end: 7,
              kind: 178,
              flags: 0
            },
            start: 0,
            end: 7,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: 'x in [2',
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

  it('({a:(a,y) = 0(!', () => {
    t.deepEqual(recovery('({a:(a,y) = 0(!', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'PropertyName',
                  key: {
                    type: 'IdentifierName',
                    name: 'a',
                    start: 2,
                    end: 3,
                    kind: 13,
                    flags: 0
                  },
                  value: {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'ParenthesizedExpression',
                      expression: {
                        type: 'CommaOperator',
                        expressions: [
                          {
                            type: 'IdentifierReference',
                            name: 'a',
                            start: 5,
                            end: 6,
                            kind: 13,
                            flags: 0
                          },
                          {
                            type: 'IdentifierReference',
                            name: 'y',
                            start: 7,
                            end: 8,
                            kind: 13,
                            flags: 0
                          }
                        ],
                        start: 4,
                        end: 8,
                        kind: 147,
                        flags: 0
                      },
                      start: 4,
                      end: 9,
                      kind: 189,
                      flags: 0
                    },
                    operator: '=',
                    right: {
                      type: 'CallExpression',
                      expression: {
                        type: 'NumericLiteral',

                        value: 0,
                        start: 11,
                        end: 13,
                        kind: 10,
                        flags: 0
                      },
                      arguments: [
                        {
                          type: 'UnaryExpression',
                          operator: '!',
                          operand: {
                            type: 'IdentifierReference',
                            name: '',
                            start: 15,
                            end: 15,
                            kind: 13,
                            flags: 2
                          },
                          start: 14,
                          end: 15,
                          kind: 160,
                          flags: 0
                        }
                      ],
                      start: 11,
                      end: 15,
                      kind: 156,
                      flags: 0
                    },
                    start: 2,
                    end: 15,
                    kind: 152,
                    flags: 0
                  },
                  start: 2,
                  end: 15,
                  kind: 227,
                  flags: 0
                }
              ],
              start: 1,
              end: 15,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 15,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 15,
          kind: 122,
          flags: 0
        }
      ],
      text: '({a:(a,y) = 0(!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'The left-hand side of an assignment expression must be a variable or a property access',
          code: 97,
          start: 10,
          length: 1
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

  it('({a:(a,y) = 0for!', () => {
    t.deepEqual(recovery('({a:(a,y) = 0for!', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'PropertyName',
                  key: {
                    type: 'IdentifierName',
                    name: 'a',
                    start: 2,
                    end: 3,
                    kind: 13,
                    flags: 0
                  },
                  value: {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'ParenthesizedExpression',
                      expression: {
                        type: 'CommaOperator',
                        expressions: [
                          {
                            type: 'IdentifierReference',
                            name: 'a',
                            start: 5,
                            end: 6,
                            kind: 13,
                            flags: 0
                          },
                          {
                            type: 'IdentifierReference',
                            name: 'y',
                            start: 7,
                            end: 8,
                            kind: 13,
                            flags: 0
                          }
                        ],
                        start: 4,
                        end: 8,
                        kind: 147,
                        flags: 0
                      },
                      start: 4,
                      end: 9,
                      kind: 189,
                      flags: 0
                    },
                    operator: '=',
                    right: {
                      type: 'NumericLiteral',

                      value: 0,
                      start: 11,
                      end: 13,
                      kind: 10,
                      flags: 0
                    },
                    start: 2,
                    end: 13,
                    kind: 152,
                    flags: 0
                  },
                  start: 2,
                  end: 13,
                  kind: 227,
                  flags: 0
                },
                {
                  type: 'IdentifierName',
                  name: 'for',
                  start: 13,
                  end: 16,
                  kind: 13,
                  flags: 0
                }
              ],
              start: 1,
              end: 16,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 16,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 16,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 17,
              end: 17,
              kind: 13,
              flags: 2
            },
            start: 16,
            end: 17,
            kind: 160,
            flags: 0
          },
          start: 16,
          end: 17,
          kind: 122,
          flags: 0
        }
      ],
      text: '({a:(a,y) = 0for!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'The left-hand side of an assignment expression must be a variable or a property access',
          code: 97,
          start: 10,
          length: 1
        },
        {
          kind: 2,
          source: 0,
          message: 'An identifier or keyword cannot immediately follow a numeric literal',
          code: 58,
          start: 13,
          length: 0
        },
        {
          kind: 2,
          source: 2,
          message: '`:` expected',
          code: 36,
          start: 16,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 17,
      end: 17
    });
  });

  it('({a:(a,y) = 0for!switch', () => {
    t.deepEqual(recovery('({a:(a,y) = 0for!switch', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'PropertyName',
                  key: {
                    type: 'IdentifierName',
                    name: 'a',
                    start: 2,
                    end: 3,
                    kind: 13,
                    flags: 0
                  },
                  value: {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'ParenthesizedExpression',
                      expression: {
                        type: 'CommaOperator',
                        expressions: [
                          {
                            type: 'IdentifierReference',
                            name: 'a',
                            start: 5,
                            end: 6,
                            kind: 13,
                            flags: 0
                          },
                          {
                            type: 'IdentifierReference',
                            name: 'y',
                            start: 7,
                            end: 8,
                            kind: 13,
                            flags: 0
                          }
                        ],
                        start: 4,
                        end: 8,
                        kind: 147,
                        flags: 0
                      },
                      start: 4,
                      end: 9,
                      kind: 189,
                      flags: 0
                    },
                    operator: '=',
                    right: {
                      type: 'NumericLiteral',

                      value: 0,
                      start: 11,
                      end: 13,
                      kind: 10,
                      flags: 0
                    },
                    start: 2,
                    end: 13,
                    kind: 152,
                    flags: 0
                  },
                  start: 2,
                  end: 13,
                  kind: 227,
                  flags: 0
                },
                {
                  type: 'IdentifierName',
                  name: 'for',
                  start: 13,
                  end: 16,
                  kind: 13,
                  flags: 0
                }
              ],
              start: 1,
              end: 16,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 16,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 16,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 17,
              end: 17,
              kind: 13,
              flags: 2
            },
            start: 16,
            end: 17,
            kind: 160,
            flags: 0
          },
          start: 16,
          end: 17,
          kind: 122,
          flags: 0
        },
        {
          type: 'SwitchStatement',
          expression: {
            type: 'IdentifierReference',
            name: '',
            start: 23,
            end: 23,
            kind: 13,
            flags: 2
          },
          clauses: [],
          start: 17,
          end: 23,
          kind: 136,
          flags: 0
        }
      ],
      text: '({a:(a,y) = 0for!switch',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'The left-hand side of an assignment expression must be a variable or a property access',
          code: 97,
          start: 10,
          length: 1
        },
        {
          kind: 2,
          source: 0,
          message: 'An identifier or keyword cannot immediately follow a numeric literal',
          code: 58,
          start: 13,
          length: 0
        },
        {
          kind: 2,
          source: 2,
          message: '`:` expected',
          code: 36,
          start: 16,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 17,
          length: 6
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 23,
      end: 23
    });
  });

  it('({a:(a,y) = 0} = 1', () => {
    t.deepEqual(recovery('({a:(a,y) = 0} = 1', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'AssignmentElement',
              left: {
                type: 'ObjectAssignmentPattern',
                properties: [
                  {
                    type: 'PropertyName',
                    key: {
                      type: 'IdentifierName',
                      name: 'a',
                      start: 2,
                      end: 3,
                      kind: 13,
                      flags: 0
                    },
                    value: {
                      type: 'AssignmentElement',
                      left: {
                        type: 'ParenthesizedExpression',
                        expression: {
                          type: 'CommaOperator',
                          expressions: [
                            {
                              type: 'IdentifierReference',
                              name: 'a',
                              start: 5,
                              end: 6,
                              kind: 13,
                              flags: 0
                            },
                            {
                              type: 'IdentifierReference',
                              name: 'y',
                              start: 7,
                              end: 8,
                              kind: 13,
                              flags: 0
                            }
                          ],
                          start: 4,
                          end: 8,
                          kind: 147,
                          flags: 0
                        },
                        start: 4,
                        end: 9,
                        kind: 189,
                        flags: 0
                      },
                      right: {
                        type: 'NumericLiteral',

                        value: 0,
                        start: 11,
                        end: 13,
                        kind: 10,
                        flags: 0
                      },
                      start: 2,
                      end: 13,
                      kind: 152,
                      flags: 0
                    },
                    start: 2,
                    end: 13,
                    kind: 227,
                    flags: 0
                  }
                ],
                start: 1,
                end: 14,
                kind: 179,
                flags: 0
              },
              right: {
                type: 'NumericLiteral',

                value: 1,
                start: 16,
                end: 18,
                kind: 10,
                flags: 0
              },
              start: 1,
              end: 18,
              kind: 213,
              flags: 0
            },
            start: 0,
            end: 18,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 18,
          kind: 122,
          flags: 0
        }
      ],
      text: '({a:(a,y) = 0} = 1',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'The left-hand side of an assignment expression must be a variable or a property access',
          code: 97,
          start: 10,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 17,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 18,
      end: 18
    });
  });

  it('...obj} = foo', () => {
    t.deepEqual(recovery('...obj} = foo', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'obj',
            start: 3,
            end: 6,
            kind: 13,
            flags: 0
          },
          start: 3,
          end: 6,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'foo',
            start: 9,
            end: 13,
            kind: 13,
            flags: 0
          },
          start: 9,
          end: 13,
          kind: 122,
          flags: 0
        }
      ],
      text: '...obj} = foo',
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
          length: 3
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
          start: 8,
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

  it('y)) = z', () => {
    t.deepEqual(recovery('y)) = z', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'y',
            start: 0,
            end: 1,
            kind: 13,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'z',
            start: 5,
            end: 7,
            kind: 13,
            flags: 0
          },
          start: 5,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: 'y)) = z',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
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
          start: 4,
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

  it('x = {[super[foo]]: x', () => {
    t.deepEqual(recovery('x = {[super[foo]]: x', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'AssignmentExpression',
            left: {
              type: 'IdentifierReference',
              name: 'x',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            operator: '=',
            right: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'PropertyName',
                  key: {
                    type: 'ComputedPropertyName',
                    expression: {
                      type: 'SuperProperty',
                      computed: true,
                      super: {
                        type: 'IdentifierReference',
                        name: 'foo',
                        start: 12,
                        end: 15,
                        kind: 13,
                        flags: 0
                      },
                      start: 6,
                      end: 16,
                      kind: 192,
                      flags: 0
                    },
                    start: 5,
                    end: 17,
                    kind: 171,
                    flags: 0
                  },
                  value: {
                    type: 'IdentifierReference',
                    name: 'x',
                    start: 18,
                    end: 20,
                    kind: 13,
                    flags: 0
                  },
                  start: 5,
                  end: 20,
                  kind: 227,
                  flags: 0
                }
              ],
              start: 3,
              end: 20,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 20,
            kind: 152,
            flags: 0
          },
          start: 0,
          end: 20,
          kind: 122,
          flags: 0
        }
      ],
      text: 'x = {[super[foo]]: x',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'Member access on super must be in a method',
          code: 31,
          start: 11,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 19,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 20,
      end: 20
    });
  });

  it('class x extends y { foo(){ return (', () => {
    t.deepEqual(recovery('class x extends y { foo(){ return (', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ClassDeclaration',
          name: {
            type: 'BindingIdentifier',
            name: 'x',
            start: 5,
            end: 7,
            kind: 168,
            flags: 0
          },
          heritage: {
            type: 'IdentifierReference',
            name: 'y',
            start: 15,
            end: 17,
            kind: 13,
            flags: 0
          },
          elements: [
            {
              type: 'ClassElement',
              static: false,
              method: {
                type: 'MethodDefinition',
                async: false,
                generator: false,
                getter: false,
                setter: false,
                propertySetParameterList: null,
                uniqueFormalParameters: [],
                name: {
                  type: 'IdentifierName',
                  name: 'foo',
                  start: 19,
                  end: 23,
                  kind: 13,
                  flags: 0
                },
                contents: {
                  type: 'FunctionBody',
                  directives: [],
                  leafs: [
                    {
                      type: 'ReturnStatement',
                      expression: {
                        type: 'ParenthesizedExpression',
                        expression: {
                          type: 'IdentifierReference',
                          name: '',
                          start: 35,
                          end: 35,
                          kind: 13,
                          flags: 2
                        },
                        start: 33,
                        end: 35,
                        kind: 189,
                        flags: 0
                      },
                      start: 26,
                      end: 35,
                      kind: 135,
                      flags: 0
                    }
                  ],
                  start: 25,
                  end: 35,
                  kind: 184,
                  flags: 0
                },
                start: 23,
                end: 35,
                kind: 182,
                flags: 0
              },
              start: 19,
              end: 35,
              kind: 151,
              flags: 0
            }
          ],
          start: 0,
          end: 35,
          kind: 150,
          flags: 0
        }
      ],
      text: 'class x extends y { foo(){ return (',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 34,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 35,
      end: 35
    });
  });

  it('({ f: function*() {() => new super', () => {
    t.deepEqual(recovery('({ f: function*() {() => new super', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'PropertyName',
                  key: {
                    type: 'IdentifierName',
                    name: 'f',
                    start: 2,
                    end: 4,
                    kind: 13,
                    flags: 0
                  },
                  value: {
                    type: 'FunctionExpression',
                    name: null,
                    generator: true,
                    async: false,
                    params: [],
                    contents: {
                      type: 'FunctionBody',
                      directives: [],
                      leafs: [
                        {
                          type: 'ExpressionStatement',
                          expression: {
                            type: 'ArrowFunction',
                            params: [],
                            contents: {
                              type: 'NewExpression',
                              expression: {
                                type: 'SuperProperty',
                                super: {
                                  type: 'IdentifierName',
                                  name: '',
                                  start: 34,
                                  end: 34,
                                  kind: 13,
                                  flags: 0
                                },
                                computed: false,
                                start: 28,
                                end: 34,
                                kind: 192,
                                flags: 0
                              },
                              arguments: [],
                              start: 24,
                              end: 34,
                              kind: 163,
                              flags: 0
                            },
                            async: false,
                            start: 19,
                            end: 34,
                            kind: 188,
                            flags: 0
                          },
                          start: 19,
                          end: 34,
                          kind: 122,
                          flags: 0
                        }
                      ],
                      start: 17,
                      end: 34,
                      kind: 184,
                      flags: 0
                    },
                    start: 5,
                    end: 34,
                    kind: 185,
                    flags: 0
                  },
                  start: 2,
                  end: 34,
                  kind: 227,
                  flags: 0
                }
              ],
              start: 1,
              end: 34,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 34,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 34,
          kind: 122,
          flags: 0
        }
      ],
      text: '({ f: function*() {() => new super',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'Member access on super must be in a method',
          code: 31,
          start: 29,
          length: 5
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 34,
      webCompat: true,
      end: 34
    });
  });

  it('super[27](', () => {
    t.deepEqual(recovery('super[27](', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'CallExpression',
            expression: {
              type: 'SuperProperty',
              computed: true,
              super: {
                type: 'NumericLiteral',

                value: 27,
                start: 6,
                end: 8,
                kind: 10,
                flags: 0
              },
              start: 0,
              end: 9,
              kind: 192,
              flags: 0
            },
            arguments: [],
            start: 0,
            end: 10,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 10,
          kind: 122,
          flags: 0
        }
      ],
      text: 'super[27](',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'Member access on super must be in a method',
          code: 31,
          start: 5,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 9,
          length: 1
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

  it('({...import.meta', () => {
    t.deepEqual(recovery('({...import.meta', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'SpreadProperty',
                  argument: {
                    type: 'ImportCall',
                    import: {
                      type: 'MemberExpression',
                      member: {
                        type: 'IdentifierReference',
                        name: '',
                        start: 11,
                        end: 11,
                        kind: 13,
                        flags: 2
                      },
                      expression: {
                        type: 'IdentifierName',
                        name: 'meta',
                        start: 12,
                        end: 16,
                        kind: 13,
                        flags: 0
                      },
                      computed: false,
                      start: 11,
                      end: 16,
                      kind: 154,
                      flags: 0
                    },
                    start: 5,
                    end: 16,
                    kind: 199,
                    flags: 0
                  },
                  start: 2,
                  end: 16,
                  kind: 215,
                  flags: 0
                }
              ],
              start: 1,
              end: 16,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 16,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 16,
          kind: 122,
          flags: 0
        }
      ],
      text: '({...import.meta',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`(` expected',
          code: 5,
          start: 11,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 12,
          length: 4
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

  it('a ? b', () => {
    t.deepEqual(recovery('a ? b', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ConditionalExpression',
            shortCircuit: {
              type: 'IdentifierReference',
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            consequent: {
              type: 'IdentifierReference',
              name: 'b',
              start: 3,
              end: 5,
              kind: 13,
              flags: 0
            },
            alternate: {
              type: 'IdentifierReference',
              name: '',
              start: 5,
              end: 5,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 5,
            kind: 153,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a ? b',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`:` expected',
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

  it('foo?.3:', () => {
    t.deepEqual(recovery('foo?.3:', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ConditionalExpression',
            shortCircuit: {
              type: 'IdentifierReference',
              name: 'foo',
              start: 0,
              end: 3,
              kind: 13,
              flags: 0
            },
            consequent: {
              type: 'NumericLiteral',

              value: 3,
              start: 5,
              end: 6,
              kind: 10,
              flags: 0
            },
            alternate: {
              type: 'IdentifierReference',
              name: '',
              start: 7,
              end: 7,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 7,
            kind: 153,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: 'foo?.3:',
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

  it('(y ? y : true', () => {
    t.deepEqual(recovery('(y ? y : true', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ConditionalExpression',
              shortCircuit: {
                type: 'IdentifierReference',
                name: 'y',
                start: 1,
                end: 2,
                kind: 13,
                flags: 0
              },
              consequent: {
                type: 'IdentifierReference',
                name: 'y',
                start: 4,
                end: 6,
                kind: 13,
                flags: 0
              },
              alternate: {
                type: 'BooleanLiteral',
                value: true,
                start: 8,
                end: 13,
                kind: 166,
                flags: 0
              },
              start: 1,
              end: 13,
              kind: 153,
              flags: 0
            },
            start: 0,
            end: 13,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 13,
          kind: 122,
          flags: 0
        }
      ],
      text: '(y ? y : true',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 9,
          length: 4
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

  it('[1 >>>= a', () => {
    t.deepEqual(recovery('[1 >>>= a', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ArrayLiteral',
            elements: [
              {
                type: 'AssignmentExpression',
                left: {
                  type: 'NumericLiteral',

                  value: 1,
                  start: 1,
                  end: 2,
                  kind: 10,
                  flags: 0
                },
                operator: '>>>=',
                right: {
                  type: 'IdentifierReference',
                  name: 'a',
                  start: 7,
                  end: 9,
                  kind: 13,
                  flags: 0
                },
                start: 1,
                end: 9,
                kind: 152,
                flags: 0
              }
            ],
            start: 0,
            end: 9,
            kind: 178,
            flags: 0
          },
          start: 0,
          end: 9,
          kind: 122,
          flags: 0
        }
      ],
      text: '[1 >>>= a',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'The left-hand side of an assignment expression must be a variable or a property access',
          code: 97,
          start: 3,
          length: 4
        },
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
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
      end: 9
    });
  });

  it('([(a = b)] = [', () => {
    t.deepEqual(recovery('([(a = b)] = [', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'AssignmentElement',
              left: {
                type: 'ArrayAssignmentPattern',
                elements: [
                  {
                    type: 'ParenthesizedExpression',
                    expression: {
                      type: 'AssignmentExpression',
                      left: {
                        type: 'IdentifierReference',
                        name: 'a',
                        start: 3,
                        end: 4,
                        kind: 13,
                        flags: 0
                      },
                      operator: '=',
                      right: {
                        type: 'IdentifierReference',
                        name: 'b',
                        start: 6,
                        end: 8,
                        kind: 13,
                        flags: 0
                      },
                      start: 3,
                      end: 8,
                      kind: 152,
                      flags: 0
                    },
                    start: 2,
                    end: 9,
                    kind: 189,
                    flags: 0
                  }
                ],
                start: 1,
                end: 10,
                kind: 178,
                flags: 0
              },
              right: {
                type: 'ArrayLiteral',
                elements: [],
                start: 12,
                end: 14,
                kind: 178,
                flags: 0
              },
              start: 1,
              end: 14,
              kind: 213,
              flags: 0
            },
            start: 0,
            end: 14,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 14,
          kind: 122,
          flags: 0
        }
      ],
      text: '([(a = b)] = [',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'Invalid destruct',
          code: 96,
          start: 11,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`]` expected',
          code: 5,
          start: 13,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 14,
      end: 14
    });
  });

  it('a(0).b(14, 3, 77', () => {
    t.deepEqual(recovery('a(0).b(14, 3, 77', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'CallExpression',
            expression: {
              type: 'MemberExpression',
              member: {
                type: 'CallExpression',
                expression: {
                  type: 'IdentifierReference',
                  name: 'a',
                  start: 0,
                  end: 1,
                  kind: 13,
                  flags: 0
                },
                arguments: [
                  {
                    type: 'NumericLiteral',

                    value: 0,
                    start: 2,
                    end: 3,
                    kind: 10,
                    flags: 0
                  }
                ],
                start: 0,
                end: 4,
                kind: 156,
                flags: 0
              },
              expression: {
                type: 'IdentifierName',
                name: 'b',
                start: 5,
                end: 6,
                kind: 13,
                flags: 0
              },
              computed: false,
              start: 0,
              end: 6,
              kind: 154,
              flags: 0
            },
            arguments: [
              {
                type: 'NumericLiteral',

                value: 14,
                start: 7,
                end: 9,
                kind: 10,
                flags: 0
              },
              {
                type: 'NumericLiteral',

                value: 3,
                start: 10,
                end: 12,
                kind: 10,
                flags: 0
              },
              {
                type: 'NumericLiteral',

                value: 77,
                start: 13,
                end: 16,
                kind: 10,
                flags: 0
              }
            ],
            start: 0,
            end: 16,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 16,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a(0).b(14, 3, 77',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 14,
          length: 2
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

  it('"\\9";', () => {
    t.deepEqual(recovery('"\\9";', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [
        {
          type: 'Directive',
          value: '',
          raw: '\\9',
          start: 0,
          end: 4,
          kind: 229,
          flags: 0
        }
      ],
      leafs: [],
      text: '"\\9";',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Escapes \\8 or \\9 are not syntactically valid escapes',
          code: 57,
          start: 0,
          length: 3
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

  it('var x = /(s/g', () => {
    t.deepEqual(recovery('var x = /(s/g', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'VariableStatement',
          declarations: [
            {
              type: 'VariableDeclaration',
              binding: {
                type: 'BindingIdentifier',
                name: 'x',
                start: 3,
                end: 5,
                kind: 168,
                flags: 0
              },
              initializer: {
                type: 'RegularExpressionLiteral',
                pattern: '(s',
                flag: 'g',
                start: 7,
                end: 13,
                kind: 15,
                flags: 0
              },
              start: 3,
              end: 13,
              kind: 144,
              flags: 0
            }
          ],
          start: 0,
          end: 13,
          kind: 143,
          flags: 0
        }
      ],
      text: 'var x = /(s/g',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 13,
      end: 13
    });
  });

  it('var x = /(s/g', () => {
    t.deepEqual(recovery('var x = /(s/g', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'VariableStatement',
          declarations: [
            {
              type: 'VariableDeclaration',
              binding: {
                type: 'BindingIdentifier',
                name: 'x',
                start: 3,
                end: 5,
                kind: 168,
                flags: 0
              },
              initializer: {
                type: 'RegularExpressionLiteral',
                pattern: '(s',
                flag: 'g',
                start: 7,
                end: 13,
                kind: 15,
                flags: 0
              },
              start: 3,
              end: 13,
              kind: 144,
              flags: 0
            }
          ],
          start: 0,
          end: 13,
          kind: 143,
          flags: 0
        }
      ],
      text: 'var x = /(s/g',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 13,
      end: 13
    });
  });

  it('"\\u00";', () => {
    t.deepEqual(recovery('"\\u00";', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [
        {
          type: 'Directive',
          value: '',
          raw: '\\u00',
          start: 0,
          end: 6,
          kind: 229,
          flags: 0
        }
      ],
      leafs: [],
      text: '"\\u00";',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Invalid hexadecimal escape sequence',
          code: 50,
          start: 0,
          length: 5
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

  it('}', () => {
    t.deepEqual(recovery('}', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [],
      text: '}',
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
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 1,
      end: 1
    });
  });

  it('3in []', () => {
    t.deepEqual(recovery('3in []', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'NumericLiteral',

              value: 3,
              start: 0,
              end: 1,
              kind: 10,
              flags: 0
            },
            operator: 'in',
            right: {
              type: 'ArrayLiteral',
              kind: 178,
              elements: [],
              start: 3,
              end: 6,
              flags: 0
            },
            start: 0,
            end: 6,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 122,
          flags: 0
        }
      ],
      text: '3in []',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'An identifier or keyword cannot immediately follow a numeric literal',
          code: 58,
          start: 1,
          length: 0
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

  it('3e', () => {
    t.deepEqual(recovery('3e', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 3,
            start: 0,
            end: 3,
            kind: 10,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '3e',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Non-number after exponent indicator',
          code: 59,
          start: 2,
          length: 0
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it('3e+', () => {
    t.deepEqual(recovery('3e+', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 3,
            start: 0,
            end: 4,
            kind: 10,
            flags: 0
          },
          start: 0,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '3e+',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Non-number after exponent indicator',
          code: 59,
          start: 3,
          length: 0
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('3x', () => {
    t.deepEqual(recovery('3x', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 3,
            start: 0,
            end: 1,
            kind: 10,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'x',
            start: 1,
            end: 2,
            kind: 13,
            flags: 0
          },
          start: 1,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: '3x',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'An identifier or keyword cannot immediately follow a numeric literal',
          code: 58,
          start: 1,
          length: 0
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it('01a', () => {
    t.deepEqual(recovery('01a', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 1,
            start: 0,
            end: 2,
            kind: 10,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'a',
            start: 2,
            end: 3,
            kind: 13,
            flags: 0
          },
          start: 2,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '01a',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'An identifier or keyword cannot immediately follow a numeric literal',
          code: 58,
          start: 2,
          length: 0
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('0o1a', () => {
    t.deepEqual(recovery('0o1a', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 1,
            start: 0,
            end: 4,
            kind: 10,
            flags: 0
          },
          start: 0,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '0o1a',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Octal integer literal like sequence containing an invalid digit',
          code: 66,
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

  it('0O1a', () => {
    t.deepEqual(recovery('0O1a', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 1,
            start: 0,
            end: 4,
            kind: 10,
            flags: 0
          },
          start: 0,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '0O1a',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Octal integer literal like sequence containing an invalid digit',
          code: 66,
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

  it('\\u{FFZ}', () => {
    t.deepEqual(recovery('\\u{FFZ}', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: '￿',
            start: 0,
            end: 1,
            kind: 13,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'u',
            start: 1,
            end: 2,
            kind: 13,
            flags: 0
          },
          start: 1,
          end: 2,
          kind: 122,
          flags: 0
        },
        {
          type: 'BlockStatement',
          leafs: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'IdentifierReference',
                name: 'FFZ',
                start: 3,
                end: 6,
                kind: 13,
                flags: 0
              },
              start: 3,
              end: 6,
              kind: 122,
              flags: 0
            }
          ],
          start: 2,
          end: 7,
          kind: 123,
          flags: 0
        }
      ],
      text: '\\u{FFZ}',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Invalid hexadecimal escape sequence',
          code: 50,
          start: 0,
          length: 5
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 1,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 2,
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

  it('1++', () => {
    t.deepEqual(recovery('1++', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'PostfixUpdateExpression',
            operator: '++',
            operand: {
              type: 'NumericLiteral',

              value: 1,
              start: 0,
              end: 1,
              kind: 10,
              flags: 0
            },
            start: 1,
            end: 3,
            kind: 162,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '1++',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          code: 98,
          kind: 3,
          length: 2,
          message: 'Invalid left-hand side expression in prefix operation',
          source: 2,
          start: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('for((1 + 1) in list) process(x);', () => {
    t.deepEqual(recovery('for((1 + 1) in list) process(x);', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ForInStatement',
          initializer: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'BinaryExpression',
              left: {
                type: 'NumericLiteral',

                value: 1,
                start: 5,
                end: 6,
                kind: 10,
                flags: 0
              },
              operator: '+',
              right: {
                type: 'NumericLiteral',

                value: 1,
                start: 8,
                end: 10,
                kind: 10,
                flags: 0
              },
              start: 5,
              end: 10,
              kind: 155,
              flags: 0
            },
            start: 4,
            end: 11,
            kind: 189,
            flags: 0
          },
          expression: {
            type: 'IdentifierReference',
            name: 'list',
            start: 14,
            end: 19,
            kind: 13,
            flags: 0
          },
          statement: {
            type: 'ExpressionStatement',
            expression: {
              type: 'CallExpression',
              expression: {
                type: 'IdentifierReference',
                name: 'process',
                start: 20,
                end: 28,
                kind: 13,
                flags: 0
              },
              arguments: [
                {
                  type: 'IdentifierReference',
                  name: 'x',
                  start: 29,
                  end: 30,
                  kind: 13,
                  flags: 0
                }
              ],
              start: 20,
              end: 31,
              kind: 156,
              flags: 0
            },
            start: 20,
            end: 32,
            kind: 122,
            flags: 0
          },
          start: 0,
          end: 32,
          kind: 130,
          flags: 0
        }
      ],
      text: 'for((1 + 1) in list) process(x);',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          code: 104,
          kind: 3,
          length: 15,
          message: 'Invalid left-hand side in for-loop',
          source: 2,
          start: 4
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

  it('[', () => {
    t.deepEqual(recovery('[', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ArrayLiteral',
            kind: 178,
            elements: [],
            start: 0,
            end: 1,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        }
      ],
      text: '[',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`]` expected',
          code: 5,
          start: 0,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 1,
      end: 1
    });
  });

  it('[,', () => {
    t.deepEqual(recovery('[,', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ArrayLiteral',
            kind: 178,
            elements: [
              {
                type: 'Elison',
                start: 2,
                end: 2,
                kind: 176,
                flags: 0
              }
            ],
            start: 0,
            end: 2,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: '[,',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`]` expected',
          code: 5,
          start: 1,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it('1 + {', () => {
    t.deepEqual(recovery('1 + {', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'NumericLiteral',

              value: 1,
              start: 0,
              end: 1,
              kind: 10,
              flags: 0
            },
            operator: '+',
            right: {
              type: 'ObjectLiteral',
              properties: [],
              start: 3,
              end: 5,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 5,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: '1 + {',
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

  it('1 + { t:t', () => {
    t.deepEqual(recovery('1 + { t:t', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'NumericLiteral',

              value: 1,
              start: 0,
              end: 1,
              kind: 10,
              flags: 0
            },
            operator: '+',
            right: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'PropertyName',
                  key: {
                    type: 'IdentifierName',
                    name: 't',
                    start: 5,
                    end: 7,
                    kind: 13,
                    flags: 0
                  },
                  value: {
                    type: 'IdentifierReference',
                    name: 't',
                    start: 8,
                    end: 9,
                    kind: 13,
                    flags: 0
                  },
                  start: 5,
                  end: 9,
                  kind: 227,
                  flags: 0
                }
              ],
              start: 3,
              end: 9,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 9,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 9,
          kind: 122,
          flags: 0
        }
      ],
      text: '1 + { t:t',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
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
      end: 9
    });
  });

  it('1 + { t:t,', () => {
    t.deepEqual(recovery('1 + { t:t,', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'NumericLiteral',

              value: 1,
              start: 0,
              end: 1,
              kind: 10,
              flags: 0
            },
            operator: '+',
            right: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'PropertyName',
                  key: {
                    type: 'IdentifierName',
                    name: 't',
                    start: 5,
                    end: 7,
                    kind: 13,
                    flags: 0
                  },
                  value: {
                    type: 'IdentifierReference',
                    name: 't',
                    start: 8,
                    end: 9,
                    kind: 13,
                    flags: 0
                  },
                  start: 5,
                  end: 9,
                  kind: 227,
                  flags: 0
                }
              ],
              start: 3,
              end: 10,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 10,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 10,
          kind: 122,
          flags: 0
        }
      ],
      text: '1 + { t:t,',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 9,
          length: 1
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

  it('var x = "', () => {
    t.deepEqual(recovery('var x = "', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'VariableStatement',
          declarations: [
            {
              type: 'VariableDeclaration',
              binding: {
                type: 'BindingIdentifier',
                name: 'x',
                start: 3,
                end: 5,
                kind: 168,
                flags: 0
              },
              initializer: {
                type: 'StringLiteral',
                value: '',
                start: 7,
                end: 10,
                kind: 12,
                flags: 0
              },
              start: 3,
              end: 10,
              kind: 144,
              flags: 0
            }
          ],
          start: 0,
          end: 10,
          kind: 143,
          flags: 0
        }
      ],
      text: 'var x = "',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Unterminated string literal',
          code: 55,
          start: 8,
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

  it('var if = 42', () => {
    t.deepEqual(recovery('var if = 42', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'VariableStatement',
          declarations: [],
          start: 0,
          end: 3,
          kind: 143,
          flags: 0
        },
        {
          type: 'IfStatement',
          expression: {
            type: 'AssignmentExpression',
            left: {
              type: 'IdentifierReference',
              name: '',
              start: 6,
              end: 6,
              kind: 13,
              flags: 2
            },
            operator: '=',
            right: {
              type: 'NumericLiteral',

              value: 42,
              start: 8,
              end: 11,
              kind: 10,
              flags: 0
            },
            start: 6,
            end: 11,
            kind: 152,
            flags: 0
          },
          consequent: {
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
          alternate: null,
          start: 3,
          end: 11,
          kind: 133,
          flags: 0
        }
      ],
      text: 'var if = 42',
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
          length: 2
        },
        {
          kind: 2,
          source: 2,
          message: '`(` expected',
          code: 5,
          start: 7,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 9,
          length: 2
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

  it('i #= 42', () => {
    t.deepEqual(recovery('i #= 42', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'AssignmentExpression',
            left: {
              type: 'IdentifierReference',
              name: 'i',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            operator: '=',
            right: {
              type: 'NumericLiteral',

              value: 42,
              start: 4,
              end: 7,
              kind: 10,
              flags: 0
            },
            start: 0,
            end: 7,
            kind: 152,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: 'i #= 42',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Invalid character',
          code: 9,
          start: 2,
          length: 0
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

  it('+i = 42', () => {
    t.deepEqual(recovery('+i = 42', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'AssignmentExpression',
            left: {
              type: 'UnaryExpression',
              operator: '+',
              operand: {
                type: 'IdentifierReference',
                name: 'i',
                start: 1,
                end: 2,
                kind: 13,
                flags: 0
              },
              start: 0,
              end: 2,
              kind: 160,
              flags: 0
            },
            operator: '=',
            right: {
              type: 'NumericLiteral',

              value: 42,
              start: 4,
              end: 7,
              kind: 10,
              flags: 0
            },
            start: 0,
            end: 7,
            kind: 152,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: '+i = 42',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'The left-hand side of an assignment expression must be a variable or a property access',
          code: 97,
          start: 3,
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

  it('1 + (', () => {
    t.deepEqual(recovery('1 + (', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'NumericLiteral',

              value: 1,
              start: 0,
              end: 1,
              kind: 10,
              flags: 0
            },
            operator: '+',
            right: {
              type: 'ParenthesizedExpression',
              expression: {
                type: 'IdentifierReference',
                name: '',
                start: 5,
                end: 5,
                kind: 13,
                flags: 2
              },
              start: 3,
              end: 5,
              kind: 189,
              flags: 0
            },
            start: 0,
            end: 5,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: '1 + (',
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

  it(`/* Some multiline
  comment */
  )`, () => {
    t.deepEqual(
      recovery(
        `/* Some multiline
    comment */
    )`,
        'recovery.js'
      ),
      {
        kind: 209,
        webCompat: true,
        directives: [],
        leafs: [],
        text: '/* Some multiline\n    comment */\n    )',
        fileName: 'recovery.js',
        context: 0,
        mutualFlags: 0,
        diagnostics: [
          {
            kind: 2,
            source: 2,
            message: 'Statement expected',
            code: 8,
            start: 37,
            length: 1
          }
        ],
        detached: false,
        incremental: false,
        parent: null,
        children: [],
        start: 0,
        length: 38,
        end: 38
      }
    );
  });

  it('{ get 2 }', () => {
    t.deepEqual(recovery('{ get 2 }', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'BlockStatement',
          leafs: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'IdentifierReference',
                name: 'get',
                start: 1,
                end: 5,
                kind: 13,
                flags: 0
              },
              start: 1,
              end: 5,
              kind: 122,
              flags: 0
            },
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'NumericLiteral',

                value: 2,
                start: 5,
                end: 7,
                kind: 10,
                flags: 0
              },
              start: 5,
              end: 7,
              kind: 122,
              flags: 0
            }
          ],
          start: 0,
          end: 9,
          kind: 123,
          flags: 0
        }
      ],
      text: '{ get 2 }',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 6,
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

  it('({ set: s(if) { } })', () => {
    t.deepEqual(recovery('({ set: s(if) { } })', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'PropertyName',
                  key: {
                    type: 'IdentifierName',
                    name: 'set',
                    start: 2,
                    end: 6,
                    kind: 13,
                    flags: 0
                  },
                  value: {
                    type: 'CallExpression',
                    expression: {
                      type: 'IdentifierReference',
                      name: 's',
                      start: 7,
                      end: 9,
                      kind: 13,
                      flags: 0
                    },
                    arguments: [],
                    start: 7,
                    end: 10,
                    kind: 156,
                    flags: 0
                  },
                  start: 2,
                  end: 10,
                  kind: 227,
                  flags: 0
                },
                {
                  type: 'IdentifierName',
                  name: 'if',
                  start: 10,
                  end: 12,
                  kind: 13,
                  flags: 0
                }
              ],
              start: 1,
              end: 12,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 13,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 13,
          kind: 122,
          flags: 0
        },
        {
          type: 'BlockStatement',
          leafs: [],
          start: 13,
          end: 17,
          kind: 123,
          flags: 0
        }
      ],
      text: '({ set: s(if) { } })',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 10,
          length: 2
        },
        {
          kind: 2,
          source: 2,
          message: '`:` expected',
          code: 36,
          start: 12,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 14,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 18,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 19,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 20,
      end: 20
    });
  });

  it('({ set: s() { } })', () => {
    t.deepEqual(recovery('({ set: s() { } })', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'PropertyName',
                  key: {
                    type: 'IdentifierName',
                    name: 'set',
                    start: 2,
                    end: 6,
                    kind: 13,
                    flags: 0
                  },
                  value: {
                    type: 'CallExpression',
                    expression: {
                      type: 'IdentifierReference',
                      name: 's',
                      start: 7,
                      end: 9,
                      kind: 13,
                      flags: 0
                    },
                    arguments: [],
                    start: 7,
                    end: 11,
                    kind: 156,
                    flags: 0
                  },
                  start: 2,
                  end: 11,
                  kind: 227,
                  flags: 0
                }
              ],
              start: 1,
              end: 11,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 11,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 11,
          kind: 122,
          flags: 0
        },
        {
          type: 'BlockStatement',
          leafs: [],
          start: 11,
          end: 15,
          kind: 123,
          flags: 0
        }
      ],
      text: '({ set: s() { } })',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 12,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 16,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 17,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 18,
      end: 18
    });
  });

  it('({get', () => {
    t.deepEqual(recovery('({get', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [
                {
                  type: 'IdentifierReference',
                  name: 'get',
                  start: 2,
                  end: 5,
                  kind: 13,
                  flags: 0
                }
              ],
              start: 1,
              end: 5,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 5,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: '({get',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 2,
          length: 3
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

  it('((a)) => 42', () => {
    t.deepEqual(recovery('((a)) => 42', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ParenthesizedExpression',
              expression: {
                type: 'IdentifierReference',
                name: 'a',
                start: 2,
                end: 3,
                kind: 13,
                flags: 0
              },
              start: 1,
              end: 4,
              kind: 189,
              flags: 0
            },
            start: 0,
            end: 5,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 42,
            start: 8,
            end: 11,
            kind: 10,
            flags: 0
          },
          start: 8,
          end: 11,
          kind: 122,
          flags: 0
        }
      ],
      text: '((a)) => 42',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 6,
          length: 2
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

  it('(a, (b)) => 42', () => {
    t.deepEqual(recovery('(a, (b)) => 42', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ParenthesizedExpression',
              expression: {
                type: 'IdentifierReference',
                name: 'b',
                start: 5,
                end: 6,
                kind: 13,
                flags: 0
              },
              start: 3,
              end: 7,
              kind: 189,
              flags: 0
            },
            start: 0,
            end: 8,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 8,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 42,
            start: 11,
            end: 14,
            kind: 10,
            flags: 0
          },
          start: 11,
          end: 14,
          kind: 122,
          flags: 0
        }
      ],
      text: '(a, (b)) => 42',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 9,
          length: 2
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 14,
      end: 14
    });
  });

  it('try { }', () => {
    t.deepEqual(recovery('try { }', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'TryStatement',
          block: {
            type: 'BlockStatement',
            leafs: [],
            start: 3,
            end: 7,
            kind: 123,
            flags: 0
          },
          catchClause: null,
          finalizer: null,
          start: 0,
          end: 7,
          kind: 138,
          flags: 0
        }
      ],
      text: 'try { }',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Missing catch or finally after try',
          code: 120,
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

  it('\\u203F = 10', () => {
    t.deepEqual(recovery('\\u203F = 10', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'AssignmentExpression',
            left: {
              type: 'IdentifierReference',
              name: '‿',
              start: 0,
              end: 6,
              kind: 13,
              flags: 0
            },
            operator: '=',
            right: {
              type: 'NumericLiteral',

              value: 10,
              start: 8,
              end: 11,
              kind: 10,
              flags: 0
            },
            start: 0,
            end: 11,
            kind: 152,
            flags: 0
          },
          start: 0,
          end: 11,
          kind: 122,
          flags: 0
        }
      ],
      text: '\\u203F = 10',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 11,
      end: 11
    });
  });

  it('/*hello', () => {
    t.deepEqual(recovery('/*hello', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [],
      text: '/*hello',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: '`*/` expected',
          code: 86,
          start: 0,
          length: 7
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

  it('/*hello  *', () => {
    t.deepEqual(recovery('/*hello  *', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [],
      text: '/*hello  *',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: '`*/` expected',
          code: 86,
          start: 0,
          length: 10
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

  it(']', () => {
    t.deepEqual(recovery(']', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [],
      text: ']',
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
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 1,
      end: 1
    });
  });

  it('\\u200C = []', () => {
    t.deepEqual(recovery('\\u200C = []', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'AssignmentExpression',
            left: {
              type: 'IdentifierReference',
              name: '‌',
              start: 0,
              end: 6,
              kind: 13,
              flags: 0
            },
            operator: '=',
            right: {
              type: 'ArrayLiteral',
              kind: 178,
              elements: [],
              start: 8,
              end: 11,
              flags: 0
            },
            start: 0,
            end: 11,
            kind: 152,
            flags: 0
          },
          start: 0,
          end: 11,
          kind: 122,
          flags: 0
        }
      ],
      text: '\\u200C = []',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 11,
      end: 11
    });
  });

  it('return', () => {
    t.deepEqual(recovery('return', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ReturnStatement',
          expression: null,
          start: 0,
          end: 6,
          kind: 135,
          flags: 0
        }
      ],
      text: 'return',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'A `return` statement can only be used within a function body.',
          code: 26,
          start: 0,
          length: 6
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

  it('x: while (true) { (function () { break; }); }', () => {
    t.deepEqual(recovery('x: while (true) { (function () { break; }); }', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'LabelledStatement',
          label: {
            type: 'LabelIdentifier',
            name: 'x',
            start: 0,
            end: 2,
            kind: 13,
            flags: 0
          },
          labelledItem: {
            type: 'WhileStatement',
            expression: {
              type: 'BooleanLiteral',
              value: true,
              start: 10,
              end: 14,
              kind: 166,
              flags: 0
            },
            statement: {
              type: 'BlockStatement',
              leafs: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'ParenthesizedExpression',
                    expression: {
                      type: 'FunctionExpression',
                      name: null,
                      generator: false,
                      async: false,
                      params: [],
                      contents: {
                        type: 'FunctionBody',
                        directives: [],
                        leafs: [
                          {
                            type: 'BreakStatement',
                            label: null,
                            start: 32,
                            end: 39,
                            kind: 124,
                            flags: 0
                          }
                        ],
                        start: 30,
                        end: 41,
                        kind: 184,
                        flags: 0
                      },
                      start: 19,
                      end: 41,
                      kind: 185,
                      flags: 0
                    },
                    start: 17,
                    end: 42,
                    kind: 189,
                    flags: 0
                  },
                  start: 17,
                  end: 43,
                  kind: 122,
                  flags: 0
                }
              ],
              start: 15,
              end: 45,
              kind: 123,
              flags: 0
            },
            start: 2,
            end: 45,
            kind: 139,
            flags: 0
          },
          start: 0,
          end: 45,
          kind: 134,
          flags: 0
        }
      ],
      text: 'x: while (true) { (function () { break; }); }',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'A `break` statement can only be used within an enclosing iteration or switch',
          code: 41,
          start: 38,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 45,
      end: 45
    });
  });

  it('function eval(a) { "use strict"; }', () => {
    t.deepEqual(recovery('function eval(a) { "use strict"; }', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'FunctionDeclaration',
          name: {
            type: 'BindingIdentifier',
            name: 'eval',
            start: 8,
            end: 13,
            kind: 168,
            flags: 0
          },
          generator: false,
          async: false,
          params: [
            {
              type: 'BindingIdentifier',
              name: 'a',
              start: 14,
              end: 15,
              kind: 168,
              flags: 0
            }
          ],
          contents: {
            type: 'FunctionBody',
            directives: [
              {
                type: 'Directive',
                value: 'use strict',
                raw: '"use strict',
                start: 18,
                end: 31,
                kind: 229,
                flags: 0
              }
            ],
            leafs: [],
            start: 16,
            end: 34,
            kind: 184,
            flags: 0
          },
          start: 0,
          end: 34,
          kind: 186,
          flags: 0
        }
      ],
      text: 'function eval(a) { "use strict"; }',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 34,
      end: 34
    });
  });

  it('(function a(eval) { "use strict"; })', () => {
    t.deepEqual(recovery('(function a(eval) { "use strict"; })', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'FunctionExpression',
              name: {
                type: 'BindingIdentifier',
                name: 'a',
                start: 9,
                end: 11,
                kind: 168,
                flags: 0
              },
              generator: false,
              async: false,
              params: [
                {
                  type: 'BindingIdentifier',
                  name: 'eval',
                  start: 12,
                  end: 16,
                  kind: 168,
                  flags: 0
                }
              ],
              contents: {
                type: 'FunctionBody',
                directives: [
                  {
                    type: 'Directive',
                    value: 'use strict',
                    raw: '"use strict',
                    start: 19,
                    end: 32,
                    kind: 229,
                    flags: 0
                  }
                ],
                leafs: [],
                start: 17,
                end: 35,
                kind: 184,
                flags: 0
              },
              start: 1,
              end: 35,
              kind: 185,
              flags: 0
            },
            start: 0,
            end: 36,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 36,
          kind: 122,
          flags: 0
        }
      ],
      text: '(function a(eval) { "use strict"; })',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 36,
      end: 36
    });
  });

  it('[a] = [((1', () => {
    t.deepEqual(recovery('[a] = [((1', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'AssignmentElement',
            left: {
              type: 'ArrayAssignmentPattern',
              elements: [
                {
                  type: 'IdentifierReference',
                  name: 'a',
                  start: 1,
                  end: 2,
                  kind: 13,
                  flags: 0
                }
              ],
              start: 0,
              end: 3,
              kind: 178,
              flags: 0
            },
            right: {
              type: 'ArrayLiteral',
              elements: [
                {
                  type: 'ParenthesizedExpression',
                  expression: {
                    type: 'ParenthesizedExpression',
                    expression: {
                      type: 'NumericLiteral',

                      value: 1,
                      start: 9,
                      end: 10,
                      kind: 10,
                      flags: 0
                    },
                    start: 8,
                    end: 10,
                    kind: 189,
                    flags: 0
                  },
                  start: 7,
                  end: 10,
                  kind: 189,
                  flags: 0
                }
              ],
              start: 5,
              end: 10,
              kind: 178,
              flags: 0
            },
            start: 0,
            end: 10,
            kind: 213,
            flags: 0
          },
          start: 0,
          end: 10,
          kind: 122,
          flags: 0
        }
      ],
      text: '[a] = [((1',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 9,
          length: 1
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

  it('({} = 1', () => {
    t.deepEqual(recovery('({} = 1', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'AssignmentElement',
              left: {
                type: 'ObjectAssignmentPattern',
                properties: [],
                start: 1,
                end: 3,
                kind: 179,
                flags: 0
              },
              right: {
                type: 'NumericLiteral',

                value: 1,
                start: 5,
                end: 7,
                kind: 10,
                flags: 0
              },
              start: 1,
              end: 7,
              kind: 213,
              flags: 0
            },
            start: 0,
            end: 7,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: '({} = 1',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
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

  it('(1!!', () => {
    t.deepEqual(recovery('(1!!', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'NumericLiteral',

              value: 1,
              start: 1,
              end: 2,
              kind: 10,
              flags: 0
            },
            start: 0,
            end: 2,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 4,
                end: 4,
                kind: 13,
                flags: 2
              },
              start: 3,
              end: 4,
              kind: 160,
              flags: 0
            },
            start: 2,
            end: 4,
            kind: 160,
            flags: 0
          },
          start: 2,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '(1!!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 2,
          length: 1
        },
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

  it('(1]', () => {
    t.deepEqual(recovery('(1]', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'NumericLiteral',

              value: 1,
              start: 1,
              end: 2,
              kind: 10,
              flags: 0
            },
            start: 0,
            end: 2,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: '(1]',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('(!!][1', () => {
    t.deepEqual(recovery('(!!][1', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 3,
                  end: 3,
                  kind: 13,
                  flags: 2
                },
                start: 2,
                end: 3,
                kind: 160,
                flags: 0
              },
              start: 1,
              end: 3,
              kind: 160,
              flags: 0
            },
            start: 0,
            end: 3,
            kind: 189,
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
            type: 'ArrayLiteral',
            kind: 178,
            elements: [
              {
                type: 'NumericLiteral',

                value: 1,
                start: 5,
                end: 6,
                kind: 10,
                flags: 0
              }
            ],
            start: 4,
            end: 6,
            flags: 0
          },
          start: 4,
          end: 6,
          kind: 122,
          flags: 0
        }
      ],
      text: '(!!][1',
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
        },
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
  it('(1', () => {
    t.deepEqual(recovery('(1', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'NumericLiteral',

              value: 1,
              start: 1,
              end: 2,
              kind: 10,
              flags: 0
            },
            start: 0,
            end: 2,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: '(1',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 1,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it('++(!', () => {
    t.deepEqual(recovery('++(!', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'PrefixUpdateExpression',
            operator: '++',
            operand: {
              type: 'ParenthesizedExpression',
              expression: {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 4,
                  end: 4,
                  kind: 13,
                  flags: 2
                },
                start: 3,
                end: 4,
                kind: 160,
                flags: 0
              },
              start: 2,
              end: 4,
              kind: 189,
              flags: 0
            },
            start: 0,
            end: 4,
            kind: 161,
            flags: 0
          },
          start: 0,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '++(!',
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

  it('++!{(', () => {
    t.deepEqual(recovery('++!{(', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'PrefixUpdateExpression',
            operator: '++',
            operand: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'CallExpression',
                expression: {
                  type: 'ObjectLiteral',
                  properties: [],
                  start: 3,
                  end: 4,
                  kind: 179,
                  flags: 0
                },
                arguments: [],
                start: 3,
                end: 5,
                kind: 156,
                flags: 0
              },
              start: 2,
              end: 5,
              kind: 160,
              flags: 0
            },
            start: 0,
            end: 5,
            kind: 161,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: '++!{(',
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

  it('!{(', () => {
    t.deepEqual(recovery('!{(', 'recovery.js'), {
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
              type: 'CallExpression',
              expression: {
                type: 'ObjectLiteral',
                properties: [],
                start: 1,
                end: 2,
                kind: 179,
                flags: 0
              },
              arguments: [],
              start: 1,
              end: 3,
              kind: 156,
              flags: 0
            },
            start: 0,
            end: 3,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '!{(',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('(...x.y)', () => {
    t.deepEqual(recovery('(...x.y)', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ArrowFunction',
            params: [
              {
                type: 'BindingRestElement',
                argument: {
                  type: 'BindingIdentifier',
                  name: 'x',
                  start: 4,
                  end: 5,
                  kind: 168,
                  flags: 0
                },
                start: 1,
                end: 5,
                kind: 175,
                flags: 0
              }
            ],
            contents: {
              type: 'MemberExpression',
              member: {
                type: 'IdentifierReference',
                name: '',
                start: 5,
                end: 5,
                kind: 13,
                flags: 2
              },
              expression: {
                type: 'IdentifierName',
                name: 'y',
                start: 6,
                end: 7,
                kind: 13,
                flags: 0
              },
              computed: false,
              start: 5,
              end: 7,
              kind: 154,
              flags: 0
            },
            async: false,
            start: 0,
            end: 7,
            kind: 188,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: '(...x.y)',
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
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
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

  it('()', () => {
    t.deepEqual(recovery('()', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 2,
              end: 2,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 2,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: '()',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`=>` expected',
          code: 46,
          start: 1,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it(') =>', () => {
    t.deepEqual(recovery(') =>', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [],
      text: ') =>',
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
          start: 2,
          length: 2
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

  it('(...x = y) => x', () => {
    t.deepEqual(recovery('(...x = y) => x', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ArrowFunction',
            params: [
              {
                type: 'BindingRestElement',
                argument: {
                  type: 'BindingIdentifier',
                  name: 'x',
                  start: 4,
                  end: 5,
                  kind: 168,
                  flags: 0
                },
                start: 1,
                end: 5,
                kind: 175,
                flags: 0
              }
            ],
            contents: {
              type: 'AssignmentExpression',
              left: {
                type: 'IdentifierReference',
                name: '',
                start: 5,
                end: 5,
                kind: 13,
                flags: 2
              },
              operator: '=',
              right: {
                type: 'IdentifierReference',
                name: 'y',
                start: 7,
                end: 9,
                kind: 13,
                flags: 0
              },
              start: 5,
              end: 9,
              kind: 152,
              flags: 0
            },
            async: false,
            start: 0,
            end: 9,
            kind: 188,
            flags: 0
          },
          start: 0,
          end: 9,
          kind: 122,
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
      text: '(...x = y) => x',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'A rest element cannot have an initializer',
          code: 106,
          start: 6,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 9,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 11,
          length: 2
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 15,
      webCompat: true,
      end: 15
    });
  });

  it('(', () => {
    t.deepEqual(recovery('(', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 1,
              end: 1,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 1,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        }
      ],
      text: '(',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 0,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 1,
      end: 1
    });
  });

  it('((((((', () => {
    t.deepEqual(recovery('((((((', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'ParenthesizedExpression',
              expression: {
                type: 'ParenthesizedExpression',
                expression: {
                  type: 'ParenthesizedExpression',
                  expression: {
                    type: 'ParenthesizedExpression',
                    expression: {
                      type: 'ParenthesizedExpression',
                      expression: {
                        type: 'IdentifierReference',
                        name: '',
                        start: 6,
                        end: 6,
                        kind: 13,
                        flags: 2
                      },
                      start: 5,
                      end: 6,
                      kind: 189,
                      flags: 0
                    },
                    start: 4,
                    end: 6,
                    kind: 189,
                    flags: 0
                  },
                  start: 3,
                  end: 6,
                  kind: 189,
                  flags: 0
                },
                start: 2,
                end: 6,
                kind: 189,
                flags: 0
              },
              start: 1,
              end: 6,
              kind: 189,
              flags: 0
            },
            start: 0,
            end: 6,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 122,
          flags: 0
        }
      ],
      text: '((((((',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
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

  it('a(!', () => {
    t.deepEqual(recovery('a(!', 'recovery.js'), {
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
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            arguments: [
              {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 3,
                  end: 3,
                  kind: 13,
                  flags: 2
                },
                start: 2,
                end: 3,
                kind: 160,
                flags: 0
              }
            ],
            start: 0,
            end: 3,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a(!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('a(...', () => {
    t.deepEqual(recovery('a(...', 'recovery.js'), {
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
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            arguments: [
              {
                type: 'AssignmentRestElement',
                argument: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 5,
                  end: 5,
                  kind: 13,
                  flags: 2
                },
                start: 5,
                end: 5,
                kind: 200,
                flags: 0
              }
            ],
            start: 0,
            end: 5,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a(...',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 3
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

  it('a((((((((', () => {
    t.deepEqual(recovery('a((((((((', 'recovery.js'), {
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
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            arguments: [
              {
                type: 'ParenthesizedExpression',
                expression: {
                  type: 'ParenthesizedExpression',
                  expression: {
                    type: 'ParenthesizedExpression',
                    expression: {
                      type: 'ParenthesizedExpression',
                      expression: {
                        type: 'ParenthesizedExpression',
                        expression: {
                          type: 'ParenthesizedExpression',
                          expression: {
                            type: 'ParenthesizedExpression',
                            expression: {
                              type: 'IdentifierReference',
                              name: '',
                              start: 9,
                              end: 9,
                              kind: 13,
                              flags: 2
                            },
                            start: 8,
                            end: 9,
                            kind: 189,
                            flags: 0
                          },
                          start: 7,
                          end: 9,
                          kind: 189,
                          flags: 0
                        },
                        start: 6,
                        end: 9,
                        kind: 189,
                        flags: 0
                      },
                      start: 5,
                      end: 9,
                      kind: 189,
                      flags: 0
                    },
                    start: 4,
                    end: 9,
                    kind: 189,
                    flags: 0
                  },
                  start: 3,
                  end: 9,
                  kind: 189,
                  flags: 0
                },
                start: 2,
                end: 9,
                kind: 189,
                flags: 0
              }
            ],
            start: 0,
            end: 9,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 9,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a((((((((',
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

  it('a((((((((!!', () => {
    t.deepEqual(recovery('a((((((((!!', 'recovery.js'), {
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
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            arguments: [
              {
                type: 'ParenthesizedExpression',
                expression: {
                  type: 'ParenthesizedExpression',
                  expression: {
                    type: 'ParenthesizedExpression',
                    expression: {
                      type: 'ParenthesizedExpression',
                      expression: {
                        type: 'ParenthesizedExpression',
                        expression: {
                          type: 'ParenthesizedExpression',
                          expression: {
                            type: 'ParenthesizedExpression',
                            expression: {
                              type: 'UnaryExpression',
                              operator: '!',
                              operand: {
                                type: 'UnaryExpression',
                                operator: '!',
                                operand: {
                                  type: 'IdentifierReference',
                                  name: '',
                                  start: 11,
                                  end: 11,
                                  kind: 13,
                                  flags: 2
                                },
                                start: 10,
                                end: 11,
                                kind: 160,
                                flags: 0
                              },
                              start: 9,
                              end: 11,
                              kind: 160,
                              flags: 0
                            },
                            start: 8,
                            end: 11,
                            kind: 189,
                            flags: 0
                          },
                          start: 7,
                          end: 11,
                          kind: 189,
                          flags: 0
                        },
                        start: 6,
                        end: 11,
                        kind: 189,
                        flags: 0
                      },
                      start: 5,
                      end: 11,
                      kind: 189,
                      flags: 0
                    },
                    start: 4,
                    end: 11,
                    kind: 189,
                    flags: 0
                  },
                  start: 3,
                  end: 11,
                  kind: 189,
                  flags: 0
                },
                start: 2,
                end: 11,
                kind: 189,
                flags: 0
              }
            ],
            start: 0,
            end: 11,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 11,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a((((((((!!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
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

  it('a...........', () => {
    t.deepEqual(recovery('a...........', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'a',
            start: 0,
            end: 1,
            kind: 13,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a...........',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 1,
          length: 3
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 4,
          length: 3
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 7,
          length: 3
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
      length: 12,
      end: 12
    });
  });

  it('a...........!!', () => {
    t.deepEqual(recovery('a...........!!', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'a',
            start: 0,
            end: 1,
            kind: 13,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 14,
                end: 14,
                kind: 13,
                flags: 2
              },
              start: 13,
              end: 14,
              kind: 160,
              flags: 0
            },
            start: 12,
            end: 14,
            kind: 160,
            flags: 0
          },
          start: 12,
          end: 14,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a...........!!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 1,
          length: 3
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 4,
          length: 3
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 7,
          length: 3
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
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 13,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 14,
      end: 14
    });
  });

  it(',,,,,,,,,,,,,,,,,,,,,,,,,,,,a', () => {
    t.deepEqual(recovery(',,,,,,,,,,,,,,,,,,,,,,,,,,,,a', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'a',
            start: 28,
            end: 29,
            kind: 13,
            flags: 0
          },
          start: 28,
          end: 29,
          kind: 122,
          flags: 0
        }
      ],
      text: ',,,,,,,,,,,,,,,,,,,,,,,,,,,,a',
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
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 12,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 13,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 14,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 15,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 16,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 17,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 18,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 19,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 20,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 21,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 22,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 23,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 24,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 25,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 26,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Statement expected',
          code: 8,
          start: 27,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 29,
      end: 29
    });
  });

  it('a[=.', () => {
    t.deepEqual(recovery('a[=.', 'recovery.js'), {
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
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            expression: {
              type: 'AssignmentExpression',
              left: {
                type: 'IdentifierReference',
                name: '',
                start: 2,
                end: 2,
                kind: 13,
                flags: 2
              },
              operator: '=',
              right: {
                type: 'MemberExpression',
                member: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 3,
                  end: 3,
                  kind: 13,
                  flags: 2
                },
                expression: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 4,
                  end: 4,
                  kind: 13,
                  flags: 2
                },
                computed: false,
                start: 3,
                end: 4,
                kind: 154,
                flags: 0
              },
              start: 2,
              end: 4,
              kind: 152,
              flags: 0
            },
            computed: true,
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
      text: 'a[=.',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        },
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

  it('`++', () => {
    t.deepEqual(recovery('`++', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'TemplateLiteral',
            raw: '++',
            value: '',
            start: 0,
            end: 3,
            kind: 197,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '`++',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Unterminated template literal',
          code: 52,
          start: 0,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('`${', () => {
    t.deepEqual(recovery('`${', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'TemplateExpression',
            elements: [
              {
                type: 'TemplateElement',
                raw: '',
                value: '',
                expression: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 3,
                  end: 3,
                  kind: 13,
                  flags: 2
                },
                start: 0,
                end: 3,
                kind: 195,
                flags: 0
              },
              {
                type: 'TemplateElement',
                raw: '',
                value: '',
                expression: null,
                start: 3,
                end: 3,
                kind: 195,
                flags: 0
              }
            ],
            start: 0,
            end: 3,
            kind: 196,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '`${',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 0,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('?:b', () => {
    t.deepEqual(recovery('?:b', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'IdentifierReference',
            name: 'b',
            start: 2,
            end: 3,
            kind: 13,
            flags: 0
          },
          start: 2,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '?:b',
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
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('[k', () => {
    t.deepEqual(recovery('[k', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ArrayLiteral',
            kind: 178,
            elements: [
              {
                type: 'IdentifierReference',
                name: 'k',
                start: 1,
                end: 2,
                kind: 13,
                flags: 0
              }
            ],
            start: 0,
            end: 2,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: '[k',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`,` expected',
          code: 5,
          start: 1,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it('+=>', () => {
    t.deepEqual(recovery('+=>', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'IdentifierReference',
              name: '',
              start: 2,
              end: 2,
              kind: 13,
              flags: 2
            },
            operator: '>',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 3,
              end: 3,
              kind: 13,
              flags: 2
            },
            start: 2,
            end: 3,
            kind: 155,
            flags: 0
          },
          start: 2,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '+=>',
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
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('+= >', () => {
    t.deepEqual(recovery('+= >', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'IdentifierReference',
              name: '',
              start: 2,
              end: 2,
              kind: 13,
              flags: 2
            },
            operator: '>',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 4,
              end: 4,
              kind: 13,
              flags: 2
            },
            start: 2,
            end: 4,
            kind: 155,
            flags: 0
          },
          start: 2,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '+= >',
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

  it('+ =>', () => {
    t.deepEqual(recovery('+ =>', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '+',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 1,
              end: 1,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 1,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        }
      ],
      text: '+ =>',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 2
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

  it('+ = >', () => {
    t.deepEqual(recovery('+ = >', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'AssignmentExpression',
            left: {
              type: 'UnaryExpression',
              operator: '+',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 1,
                end: 1,
                kind: 13,
                flags: 2
              },
              start: 0,
              end: 1,
              kind: 160,
              flags: 0
            },
            operator: '=',
            right: {
              type: 'BinaryExpression',
              left: {
                type: 'IdentifierReference',
                name: '',
                start: 3,
                end: 3,
                kind: 13,
                flags: 2
              },
              operator: '>',
              right: {
                type: 'IdentifierReference',
                name: '',
                start: 5,
                end: 5,
                kind: 13,
                flags: 2
              },
              start: 3,
              end: 5,
              kind: 155,
              flags: 0
            },
            start: 0,
            end: 5,
            kind: 152,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: '+ = >',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
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

  it('+ /= >', () => {
    t.deepEqual(recovery('+ /= >', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '+',
            operand: {
              type: 'RegularExpressionLiteral',
              pattern: '= ',
              flag: '',
              start: 1,
              end: 6,
              kind: 15,
              flags: 0
            },
            start: 0,
            end: 6,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 122,
          flags: 0
        }
      ],
      text: '+ /= >',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Unterminated regular expression',
          code: 12,
          start: 2,
          length: 4
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

  it('+!{', () => {
    t.deepEqual(recovery('+!{', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '+',
            operand: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'ObjectLiteral',
                properties: [],
                start: 2,
                end: 3,
                kind: 179,
                flags: 0
              },
              start: 1,
              end: 3,
              kind: 160,
              flags: 0
            },
            start: 0,
            end: 3,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '+!{',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('={function', () => {
    t.deepEqual(recovery('={function', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'BlockStatement',
          leafs: [
            {
              type: 'FunctionDeclaration',
              name: null,
              generator: false,
              async: false,
              params: [],
              contents: {
                type: 'FunctionBody',
                directives: [],
                leafs: [],
                start: 10,
                end: 10,
                kind: 184,
                flags: 0
              },
              start: 2,
              end: 10,
              kind: 186,
              flags: 0
            }
          ],
          start: 1,
          end: 10,
          kind: 123,
          flags: 0
        }
      ],
      text: '={function',
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
          kind: 3,
          source: 2,
          message: 'Function declaration require a name in this context',
          code: 10,
          start: 2,
          length: 8
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

  it(')=/++!{class', () => {
    t.deepEqual(recovery(')=/++!{class', 'recovery.js'), {
      children: [],
      context: 0,
      diagnostics: [
        {
          code: 8,
          kind: 2,
          length: 1,
          message: 'Statement expected',
          source: 2,
          start: 0
        },
        {
          code: 8,
          kind: 2,
          length: 1,
          message: 'Statement expected',
          source: 2,
          start: 1
        },
        {
          code: 12,
          kind: 2,
          length: 10,
          message: 'Unterminated regular expression',
          source: 0,
          start: 2
        }
      ],
      directives: [],
      end: 12,
      fileName: 'recovery.js',
      incremental: false,
      detached: false,
      kind: 209,
      webCompat: true,
      length: 12,
      mutualFlags: 0,
      parent: null,
      start: 0,
      leafs: [
        {
          end: 12,
          expression: {
            end: 12,
            flag: '',
            flags: 0,
            kind: 15,
            pattern: '++!{clas',
            start: 2,
            type: 'RegularExpressionLiteral'
          },
          flags: 0,
          kind: 122,
          start: 2,
          type: 'ExpressionStatement'
        }
      ],
      text: ')=/++!{class'
    });
  });

  it('[a/', () => {
    t.deepEqual(recovery('[a/', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ArrayLiteral',
            kind: 178,
            elements: [
              {
                type: 'BinaryExpression',
                left: {
                  type: 'IdentifierReference',
                  name: 'a',
                  start: 1,
                  end: 2,
                  kind: 13,
                  flags: 0
                },
                operator: '/',
                right: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 3,
                  end: 3,
                  kind: 13,
                  flags: 2
                },
                start: 1,
                end: 3,
                kind: 155,
                flags: 0
              }
            ],
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
      text: '[a/',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('/ / / ', () => {
    t.deepEqual(recovery('/ / /', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'RegularExpressionLiteral',
              pattern: ' ',
              flag: '',
              start: 0,
              end: 3,
              kind: 15,
              flags: 0
            },
            operator: '/',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 5,
              end: 5,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 5,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: '/ / /',
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

  it('/000//////++!', () => {
    t.deepEqual(recovery('/000//////++!', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'RegularExpressionLiteral',
            pattern: '000',
            flag: '',
            start: 0,
            end: 5,
            kind: 15,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: '/000//////++!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 13,
      end: 13
    });
  });

  it('/* */ / // foo', () => {
    t.deepEqual(recovery('/* */ / // foo', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'RegularExpressionLiteral',
              pattern: ' ',
              flag: '',
              start: 0,
              end: 9,
              kind: 15,
              flags: 0
            },
            operator: '/',
            right: {
              type: 'IdentifierReference',
              name: 'foo',
              start: 10,
              end: 14,
              kind: 13,
              flags: 0
            },
            start: 0,
            end: 14,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 14,
          kind: 122,
          flags: 0
        }
      ],
      text: '/* */ / // foo',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 14,
      end: 14
    });
  });

  it('/* */ / // foo /', () => {
    t.deepEqual(recovery('/* */ / // foo /', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'BinaryExpression',
              left: {
                type: 'RegularExpressionLiteral',
                pattern: ' ',
                flag: '',
                start: 0,
                end: 9,
                kind: 15,
                flags: 0
              },
              operator: '/',
              right: {
                type: 'IdentifierReference',
                name: 'foo',
                start: 10,
                end: 14,
                kind: 13,
                flags: 0
              },
              start: 0,
              end: 14,
              kind: 155,
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
            start: 0,
            end: 16,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 16,
          kind: 122,
          flags: 0
        }
      ],
      text: '/* */ / // foo /',
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

  it('package\n/', () => {
    t.deepEqual(recovery('package\n/', 'recovery.js'), {
      children: [],
      context: 0,
      diagnostics: [
        {
          code: 7,
          kind: 2,
          length: 1,
          message: 'Expression expected',
          source: 2,
          start: 8
        }
      ],
      directives: [],
      end: 9,
      fileName: 'recovery.js',
      incremental: false,
      detached: false,
      kind: 209,
      webCompat: true,
      length: 9,
      mutualFlags: 0,
      parent: null,
      start: 0,
      leafs: [
        {
          end: 9,
          expression: {
            end: 9,
            flags: 0,
            kind: 155,
            left: {
              end: 7,
              flags: 0,
              kind: 13,
              name: 'package',
              start: 0,
              type: 'IdentifierReference'
            },
            operator: '/',
            right: {
              end: 9,
              flags: 2,
              kind: 13,
              name: '',
              start: 9,
              type: 'IdentifierReference'
            },
            start: 0,
            type: 'BinaryExpression'
          },
          flags: 0,
          kind: 122,
          start: 0,
          type: 'ExpressionStatement'
        }
      ],
      text: 'package\n/'
    });
  });

  it('(foo.)', () => {
    t.deepEqual(recovery('(foo.)', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'MemberExpression',
              member: {
                type: 'IdentifierReference',
                name: 'foo',
                start: 1,
                end: 4,
                kind: 13,
                flags: 0
              },
              expression: {
                type: 'IdentifierReference',
                name: '',
                start: 5,
                end: 5,
                kind: 13,
                flags: 2
              },
              computed: false,
              start: 1,
              end: 5,
              kind: 154,
              flags: 0
            },
            start: 0,
            end: 6,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 122,
          flags: 0
        }
      ],
      text: '(foo.)',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
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

  it('foo. && true;', () => {
    t.deepEqual(recovery('foo. && true;', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'MemberExpression',
              member: {
                type: 'IdentifierReference',
                name: 'foo',
                start: 0,
                end: 3,
                kind: 13,
                flags: 0
              },
              expression: {
                type: 'IdentifierReference',
                name: '',
                start: 4,
                end: 4,
                kind: 13,
                flags: 2
              },
              computed: false,
              start: 0,
              end: 4,
              kind: 154,
              flags: 0
            },
            operator: '&&',
            right: {
              type: 'BooleanLiteral',
              value: true,
              start: 7,
              end: 12,
              kind: 166,
              flags: 0
            },
            start: 0,
            end: 12,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 13,
          kind: 122,
          flags: 0
        }
      ],
      text: 'foo. && true;',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 5,
          length: 2
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

  it('(foo.bar. || true);', () => {
    t.deepEqual(recovery('(foo.bar. || true);', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'BinaryExpression',
              left: {
                type: 'MemberExpression',
                member: {
                  type: 'MemberExpression',
                  member: {
                    type: 'IdentifierReference',
                    name: 'foo',
                    start: 1,
                    end: 4,
                    kind: 13,
                    flags: 0
                  },
                  expression: {
                    type: 'IdentifierName',
                    name: 'bar',
                    start: 5,
                    end: 8,
                    kind: 13,
                    flags: 0
                  },
                  computed: false,
                  start: 1,
                  end: 8,
                  kind: 154,
                  flags: 0
                },
                expression: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 9,
                  end: 9,
                  kind: 13,
                  flags: 2
                },
                computed: false,
                start: 1,
                end: 9,
                kind: 154,
                flags: 0
              },
              operator: '||',
              right: {
                type: 'BooleanLiteral',
                value: true,
                start: 12,
                end: 17,
                kind: 166,
                flags: 0
              },
              start: 1,
              end: 17,
              kind: 155,
              flags: 0
            },
            start: 0,
            end: 18,
            kind: 189,
            flags: 0
          },
          start: 0,
          end: 19,
          kind: 122,
          flags: 0
        }
      ],
      text: '(foo.bar. || true);',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 10,
          length: 2
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 19,
      end: 19
    });
  });

  it('if (foo.', () => {
    t.deepEqual(recovery('if (foo.', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'IfStatement',
          expression: {
            type: 'MemberExpression',
            member: {
              type: 'IdentifierReference',
              name: 'foo',
              start: 4,
              end: 7,
              kind: 13,
              flags: 0
            },
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 8,
              end: 8,
              kind: 13,
              flags: 2
            },
            computed: false,
            start: 4,
            end: 8,
            kind: 154,
            flags: 0
          },
          consequent: {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 8,
              end: 8,
              kind: 13,
              flags: 2
            },
            start: 8,
            end: 8,
            kind: 122,
            flags: 0
          },
          alternate: null,
          start: 0,
          end: 8,
          kind: 133,
          flags: 0
        }
      ],
      text: 'if (foo.',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
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

  it('x = 2,;', () => {
    t.deepEqual(recovery('x = 2,;', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'CommaOperator',
            expressions: [
              {
                type: 'AssignmentExpression',
                left: {
                  type: 'IdentifierReference',
                  name: 'x',
                  start: 0,
                  end: 1,
                  kind: 13,
                  flags: 0
                },
                operator: '=',
                right: {
                  type: 'NumericLiteral',

                  value: 2,
                  start: 3,
                  end: 5,
                  kind: 10,
                  flags: 0
                },
                start: 0,
                end: 5,
                kind: 152,
                flags: 0
              },
              {
                type: 'IdentifierReference',
                name: '',
                start: 6,
                end: 6,
                kind: 13,
                flags: 2
              }
            ],
            start: 0,
            end: 6,
            kind: 147,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: 'x = 2,;',
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

  it('{ foo: ', () => {
    t.deepEqual(recovery('{ foo:', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'BlockStatement',
          leafs: [
            {
              type: 'LabelledStatement',
              label: {
                type: 'LabelIdentifier',
                name: 'foo',
                start: 1,
                end: 6,
                kind: 13,
                flags: 0
              },
              labelledItem: {
                type: 'ExpressionStatement',
                expression: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 6,
                  end: 6,
                  kind: 13,
                  flags: 2
                },
                start: 6,
                end: 6,
                kind: 122,
                flags: 0
              },
              start: 1,
              end: 6,
              kind: 134,
              flags: 0
            }
          ],
          start: 0,
          end: 6,
          kind: 123,
          flags: 0
        }
      ],
      text: '{ foo:',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
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

  it('{ foo: bar,', () => {
    t.deepEqual(recovery('{ foo: bar,', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'BlockStatement',
          leafs: [
            {
              type: 'LabelledStatement',
              label: {
                type: 'LabelIdentifier',
                name: 'foo',
                start: 1,
                end: 6,
                kind: 13,
                flags: 0
              },
              labelledItem: {
                type: 'ExpressionStatement',
                expression: {
                  type: 'CommaOperator',
                  expressions: [
                    {
                      type: 'IdentifierReference',
                      name: 'bar',
                      start: 6,
                      end: 10,
                      kind: 13,
                      flags: 0
                    },
                    {
                      type: 'IdentifierReference',
                      name: '',
                      start: 11,
                      end: 11,
                      kind: 13,
                      flags: 2
                    }
                  ],
                  start: 6,
                  end: 11,
                  kind: 147,
                  flags: 0
                },
                start: 6,
                end: 11,
                kind: 122,
                flags: 0
              },
              start: 1,
              end: 11,
              kind: 134,
              flags: 0
            }
          ],
          start: 0,
          end: 11,
          kind: 123,
          flags: 0
        }
      ],
      text: '{ foo: bar,',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
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

  it('foo(a,foo.', () => {
    t.deepEqual(recovery('foo(a,foo.', 'recovery.js', { module: true }), {
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
              name: 'foo',
              start: 0,
              end: 3,
              kind: 13,
              flags: 0
            },
            arguments: [
              {
                type: 'IdentifierReference',
                name: 'a',
                start: 4,
                end: 5,
                kind: 13,
                flags: 0
              },
              {
                type: 'MemberExpression',
                member: {
                  type: 'IdentifierReference',
                  name: 'foo',
                  start: 6,
                  end: 9,
                  kind: 13,
                  flags: 0
                },
                expression: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 10,
                  end: 10,
                  kind: 13,
                  flags: 2
                },
                computed: false,
                start: 6,
                end: 10,
                kind: 154,
                flags: 0
              }
            ],
            start: 0,
            end: 10,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 10,
          kind: 122,
          flags: 0
        }
      ],
      text: 'foo(a,foo.',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 9,
          length: 1
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

  it('typeof', () => {
    t.deepEqual(recovery('typeof', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: 'typeof',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 6,
              end: 6,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 6,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 122,
          flags: 0
        }
      ],
      text: 'typeof',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 0,
          length: 6
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

  it('new', () => {
    t.deepEqual(recovery('new', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NewExpression',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 3,
              end: 3,
              kind: 13,
              flags: 2
            },
            arguments: [],
            start: 0,
            end: 3,
            kind: 163,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: 'new',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 0,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('a==b?', () => {
    t.deepEqual(recovery('a==b?', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ConditionalExpression',
            shortCircuit: {
              type: 'BinaryExpression',
              left: {
                type: 'IdentifierReference',
                name: 'a',
                start: 0,
                end: 1,
                kind: 13,
                flags: 0
              },
              operator: '==',
              right: {
                type: 'IdentifierReference',
                name: 'b',
                start: 3,
                end: 4,
                kind: 13,
                flags: 0
              },
              start: 0,
              end: 4,
              kind: 155,
              flags: 0
            },
            consequent: {
              type: 'IdentifierReference',
              name: '',
              start: 5,
              end: 5,
              kind: 13,
              flags: 2
            },
            alternate: {
              type: 'IdentifierReference',
              name: '',
              start: 5,
              end: 5,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 5,
            kind: 153,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a==b?',
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

  it('a==b?c:', () => {
    t.deepEqual(recovery('a==b?c:', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ConditionalExpression',
            shortCircuit: {
              type: 'BinaryExpression',
              left: {
                type: 'IdentifierReference',
                name: 'a',
                start: 0,
                end: 1,
                kind: 13,
                flags: 0
              },
              operator: '==',
              right: {
                type: 'IdentifierReference',
                name: 'b',
                start: 3,
                end: 4,
                kind: 13,
                flags: 0
              },
              start: 0,
              end: 4,
              kind: 155,
              flags: 0
            },
            consequent: {
              type: 'IdentifierReference',
              name: 'c',
              start: 5,
              end: 6,
              kind: 13,
              flags: 0
            },
            alternate: {
              type: 'IdentifierReference',
              name: '',
              start: 7,
              end: 7,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 7,
            kind: 153,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a==b?c:',
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

  it('a==b?:', () => {
    t.deepEqual(recovery('a==b?:', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ConditionalExpression',
            shortCircuit: {
              type: 'BinaryExpression',
              left: {
                type: 'IdentifierReference',
                name: 'a',
                start: 0,
                end: 1,
                kind: 13,
                flags: 0
              },
              operator: '==',
              right: {
                type: 'IdentifierReference',
                name: 'b',
                start: 3,
                end: 4,
                kind: 13,
                flags: 0
              },
              start: 0,
              end: 4,
              kind: 155,
              flags: 0
            },
            consequent: {
              type: 'IdentifierReference',
              name: '',
              start: 5,
              end: 5,
              kind: 13,
              flags: 2
            },
            alternate: {
              type: 'IdentifierReference',
              name: '',
              start: 6,
              end: 6,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 6,
            kind: 153,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a==b?:',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
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

  it('var package = yield!', () => {
    t.deepEqual(recovery('var package = yield!', 'recovery.js', { module: true }), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'VariableStatement',
          declarations: [
            {
              type: 'VariableDeclaration',
              binding: {
                type: 'BindingIdentifier',
                name: '',
                start: 3,
                end: 11,
                kind: 168,
                flags: 0
              },
              initializer: {
                type: 'IdentifierReference',
                name: 'yield',
                start: 13,
                end: 19,
                kind: 13,
                flags: 0
              },
              start: 3,
              end: 19,
              kind: 144,
              flags: 0
            }
          ],
          start: 0,
          end: 19,
          kind: 143,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '!',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 20,
              end: 20,
              kind: 13,
              flags: 2
            },
            start: 19,
            end: 20,
            kind: 160,
            flags: 0
          },
          start: 19,
          end: 20,
          kind: 122,
          flags: 0
        }
      ],
      text: 'var package = yield!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Unexpected reserved word in strict mode',
          code: 18,
          start: 4,
          length: 7
        },
        {
          code: 21,
          kind: 3,
          length: 6,
          message: 'Unexpected `yield` as identifier in this context',
          source: 2,
          start: 13
        },
        {
          kind: 2,
          source: 2,
          message: 'Variable declaration expected',
          code: 116,
          start: 19,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 20,
      end: 20
    });
  });

  it('//\n/', () => {
    t.deepEqual(recovery('//\n/', 'recovery.js'), {
      children: [],
      context: 0,
      diagnostics: [
        {
          code: 14,
          kind: 2,
          length: 1,
          message: 'Unknown regular expression flag',
          source: 0,
          start: 3
        }
      ],
      directives: [],
      end: 4,
      fileName: 'recovery.js',
      incremental: false,
      detached: false,
      kind: 209,
      webCompat: true,
      length: 4,
      mutualFlags: 0,
      parent: null,
      start: 0,
      leafs: [
        {
          end: 5,
          expression: {
            end: 5,
            flag: '',
            flags: 0,
            kind: 15,
            pattern: '',
            start: 0,
            type: 'RegularExpressionLiteral'
          },
          flags: 0,
          kind: 122,
          start: 0,
          type: 'ExpressionStatement'
        }
      ],
      text: '//\n/'
    });
  });

  it('1-+', () => {
    t.deepEqual(recovery('1-+', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'NumericLiteral',

              value: 1,
              start: 0,
              end: 1,
              kind: 10,
              flags: 0
            },
            operator: '-',
            right: {
              type: 'UnaryExpression',
              operator: '+',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 3,
                end: 3,
                kind: 13,
                flags: 2
              },
              start: 2,
              end: 3,
              kind: 160,
              flags: 0
            },
            start: 0,
            end: 3,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '1-+',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('1---', () => {
    t.deepEqual(recovery('1---', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'PostfixUpdateExpression',
              operator: '--',
              operand: {
                type: 'NumericLiteral',

                value: 1,
                start: 0,
                end: 1,
                kind: 10,
                flags: 0
              },
              start: 1,
              end: 3,
              kind: 162,
              flags: 0
            },
            operator: '-',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 4,
              end: 4,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 4,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '1---',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          code: 98,
          kind: 3,
          length: 2,
          message: 'Invalid left-hand side expression in prefix operation',
          source: 2,
          start: 1
        },
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

  it('1..', () => {
    t.deepEqual(recovery('1..', 'recovery.js'), {
      kind: 209,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'MemberExpression',
            member: {
              type: 'FloatingPointLiteral',
              value: 1,
              start: 0,
              end: 2,
              kind: 10,
              flags: 0
            },
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 3,
              end: 3,
              kind: 13,
              flags: 2
            },
            computed: false,
            start: 0,
            end: 3,
            kind: 154,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '1..',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      webCompat: true,
      end: 3
    });
  });

  it('1!{%', () => {
    t.deepEqual(recovery('1!{%', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NumericLiteral',

            value: 1,
            start: 0,
            end: 1,
            kind: 10,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'ObjectLiteral',
                properties: [],
                start: 2,
                end: 3,
                kind: 179,
                flags: 0
              },
              start: 1,
              end: 3,
              kind: 160,
              flags: 0
            },
            operator: '%',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 4,
              end: 4,
              kind: 13,
              flags: 2
            },
            start: 1,
            end: 4,
            kind: 155,
            flags: 0
          },
          start: 1,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '1!{%',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`;` expected',
          code: 92,
          start: 1,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
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

  it('"string', () => {
    t.deepEqual(recovery('"string', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [
        {
          type: 'Directive',
          value: '',
          raw: 'strin',
          start: 0,
          end: 7,
          kind: 229,
          flags: 0
        }
      ],
      leafs: [],
      text: '"string',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Unterminated string literal',
          code: 55,
          start: 0,
          length: 7
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

  it('"str /', () => {
    t.deepEqual(recovery('"str /', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [
        {
          type: 'Directive',
          value: '',
          raw: 'str ',
          start: 0,
          end: 6,
          kind: 229,
          flags: 0
        }
      ],
      leafs: [],
      text: '"str /',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Unterminated string literal',
          code: 55,
          start: 0,
          length: 6
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

  it('/#¤%&/()==)(/&%*//+-345', () => {
    t.deepEqual(recovery('/#¤%&/()==)(/&%*//+-345', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'CallExpression',
              expression: {
                type: 'RegularExpressionLiteral',
                pattern: '#¤%&',
                flag: '',
                start: 0,
                end: 6,
                kind: 15,
                flags: 0
              },
              arguments: [],
              start: 0,
              end: 8,
              kind: 156,
              flags: 0
            },
            operator: '==',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 10,
              end: 10,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 10,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 10,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'BinaryExpression',
              left: {
                type: 'RegularExpressionLiteral',
                pattern: '&%*',
                flag: '',
                start: 12,
                end: 17,
                kind: 15,
                flags: 0
              },
              operator: '/',
              right: {
                type: 'UnaryExpression',
                operator: '+',
                operand: {
                  type: 'UnaryExpression',
                  operator: '-',
                  operand: {
                    type: 'NumericLiteral',

                    value: 345,
                    start: 20,
                    end: 23,
                    kind: 10,
                    flags: 0
                  },
                  start: 19,
                  end: 23,
                  kind: 160,
                  flags: 0
                },
                start: 18,
                end: 23,
                kind: 160,
                flags: 0
              },
              start: 12,
              end: 23,
              kind: 155,
              flags: 0
            },
            start: 11,
            end: 23,
            kind: 189,
            flags: 0
          },
          start: 11,
          end: 23,
          kind: 122,
          flags: 0
        }
      ],
      text: '/#¤%&/()==)(/&%*//+-345',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
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
          start: 20,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 23,
      end: 23
    });
  });

  it('/#¤%&()==)(&%*+-345', () => {
    t.deepEqual(recovery('/#¤%&()==)(&%*+-345', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'RegularExpressionLiteral',
            pattern: '#¤%&()==)(&%*+-34',
            flag: '',
            start: 0,
            end: 19,
            kind: 15,
            flags: 0
          },
          start: 0,
          end: 19,
          kind: 122,
          flags: 0
        }
      ],
      text: '/#¤%&()==)(&%*+-345',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Unterminated regular expression',
          code: 12,
          start: 0,
          length: 19
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 19,
      end: 19
    });
  });

  it('¤%&()==)(&%*+-345', () => {
    t.deepEqual(recovery('¤%&()==)(&%*+-345', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'BinaryExpression',
              left: {
                type: 'IdentifierReference',
                name: '',
                start: 0,
                end: 0,
                kind: 13,
                flags: 2
              },
              operator: '%',
              right: {
                type: 'IdentifierReference',
                name: '',
                start: 2,
                end: 2,
                kind: 13,
                flags: 2
              },
              start: 0,
              end: 2,
              kind: 155,
              flags: 0
            },
            operator: '&',
            right: {
              type: 'BinaryExpression',
              left: {
                type: 'ParenthesizedExpression',
                expression: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 5,
                  end: 5,
                  kind: 13,
                  flags: 2
                },
                start: 3,
                end: 5,
                kind: 189,
                flags: 0
              },
              operator: '==',
              right: {
                type: 'IdentifierReference',
                name: '',
                start: 7,
                end: 7,
                kind: 13,
                flags: 2
              },
              start: 5,
              end: 7,
              kind: 155,
              flags: 0
            },
            start: 0,
            end: 7,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 7,
          kind: 122,
          flags: 0
        },
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'ParenthesizedExpression',
            expression: {
              type: 'BinaryExpression',
              left: {
                type: 'BinaryExpression',
                left: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 9,
                  end: 9,
                  kind: 13,
                  flags: 2
                },
                operator: '&',
                right: {
                  type: 'BinaryExpression',
                  left: {
                    type: 'IdentifierReference',
                    name: '',
                    start: 10,
                    end: 10,
                    kind: 13,
                    flags: 2
                  },
                  operator: '%',
                  right: {
                    type: 'IdentifierReference',
                    name: '',
                    start: 11,
                    end: 11,
                    kind: 13,
                    flags: 2
                  },
                  start: 10,
                  end: 11,
                  kind: 155,
                  flags: 0
                },
                start: 9,
                end: 11,
                kind: 155,
                flags: 0
              },
              operator: '*',
              right: {
                type: 'UnaryExpression',
                operator: '+',
                operand: {
                  type: 'UnaryExpression',
                  operator: '-',
                  operand: {
                    type: 'NumericLiteral',

                    value: 345,
                    start: 14,
                    end: 17,
                    kind: 10,
                    flags: 0
                  },
                  start: 13,
                  end: 17,
                  kind: 160,
                  flags: 0
                },
                start: 12,
                end: 17,
                kind: 160,
                flags: 0
              },
              start: 9,
              end: 17,
              kind: 155,
              flags: 0
            },
            start: 8,
            end: 17,
            kind: 189,
            flags: 0
          },
          start: 8,
          end: 17,
          kind: 122,
          flags: 0
        }
      ],
      text: '¤%&()==)(&%*+-345',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Invalid character',
          code: 9,
          start: 0,
          length: 0
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 1,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`=>` expected',
          code: 46,
          start: 5,
          length: 2
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 7,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 9,
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
          message: 'Expression expected',
          code: 7,
          start: 11,
          length: 1
        },
        {
          kind: 2,
          source: 2,
          message: '`)` expected',
          code: 5,
          start: 14,
          length: 3
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 17,
      end: 17
    });
  });

  it('+//!458+!{while', () => {
    t.deepEqual(recovery('+//!458+!{while', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '+',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 1,
              end: 1,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 1,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 1,
          kind: 122,
          flags: 0
        }
      ],
      text: '+//!458+!{while',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 1,
          length: 14
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

  it('+/!458+!{while', () => {
    t.deepEqual(recovery('+/!458+!{while', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '+',
            operand: {
              type: 'RegularExpressionLiteral',
              pattern: '!458+!{whil',
              flag: '',
              start: 1,
              end: 14,
              kind: 15,
              flags: 0
            },
            start: 0,
            end: 14,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 14,
          kind: 122,
          flags: 0
        }
      ],
      text: '+/!458+!{while',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Unterminated regular expression',
          code: 12,
          start: 1,
          length: 13
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 14,
      end: 14
    });
  });

  it('+!458+!{while', () => {
    t.deepEqual(recovery('+!458+!{while', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'UnaryExpression',
              operator: '+',
              operand: {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'NumericLiteral',

                  value: 458,
                  start: 2,
                  end: 5,
                  kind: 10,
                  flags: 0
                },
                start: 1,
                end: 5,
                kind: 160,
                flags: 0
              },
              start: 0,
              end: 5,
              kind: 160,
              flags: 0
            },
            operator: '+',
            right: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'ObjectLiteral',
                properties: [
                  {
                    type: 'IdentifierReference',
                    name: 'while',
                    start: 8,
                    end: 13,
                    kind: 13,
                    flags: 0
                  }
                ],
                start: 7,
                end: 13,
                kind: 179,
                flags: 0
              },
              start: 6,
              end: 13,
              kind: 160,
              flags: 0
            },
            start: 0,
            end: 13,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 13,
          kind: 122,
          flags: 0
        }
      ],
      text: '+!458+!{while',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'Invalid use of keyword as an identifier',
          code: 131,
          start: 8,
          length: 5
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

  it('++!{while', () => {
    t.deepEqual(recovery('++!{while', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'PrefixUpdateExpression',
            operator: '++',
            operand: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'ObjectLiteral',
                properties: [
                  {
                    type: 'IdentifierReference',
                    name: 'while',
                    start: 4,
                    end: 9,
                    kind: 13,
                    flags: 0
                  }
                ],
                start: 3,
                end: 9,
                kind: 179,
                flags: 0
              },
              start: 2,
              end: 9,
              kind: 160,
              flags: 0
            },
            start: 0,
            end: 9,
            kind: 161,
            flags: 0
          },
          start: 0,
          end: 9,
          kind: 122,
          flags: 0
        }
      ],
      text: '++!{while',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 3,
          source: 2,
          message: 'Invalid use of keyword as an identifier',
          code: 131,
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

  it('++while', () => {
    t.deepEqual(recovery('++while', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'PrefixUpdateExpression',
            operator: '++',
            operand: {
              type: 'IdentifierReference',
              name: '',
              start: 2,
              end: 2,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 2,
            kind: 161,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        },
        {
          type: 'WhileStatement',
          expression: {
            type: 'IdentifierReference',
            name: '',
            start: 7,
            end: 7,
            kind: 13,
            flags: 2
          },
          statement: {
            type: 'ExpressionStatement',
            expression: {
              type: 'IdentifierReference',
              name: '',
              start: 7,
              end: 7,
              kind: 13,
              flags: 2
            },
            start: 7,
            end: 7,
            kind: 122,
            flags: 0
          },
          start: 2,
          end: 7,
          kind: 139,
          flags: 0
        }
      ],
      text: '++while',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 5
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

  it('++€--', () => {
    t.deepEqual(recovery('++€--', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'PrefixUpdateExpression',
            operator: '++',
            operand: {
              type: 'PrefixUpdateExpression',
              operator: '--',
              operand: {
                type: 'IdentifierReference',
                name: '',
                start: 5,
                end: 5,
                kind: 13,
                flags: 2
              },
              start: 2,
              end: 5,
              kind: 161,
              flags: 0
            },
            start: 0,
            end: 5,
            kind: 161,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: '++€--',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Invalid character',
          code: 9,
          start: 2,
          length: 0
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 3,
          length: 2
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

  it('++a-', () => {
    t.deepEqual(recovery('++a-', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'PrefixUpdateExpression',
              operator: '++',
              operand: {
                type: 'IdentifierReference',
                name: 'a',
                start: 2,
                end: 3,
                kind: 13,
                flags: 0
              },
              start: 0,
              end: 3,
              kind: 161,
              flags: 0
            },
            operator: '-',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 4,
              end: 4,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 4,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '++a-',
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

  it('+{', () => {
    t.deepEqual(recovery('+{', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '+',
            operand: {
              type: 'ObjectLiteral',
              properties: [],
              start: 1,
              end: 2,
              kind: 179,
              flags: 0
            },
            start: 0,
            end: 2,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: '+{',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`}` expected',
          code: 5,
          start: 1,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it('+(', () => {
    t.deepEqual(recovery('+(', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '+',
            operand: {
              type: 'ParenthesizedExpression',
              expression: {
                type: 'IdentifierReference',
                name: '',
                start: 2,
                end: 2,
                kind: 13,
                flags: 2
              },
              start: 1,
              end: 2,
              kind: 189,
              flags: 0
            },
            start: 0,
            end: 2,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: '+(',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 1,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it('+!!', () => {
    t.deepEqual(recovery('+!!', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '+',
            operand: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 3,
                  end: 3,
                  kind: 13,
                  flags: 2
                },
                start: 2,
                end: 3,
                kind: 160,
                flags: 0
              },
              start: 1,
              end: 3,
              kind: 160,
              flags: 0
            },
            start: 0,
            end: 3,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: '+!!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('+!![', () => {
    t.deepEqual(recovery('+!![', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'UnaryExpression',
            operator: '+',
            operand: {
              type: 'UnaryExpression',
              operator: '!',
              operand: {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'ArrayLiteral',
                  kind: 178,
                  elements: [],
                  start: 3,
                  end: 4,
                  flags: 0
                },
                start: 2,
                end: 4,
                kind: 160,
                flags: 0
              },
              start: 1,
              end: 4,
              kind: 160,
              flags: 0
            },
            start: 0,
            end: 4,
            kind: 160,
            flags: 0
          },
          start: 0,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: '+!![',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: '`]` expected',
          code: 5,
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

  it('/=', () => {
    t.deepEqual(recovery('/=', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'RegularExpressionLiteral',
            pattern: '',
            flag: '',
            start: 0,
            end: 2,
            kind: 15,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: '/=',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Unterminated regular expression',
          code: 12,
          start: 0,
          length: 2
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it('*=', () => {
    t.deepEqual(recovery('*=', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [],
      text: '*=',
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
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 2,
      end: 2
    });
  });

  it('a <<', () => {
    t.deepEqual(recovery('a <<', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'IdentifierReference',
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            operator: '<<',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 4,
              end: 4,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 4,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 4,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a <<',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 2
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

  it('a(!', () => {
    t.deepEqual(recovery('a(!', 'recovery.js'), {
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
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            arguments: [
              {
                type: 'UnaryExpression',
                operator: '!',
                operand: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 3,
                  end: 3,
                  kind: 13,
                  flags: 2
                },
                start: 2,
                end: 3,
                kind: 160,
                flags: 0
              }
            ],
            start: 0,
            end: 3,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 3,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a(!',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 2,
          length: 1
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('a(€', () => {
    t.deepEqual(recovery('a(€', 'recovery.js'), {
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
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            arguments: [],
            start: 0,
            end: 2,
            kind: 156,
            flags: 0
          },
          start: 0,
          end: 2,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a(€',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 0,
          message: 'Invalid character',
          code: 9,
          start: 2,
          length: 0
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 3,
      end: 3
    });
  });

  it('a  +=  -=  *=  n  %=  <<=  >>=  >>>=  |=  ^=  &=', () => {
    t.deepEqual(recovery('a  +=  -=  *=  n  %=  <<=  >>=  >>>=  |=  ^=  &=', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'AssignmentExpression',
            left: {
              type: 'IdentifierReference',
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            operator: '+=',
            right: {
              type: 'AssignmentExpression',
              left: {
                type: 'IdentifierReference',
                name: '',
                start: 5,
                end: 5,
                kind: 13,
                flags: 2
              },
              operator: '-=',
              right: {
                type: 'AssignmentExpression',
                left: {
                  type: 'IdentifierReference',
                  name: '',
                  start: 9,
                  end: 9,
                  kind: 13,
                  flags: 2
                },
                operator: '*=',
                right: {
                  type: 'AssignmentExpression',
                  left: {
                    type: 'IdentifierReference',
                    name: 'n',
                    start: 13,
                    end: 16,
                    kind: 13,
                    flags: 0
                  },
                  operator: '%=',
                  right: {
                    type: 'AssignmentExpression',
                    left: {
                      type: 'IdentifierReference',
                      name: '',
                      start: 20,
                      end: 20,
                      kind: 13,
                      flags: 2
                    },
                    operator: '<<=',
                    right: {
                      type: 'AssignmentExpression',
                      left: {
                        type: 'IdentifierReference',
                        name: '',
                        start: 25,
                        end: 25,
                        kind: 13,
                        flags: 2
                      },
                      operator: '>>=',
                      right: {
                        type: 'AssignmentExpression',
                        left: {
                          type: 'IdentifierReference',
                          name: '',
                          start: 30,
                          end: 30,
                          kind: 13,
                          flags: 2
                        },
                        operator: '>>>=',
                        right: {
                          type: 'AssignmentExpression',
                          left: {
                            type: 'IdentifierReference',
                            name: '',
                            start: 36,
                            end: 36,
                            kind: 13,
                            flags: 2
                          },
                          operator: '|=',
                          right: {
                            type: 'AssignmentExpression',
                            left: {
                              type: 'IdentifierReference',
                              name: '',
                              start: 40,
                              end: 40,
                              kind: 13,
                              flags: 2
                            },
                            operator: '^=',
                            right: {
                              type: 'AssignmentExpression',
                              left: {
                                type: 'IdentifierReference',
                                name: '',
                                start: 44,
                                end: 44,
                                kind: 13,
                                flags: 2
                              },
                              operator: '&=',
                              right: {
                                type: 'IdentifierReference',
                                name: '',
                                start: 48,
                                end: 48,
                                kind: 13,
                                flags: 2
                              },
                              start: 44,
                              end: 48,
                              kind: 152,
                              flags: 0
                            },
                            start: 40,
                            end: 48,
                            kind: 152,
                            flags: 0
                          },
                          start: 36,
                          end: 48,
                          kind: 152,
                          flags: 0
                        },
                        start: 30,
                        end: 48,
                        kind: 152,
                        flags: 0
                      },
                      start: 25,
                      end: 48,
                      kind: 152,
                      flags: 0
                    },
                    start: 20,
                    end: 48,
                    kind: 152,
                    flags: 0
                  },
                  start: 13,
                  end: 48,
                  kind: 152,
                  flags: 0
                },
                start: 9,
                end: 48,
                kind: 152,
                flags: 0
              },
              start: 5,
              end: 48,
              kind: 152,
              flags: 0
            },
            start: 0,
            end: 48,
            kind: 152,
            flags: 0
          },
          start: 0,
          end: 48,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a  +=  -=  *=  n  %=  <<=  >>=  >>>=  |=  ^=  &=',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 7,
          length: 2
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 11,
          length: 2
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 22,
          length: 3
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 27,
          length: 3
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 32,
          length: 4
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 38,
          length: 2
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 42,
          length: 2
        },
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 46,
          length: 2
        }
      ],
      detached: false,
      incremental: false,
      parent: null,
      children: [],
      start: 0,
      length: 48,
      end: 48
    });
  });

  it('a  >>> ', () => {
    t.deepEqual(recovery('a  >>> ', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'IdentifierReference',
              name: 'a',
              start: 0,
              end: 1,
              kind: 13,
              flags: 0
            },
            operator: '>>>',
            right: {
              type: 'IdentifierReference',
              name: '',
              start: 6,
              end: 6,
              kind: 13,
              flags: 2
            },
            start: 0,
            end: 6,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 6,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a  >>> ',
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

  it('Unclosed block statement33', () => {
    t.deepEqual(recovery('a  >>>   >>>  b', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryExpression',
            left: {
              type: 'BinaryExpression',
              left: {
                type: 'IdentifierReference',
                name: 'a',
                start: 0,
                end: 1,
                kind: 13,
                flags: 0
              },
              operator: '>>>',
              right: {
                type: 'IdentifierReference',
                name: '',
                start: 6,
                end: 6,
                kind: 13,
                flags: 2
              },
              start: 0,
              end: 6,
              kind: 155,
              flags: 0
            },
            operator: '>>>',
            right: {
              type: 'IdentifierReference',
              name: 'b',
              start: 12,
              end: 15,
              kind: 13,
              flags: 0
            },
            start: 0,
            end: 15,
            kind: 155,
            flags: 0
          },
          start: 0,
          end: 15,
          kind: 122,
          flags: 0
        }
      ],
      text: 'a  >>>   >>>  b',
      fileName: 'recovery.js',
      context: 0,
      mutualFlags: 0,
      diagnostics: [
        {
          kind: 2,
          source: 2,
          message: 'Expression expected',
          code: 7,
          start: 9,
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

  it('new {', () => {
    t.deepEqual(recovery('new {', 'recovery.js'), {
      kind: 209,
      webCompat: true,
      directives: [],
      leafs: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'NewExpression',
            expression: {
              type: 'ObjectLiteral',
              properties: [],
              start: 3,
              end: 5,
              kind: 179,
              flags: 0
            },
            arguments: [],
            start: 0,
            end: 5,
            kind: 163,
            flags: 0
          },
          start: 0,
          end: 5,
          kind: 122,
          flags: 0
        }
      ],
      text: 'new {',
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
  /*
  it('{!super new class ++ | }', () => {
    t.deepEqual(recovery('{', 'recovery.js'), {
      "kind": 209,
      "directives": [],
      "statements": [
          {
              "type": "BlockStatement",
              "statements": [
                  {
                      "type": "ExpressionStatement",
                      "expression": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "operand": {
                              "type": "SuperProperty",
                              "expression": null,
                              "name": null,
                              "start": 2,
                              "end": 7,
                              "kind": 192,
                              "flags": 0
                          },
                          "start": 1,
                          "end": 7,
                          "kind": 160,
                          "flags": 0
                      },
                      "start": 1,
                      "end": 7,
                      "kind": 122,
                      "flags": 0
                  },
                  {
                      "type": "ExpressionStatement",
                      "expression": {
                          "type": "BinaryExpression",
                          "left": {
                              "type": "NewExpression",
                              "expression": {
                                  "type": "PostfixUpdateExpression",
                                  "operator": "++",
                                  "operand": {
                                      "type": "ClassExpression",
                                      "name": null,
                                      "super": null,
                                      "elements": [],
                                      "start": 11,
                                      "end": 17,
                                      "kind": 149,
                                      "flags": 0
                                  },
                                  "start": 17,
                                  "end": 20,
                                  "kind": 162,
                                  "flags": 0
                              },
                              "arguments": [],
                              "start": 7,
                              "end": 20,
                              "kind": 163,
                              "flags": 0
                          },
                          "operator": "|",
                          "right": {
                              "type": "IdentifierReference",
                              "name": "",
                              "start": 22,
                              "end": 22,
                              "kind": 13,
                              "flags": 2
                          },
                          "start": 7,
                          "end": 22,
                          "kind": 155,
                          "flags": 0
                      },
                      "start": 7,
                      "end": 22,
                      "kind": 122,
                      "flags": 0
                  }
              ],
              "start": 0,
              "end": 24,
              "kind": 123,
              "flags": 0
          }
      ],
      "text": "{!super new class ++ | }",
      "fileName": "recovery.js",
      "context": 0,
      "mutualFlags": 0,
      "diagnostics": [
          {
              "kind": 3,
              "source": 2,
              "message": "Member access on super must be in a method",
              "code": 31,
              "start": 8,
              "length": 3
          },
          {
              "kind": 2,
              "source": 2,
              "message": "`{` expected",
              "code": 5,
              "start": 18,
              "length": 2
          },
          {
              "kind": 2,
              "source": 2,
              "message": "Expression expected",
              "code": 7,
              "start": 23,
              "length": 1
          }
      ],
      "detached": false,
      "incremental": false,
      "parent": null,
      "children": [],
      "EOF": {
          "type": "CST",
          "kind": 16384,
          "start": 24,
          "end": 24
      },
      "start": 0,
      "length": 24,
      "end": 24
  });
  });
*/
  it('a *=  *= c', () => {
    t.deepEqual(recovery('a *=  *= c', 'recovery.js'), {
      children: [],
      context: 0,
      diagnostics: [
        {
          code: 7,
          kind: 2,
          length: 2,
          message: 'Expression expected',
          source: 2,
          start: 6
        }
      ],
      directives: [],
      end: 10,
      fileName: 'recovery.js',
      incremental: false,
      detached: false,
      kind: 209,
      webCompat: true,
      length: 10,
      mutualFlags: 0,
      parent: null,
      start: 0,
      leafs: [
        {
          end: 10,
          expression: {
            end: 10,
            flags: 0,
            kind: 152,
            left: {
              end: 1,
              flags: 0,
              kind: 13,
              name: 'a',
              start: 0,
              type: 'IdentifierReference'
            },
            operator: '*=',
            right: {
              end: 10,
              flags: 0,
              kind: 152,
              left: {
                end: 4,
                flags: 2,
                kind: 13,
                name: '',
                start: 4,
                type: 'IdentifierReference'
              },
              operator: '*=',
              right: {
                end: 10,
                flags: 0,
                kind: 13,
                name: 'c',
                start: 8,
                type: 'IdentifierReference'
              },
              start: 4,
              type: 'AssignmentExpression'
            },
            start: 0,
            type: 'AssignmentExpression'
          },
          flags: 0,
          kind: 122,
          start: 0,
          type: 'ExpressionStatement'
        }
      ],
      text: 'a *=  *= c'
    });
  });
});
