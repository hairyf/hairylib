import { MaybeRef } from '@vueuse/core'
import { camelCase, get, set } from 'lodash'
import { computed, reactive, unref } from 'vue'
import { DeepStringObject } from './inside'

interface DeepThemeConfigItem {
  /**
   * 字段名称，以 - 分割
   * @example { Sidebar: { color: '#001426' } } > "sidebar-color"
   */
  name: string
  /**
   * 字段路径
   * @example { Sidebar: { color: '#001426' } } > ["Sidebar", "color"]
   */
  paths: string[]
  /**
   * 数据源，根据路径获取的值
   */
  source: string
  /**
   * 可编辑的值，更改后 themeOverrides 将发生变化
   */
  value: string
}

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
  const generateComputed = (paths: string[]): DeepThemeConfigItem => {
    return reactive({
      value: computed({
        get: (): string => get(unref(themeOverrides), paths),
        set: (value) => {
          if (!value) {
            const slicePaths = paths.slice(0, -1)
            const source = get(unref(themeOverrides), slicePaths)
            delete source[paths[paths.length - 1]]
          } else {
            set(unref(themeOverrides), paths, value)
          }
        }
      }),
      paths,
      source: computed((): string => get(unref(theme), paths)),
      name: camelCase(paths.join('-'))
    })
  }
  const getThemeComputed = (option: object, upperPath: string) => {
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
    deepThemeConfig[k] = getThemeComputed(<object>v, k)
  }
  return deepThemeConfig
}
