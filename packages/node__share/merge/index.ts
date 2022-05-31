import { isArray, mergeWith, merge as _merge } from 'lodash'

const mergeCustomizer = (objectValue: unknown[], sourceValue: unknown[]): undefined | unknown[] => {
  if (isArray(objectValue)) {
    return [...objectValue, ...sourceValue]
  }
}

/** 与 lodash 的 merge 不相同，array 也会因此合并 */
export const merge: typeof _merge = (a: any, b: any) => {
  return mergeWith(a, b, mergeCustomizer)
}
