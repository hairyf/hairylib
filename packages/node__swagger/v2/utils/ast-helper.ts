import * as ts from 'typescript'
import { factory } from 'typescript'

export function astNodeToCode(node: ts.Node | ts.Node[]) {
  if (!Array.isArray(node)) node = [node]
  const resultFile = ts.createSourceFile('func.ts', '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

  
  return node
  .map(item =>printer.printNode(ts.EmitHint.Unspecified, item, resultFile))
  .join('\n')
}
export function codeToAstNode(code: string) {
  const resultFile = ts.createSourceFile('func.ts', code, ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)
  const node = (resultFile.getChildren()[0].parent as any).statements[0] as ts.TypeAliasDeclaration
  return node
}

export function markTypeResponse(type: string) {
  return codeToAstNode(`type Response = SwaggerType.Response<SwaggerType.${type}>`)
}

export function markConstUrl(value: string) {
  return codeToAstNode(`const url = ${value}`)
}

export function markJSDocComment(docs: string[] | string) {
  if (!Array.isArray(docs)) docs = [docs]
  const comment  = factory.createJSDocComment(
    docs.join('\n'),
    docs.length === 1 ? undefined : []
  )
  return comment as never
}

export interface MarkFiledOptions {
  name: string
  type: string
  required?: boolean
}
export function markParameterDeclaration(o: MarkFiledOptions) {
  return factory.createParameterDeclaration(
    undefined,
    undefined,
    undefined,
    factory.createIdentifier(o.name),
    o.required === true ? factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
    factory.createTypeReferenceNode(o.type)
  )
}

export function markPropertySignature(o: MarkFiledOptions) {
  return factory.createPropertySignature(
    undefined,
    factory.createIdentifier(o.name),
    o.required === true ? factory.createToken(ts.SyntaxKind.QuestionToken) : undefined,
    factory.createTypeReferenceNode(o.type)
  )
}

export type ObjectLiteralExpressionFiled = string | [string | '...', string]
export function markObjectLiteralExpression(filed: ObjectLiteralExpressionFiled) {
  if (typeof filed === 'string') {
    return factory.createShorthandPropertyAssignment(
      factory.createIdentifier(filed),
      undefined
    )
  } else {
    if (filed[0] === '...')
      return factory.createSpreadAssignment(factory.createIdentifier(filed[1]))
    else
      return factory.createPropertyAssignment(
        factory.createIdentifier(filed[0]),
        factory.createIdentifier(filed[1])
      )
  }
}

export function markRequestCall(filed: ObjectLiteralExpressionFiled[]) {
  return factory.createReturnStatement(
    factory.createCallExpression(
      factory.createPropertyAccessExpression(
        factory.createIdentifier("http"),
        factory.createIdentifier("request")
      ),
      [
        factory.createTypeReferenceNode(
          factory.createIdentifier("ResponseType"),
          undefined
        )
      ],
      [
        factory.createObjectLiteralExpression(
          filed.map(markObjectLiteralExpression),
          false
        )
      ]
    ))

}

