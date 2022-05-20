import { MaybeElementRef, MaybeRef, unrefElement } from '@vueuse/core'
import { get, merge, set, toPath } from 'lodash-es'

import {
  computed,
  ComputedRef,
  inject,
  InjectionKey,
  provide,
  unref,
  readonly,
  DeepReadonly,
  ref,
  Ref,
  watch
} from 'vue-demi'
import { UnwrapNestedRefs } from '@vue/reactivity'
import { DeepPartial } from '@hairy/utils'
import { DeepConfigItem, DeepStringObject, transformTheme2CssVars, useOverridesEditor } from './inside'
interface CreateThemeResult<T, Overrides = DeepPartial<T>> {
  /**
   * 默认主题与上级注入主题合并
   *
   * 获取注入主题配置
   */
  injectTheme: () => ComputedRef<T>
  /**
   * 默认主题与注入主题合并
   *
   * 将主题配置注入
   */
  provideTheme: (themeOverrides?: Overrides | MaybeRef<Overrides>) => void
  /**
   * 挂载基于当前主题的 css 变量
   *
   * @param root 挂载的目标
   * @param target 目标路径, 例如 `'layout.slider' || ['layout', 'slider']`
   *
   * 不传则代表将所有配置转换
   */
  useThemeCssVariables: (root?: MaybeElementRef, target?: string | string[]) => ComputedRef<Record<string, string>>
  /**
   * 创建主题编辑器
   *
   */
  useThemeEditorConfig: () => {
    config: Record<string, DeepConfigItem[]>
    overrides: Ref<Overrides>
  }
  /**
   * 默认配置，即传入配置，只读项
   */
  defaultTheme: DeepReadonly<UnwrapNestedRefs<T>>
  /**
   * 注入 Key 值
   */
  __THEME_KEY__: InjectionKey<MaybeRef<T>>
}

/**
 * 创建主题系统
 * @param options 主题配置
 */
export const createThemeSystem = <T extends object>(options: T): CreateThemeResult<T> => {
  type Overrides = DeepPartial<T>
  const __THEME_KEY__: InjectionKey<MaybeRef<T>> = Symbol()

  const injectTheme = () => {
    return computed(() => merge(options, unref(inject(__THEME_KEY__))))
  }

  const provideTheme = (themeOverrides?: MaybeRef<Overrides> | Overrides) => {
    const theme = injectTheme()
    const themeMerge = computed(() => merge(unref(theme), unref(themeOverrides)))
    provide(__THEME_KEY__, themeMerge)
    return themeMerge
  }

  const useThemeCssVariables = (root = document.documentElement as any, target?: any) => {
    const theme = injectTheme()
    const cssVars = computed(() => {
      if (!target) return transformTheme2CssVars(theme.value as any)
      const paths = toPath(target)
      const objective: DeepStringObject = {}
      set(objective, paths, get(theme.value, paths))
      return transformTheme2CssVars(objective)
    })
    watch(
      cssVars,
      (value) => {
        const cssVars = transformTheme2CssVars(value)
        const element = unrefElement(root)
        if (!element) return undefined
        for (const [key, value] of Object.entries(cssVars)) {
          if (element.style.getPropertyPriority(`--${key}`) === value) continue
          element.style.removeProperty(`--${key}`)
          element.style.setProperty(`--${key}`, value)
        }
      },
      { deep: true, immediate: true }
    )
    return cssVars
  }

  const useThemeEditorConfig = () => {
    const theme = injectTheme()
    const overrides = ref<Overrides>({}) as any
    const config = useOverridesEditor(theme, overrides)
    return { config, overrides }
  }

  return {
    injectTheme,
    provideTheme,
    useThemeCssVariables,
    useThemeEditorConfig,
    defaultTheme: readonly(options),
    __THEME_KEY__
  }
}
