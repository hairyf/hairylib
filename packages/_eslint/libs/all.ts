import { concat, merge, mergeWith } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { uni } from './configs/uni'
import { vueBasic, vue3 } from './configs/vue'
import { mergeCustomizer } from './utils'

export = mergeWith(basic, typescript, vueBasic, vue3, uni, mergeCustomizer)
