import * as ts from "typescript"; 
 
function makeFactorialFunction() { 
  const functionName = ts.factory.createIdentifier("factorial"); 
  const paramName = ts.factory.createIdentifier("n"); 
  const paramType = ts.factory.createKeywordTypeNode( 
    ts.SyntaxKind.NumberKeyword 
  ); 
  const paramModifiers = ts.factory.createModifier( 
    ts.SyntaxKind.ReadonlyKeyword 
  ); 
  const parameter = ts.factory.createParameterDeclaration( 
    undefined, 
    [paramModifiers], 
    undefined, 
    paramName, 
    undefined, 
    paramType 
  ); 
 
  // n <= 1 
  const condition = ts.factory.createBinaryExpression( 
    paramName, 
    ts.SyntaxKind.LessThanEqualsToken, 
    ts.factory.createNumericLiteral(1) 
  ); 
 
  const ifBody = ts.factory.createBlock( 
    [ts.factory.createReturnStatement(ts.factory.createNumericLiteral(1))], 
    true 
  ); 
 
  const decrementedArg = ts.factory.createBinaryExpression( 
    paramName, 
    ts.SyntaxKind.MinusToken, 
    ts.factory.createNumericLiteral(1) 
  ); 
 
  const recurse = ts.factory.createBinaryExpression( 
    paramName, 
    ts.SyntaxKind.AsteriskToken, 
    ts.factory.createCallExpression(functionName, undefined, [decrementedArg]) 
  ); 
 
  const statements = [ 
    ts.factory.createIfStatement(condition, ifBody), 
    ts.factory.createReturnStatement(recurse), 
  ]; 
 
  return ts.factory.createFunctionDeclaration( 
    undefined, 
    [ts.factory.createToken(ts.SyntaxKind.ExportKeyword)], 
    undefined, 
    functionName, 
    undefined, 
    [parameter], 
    ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword), 
    ts.factory.createBlock(statements, true) 
  ); 
} 
 
const resultFile = ts.createSourceFile( 
  "func.ts", 
  "", 
  ts.ScriptTarget.Latest, 
  false, 
  ts.ScriptKind.TS 
); 

const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed }); 
 
const result = printer.printNode( 
  ts.EmitHint.Unspecified, 
  makeFactorialFunction(), 
  resultFile 
); 
