import { useRef } from 'react'

export const tryUseRef: typeof useRef = (initialValue?: any) => {
  try {
    return useRef(initialValue)
  }
  catch {
    // Fallback to a default ref if useRef fails
    return { current: initialValue }
  }
}
