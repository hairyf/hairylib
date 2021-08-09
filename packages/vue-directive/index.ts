import { objectFlat } from '@tuimao/core'
import { App } from 'vue'
import { Directive } from 'vue-demi'
import { pickBy } from 'lodash'
import * as imports from './imports'
import { defineDirectiveConfig, DirectiveConfig } from './utils'

export const directives: Record<string, Directive<any>> = objectFlat(
  pickBy(imports, (_, key) => key.startsWith('v'))
)

export const install = (app: App, options: DirectiveConfig) => {
  for (const [_k, _d] of Object.entries(directives)) {
    app.directive(_k, _d)
  }
  defineDirectiveConfig(options)
}

export default install
export * from './imports'
