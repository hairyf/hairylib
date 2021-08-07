import { App } from 'vue'
import { Directive } from 'vue-demi'
import * as _directives from './directives'

const directives: Record<string, Directive<any>> = {}
for (const [key, value] of Object.entries(_directives)) {
  if (!key.startsWith('v')) continue
  const directive = Object.entries(value)[0]
  directives[directive[0]] = directive[1]
}

const install = (app: App) => {
  for (const [_k, _d] of Object.entries(directives)) {
    app.directive(_k, _d)
  }
}

export default install
export { install, directives }
