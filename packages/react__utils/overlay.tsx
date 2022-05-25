import React, { useState, useEffect, createContext, useContext } from 'react'
import { delay } from '@hairy/libcore'
import { renderInstance } from './render'
export interface ImperativeOverlayOptions {
  animation?: number
}

export type ImperativeOverlay<Props, Result> = (props?: Props) => Promise<Result>

/**
 * 创建命令式弹出层 Api
 * @param Component 组件
 * @param options 弹出层配置
 * @returns 命令式弹出层
 */
export function createImperativeOverlay<P = any, R = void>(
  Component?: any,
  options: ImperativeOverlayOptions = {}
): ImperativeOverlay<P, R> {
  const { animation = 0 } = options

  const useOverlayVisible = (_vanish: Function) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      if (!visible && animation > 0) {
        delay(animation).then(() => _vanish?.())
      }
    }, [visible])

    useEffect(() => setVisible(true), [])
    return [visible, setVisible] as const
  }

  const executor = (props: any, _resolve: Function, _reject: Function) => {
    const Provider = (props: React.PropsWithChildren<{}>) => {
      const [visible, setVisible] = useOverlayVisible(vanish)
      function reject(value: any) {
        _reject?.(value)
        setVisible(false)
      }
      function resolve(value: any) {
        _resolve?.(value)
        setVisible(false)
      }
      function vanish() {
        _vanish?.()
        _reject?.()
      }

      return (
        // @ts-ignore
        <ImperativeOverlayContext.Provider
          // @ts-ignore
          // eslint-disable-next-line react/no-children-prop
          children={<Component {...(props as any)} />}
          value={{ reject, resolve, vanish, visible }}
        />
      )
    }
    const { vanish: _vanish } = renderInstance(Provider)
  }

  const caller = (props: any) =>
    new Promise<any>((_resolve, _reject) => {
      executor(props, _resolve, _reject)
    })

  return caller
}

const ImperativeOverlayContext = createContext<OverlayMetaOptions | undefined>(undefined)

export type OverlayMetaOptions = {
  /** 调取失败，更改 visible，且当 animation 结束后销毁 */
  reject: Function
  /** 调取成功，更改 visible，且当 animation 结束后销毁 */
  resolve: Function
  /** 销毁当前实例（立即，且调用失败） */
  vanish: Function
  /** visible 包装层属性，控制弹出层显示与隐藏 */
  visible: React.SetStateAction<boolean>
}

/**
 * 获取弹出层元信息
 * @function reject 调取失败，更改 visible，且当 animation 结束后销毁
 * @function resolve 调取成功，更改 visible，且当 animation 结束后销毁
 * @function vanish 销毁当前实例（立即，且调用失败）
 * @field vnode 当前包装层的 VNode
 * @returns
 */
export const useOverlayMeta = () => {
  return useContext(ImperativeOverlayContext)!
}
