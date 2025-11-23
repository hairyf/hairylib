/**
 * Get nested value from object by path string
 */
export function get<Values extends Record<string, any>>(
  obj: Values,
  path: string,
): any {
  const keys = path.split('.')
  let result: any = obj
  for (const key of keys) {
    if (result == null) {
      return undefined
    }
    result = result[key]
  }
  return result
}
