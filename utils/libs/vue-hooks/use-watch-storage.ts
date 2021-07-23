/*
 * @Author: Mr.Mao
 * @Date: 2021-07-23 09:16:55
 * @LastEditTime: 2021-07-23 09:41:51
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { useStorage, StorageLike } from '@vueuse/core'
import { computed, onUnmounted } from 'vue'
import { publish, subscribe, unsubscribe } from 'pubsub-js'

/**
 * 引入具有跨层级响应式缓存 Ref
 * @param key 缓存对应 key 值
 * @param defaultValue 缓存默认值
 */
export const useWatchStorage = <T = null>(key: string, defaultValue: T, options?: StorageLike) => {
  let compare = Symbol('_compare_')
  const source = useStorage(key, defaultValue, options || useWatchStorage.option)
  const target = computed({
    get: () => source.value,
    set: (value) => {
      compare = Symbol('_compare_')
      publish(`watch-store__${key}`, [compare, value])
      source.value = value
    }
  })
  const token = subscribe(`watch-store__${key}`, (_: string, value: [symbol,T]) => {
    if (value[0] === compare) return undefined
    compare = value[0]
    source.value = value[1]
  })
  onUnmounted(() => unsubscribe(token))
  return target
}
useWatchStorage.option = undefined as StorageLike | undefined

/**
 * 引入具有跨层级响应式缓存 Ref (localStorage)
 * @param key 缓存对应 key 值
 * @param defaultValue 缓存默认值
 */
export const useWatchLocalStorage = <T = null>(key: string, defaultValue: T) => {
  return useWatchStorage(key, defaultValue, window?.localStorage)
}

/**
 * 引入具有跨层级响应式缓存 Ref (sessionStorage)
 * @param key 缓存对应 key 值
 * @param defaultValue 缓存默认值
 */
 export const useWatchSessionStorage = <T = null>(key: string, defaultValue: T) => {
  return useWatchStorage(key, defaultValue, window?.sessionStorage)
}