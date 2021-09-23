import { analyUnit } from '@hairy/core'
import { DirectiveElements, directiveUnit } from '../utils'

export const vFont: DirectiveElements = {
  font: (element, { arg, value }) => {
    if (!arg?.length || arg.length > 1) {
      throw new Error('font directive args > 2')
    }
    if (arg[0] === 'size') {
      if (Array.isArray(value)) {
        element.style.fontSize = analyUnit(value[0] || '')
        element.style.lineHeight = analyUnit(value[1] || '')
      } else {
        element.style.fontSize = analyUnit(value || '')
      }
    }
    if (arg[0] === 'weight') {
      element.style.fontWeight = analyUnit(value || '')
    }
  },
  leading: directiveUnit('lineHeight'),
  tracking: directiveUnit('letterSpacing')
}
