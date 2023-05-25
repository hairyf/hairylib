export type TypeofType =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function'
  | 'null'
  | 'regexp'

/**
 * 获取数据类型
 * @param target 检测对象
 * @returns 返回字符串
 */
export function getTypeof(target: any) {
  const value = Object.prototype.toString.call(target).slice(8, -1).toLocaleLowerCase()
  return value as TypeofType
}
/**
 * 检测数据类型
 * @param target 检测对象
 * @param type 类型
 * @returns 返回字符串
 */
export function isTypeof(target: any, type: TypeofType) {
  return getTypeof(target) === type
}
