import type { DeepMap } from '../typings'

export interface DeepMapFn<T extends object, V> {
  (value: T[keyof T], key: keyof T, paths: string[]): V
}
export interface Comparator<T> {
  (value: T, paths: string[]): boolean
}

/**
 * Map a deep object.
 * @param value - The value to map.
 * @param callback - The callback to map the value.
 * @param comparator - The comparator to determine if the value should be traversed.
 * @returns The mapped value.
 *
 * @example
 * ```ts
 * const obj = {
 *   a: '1',
 *   b: {
 *     c: '2',
 *   },
 * }
 * const result = mapDeep(obj, (value, key, path) => {
 *   return 1 as const
 * })
 * console.log(result) // { a: number, b: { c: number } }
 * ```
 *
 * @example with comparator
 * ```ts
 * const obj = {
 *   a: '1',
 *   b: {
 *     c: '2',
 *   },
 * }
 * const result = mapDeep(obj, (value, key, paths) => {
 *   return 1 as const
 * }, (value, paths) => {
 *   if (value.c === '2')
 *    return true
 * })
 * console.log(result) // { a: number, b: number }
 * ```
 */
export function mapDeep<T extends object, V, ST>(value: T, callback: DeepMapFn<T, V>, comparator?: Comparator<T>): DeepMap<T, V, ST> {
  function traverse(target: any, path: string[] = []): any {
    const isNativeObject = target instanceof Date || target instanceof FileList || target instanceof File
    const isPlainObject = typeof target === 'object' && target !== null && !Array.isArray(target) && !isNativeObject
    const shouldTraverse = comparator?.(value, path) ?? true

    if (isPlainObject && shouldTraverse) {
      const result: Record<string, any> = {}
      for (const key in target)
        result[key] = traverse(target[key], [...path, key])
      return result
    }

    const key = path[path.length - 1] as keyof T
    return callback(target as T[keyof T], key, path)
  }

  const result = {} as Record<string, any>
  for (const key in value)
    result[key] = traverse(value[key], [key])
  return result as DeepMap<T, V, ST>
}
