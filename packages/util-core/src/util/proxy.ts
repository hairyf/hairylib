/* eslint-disable ts/no-empty-object-type */
export type Proxyed<T extends object, E extends object = {}> = T & { proxy: { update: (object?: T) => void, source: T | undefined } } & E
/**
 * Creates a proxy object that updates the original object when the proxy is updated.
 * @param initObject - The initial object to proxy.
 * @returns The proxy object.
 *
 * @example
 * ```ts
 * const obj = proxy({ name: 'John' })
 * console.log(obj.name) // John
 *
 * obj.proxy.update({ name: 'Jane' })
 * console.log(obj.name) // Jane
 *
 * const obj2 = proxy()
 *
 * obj2.any // Error: Proxy not updated. Call object.proxy.update() to update the proxy.
 *
 * obj2.proxy.source // undefined
 * obj2.update({ name: 'John' })
 *
 * // get the original object
 * obj2.proxy.source // { name: 'John' }
 * ```
 */
export function proxy<T extends object, E extends object = {}>(
  initObject?: T,
  initExtend?: E,
  options?: { strictMessage?: string },
): Proxyed<T, E> {
  initObject && Reflect.set(initObject, '__proxy_updated', true)
  let target: any = initObject || { __proxy_updated: false }
  const extended = initExtend || ({} as E)
  const proxy = {
    update(object?: T) {
      if (!object) {
        target = undefined
        return
      }
      Reflect.set(object, '__proxy_updated', true)
      target = object
    },
    get source() {
      return Reflect.get(target, '__proxy_updated')
        ? target
        : undefined
    },
    strictMessage: options?.strictMessage || 'Proxy not updated. Call object.proxy.update() to update the proxy.',
  }
  const proxyed = new Proxy({} as Proxyed<T, E>, {
    get: (_, p) => {
      if (p === 'proxy')
        return proxy

      if (p in extended)
        return Reflect.get(extended, p)

      // if the proxy is not updated, throw an error
      if (!Reflect.get(target, '__proxy_updated'))
        throw new Error(proxy.strictMessage)

      return typeof target?.[p] === 'function'
        ? target?.[p].bind(target)
        : target?.[p]
    },
    set: (_, p, v) => {
      if (p in extended)
        return Reflect.set(extended, p, v)
      target[p] = v
      return true
    },
  })
  return proxyed
}
