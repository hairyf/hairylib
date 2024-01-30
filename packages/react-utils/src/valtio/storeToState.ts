import { useSnapshot } from 'valtio'

export function storeToState<T extends object, K extends keyof T>(store: T, key: K) {
  const snapshot = useSnapshot(store)
  function get(): T[K] {
    return (snapshot as any)[key]
  }
  function set(value: T[K]) {
    store[key] = value
  }
  return [get(), set] as const
}
