export function tryParseJson<T = any>(text: string | undefined | null): T | undefined {
  try {
    return JSON.parse(text || '')
  }
  catch {
    return undefined
  }
}
