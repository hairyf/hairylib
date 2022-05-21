import typescript from '@hairy/eslint-basic'
import { merge } from '@hairy/share-node'
import { remove } from 'lodash'
import { vue3 } from './config/basic'

const tsVue3 = merge(typescript, vue3)

remove(tsVue3.extends, 'plugin:prettier/recommended')

export = tsVue3
