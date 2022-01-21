import { App } from 'vue'
import { vFocus } from './directives/focus'
import { vHas } from './directives/has'
import { defineDirectiveConfig, DirectiveConfig } from './utils'

export const install = (app: App, options: DirectiveConfig) => {
  app.directive('focus', vFocus)
  app.directive('has', vHas)
  defineDirectiveConfig(options)
}

export { vFocus, vHas }

export default install
