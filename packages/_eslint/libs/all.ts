import { concat, merge } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { uni } from './configs/uni'
import { vueBasic, vue3 } from './configs/vue'

export = merge(basic, typescript, vueBasic, vue3, uni, {
  extends: concat(basic.extends, typescript.extends, vueBasic.extends, vue3.extends)
})
