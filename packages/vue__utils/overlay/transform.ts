import { Component, provide, ref, ExtractPropTypes, defineComponent, h } from 'vue'
import { renderInstance } from '../render'
import { OverlayMetaKey } from './meta'

export type ExtractInferTypes<Props> = Props extends ExtractPropTypes<infer E> ? E : ExtractPropTypes<Props>
export type ImperativeOverlay<Props, Result> = (props?: ExtractInferTypes<Props>) => Promise<Result>

/**
 * 转换命令式弹出层 Api
 * @param component 组件
 * @param options 弹出层配置
 * @returns 命令式弹出层
 */
export const transformImperativeOverlay = <P = any, R = void>(component: Component): ImperativeOverlay<P, R> => {
  const executor = (props: any, _resolve: Function, _reject: Function) => {
    const Provider = defineComponent({
      setup: () => {
        const visible = ref(false)
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
        provide(OverlayMetaKey, { reject, resolve, vanish, visible, vnode })
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

/**
 * 转换声明式弹出层（组件）
 * @todo 未实现
 * @param component
 */
export const transformDeclarativeOverlay = <P = any>(component: P) => component
