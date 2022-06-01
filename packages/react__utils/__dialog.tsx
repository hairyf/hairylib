import mitt from 'mitt'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { When } from 'react-if'
import { awaitPromise } from './tools'
export interface RenderProps<T> {
  resolve: (value?: T) => void
  reject: (...args: any[]) => void
}

export type CallerResult<PropsSource> = Omit<PropsSource, 'visible'> & { content?: React.ReactNode }

export type RewriteComponent<PropsSource = {}, Props = {}, Result = any> = {
  (props?: Props & PropsSource): JSX.Element
  open: (props?: Props) => Promise<Result>
}

export type RewriteFunc<PropsSource> = <Props = {}, Result = any>(
  caller: (props: PropsSource & RenderProps<Result> & Props) => CallerResult<PropsSource>
) => RewriteComponent<PropsSource, Props, Result>

export type CreateRewriteFunc<P = any> = (Component) => RewriteFunc<P>

/**
 * 创建改写方法
 * @param Component 组件
 */
export const createRewrite: CreateRewriteFunc = (Component: any) => {
  return (caller) => {
    const _Component = (props) => {
      const resolve = props.onOk || (() => {})
      const reject = props.onCancel || (() => {})
      const basisProps = Object.assign({ resolve, reject }, props)
      const assignProps = { ...Object.assign(basisProps, caller(basisProps)) }
      Reflect.deleteProperty(assignProps, 'resolve')
      Reflect.deleteProperty(assignProps, 'reject')
      return <Component {...assignProps}>{assignProps.content}</Component>
    }
    _Component.open = (props) => renderInstance<any>(_Component, props)
    return _Component
  }
}

/**
 * 创建并渲染组件, 渲染 props 传入 resolve, reject
 * @param Component 组件
 * @param props 组件 Props
 * @returns Promise<T>
 */
export function renderInstance<T>(Component: any, props?: Record<string, any>) {
  const div = document.createElement('div')
  document.body.append(div)
  return new Promise<T>((_resolve, _reject) => {
    const RenderComponent = () => {
      const [visible, setVisible] = useState(false)
      const destroy = () => {
        setVisible(false)
        setTimeout(() => {
          ReactDOM.unmountComponentAtNode(div)
          div.parentNode?.removeChild(div)
        }, 500)
      }
      const resolve = (value) => {
        destroy()
        _resolve(value)
      }
      const reject = (value) => {
        destroy()
        _reject(value)
      }
      useEffect(() => setVisible(true), [])
      return <Component {...{ ...props, visible, resolve, reject }} />
    }
    ReactDOM.render(<RenderComponent />, div)
  })
}

/**
 * 创建持有者 Hooks, 使弹出层支持继承上下文 Context
 * @param RewriteComponent 改写的组件
 */
export function useContextHolder<Component extends RewriteComponent<any, any>>(
  RewriteComponent: Component
): [Component['open'], JSX.Element] {
  const { current: event } = useRef(mitt<{ resolve: any; reject: any; '*': any }>())
  const [props, setProps] = useState<any>()
  const [visible, setVisible] = useState(false)

  // 刷新（让组件重新渲染，避免缓存）
  const [refresh, setRefresh] = useState<boolean | Promise<boolean>>(false)

  // 销毁实例（重置缓存，事件发射器）
  const destroy = () => {
    setRefresh(awaitPromise(500, false))
    setVisible(false)
    setProps(undefined)
    event.off('*')
  }

  // 展开弹出层（渲染实例）
  const generate = () => {
    setRefresh(true)
    setTimeout(() => setVisible(true))
  }

  // 调用者，展开弹出层，监听返回值
  const api = (props) => {
    return new Promise((resolve, reject) => {
      setProps(props)
      generate()
      event.on('resolve', (value) => [resolve(value), destroy()])
      event.on('reject', () => [reject(), destroy()])
    })
  }

  // 持有者，也是组件本身，用于获取 Context
  const holder = (
    <When condition={refresh}>
      <RewriteComponent
        {...props}
        visible={visible}
        resolve={(value) => event.emit('resolve', value)}
        reject={() => event.emit('reject')}
      />
    </When>
  )
  return [api, holder]
}
