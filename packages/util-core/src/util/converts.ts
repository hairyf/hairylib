/**
 * formData to object
 * @param formData
 */
export function formToObject(formData: FormData) {
  return Object.fromEntries((formData as any).entries()) as Record<string, string>
}
/**
 * Object to formData
 * @param object
 */
export function objectToForm(object: Record<string, string | File>) {
  const formData = new FormData()
  for (const [key, value] of Object.entries(object)) formData.append(key, value)
  return formData
}
