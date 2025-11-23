import type { DeepMap } from '../types'
import { isBrowser } from '@hairy/utils'

export interface DeepMapFn<T extends object, V> {
  (value: T[keyof T], key: keyof T, paths: string[]): V
}

export function deepMap<T extends object, V>(value: T, callback: DeepMapFn<T, V>): DeepMap<T, V> {
  function traverse(target: any, path: string[] = []): any {
    const isNativeObject = target instanceof Date || (isBrowser() && (target instanceof FileList || target instanceof File))
    const isPlainObject = typeof target === 'object' && target !== null && !Array.isArray(target) && !isNativeObject
    const isFieldState = target?.invalid !== undefined

    if (isPlainObject && !isFieldState) {
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
  return result as DeepMap<T, V>
}
