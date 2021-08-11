import { DirectiveElements, directiveOptions } from '../utils'
export const vUtils: DirectiveElements = {
  focus: (el) => {
    if (el.tagName === 'input') el.focus()
    else el.querySelector('input')?.focus()
  },
  has: (el, { value }) => {
    const { permissions } = directiveOptions
    if (value && permissions.includes(value)) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}
