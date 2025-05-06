import { useCallback } from 'react'

export const tryUseCallback: typeof useCallback = (callback, deps) => {
  try {
    return useCallback(callback, deps)
  }
  catch {
    return callback
  }
}
