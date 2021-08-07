import { App } from 'vue'
import * as directives from './directives'

const install = (app: App) => {
  for (const [key, value] of Object.entries(directives)) {
    if (!key.startsWith('v')) continue
    const directive = Object.entries(value)[0]
    app.directive(directive[0], directive[1])
  }
}

export default install
export { install }
