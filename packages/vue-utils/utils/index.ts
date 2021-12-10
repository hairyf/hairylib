/*
 * @Author: Mr.Mao
 * @Date: 2021-07-14 16:09:31
 * @LastEditTime: 2021-07-14 16:09:42
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { Component, h, render } from 'vue-demi'

/**
 * 渲染组件实例
 * @param Constructor 组件
 * @param props 组件参数
 * @returns 组件实例
 */
export const renderInstance = <T = Component>(Constructor: T, props: Record<string, any>) => {
  // 组件消失时, 移除当前实例
  props.onVanish = () => {
    render(null, container)
    container.firstElementChild?.remove()
  }
  // 创建虚拟节点, 渲染组件
  const container = document.createElement('div')
  const vnode = h(Constructor, props)
  render(vnode, container)
  if (container.firstElementChild) {
    document.body.append(container.firstElementChild)
  }
  // 这里不需要调用 document.body.removeChild(container.firstElementChild)
  // 因为调用 render(null, container) 为我们完成了这项工作
  return vnode.component
}
