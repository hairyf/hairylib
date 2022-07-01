import _isObject from 'lodash/isObject'
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

export const isFormData = (value: any): value is FormData => isObject(value) && isBrowser && value instanceof FormData

export const isWindow = (value: any): value is Window =>
  typeof window !== 'undefined' && toString.call(value) === '[object Window]'

export const isObject = (value: any): value is object => _isObject(value) && !Array.isArray(value)
