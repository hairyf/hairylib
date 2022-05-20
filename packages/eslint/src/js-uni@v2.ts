import { mergeWith } from 'lodash-es'
import { basic } from './configs/basic'
import { uni } from './configs/uni'
import { vue2 } from './configs/vue'
import { mergeCustomizer } from './utils'

export = mergeWith(basic, vue2, uni, mergeCustomizer)
