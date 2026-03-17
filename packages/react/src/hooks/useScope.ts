import type { Scope } from './defineScope'
import { useContext } from 'react'

export function useScope<T>(scope: Scope<T>) {
  const value = useContext(scope.Context)
  if (!value)
    throw new Error('Scope not found')
  return value
}
