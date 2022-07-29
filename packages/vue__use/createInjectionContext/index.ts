/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-02-09 10:56:30
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-02-26 13:47:57
 */

import { inject, InjectionKey, provide } from 'vue'

/**
 * 创建上下文
 * @param key 控制器的 key
 * @param callback 控制器注入的内容
 * @returns
 */
export function createInjectionContext<Arguments extends Array<any>, Return>(
  key: string,
  callback: (...args: Arguments) => Return
) {
  const _key: InjectionKey<Return> = Symbol(key)

  const _provide = (...args: Arguments) => {
    const controller = callback(...args)
    provide(_key, controller)
    return controller
  }

  const _inject = (defaultValue?: Return) => {
    const controller = inject(_key, defaultValue)
    if (!controller) {
      throw new Error(`Please wrap the container in ${_key}`)
    }
    return controller
  }

  return {
    key: _key,
    provide: _provide,
    inject: _inject
  }
}
