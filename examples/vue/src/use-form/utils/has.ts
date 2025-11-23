/**
 * Check if path exists in object
 */
export function has(obj: Record<string, any>, path: string): boolean {
  const keys = path.split('.')
  let current: any = obj
  for (const key of keys) {
    if (current == null || typeof current !== 'object' || !(key in current)) {
      return false
    }
    current = current[key]
  }
  return true
}
