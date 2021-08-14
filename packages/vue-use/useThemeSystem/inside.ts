import { kebabCase, isObject } from 'lodash'

export type DeepStringObject = { [key: string]: string | DeepStringObject }
type StringObject = Record<string, string>

let transformKeys: string[] = []

/**
 * 将深层的对象转换为 css var 变量
 * @param theme 将要转换的对象
 * @param merge 内部合并参数
 */
export const transformTheme2CssVariables = (target: DeepStringObject, merge?: StringObject) => {
  const result: Record<string, string> = merge || {}
  for (const [key, value] of Object.entries(target)) {
    transformKeys.push(key)
    if (isObject(value)) {
      transformTheme2CssVariables(value, result)
      transformKeys = []
    } else {
      const cssvarKey = kebabCase(
        transformKeys
          .map((v) => v[0].toUpperCase() + v.slice(1))
          .join('')
          .trim()
      )
      result[cssvarKey] = value
      transformKeys.splice(-1, 1)
    }
  }
  return result
}
