export type Typeof =
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
 * obtain data type
 * @param target Detection object
 */
export function getTypeof(target: any) {
  const value = Object.prototype.toString.call(target).slice(8, -1).toLocaleLowerCase()
  return value as Typeof
}
/**
 * Detecting data types
 * @param target Detection object
 * @param type Data type
 */
export function isTypeof(target: any, type: Typeof) {
  return getTypeof(target) === type
}
