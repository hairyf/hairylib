import { ParserTypingsOptions } from "../typings/parser"
import { factory } from "typescript"
import { makeInterfaceDeclaration } from "./helper/ts-interface"
import { markComment, codeToAstNode } from "./helper/ts-util"

export function createTSTypingsDeclaration(o: ParserTypingsOptions) {
  const jsonDocs = o.jsonDocs.map(item => markComment(item.comment, item.type))
  const response = codeToAstNode(`export type Response<T> = ${o.responseType || 'T'}`)
  const typings = o.typings.map((v) => makeInterfaceDeclaration(v))
  return [
    ...jsonDocs,
    factory.createIdentifier(''),
    response,
    factory.createIdentifier(''),
    ...typings,
  ]
}