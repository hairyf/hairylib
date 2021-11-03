import { mergeWith } from 'lodash'
import { basic } from './configs/basic'
import { react } from './configs/react'
import { typescript } from './configs/typescript'
import { mergeCustomizer } from './utils'

export = mergeWith(basic, typescript, react, mergeCustomizer)
