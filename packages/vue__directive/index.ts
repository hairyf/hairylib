import { vFocus } from './directives/focus'
import { vHas } from './directives/has'
import { defineHasConfig, DirectiveConfig } from './config'

export const install = (app: any, options: DirectiveConfig) => {
  app.directive('focus', vFocus)
  app.directive('has', vHas)
  defineHasConfig(options)
}

export { vFocus, vHas }

export { defineHasConfig }

export default install
