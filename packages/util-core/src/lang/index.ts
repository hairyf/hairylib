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
