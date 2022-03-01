/*
 * @Author: Mr.Mao
 * @Date: 2021-07-14 16:09:31
 * @LastEditTime: 2022-01-10 18:30:39
 * @Description:
 * @LastEditors: Mr'Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { awaitPromise } from '@hairy/utils'
import { Component, h, render, defineComponent, VNode, InjectionKey, provide, ref, Ref, onMounted, ExtractPropTypes, watch, inject } from 'vue-demi'

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

export const ImperativeOverlayKey: InjectionKey<OverlayMetaOptions> = Symbol('__imperative_overlay_key')

/**
 * 渲染组件实例
 * @param Constructor 组件
 * @param props 组件参数
 * @param setup 包装层
 * @returns 组件实例
 */
export const renderInstance = <T = Component>(Constructor: T, props: Record<string, any>, setup?: (vnode: VNode, vanish: Function) => void) => {
  // 组件消失时, 移除当前实例
  // 这里不需要调用 document.body.removeChild(container.firstElementChild)
  // 因为调用 render(null, container) 为我们完成了这项工作
  const vanish = () => {
    render(null, container)
  }

  // 创建高阶组件, 注入销毁方法与组件
  const Component = defineComponent({
    setup: () => {
      setup?.(vnode, vanish)
    },
    render() {
      return h(Constructor, props)
    }
  })

  // 创建虚拟节点, 渲染组件
  const container = document.createElement('div')
  const vnode = h(Component, props)
  render(vnode, container)

  // append document.body
  if (container.firstElementChild) {
    document.body.append(container.firstElementChild)
  }

  return { vanish, vnode }
}

/**
 * 创建命令式弹出层 Api
 * @param component 组件
 * @param options 弹出层配置
 * @returns 命令式弹出层
 */
export const createImperativeOverlay = <Props = any, Result = any>(
  component: Component,
  options: CreateOverlayOptions = {}
): ImperativeOverlay<Props, Result> => {
  const { animation = 0 } = options

  const provideMeta = (options: Partial<OverlayMetaOptions> = {}) => {
    const visible = ref(false)

    onMounted(() => (visible.value = true))

    watch(visible, async () => {
      if (visible.value) return undefined
      if (animation > 0) await awaitPromise(animation)
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
      renderInstance(component, props, (vnode, vanish) => {
        provideMeta({ resolve, reject, vnode, vanish })
      })
    })
  }

  return imperativeOverlay
}

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
