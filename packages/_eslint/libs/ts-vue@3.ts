import { mergeWith } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { vue3, vueBasic } from './configs/vue'
import { mergeCustomizer } from './utils'

export = mergeWith(basic, typescript, vueBasic, vue3, mergeCustomizer)
