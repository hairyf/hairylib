import { MaybeRef } from '@vueuse/core'
import { camelCase, get, set } from 'lodash'
import { computed, reactive, unref } from 'vue'
import { DeepStringObject } from './inside'

type DeepThemeConfigItem = { target: string[]; value: string; name: string; placeholder: string }

/**
 * 创建主题编辑器
 * @param theme 编辑主题
 * @param themeOverrides 编辑数据
 * @returns 编辑列表
 */
export const useProvideThemeEditor = (
  theme: MaybeRef<DeepStringObject>,
  themeOverrides: MaybeRef<any>
) => {
  const deepThemeConfig: Record<string, DeepThemeConfigItem[]> = {}
  const generateComputed = (target: string[]): DeepThemeConfigItem => {
    return reactive({
      value: computed({
        get: (): string => get(unref(themeOverrides), target),
        set: (value) => {
          if (!value) {
            const sliceTarget = target.slice(0, -1)
            const source = get(unref(themeOverrides), sliceTarget)
            delete source[target[target.length - 1]]
          } else {
            set(unref(themeOverrides), target, value)
          }
        }
      }),
      placeholder: computed((): string => get(unref(theme), target)),
      name: camelCase(target.join('-')),
      target
    })
  }
  const getThemeComputeds = (option: object, upperPath: string) => {
    const array: DeepThemeConfigItem[] = []
    let pathMaps: string[] = [upperPath]
    const deep = (option: object) => {
      for (const [k, v] of Object.entries(option)) {
        pathMaps.push(k)
        if (typeof v === 'object') {
          deep(v)
        } else {
          array.push(generateComputed([...pathMaps]))
        }
        pathMaps = pathMaps.slice(0, pathMaps.indexOf(k))
      }
    }
    deep(option)
    return array
  }
  for (const [k, v] of Object.entries(unref(theme))) {
    deepThemeConfig[k] = getThemeComputeds(<object>v, k)
  }
  return deepThemeConfig
}
