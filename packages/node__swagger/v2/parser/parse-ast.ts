import { factory } from 'typescript'
import * as ts from 'typescript'
import {
  markParameterDeclaration,
  MarkFiledOptions,
  markTypeResponse,
  markConstUrl,
  astNodeToCode,
  markRequestCall,
  ObjectLiteralExpressionFiled,
  markPropertySignature,
  markJSDocComment
} from '../utils/ast-helper'

export interface MakeMethodFunctionOptions {
  /**
   * 方法名称
   */
  name: string
  /**
   * 形参列表
   */
  parameters: MarkFiledOptions[]
  /**
   * 配置列表
   */
  options: ObjectLiteralExpressionFiled[]
  /**
   * 函数调用 URL
   */
  url: string
  /**
   * 响应内容
   */
  responseType: string
  /**
   * jsonDocs
   */
  jsonDocs?: string[] | string
}

export function makeFunctionDeclaration(o: MakeMethodFunctionOptions) {
  // 导出标识符
  const exportModifier = factory.createModifier(ts.SyntaxKind.ExportKeyword)
  // 方法名称
  const functionName = factory.createIdentifier(o.name)
  // 参数列表
  const parameters = o.parameters.map(markParameterDeclaration)
  const functionBlock = factory.createBlock([
    markTypeResponse(o.responseType),
    markConstUrl(o.url),
    markRequestCall(o.options)
  ])

  let comment
  if (o.jsonDocs?.length) comment = markJSDocComment(o.jsonDocs)

  const node = factory.createFunctionDeclaration(
    undefined,
    [exportModifier],
    undefined,
    functionName,
    undefined,
    parameters,
    undefined,
    functionBlock
  )

  return [comment, node].filter(Boolean) as ts.FunctionDeclaration[]
}


export interface MakeInterfaceOptions {
  /**
   * 接口名称
   */
  name: string
  /**
   * 所有字段
   */
  properties: {
    jsonDocs?: string[] | string
    name: string
    type: string
    required?: boolean
  }[]
}
export function makeInterfaceDeclaration(o: MakeInterfaceOptions) {
  // 导出标识符
  const exportModifier = factory.createModifier(ts.SyntaxKind.ExportKeyword)
  // 方法名称
  const interfaceName = factory.createIdentifier(o.name)
  const properties: ts.PropertySignature[] = o.properties.flatMap((item) => {
    return [
      item.jsonDocs && markJSDocComment(item.jsonDocs),
      markPropertySignature(item)
    ]
  })
    .filter(Boolean) as any

  return factory.createInterfaceDeclaration(
    undefined,
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    interfaceName,
    undefined,
    undefined,
    properties
  )
}

console.log(
  astNodeToCode(
    makeInterfaceDeclaration({
      name: 'AA',
      properties: [
        {
          name: 'storeAssetOutput',
          type: 'Record<string, ChainAssetInfo[]>',
          required: true,
          jsonDocs: '@key:商户名字)'
        }
      ]
    })
  )
)