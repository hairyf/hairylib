export type Proxyed<T extends object> = T & { proxy: { update: (object?: T) => void, original: () => T | undefined } }
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
 * proxy.update({ name: 'Jane' })
 * console.log(obj.name) // Jane
 *
 * const obj2 = proxy()
 *
 * obj2.any // Error: Proxy not updated. Call object.proxy.update() to update the proxy.
 *
 * proxy.original(obj2) // undefined
 * obj2.update({ name: 'John' })
 *
 * // get the original object
 * proxy.original(obj2) // { name: 'John' }
 * ```
 */
export function proxy<T extends object>(initObject?: T): Proxyed<T> {
  initObject && Reflect.set(initObject, 'proxyUpdated', true)
  let target: any = initObject || { proxyUpdated: false }
  const proxy = new Proxy({} as Proxyed<T>, {
    get: (_, p) => {
      if (p === 'proxy')
        return { update, original }

      // if the proxy is not updated, throw an error
      if (!Reflect.get(target, 'proxyUpdated'))
        throw new Error(`Proxy not updated. Call object.proxy.update() to update the proxy.`)
      return typeof target?.[p] === 'function'
        ? target?.[p].bind(target)
        : target?.[p]
    },
    set: (_, p, v) => {
      target[p] = v
      return true
    },
  })
  function update(object?: T) {
    if (!object) {
      target = undefined
      return
    }
    Reflect.set(object, 'proxyUpdated', true)
    target = object
  }
  function original(): T | undefined {
    return Reflect.get(target, 'proxyUpdated') ? target : undefined
  }
  return proxy
}
