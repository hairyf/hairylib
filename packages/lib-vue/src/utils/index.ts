import type { FunctionalComponent } from 'vue-demi'
import { computed, h, render } from 'vue-demi'

/**
 * 直接渲染传入的组件（function component）
 * @param component
 * @param tag 渲染的容器（默认 div）
 */
export function ehr<K extends keyof HTMLElementTagNameMap = 'div'>(component: FunctionalComponent, tag?: K) {
  const container = document.createElement((tag || 'dev') as K)
  render(h(component), container)
  return container
}

/**
 * 将对象的属性转换为 ref
 * @param data
 * @param prop
 * @returns
 */
export function propertyToRef<T>(data: T, prop: keyof T) {
  return computed({
    get() { return data[prop] },
    set(v) { data[prop] = v },
  })
}
