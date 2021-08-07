import { analyUnit } from '@tuimao/utils'
import { Directive } from 'vue-demi'
import { directiveUnit } from '../unit'

export const vFont = {
  font: <Directive<HTMLElement>>((el, { arg, value }) => {
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
  })
}

export const vLeading = { leading: directiveUnit('lineHeight') }

export const vTracking = { tracking: directiveUnit('letterSpacing') }
