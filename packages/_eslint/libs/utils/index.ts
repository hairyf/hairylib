import { isArray } from 'lodash'

export const mergeCustomizer = (objectValue: any[], sourceValue: any[]) => {
  if (isArray(objectValue)) {
    return [...objectValue, ...sourceValue]
  }
}
