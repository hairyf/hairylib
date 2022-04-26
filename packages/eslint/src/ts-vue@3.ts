import { mergeWith, remove } from 'lodash'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { vue3 } from './configs/vue'
import { mergeCustomizer } from './utils'

const config = mergeWith(basic, vue3, typescript, mergeCustomizer)

remove(config.extends, 'plugin:import/recommended')

export = config
