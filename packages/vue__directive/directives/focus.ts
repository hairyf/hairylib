import { Directive } from 'vue'

export const vFocus: Directive<HTMLElement, any> = (element) => {
  if (element.tagName === 'input') element.focus()
  else element.querySelector('input')?.focus()
}
