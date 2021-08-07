import { analyUnit } from '@tuimao/utils'
import { App, Directive } from 'vue-demi'

export const vFont = (app: App) => {
  app.directive('font', <Directive<HTMLElement>>((el, { arg, value }) => {
    if (!arg?.length || arg.length > 1) {
      throw Error('font directive args > 2')
    }
    if (arg[0] === 'size') {
      el.style.fontSize = analyUnit(value || '')
    }
    if (arg[0] == 'weight') {
      el.style.fontWeight = analyUnit(value || '')
    }
  }))
}
