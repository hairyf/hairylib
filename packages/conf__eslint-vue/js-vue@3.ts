import basic from '@hairy/eslint-basic'
import { merge } from '@hairy/share-node'
import { remove } from 'lodash'
import { vue3 } from './config/basic'

const jsVue3 = merge(basic, vue3)

remove(jsVue3.extends, 'plugin:prettier/recommended')

export = jsVue3
