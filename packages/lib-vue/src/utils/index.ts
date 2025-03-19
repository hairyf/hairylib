import type { FunctionalComponent } from 'vue-demi'
import { computed, h, render } from 'vue-demi'

/**
 * Directly render the incoming function components
 * @param component
 * @param tag Rendering container (default div)
 */
export function ehr<K extends keyof HTMLElementTagNameMap = 'div'>(component: FunctionalComponent, tag?: K) {
  const container = document.createElement((tag || 'dev') as K)
  render(h(component), container)
  return container
}

/**
 * Convert the properties of an object to ref
 * @param data
 * @param prop
 */
export function propertyToRef<T>(data: T, prop: keyof T) {
  return computed({
    get() { return data[prop] },
    set(v) { data[prop] = v },
  })
}
