import { createTSRequestDeclaration } from "./ts-request";
import { ParserRequestOptions, ParserTypingsOptions } from "../typings/index";
import { createTSTypingsDeclaration } from "./ts-typings";
import "typescript"

export function tsCompiler(request: ParserRequestOptions, typings: ParserTypingsOptions) {
  return {
    request: createTSRequestDeclaration(request),
    typings: createTSTypingsDeclaration(typings)
  }
}
