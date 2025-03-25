export function jsonTryParse(text: string | undefined | null) {
  try {
    return JSON.parse(text || '')
  }
  catch {
    return undefined
  }
}
