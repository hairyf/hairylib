import { computed, getCurrentInstance } from 'vue'

/*
 * @Author: Mr.Mao
 * @Date: 2021-05-23 16:19:40
 * @LastEditTime: 2021-06-28 16:24:10
 * @Description: 双向 v-model 绑定
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
export const useModelRef = <T, K extends keyof T>(props: T, key: K) => {
  const currentInstance = getCurrentInstance()
  return computed({
    get: () => props[key],
    set: (value) => currentInstance?.emit(`update:${key}`, value)
  })
}
