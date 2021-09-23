import { DirectiveElements, directiveOptions } from '../utils'
export const vUtils: DirectiveElements = {
  focus: (element) => {
    if (element.tagName === 'input') element.focus()
    else element.querySelector('input')?.focus()
  },
  has: (element, { value }) => {
    const { permissions } = directiveOptions
    if (value && permissions.includes(value)) {
      element.parentNode && element.remove()
    }
  }
}
