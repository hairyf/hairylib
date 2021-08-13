import { mergeWith } from 'lodash'
import { basic } from './configs/basic'
import { react } from './configs/react'
import { typescript } from './configs/typescript'
import { uni } from './configs/uni'
import { vue3, vueBasic } from './configs/vue'
import { mergeCustomizer } from './utils'

export = mergeWith(basic, typescript, vueBasic, vue3, react, uni, mergeCustomizer)
