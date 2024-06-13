/* eslint-disable max-statements-per-line */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSnapshot } from 'valtio'

export type StoreToStates<S> = {
  [K in keyof S]: [S[K], (value: S[K]) => void]
}

export function storeToStates<S extends object>(store: S): StoreToStates<S> {
  const snapshot = useSnapshot(store) as any
  const states = {} as StoreToStates<S>

  function toState(key: string) {
    const get = () => snapshot[key]
    // @ts-expect-error
    const set = (value: any) => { store[key] = value }
    return [get(), set] as const
  }
  for (const key of Object.keys(snapshot))
    // @ts-expect-error
    states[key] = toState(key)

  return states
}
