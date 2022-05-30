/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-02-09 10:56:30
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-02-26 13:47:57
 */

import { defineComponent, inject, InjectionKey, provide, h, Fragment } from 'vue'

/**
 * 创建上下文
 * @param key 控制器的 key
 * @param callback 控制器注入的内容
 * @returns
 */
export const createContext = <T>(key: string, callback: () => T) => {
  const _key: InjectionKey<T> = Symbol(key)

  const _provide = () => {
    const controller = callback()
    provide(_key, controller)
    return controller
  }

  const _inject = () => {
    const controller = inject(_key)
    if (!controller) {
      throw new Error(`Please wrap the container in ${_key}`)
    }
    return controller
  }

  const Provider = defineComponent({
    setup: (_, { slots }) => {
      return () => h(Fragment, slots['default']?.())
    }
  })

  return {
    key: _key,
    provide: _provide,
    inject: _inject,
    Provider
  }
}
