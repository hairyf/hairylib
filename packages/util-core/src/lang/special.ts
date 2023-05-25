import isPlainObject from 'lodash/isPlainObject'

/**
 * 对象扁平化处理
 * @param object 对象
 * @param deep 深度
 */
export function objectFlat(object: Record<string, any>, deep = 1) {
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
