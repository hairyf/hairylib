import { useEffect } from 'react'

export const tryUseEffect: typeof useEffect = (effect, deps) => {
  try {
    useEffect(effect, deps)
  }
  catch {}
}
