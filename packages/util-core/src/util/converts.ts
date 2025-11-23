import type { Numberish } from '../typings'

/**
 * formData to object
 * @param formData
 */
export function objectFromFormdata(formData: FormData) {
  return Object.fromEntries((formData as any).entries()) as Record<string, string>
}
/**
 * Object to formData
 * @param object
 */
export function formdataFromObject(object: Record<string, string | File>) {
  const formdata = new FormData()
  for (const [key, value] of Object.entries(object))
    formdata.set(key, value)
  return formdata
}

/**
 * Check if a value is not NaN.
 * @param value - The value to check.
 * @returns The value if it is not NaN, otherwise undefined.
 */
export function nonnanable<T>(value: T): T | undefined {
  return Number.isNaN(Number(value)) ? undefined : value
}

/**
 * Convert a value to a number.
 * @param value - The value to convert to a number.
 * @returns The number value.
 */
export function numberify(value: any) {
  return Number.isNaN(Number(value)) ? 0 : Number(value)
}

/**
 * Convert a value to a string.
 * @param value - The value to convert to a string.
 * @returns The string value.
 */
export function stringify(value: any) {
  return String(value)
}

/**
 * Convert a value to a numberish value.
 * @param value - The value to convert to a numberish value.
 * @returns The numberish value.
 */
export function numberish(value: Numberish) {
  if (value === undefined || value === null)
    return '0'
  if (Number.isNaN(Number(value)))
    return '0'
  return value.toString()
}
