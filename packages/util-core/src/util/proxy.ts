export function proxy<T extends object>(initObject?: T) {
  initObject && Reflect.set(initObject, 'proxyUpdated', true)
  let target: any = initObject || { proxyUpdated: false }
  const proxy = new Proxy<any>({}, {
    get: (_, p) => {
      return typeof target?.[p] === 'function'
        ? target?.[p].bind(target)
        : target?.[p]
    },
    set: (_, p, v) => {
      target[p] = v
      return true
    },
  }) as T
  function update(object?: T) {
    if (!object) {
      target = undefined
      return
    }
    Reflect.set(object, 'proxyUpdated', true)
    target = object
  }
  return {
    proxy,
    update,
  }
}

proxy.resolve = <T extends object>(target: T): T | undefined => {
  return Reflect.get(target, 'proxyUpdated') ? target : undefined
}
