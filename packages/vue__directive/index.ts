import { vFocus } from './directives/focus'
import { vHas } from './directives/has'
import { defineDirectiveConfig, DirectiveConfig } from './config'

export const install = (app: any, options: DirectiveConfig) => {
  app.directive('focus', vFocus)
  app.directive('has', vHas)
  defineDirectiveConfig(options)
}

export { vFocus, vHas }

export { defineDirectiveConfig }

export default install
