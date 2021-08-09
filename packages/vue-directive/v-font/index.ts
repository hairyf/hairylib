import { analyUnit } from '@tuimao/core'
import { DirectiveElements, directiveUnit } from '../utils'

export const vFont: DirectiveElements = {
  font: (el, { arg, value }) => {
    if (!arg?.length || arg.length > 1) {
      throw Error('font directive args > 2')
    }
    if (arg[0] === 'size') {
      if (Array.isArray(value)) {
        el.style.fontSize = analyUnit(value[0] || '')
        el.style.lineHeight = analyUnit(value[1] || '')
      } else {
        el.style.fontSize = analyUnit(value || '')
      }
    }
    if (arg[0] === 'weight') {
      el.style.fontWeight = analyUnit(value || '')
    }
  },
  leading: directiveUnit('lineHeight'),
  tracking: directiveUnit('letterSpacing')
}
