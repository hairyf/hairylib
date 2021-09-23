import { mergeWith } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { vue2 } from './configs/vue'
import { mergeCustomizer } from './utils'

export = mergeWith(basic, typescript, vue2, mergeCustomizer)
