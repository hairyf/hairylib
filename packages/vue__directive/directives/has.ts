import isArray from 'lodash/isArray'
import { Directive } from 'vue'
import { directiveOptions } from '../config'

export const vHas: Directive<HTMLElement, any> = (element, { value }: { value: string[] }) => {
  if (!isArray(value)) {
    throw new TypeError(`v-has value: ${value} is not Array.`)
  }
  const through = value.some((string_) => directiveOptions.permissions.includes(string_))
  if (!through) element.parentNode && element.remove()
}
