import type { FunctionalComponent } from 'vue'
import { h, render } from 'vue'

/**
 * 直接渲染传入的组件（function component）
 * @param component
 * @returns 渲染的容器（默认 div）
 */
export function ehr<K extends keyof HTMLElementTagNameMap = 'div'>(component: FunctionalComponent, tag?: K) {
  const container = document.createElement((tag || 'dev') as K)
  render(h(component), container)
  return container
}
