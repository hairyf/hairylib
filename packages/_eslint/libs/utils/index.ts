import { isArray } from 'lodash'

export const mergeCustomizer = (
  objectValue: unknown[],
  sourceValue: unknown[]
): undefined | unknown[] => {
  if (isArray(objectValue)) {
    return [...objectValue, ...sourceValue]
  }
}
