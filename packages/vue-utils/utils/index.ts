/*
 * @Author: Mr.Mao
 * @Date: 2021-07-14 16:09:31
 * @LastEditTime: 2021-12-17 19:00:16
 * @Description:
 * @LastEditors: Mr'Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { Component, h, render, defineComponent, inject } from 'vue-demi'

/**
 * 渲染组件实例
 * @param Constructor 组件
 * @param props 组件参数
 * @returns 组件实例
 */
export const renderInstance = <T = Component>(Constructor: T, props: Record<string, any>) => {
  // 组件消失时, 移除当前实例
  // 这里不需要调用 document.body.removeChild(container.firstElementChild)
  // 因为调用 render(null, container) 为我们完成了这项工作
  const vanish = () => {
    render(null, container)
  }

  // 创建高阶组件, 注入销毁方法与组件
  const Component = defineComponent({
    setup: () => {
      inject('vanish', vanish)
      inject('vnode', vnode)
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

  return vnode.component
}

/**
 * 渲染模态组件实例
 * @param Constructor 组件
 * @param props 组件参数
 * @todo 待实现
 * @returns 组件实例
 */
