import { Component, VNode, InjectionKey, provide, ref, Ref, onMounted, ExtractPropTypes, watch, inject } from 'vue'
import { delay } from '@hairy/libcore'
import { renderInstance } from './render'

export interface CreateOverlayOptions {
  animation?: number
  setup?: () => void
}

export type OverlayMetaOptions = {
  /** 调取失败，更改 visible，且当 animation 结束后销毁 */
  reject: Function
  /** 调取成功，更改 visible，且当 animation 结束后销毁 */
  resolve: Function
  /** 销毁当前实例（立即，且调用失败） */
  vanish: Function
  /** vnode 当前包装层的 VNode */
  vnode: VNode
  /** visible 包装层属性，控制弹出层显示与隐藏 */
  visible: Ref<boolean>
}

export type ImperativeOverlay<Props, Result> = (options?: ExtractPropTypes<Props>) => Promise<Result>

interface CreateImperativeOverlay<P = any, R = any> {
  (component: Component, options?: CreateOverlayOptions): ImperativeOverlay<P, R>
}

/**
 * 创建命令式弹出层 Api
 * @param component 组件
 * @param options 弹出层配置
 * @returns 命令式弹出层
 */
export const createImperativeOverlay: CreateImperativeOverlay = (
  component: Component,
  options: CreateOverlayOptions = {}
) => {
  const { animation = 0 } = options

  const provideMeta = (options: Partial<OverlayMetaOptions> = {}) => {
    const visible = ref(false)

    onMounted(() => (visible.value = true))

    watch(visible, async () => {
      if (visible.value) return undefined
      if (animation > 0) await delay(animation)
      options.vanish?.()
    })
    // 关闭事件
    const reject = (result: any) => {
      options.reject?.(result)
      visible.value = false
    }

    // 确定事件
    const resolve = (result: any) => {
      options.resolve?.(result)
      visible.value = false
    }
    const vanish = () => {
      options.vanish?.()
      options.reject?.()
    }
    const result = { ...options, resolve, reject, vanish, visible } as OverlayMetaOptions
    provide(ImperativeOverlayKey, result)
  }

  const imperativeOverlay = (props: any) => {
    return new Promise<any>((resolve, reject) => {
      renderInstance(component, props, {
        setup: (vnode, vanish) => {
          provideMeta({ resolve, reject, vnode, vanish })
        }
      })
    })
  }

  return imperativeOverlay
}

export const ImperativeOverlayKey: InjectionKey<OverlayMetaOptions> = Symbol('__imperative_overlay_key')
/**
 * 获取弹出层元信息
 * @function reject 调取失败，更改 visible，且当 animation 结束后销毁
 * @function resolve 调取成功，更改 visible，且当 animation 结束后销毁
 * @function vanish 销毁当前实例（立即，且调用失败）
 * @field vnode 当前包装层的 VNode
 * @field visible 包装层属性，控制弹出层显示与隐藏
 * @returns
 */
export const useOverlayMeta = () => {
  return inject(ImperativeOverlayKey)!
}
