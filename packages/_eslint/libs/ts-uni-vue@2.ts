import { concat, merge } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { uni } from './configs/uni'
import { vueBasic, vue2 } from './configs/vue'

export = merge(basic, typescript, vueBasic, vue2, uni, {
  extends: concat(basic.extends, typescript.extends, vueBasic.extends, vue2.extends)
})
