import { proxy } from './proxy'

export type Ghost<T extends object> = T & {
  enabled: boolean
  resolve: (value: T) => void
}

export function ghost<T extends object>(strictMessage?: string): Ghost<T> {
  const placeholder = proxy<Ghost<T>>(
    undefined,
    { enable: false, resolve: (value: T) => placeholder.proxy.update(value as any) },
    { strictMessage: strictMessage || 'Object is not enabled. Call ghost.resolve(value) to enable the object.' },
  )
  return placeholder
}
