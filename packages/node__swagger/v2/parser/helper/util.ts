import * as OpenAPITypes from "../../typings/OpenAPI-Specification";
import forIn from 'lodash/forIn'
import forEach from 'lodash/forEach'
import { transliterate } from 'transliteration'
import { pascalCase } from 'pascal-case'


export interface TraverseParametersOptions {
  path: string
  parameters: OpenAPITypes.Parameter[]
  method: string
  options: OpenAPITypes.Method
}
export interface TraverseParametersCallback {
  (options: TraverseParametersOptions): void
}
/** api 导入 ts 类型集合的 命名空间名字 */
export const TS_TYPE_NAME_SPACE = 'OpenAPITypes'
/**
 * 遍历至 Parameters
 * @param paths 
 * @param callback 
 */
export function traverseParameters(paths: OpenAPITypes.Paths, callback: TraverseParametersCallback) {
  for (const [path, _others] of Object.entries(paths)) {
    const { parameters = [], ...methods } = _others
    forIn(methods, (options, method) => {
      callback({
        path,
        method,
        options,
        parameters,
      })
    })
  }
}

/**
 * 过滤非英文字符
 * @param {*} str
 * @param {*} seat
 */
export function uselessString(string_: string) {
  return string_.replace(/[^\dA-Za-z]+/g, '')
}


/**
 * 获取可用变量名
 * @param {*} str
 */
export function varName(string_: string | string[]) {
  if (!string_) {
    console.trace('\n\nvarName inner is not defined\n')
    return string_
  }
  if (Array.isArray(string_)) string_ = string_.filter(Boolean).join('/')
  
  string_ = pascalCase(string_)
  // 过一遍中文转拼音，没有中文转化之后无变化
  string_ = transliterate(string_).replace(/\s+/g, '')
  // 过滤非英文字符
  string_ = uselessString(string_)
  // 转换为大驼峰
  string_ = pascalCase(string_)
  return string_
}

/**
 * 是否存在于 definitions
 */
export function isExist(ds: OpenAPITypes.Definitions, name: string) {
  return !!ds[name]
}

export const useRefMap = (ref: string) => ref.split('/').pop()!

/**
 * 获取 typeNameSpace 中的类型, 假如是基础类型, 则返回基础类型
 * 假如不存在值, 则返回 emptyType
 * @param type
 */
export function getNameSpaceType(type?: string | null, emptyType = 'void') {
  if (!type) return emptyType
  const basicTyping = [
    'string',
    'string[]',
    'number',
    'number[]',
    'Record<string, any>',
    'Record<string, string>',
    'any',
    'boolean',
    'FormData'
  ]
  return basicTyping.includes(type) ? type : `${TS_TYPE_NAME_SPACE}.${type}`
}
