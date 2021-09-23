import { mergeWith } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { mergeCustomizer } from './utils'

export = mergeWith(typescript, basic, mergeCustomizer)
