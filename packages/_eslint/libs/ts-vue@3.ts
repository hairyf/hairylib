import { concat, merge } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { vueBasic, vue3 } from './configs/vue'

export default merge(basic, typescript, vueBasic, vue3, {
  extends: concat(basic.extends, typescript.extends, vueBasic.extends, vue3.extends)
})
