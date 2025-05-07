import { useInsertionEffect } from 'react'

export const tryUseInsertionEffect: typeof useInsertionEffect = (callback, deps) => {
  try {
    useInsertionEffect(callback, deps)
  }
  catch {}
}
