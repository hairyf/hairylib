/* eslint-disable unused-imports/no-unused-vars */
export type InjectionKey<T> = string | symbol

const injectMap = new Map<InjectionKey<any>, any>()

export function inject<T>(key: InjectionKey<T>): T | undefined {
  const value = injectMap.get(key)
  if (value === undefined) {
    return undefined
  }
  return value as T
}

export function provide<T>(key: InjectionKey<T>, value: T): void {
  injectMap.set(key, value)
}
