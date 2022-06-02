import ts, { factory } from "typescript"
import { makeFunctionDeclaration } from "./helper/ts-function"
import { handleRequestOptions } from "./helper/ts-request"
import { makeInterfaceDeclaration } from "./helper/ts-interface"
import { markComment, markImportDeclaration, markNamespaceImportDeclaration, markTypeAliasDeclaration, markVariableDeclarationConst, codeToAstNode } from "./helper/ts-util"
import { ParserRequestOptions, ParserTypingsOptions } from "../typings/index"

export function createTSRequestDeclaration(o: ParserRequestOptions, t?: ParserTypingsOptions) {
  const jsonDocs = o.jsonDocs.map(item => markComment(item.comment, item.type))

  handleRequestOptions(o)

  const imports = [
    markImportDeclaration(o.httpImport.name, o.httpImport.value),
    o.typeImport && markNamespaceImportDeclaration(o.typeImport.name, o.typeImport.value)
  ]

  const vars = [
    o.httpConfig && markTypeAliasDeclaration(o.httpConfig.name!, o.httpConfig.type || 'any'),
    o.baseURL && markVariableDeclarationConst(o.baseURL.name, o.baseURL.value),
  ]

  const functions = o.functions.flatMap((item => makeFunctionDeclaration(item as any)))

  const nodes = [
    ...jsonDocs,
    factory.createIdentifier(''),
    ...imports,
    factory.createIdentifier(''),
    ...vars,
    factory.createIdentifier(''),
    ...functions,
  ].filter(Boolean) as ts.Node[]

  if (t) {
    const response = codeToAstNode(`export type Response<T> = ${t.responseType || 'T'}`)
    const typings = t.typings.map((v) => makeInterfaceDeclaration(v))
    nodes.push(factory.createIdentifier(''))
    nodes.push(factory.createIdentifier(''))
    nodes.push(response)
    nodes.push(...typings)
  }
  
  return nodes
}
