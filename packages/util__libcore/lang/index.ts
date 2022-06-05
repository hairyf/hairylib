import forIn from 'lodash/forIn'
import _isObject from 'lodash/isObject'
import isPlainObject from 'lodash/isPlainObject'
import pickBy from 'lodash/pickBy'
import { isBrowser } from '../is'

/**
 * 将 formData 转换为 object
 * @param formData
 */
export const formDataToObject = (formData: FormData) => {
  return Object.fromEntries((formData as any).entries()) as Record<string, string>
}
/**
 * 将 object 转换为 formData
 * @param object
 */
export const objectToFormData = (object: Record<string, string | File>) => {
  const formData = new FormData()
  for (const [key, value] of Object.entries(object)) formData.append(key, value)
  return formData
}

/**
 * 过滤对象|数组中 filter 中的值
 * @param params
 * @param filter
 */
export const pickByParams = <T extends object>(params: T, filter: any[], deep = false) => {
  deep &&
    forIn(params, (value, key) => {
      if (_isObject(value))
        // @ts-ignore
        params[key] = pickByParams(params[key], filter, deep)
    })
  const pickValue = pickBy(params, (value) => !filter.includes(value))
  if (Array.isArray(params)) {
    return Object.values(pickValue) as any as Partial<T>
  }
  return pickValue
}

/**
 * 对象扁平化处理
 * @param object 对象
 * @param deep 深度
 */
export const objectFlat = (object: Record<string, any>, deep = 1) => {
  const flatDeep = (object: Record<string, any>, deep = 1) => {
    let _object: Record<string, any> = {}
    for (const [key, value] of Object.entries(object)) {
      if (isPlainObject(value)) {
        _object = { ..._object, ...(deep > 0 ? flatDeep(value, deep - 1) : value) }
        continue
      }
      _object[key] = value
    }
    return _object
  }
  return flatDeep(object, deep)
}

export const isFormData = (value: any): value is FormData => isObject(value) && isBrowser && value instanceof FormData

export const isWindow = (value: any): value is Window =>
  typeof window !== 'undefined' && toString.call(value) === '[object Window]'

export const isObject = (value: any): value is object => _isObject(value) && !Array.isArray(value)
