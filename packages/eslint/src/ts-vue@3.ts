import { mergeWith } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { vue3 } from './configs/vue'
import { mergeCustomizer } from './utils'

export = mergeWith(basic, typescript, vue3, mergeCustomizer)
