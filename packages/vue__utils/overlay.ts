import {
  Component,
  VNode,
  InjectionKey,
  provide,
  ref,
  Ref,
  onMounted,
  ExtractPropTypes,
  watch,
  inject,
  defineComponent,
  h
} from 'vue'
import { delay } from '@hairy/libcore'
import { renderInstance } from './render'

export interface ImperativeOverlayOptions {
  animation?: number
  setup?: () => void
}
export type ExtractInferTypes<Props> = Props extends ExtractPropTypes<infer E> ? E : ExtractPropTypes<Props>
export type ImperativeOverlay<Props, Result> = (props?: ExtractInferTypes<Props>) => Promise<Result>

/**
 * 创建命令式弹出层 Api
 * @param component 组件
 * @param options 弹出层配置
 * @returns 命令式弹出层
 */
export const createImperativeOverlay = <P = any, R = void>(
  component: Component,
  options: ImperativeOverlayOptions = {}
): ImperativeOverlay<P, R> => {
  const { animation = 0 } = options

  const useOverlayVisible = (_vanish: Function) => {
    const visible = ref(false)
    watch(visible, async () => {
      if (visible.value) return undefined
      if (animation > 0) await delay(animation)
      _vanish?.()
    })
    onMounted(() => (visible.value = true))
    return visible
  }

  const executor = (props: any, _resolve: Function, _reject: Function) => {
    const Provider = defineComponent({
      setup: () => {
        const visible = useOverlayVisible(vanish)
        function reject(value: any) {
          _reject?.(value)
          visible.value = false
        }
        function resolve(value: any) {
          _resolve?.(value)
          visible.value = false
        }
        function vanish() {
          _vanish?.()
          _reject?.()
        }
        provide(ImperativeOverlayKey, { reject, resolve, vanish, visible, vnode })
      },
      render() {
        return h(component as any, props)
      }
    })
    const { vanish: _vanish, vnode } = renderInstance(Provider)
  }

  const caller = (props: any) =>
    new Promise<any>((_resolve, _reject) => {
      executor(props, _resolve, _reject)
    })

  return caller
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
