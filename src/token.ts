export const enum Token {
  Type = 0xff,

  /* Precedence for binary operators (always positive) */
  PrecStart = 8,
  Precedence = 15 << PrecStart, // 8-11

  /* Attribute names */
  IsStatementStart     = 1 << 12,
  IsExpressionStart    = 1 << 13,
  Contextual           = 1 << 14,
  Keyword              = 1 << 15,
  FutureKeyword        = 1 << 16,
  IsAssignOp           = 1 << 17,
  IsBinaryOp           = 1 << 18,
  IsUnaryOp            = 1 << 19,
  IsUpdateOp           = 1 << 20,
  LeftHandSide         = 1 << 21,
  IsIdentifier         = 1 << 22 | Contextual,
  IsPatternStart       = 1 << 23,
  IsMember             = 1 << 24,
  IsProperty           = 1 << 25,
  IsVarDecl            = 1 << 26,
  IsAutomaticSemicolon = 1 << 27,
  IsCaseBlock          = 1 << 28,
  IsEllipsis           = 1 << 29,
  IsInOrOf             = 1 << 30,

  /* Node types */
  EndOfSource = 0 | IsAutomaticSemicolon, // Pseudo

  /* Constants/Bindings */
  Identifier        = 1 | IsIdentifier | IsExpressionStart,
  NumericLiteral    = 2 | IsProperty | IsExpressionStart,
  BigIntLiteral     = 3 | IsProperty | IsExpressionStart,
  StringLiteral     = 4 | IsProperty | IsExpressionStart,
  RegularExpression = 5 | IsExpressionStart,
  FalseKeyword      = 6 | Keyword | IsExpressionStart,
  TrueKeyword       = 7 | Keyword | IsExpressionStart,
  NullKeyword       = 8 | Keyword | IsExpressionStart,

  /* Template nodes */
  TemplateCont = 9 | IsMember | LeftHandSide | IsExpressionStart,
  TemplateTail = 10 | IsMember | LeftHandSide | IsExpressionStart,

  /* Punctuators */
  Arrow        = 11, // =>
  LeftParen    = 12 | LeftHandSide | IsExpressionStart, // (
  LeftBrace    = 13 | IsPatternStart | IsExpressionStart, // {
  Period       = 14 | IsMember | LeftHandSide, // .
  Ellipsis     = 15 | IsEllipsis, // ...
  RightBrace   = 16 | IsAutomaticSemicolon, // }
  RightParen   = 17, // )
  Semicolon    = 18 | IsAutomaticSemicolon  | IsStatementStart| IsCaseBlock, // ;
  Comma        = 19, // ,
  LeftBracket  = 20 | IsMember | LeftHandSide | IsPatternStart | IsProperty | IsExpressionStart, // [
  RightBracket = 21, // ]
  Colon        = 22, // :
  QuestionMark = 23, // ?
  Coalesce     = 24 | IsBinaryOp | 1 << PrecStart, // ??
  QuestionMarkPeriod = 25 | LeftHandSide, // ?.
  SingleQuote  = 26, // '
  DoubleQuote  = 27, // "

  /* Update operators */
  Increment = 28 | IsUpdateOp | IsExpressionStart, // ++
  Decrement = 29 | IsUpdateOp | IsExpressionStart, // --

  /* Assign operators */
  Assign                  = 30 | IsAssignOp, // =
  ShiftLeftAssign         = 31 | IsAssignOp, // <<=
  ShiftRightAssign        = 32 | IsAssignOp, // >>=
  LogicalShiftRightAssign = 33 | IsAssignOp, // >>>=
  ExponentiateAssign      = 34 | IsAssignOp, // **=
  AddAssign               = 35 | IsAssignOp, // +=
  SubtractAssign          = 36 | IsAssignOp, // -=
  MultiplyAssign          = 37 | IsAssignOp, // *=
  DivideAssign            = 38 | IsAssignOp, // /=
  ModuloAssign            = 39 | IsAssignOp, // %=
  BitwiseXorAssign        = 40 | IsAssignOp, // ^=
  BitwiseOrAssign         = 41 | IsAssignOp, // |=
  BitwiseAndAssign        = 42 | IsAssignOp, // &=
  LogicalOrAssign         = 43 | IsAssignOp, // ||=
  LogicalAndAssign        = 44 | IsAssignOp, // &&=
  CoalesceAssign          = 45 | IsAssignOp, // ??=

  /* Unary/binary operators */
  TypeofKeyword      = 46 | IsUnaryOp | Keyword | IsExpressionStart,
  DeleteKeyword      = 47 | IsUnaryOp | Keyword | IsExpressionStart,
  VoidKeyword        = 48 | IsUnaryOp | Keyword | IsExpressionStart,
  Negate             = 49 | IsUnaryOp | IsExpressionStart, // !
  Complement         = 50 | IsUnaryOp | IsExpressionStart, // ~
  Add                = 51 | IsBinaryOp | IsUnaryOp | 5 << PrecStart | IsExpressionStart, // +
  Subtract           = 52 | IsBinaryOp | IsUnaryOp | 10 << PrecStart | IsExpressionStart, // -
  InKeyword          = 53 | IsBinaryOp | 8 << PrecStart | Keyword | IsInOrOf | IsExpressionStart,
  InstanceofKeyword  = 54 | IsBinaryOp | 8 << PrecStart | Keyword | IsExpressionStart,
  Multiply           = 55 | IsBinaryOp | 6 << PrecStart | IsProperty | IsExpressionStart, // *
  Modulo             = 56 | IsBinaryOp | 11 << PrecStart | IsExpressionStart, // %
  Divide             = 57 | IsBinaryOp | 11 << PrecStart | IsExpressionStart, // /
  Exponentiate       = 58 | IsBinaryOp | 12 << PrecStart | IsExpressionStart, // **
  LogicalAnd         = 59 | IsBinaryOp | 3 << PrecStart | IsExpressionStart, // &&
  LogicalOr          = 60 | IsBinaryOp | 2 << PrecStart | IsExpressionStart, // ||
  StrictEqual        = 61 | IsBinaryOp | 7 << PrecStart | IsExpressionStart, // ===
  StrictNotEqual     = 62 | IsBinaryOp | 7 << PrecStart | IsExpressionStart, // !==
  LooseEqual         = 63 | IsBinaryOp | 7 << PrecStart | IsExpressionStart, // ==
  LooseNotEqual      = 64 | IsBinaryOp | 7 << PrecStart | IsExpressionStart, // !=
  LessThanOrEqual    = 65 | IsBinaryOp | 8 << PrecStart | IsExpressionStart, // <=
  GreaterThanOrEqual = 66 | IsBinaryOp | 8 << PrecStart | IsExpressionStart, // >=
  LessThan           = 67 | IsBinaryOp | 8 << PrecStart | IsExpressionStart, // <
  GreaterThan        = 68 | IsBinaryOp | 8 << PrecStart | IsExpressionStart, // >
  ShiftLeft          = 69 | IsBinaryOp | 9 << PrecStart | IsExpressionStart, // <<
  ShiftRight         = 70 | IsBinaryOp | 9 << PrecStart | IsExpressionStart, // >>
  LogicalShiftRight  = 71 | IsBinaryOp | 9 << PrecStart | IsExpressionStart, // >>>
  BitwiseAnd         = 72 | IsBinaryOp | 6 << PrecStart | IsExpressionStart, // &
  BitwiseOr          = 73 | IsBinaryOp | 4 << PrecStart | IsExpressionStart, // |
  BitwiseXor         = 74 | IsBinaryOp | 5 << PrecStart | IsExpressionStart, // ^

  /* Variable declaration kinds */
  VarKeyword   = 75 | Keyword  | IsStatementStart | IsCaseBlock | IsVarDecl | IsExpressionStart,
  LetKeyword   = 76 | FutureKeyword  | IsStatementStart | IsCaseBlock | IsVarDecl | IsExpressionStart,
  ConstKeyword = 77 | Keyword  | IsStatementStart | IsCaseBlock | IsVarDecl | IsExpressionStart,

  /* Other Keyword words */
  BreakKeyword    = 78 | Keyword  | IsStatementStart | IsCaseBlock,
  CaseKeyword     = 79 | Keyword,
  CatchKeyword    = 80 | Keyword,
  ClassKeyword    = 81 | Keyword  | IsStatementStart | IsCaseBlock | IsExpressionStart,
  ContinueKeyword = 82 | Keyword  | IsStatementStart | IsCaseBlock,
  DebuggerKeyword = 83 | Keyword  | IsStatementStart | IsCaseBlock,
  DefaultKeyword  = 84 | Keyword,
  DoKeyword       = 85 | Keyword  | IsStatementStart | IsCaseBlock,
  ElseKeyword     = 86 | Keyword,
  ExportKeyword   = 87 | Keyword,
  ExtendsKeyword  = 88 | Keyword,
  FinallyKeyword  = 89 | Keyword,
  ForKeyword      = 90 | Keyword  | IsStatementStart | IsCaseBlock,
  FunctionKeyword = 91 | Keyword  | IsStatementStart | IsCaseBlock | IsExpressionStart,
  IfKeyword       = 92 | Keyword  | IsStatementStart | IsCaseBlock,
  ImportKeyword   = 93 | Keyword  | IsExpressionStart,
  NewKeyword      = 94 | Keyword  | IsStatementStart,
  ReturnKeyword   = 95 | Keyword  | IsStatementStart | IsCaseBlock,
  SuperKeyword    = 96 | Keyword  | IsStatementStart,
  SwitchKeyword   = 97 | Keyword  | IsStatementStart | IsCaseBlock,
  ThisKeyword     = 98 | Keyword  | IsStatementStart | IsCaseBlock,
  ThrowKeyword    = 99 | Keyword  | IsStatementStart | IsCaseBlock,
  TryKeyword      = 100 | Keyword | IsStatementStart | IsCaseBlock,
  WhileKeyword    = 101 | Keyword | IsStatementStart | IsCaseBlock,
  WithKeyword     = 102 | Keyword | IsStatementStart | IsCaseBlock,

  /* Strict mode Keyword words */
  ImplementsKeyword = 103 | FutureKeyword,
  InterfaceKeyword  = 104 | FutureKeyword,
  PackageKeyword    = 105 | FutureKeyword,
  PrivateKeyword    = 106 | FutureKeyword,
  ProtectedKeyword  = 107 | FutureKeyword,
  PublicKeyword     = 108 | FutureKeyword,
  StaticKeyword     = 109 | FutureKeyword,
  YieldKeyword      = 110 | FutureKeyword | IsExpressionStart,

  /* Contextual keywords */
  AsKeyword          = 111 | Contextual,
  AsyncKeyword       = 112 | Contextual | IsCaseBlock | IsExpressionStart,
  AwaitKeyword       = 113 | Contextual | IsExpressionStart,
  ConstructorKeyword = 114 | Contextual,
  GetKeyword         = 115 | Contextual,
  SetKeyword         = 116 | Contextual,
  FromKeyword        = 117 | Contextual,
  OfKeyword          = 118 | Contextual | IsInOrOf,
  EnumKeyword        = 119 | Keyword,

  /* Whitespace */
  WhiteSpace         = 120,
  LineFeed           = 121,
  CarriageReturn     = 122,

  /* Misc */
  Unknown            = 123,
  TargetKeyword      = 124 | IsIdentifier,
  MetaKeyword        = 125 | IsIdentifier,

  /* Comments */

  SingleLine        = 126,
  MultiLine        = 127,
  EscapedIdentifier = 128,

  PrivateName = 129
}

// Note: this *must* be kept in sync with the enum's order.
//
// It exploits the enum value ordering, and it's necessarily a complete and
// utter hack.
//
// All to lower it to a single monomorphic array access.
export const KeywordDescTable = [
  "end of source",

  /* Constants/Bindings */
  "identifier", "number", "bigInt", "string", "regular expression",
  "false", "true", "null",

  /* Template nodes */
  "template continuation", "template end",

  /* Punctuators */
  "=>", "(", "{", ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "??", "?.", "'", "\"",

  /* Update operators */
  "++", "--",

  /* Assign operators */
  "=", "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=",
  "&=", "||=", "&&=", "??=",

  /* Unary/binary operators */
  "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof", "*", "%", "/", "**", "&&",
  "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">", "<<", ">>", ">>>", "&", "|", "^",

  /* Variable declaration kinds */
  "var", "let", "const",

  /* Other Keyword words */
  "break", "case", "catch", "class", "continue", "debugger", "default", "do", "else", "export",
  "extends", "finally", "for", "function", "if", "import", "new", "return", "super", "switch",
  "this", "throw", "try", "while", "with",

  /* Strict mode Keyword words */
  "implements", "interface", "package", "private", "protected", "public", "static", "yield",

  /* Contextual keywords */
  "as", "async", "await", "constructor", "get", "set", "from", "of",
];

export const descKeywordTable: { [key: string]: Token } = Object.create(null, {
  this: { value: Token.ThisKeyword },
  function: { value: Token.FunctionKeyword },
  if: { value: Token.IfKeyword },
  return: { value: Token.ReturnKeyword },
  var: { value: Token.VarKeyword },
  else: { value: Token.ElseKeyword },
  for: { value: Token.ForKeyword },
  new: { value: Token.NewKeyword },
  in: { value: Token.InKeyword },
  typeof: { value: Token.TypeofKeyword },
  while: { value: Token.WhileKeyword },
  case: { value: Token.CaseKeyword },
  break: { value: Token.BreakKeyword },
  try: { value: Token.TryKeyword },
  catch: { value: Token.CatchKeyword },
  delete: { value: Token.DeleteKeyword },
  throw: { value: Token.ThrowKeyword },
  switch: { value: Token.SwitchKeyword },
  continue: { value: Token.ContinueKeyword },
  default: { value: Token.DefaultKeyword },
  instanceof: { value: Token.InstanceofKeyword },
  do: { value: Token.DoKeyword },
  void: { value: Token.VoidKeyword },
  finally: { value: Token.FinallyKeyword },
  async: { value: Token.AsyncKeyword },
  await: { value: Token.AwaitKeyword },
  class: { value: Token.ClassKeyword },
  const: { value: Token.ConstKeyword },
  constructor: { value: Token.ConstructorKeyword },
  debugger: { value: Token.DebuggerKeyword },
  export: { value: Token.ExportKeyword },
  extends: { value: Token.ExtendsKeyword },
  false: { value: Token.FalseKeyword },
  from: { value: Token.FromKeyword },
  get: { value: Token.GetKeyword },
  implements: { value: Token.ImplementsKeyword },
  import: { value: Token.ImportKeyword },
  interface: { value: Token.InterfaceKeyword },
  let: { value: Token.LetKeyword },
  null: { value: Token.NullKeyword },
  of: { value: Token.OfKeyword },
  package: { value: Token.PackageKeyword },
  private: { value: Token.PrivateKeyword },
  protected: { value: Token.ProtectedKeyword },
  public: { value: Token.PublicKeyword },
  set: { value: Token.SetKeyword },
  static: { value: Token.StaticKeyword },
  super: { value: Token.SuperKeyword },
  true: { value: Token.TrueKeyword },
  with: { value: Token.WithKeyword },
  yield: { value: Token.YieldKeyword },
  as: { value: Token.AsKeyword },
  target: { value: Token.TargetKeyword },
  meta: { value: Token.MetaKeyword },
  enum: { value: Token.EnumKeyword },
  '#': { value: Token.PrivateName },
});