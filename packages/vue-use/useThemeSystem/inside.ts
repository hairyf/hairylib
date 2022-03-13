import { kebabCase, isObject, camelCase, set, get } from 'lodash'
import { MaybeRef } from '@vueuse/core'
import { unref, computed, reactive } from 'vue-demi'

export type DeepStringObject = { [key: string]: string | DeepStringObject }

export interface DeepConfigItem {
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

let transformKeys: string[] = []

/**
 * 将深层的对象转换为 css var 变量
 * @param theme 将要转换的对象
 * @param merge 内部合并参数
 */
export const transformTheme2CssVars = (target: DeepStringObject, merge?: Record<string, string>) => {
  const result: Record<string, string> = merge || {}
  for (const [key, value] of Object.entries(target)) {
    transformKeys.push(key)
    if (isObject(value)) {
      transformTheme2CssVars(value, result)
      transformKeys = []
    } else {
      const cssVarKey = kebabCase(
        transformKeys
          .map((v) => v[0].toUpperCase() + v.slice(1))
          .join('')
          .trim()
      )
      result[cssVarKey] = value
      transformKeys.splice(-1, 1)
    }
  }
  return result
}

/**
 * 生产对象的所有字段编辑列表
 *
 * 当编辑项值更改，映射字段到编辑对象
 *
 * @param source 数据源
 * @param overrides 覆盖源
 */
export const useOverridesEditor = (source: MaybeRef<object>, overrides: MaybeRef<any>) => {
  const deepConfig: Record<string, DeepConfigItem[]> = {}
  const generateComputed = (paths: string[]): DeepConfigItem => {
    return reactive({
      value: computed({
        get: (): string => get(unref(overrides), paths),
        set: (value) => {
          if (!value) {
            const slicePaths = paths.slice(0, -1)
            const source = get(unref(overrides), slicePaths)
            delete source[paths[paths.length - 1]]
          } else {
            set(unref(overrides), paths, value)
          }
        }
      }),
      paths,
      source: computed((): string => get(unref(source), paths)),
      name: camelCase(paths.join('-'))
    })
  }
  const getEditItemComputed = (option: object, upperPath: string) => {
    const array: DeepConfigItem[] = []
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
  for (const [k, v] of Object.entries(unref(source))) {
    deepConfig[k] = getEditItemComputed(<object>v, k)
  }
  return deepConfig
}
