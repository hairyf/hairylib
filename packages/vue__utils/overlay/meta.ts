import { VNode, InjectionKey, Ref, onMounted, watch, inject } from 'vue'
import { delay } from '@hairy/libcore'

export interface OverlayMeta {
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

export const OverlayMetaKey: InjectionKey<OverlayMeta> = Symbol('__imperative_overlay_key')

export interface UseOverlayMetaOptions {
  animation?: number
  immediate?: boolean
}

/**
 * 获取弹出层元信息
 * @function reject 调取失败，更改 visible，且当 animation 结束后销毁
 * @function resolve 调取成功，更改 visible，且当 animation 结束后销毁
 * @function vanish 销毁当前实例（立即调用，且会调用失败）
 * @field vnode 当前包装层的 VNode
 * @field visible 包装层属性，控制弹出层显示与隐藏
 * @returns
 */
export const useOverlayMeta = (options: UseOverlayMetaOptions = {}) => {
  const { animation = 0, immediate = true } = options
  const meta = inject(OverlayMetaKey)!

  watch(meta.visible, async () => {
    if (meta.visible.value) return undefined
    if (animation > 0) await delay(animation)
    meta.vanish?.()
  })

  if (immediate) onMounted(() => (meta.visible.value = true))

  return meta
}
