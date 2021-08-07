import { App } from 'vue-demi'
import { directiveSize, directiveUnit } from '../unit'

export const vsize = (app: App) => {
  app.directive('size', directiveSize())
}

export const vwidth = (app: App) => {
  app.directive('w', directiveUnit('width'))
}

export const vheight = (app: App) => {
  app.directive('h', directiveUnit('height'))
}

export const vMinWidth = (app: App) => {
  app.directive('min-w', directiveUnit('minWidth'))
}

export const vMinHeight = (app: App) => {
  app.directive('min-h', directiveUnit('minHeight'))
}

export const vMaxWidth = (app: App) => {
  app.directive('max-w', directiveUnit('maxWidth'))
}

export const vMaxHeight = (app: App) => {
  app.directive('max-h', directiveUnit('maxHeight'))
}
