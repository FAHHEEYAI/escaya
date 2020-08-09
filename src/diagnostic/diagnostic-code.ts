/**
 * Unique codes for each diagnostic message which can be generated.
 */
export enum DiagnosticCode {
  Unexpected,
  UnexpectedKeyword,
  UnexpectedIdentifier,
  UnexpectedEOF,
  ExpectedIdentifier,
  Expected,
  UnexpectedToken,
  ExpectedExpression,
  ExpectedStatement,
  InvalidCharacter,
  MissingFuncName,
  MissingClassName,
  UnterminatedRegExp,
  DuplicateRegExpFlag,
  UnknownRegExpFlag,
  ExpectedParamDecl,
  ExpectedVarOrLexDecl,
  ExpectedForDecl,
  StrictModeReserved,
  ExpectedBindingIdent,
  ExpectedAnIdentifier,
  UnexpectedYieldAsIdent,
  UnexpectedAwaitAsIdent,
  AwaitInParameter,
  YieldInParameter,
  NewlineAfterThrow,
  IllegalReturn,
  CompundArrLit,
  CompundObjLit,
  ExpectedImportDecl,
  ExpectedExportDecl,
  InvalidSuperProperty,
  InvalidSuperCall,
  ChainingNoSuper,
  InvalidExponentation,
  StrictDelete,
  ColonExpected,
  YieldAsIdent,
  AwaitAsIdent,
  ExpectedAccessor,
  StaticPrototype,
  InvalidBreak,
  IllegalContinue,
  StrictWith,
  InvalidCoalescing,
  MissingDestructInit,
  ExpectedArrow,

  /* Annex B */
  AnnexBB32,
  AnnexBB34
}
