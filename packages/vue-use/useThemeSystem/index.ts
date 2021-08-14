import { MaybeRef } from '@vueuse/core'
import { get, merge, PropertyPath, set, toPath } from 'lodash'
import { computed, ComputedRef, inject, InjectionKey, provide, unref } from 'vue-demi'
import { DeepPartial } from '@tuimao/core'
import { DeepStringObject, transformTheme2CssVariables } from './inside'

interface CreateThemeResult<T, Overrides = MaybeRef<DeepPartial<T>>> {
  /**
   * 默认主题与上级注入主题合并
   *
   * 获取注入主题配置
   */
  useInjectTheme: () => ComputedRef<T>
  /**
   * 默认主题与注入主题合并
   *
   * 将主题配置注入
   */
  useProvideTheme: (themeOverrides?: Overrides) => ComputedRef<T>
  /**
   * 获取基于当前主题的 css 变量
   *
   * @param target 目标路径, 例如 `'layout.slider' || ['layout', 'slider']`
   *
   * 不传则代表将所有配置转换
   */
  useTransformTheme: (target?: PropertyPath) => ComputedRef<Record<string, string>>
}

/**
 * 创建主题系统
 * @param options 主题配置
 */
export const createThemeSystem = <T extends object>(options: T): CreateThemeResult<T> => {
  type Overrides = MaybeRef<DeepPartial<T>>
  const __THEME_KEY__: InjectionKey<MaybeRef<T>> = Symbol()

  const useInjectTheme = () => {
    return computed(() => merge(options, unref(inject(__THEME_KEY__))))
  }

  const useProvideTheme = (themeOverrides?: Overrides) => {
    const theme = useInjectTheme()
    const themeMerge = computed(() => merge(unref(theme), unref(themeOverrides)))
    provide(__THEME_KEY__, themeMerge)
    return themeMerge
  }

  const useTransformTheme = (target?: PropertyPath) => {
    const paths = toPath(target)
    const theme = useInjectTheme()
    return computed(() => {
      const objective: DeepStringObject = {}
      set(objective, paths, get(theme.value, paths))
      const transformTarget = target ? objective : theme.value
      return transformTheme2CssVariables(<any>transformTarget)
    })
  }

  return { useInjectTheme, useProvideTheme, useTransformTheme }
}
