import { mergeWith } from 'lodash'
import { basic } from './configs/basic'
import { uni } from './configs/uni'
import { vue3 } from './configs/vue'
import { mergeCustomizer } from './utils'

export = mergeWith(basic, vue3, uni, mergeCustomizer)
