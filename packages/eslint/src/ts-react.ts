import { mergeWith, remove } from 'lodash'
import { basic } from './configs/basic'
import { react } from './configs/react'
import { typescript } from './configs/typescript'
import { mergeCustomizer } from './utils'

const config = mergeWith(basic, typescript, react, mergeCustomizer)

remove(config.extends, 'plugin:import/recommended')

export = config
