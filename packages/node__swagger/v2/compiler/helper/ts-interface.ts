import { factory } from 'typescript'
import * as ts from 'typescript'
import {
  markPropertySignature,
  markJSDocComment,
} from './ts-util'
import { InterfaceOptions } from '../../typings/index'

export function makeInterfaceDeclaration(o: InterfaceOptions) {
  // 导出标识符
  const exportModifier = factory.createModifier(ts.SyntaxKind.ExportKeyword)
  // 方法名称
  const interfaceName = factory.createIdentifier(o.name)
  const properties: ts.PropertySignature[] = o.properties.flatMap((item) => {
    return [
      item.description && markJSDocComment(item.description),
      markPropertySignature(item)
    ]
  })
    .filter(Boolean) as any
  return factory.createInterfaceDeclaration(
    undefined,
    [exportModifier],
    interfaceName,
    undefined,
    undefined,
    properties
  )
}