import { kebabCase, isObject } from 'lodash'

export type DeepStrObject = { [key: string]: string | DeepStrObject }
type StrObject = Record<string, string>

let transformKeys: string[] = []

/**
 * 将深层的对象转换为 css var 变量
 * @param theme 将要转换的对象
 * @param merge 内部合并参数
 */
export const transformTheme2CssVars = (target: DeepStrObject, merge?: StrObject) => {
  const result: Record<string, string> = merge || {}
  for (const [key, value] of Object.entries(target)) {
    transformKeys.push(key)
    if (isObject(value)) {
      transformTheme2CssVars(value, result)
      transformKeys = []
    } else {
      const cssvarKey = kebabCase(
        transformKeys
          .map((v) => v[0].toUpperCase() + v.slice(1))
          .join('')
          .trim()
      )
      result[cssvarKey] = value
      transformKeys.splice(transformKeys.length - 1, 1)
    }
  }
  return result
}
