import _isObject from 'lodash/isObject'
import { isBrowser } from '../is'

/**
 * 将 formData 转换为 object
 * @param formData
 */
export function formDataToObject(formData: FormData) {
  return Object.fromEntries((formData as any).entries()) as Record<string, string>
}
/**
 * 将 object 转换为 formData
 * @param object
 */
export function objectToFormData(object: Record<string, string | File>) {
  const formData = new FormData()
  for (const [key, value] of Object.entries(object)) formData.append(key, value)
  return formData
}

export function isFormData(value: any): value is FormData {
  return isObject(value) && isBrowser && value instanceof FormData
}

export function isWindow(value: any): value is Window {
  return typeof window !== 'undefined' && toString.call(value) === '[object Window]'
}

export function isObject(value: any): value is object {
  return _isObject(value) && !Array.isArray(value)
}
