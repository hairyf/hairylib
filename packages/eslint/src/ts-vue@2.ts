import { mergeWith, remove } from 'lodash-es'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { vue2 } from './configs/vue'
import { mergeCustomizer } from './utils'

const config = mergeWith(basic, vue2, typescript, mergeCustomizer)

remove(config.extends, 'plugin:import/recommended')

export = config
