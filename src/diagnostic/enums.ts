/**
 * Sources of diagnostic messages.
 */
export const enum DiagnosticSource {
  Lexer = 0,
  Parser = 1 << 1
}

/**
 * Types of diagnostics which can be generated.
 */
export enum DiagnosticKind {
  Message,
  Warning,
  Error,
  Hint
}

/**
 * Unique codes for each diagnostic message which can be generated.
 */
export enum DiagnosticCode {
  Unexpected,
  Expected,
  UnknownToken,
  InvalidBindingIdentifier,
  InvalidLHS,
  InvalidDestruct,
  InvalidIncDecTarget,
  InvalidExponentation,
  IllegalReturn,
  InvalidDestructuringTarget,
  InvalidLHSDestructRHS,
  InvalidBindingDestruct,
  InvalidArrowDestructLHS,
  StrictFunction,
  SloppyFunction,
  ClassForbiddenAsStatement,
  StrictWith,
  NewlineAfterThrow,
  RestricedLetProduction,
  StrictReservedWord,
  LineTerminatorNotPermittedBeforeArrow,
  FuncDeclNoName,
  ClassDeclNoName,
  BlockBodyInvokedWithoutGroup,
  BlockBodyAccessedWithoutGroup,
  BlockBodyTaggedWithoutGroup,
  ArrowOperatorToRight,
  ArrowPostfixUpdateOperator,
  DuplicateDefaultClause,
  InvalidSuperProperty,
  InvalidSuperCall,
  ExpectedIdentifier,
  DuplicateRegExpFlag,
  UnterminatedRegExp,
  UnknownRegExpFlag,
  UnterminatedString,
  UnterminatedTemplate,
  InvalidOctalEscapeInTemplate,
  ExpectedComma,
  DeclMissingDestructInitializer,
  ConstMissingDestrictInitializer,
  ExpectedArrow,
  CantAssignToLoop,
  CantAssignForInLoop,
  CantAssignForLoop,
  CantAssignForAwaitLoop,
  ForOfLet,
  DisallowedLetInStrict,
  WebCompatFunction,
  AsyncFunctionInSingleStatementContext,
  InvalidDotProperty,
  OptionalChainingNoTemplate,
  StrictDelete,
  ForInLoopMultiBindings,
  ForOfLoopMultiBindings,
  InvalidImportInSloppy,
  NoCatchOrFinally,
  CatchWithoutTry,
  FinallyWithoutTry,
  InvalidTrailingComma,
  IllegalBreak,
  IllegalContinue,
  AwaitOutsideAsync,
  DisallowedYieldInContext,
  UnexpectedStrictReserved,
  StrictInvalidLetInExprPos,
  InvalidForAwait,
  InvalidLetConstBinding,
  InvalidKeyword,
  LetInStrictMode,
  HtmlCommentInModule,
  InvalidCharacter,
  InvalidTrailSurrogate,
  InvalidUnicodeEscapeSequence,
  InvalidHexEscapeSequence,
  UnicodeOverflow,
  InvalidAstralCharacter,
  StrictOctalEscape,
  InvalidEightAndNine,
  IdafterNumber,
  StrictOctal,
  OctalSequence,
  BinarySequence,
  BinarySequenceNoDigits,
  OctalSequenceNoDigits,
  HexSequenceNoDigits,
  UnknownDigit,
  MissingExponent,
  InvalidBigIntLiteral,
  UnterminatedComment,
  TemplateBadEscape,
  UnsupportedUnicodeIdent,
  UnexpectedIdentNumber,
  OptionalChainingNoSuper,
  OptionalChainingNoNew,
  UnexpectedEOF,
  UnexpectedKeyword,
  UnexpectedIdentifier,
  GetAccessorParms,
  InvalidKeyToken,
  KeywordNotId
}
