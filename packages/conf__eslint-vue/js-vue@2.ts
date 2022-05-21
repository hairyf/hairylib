import basic from '@hairy/eslint-basic'
import { merge } from '@hairy/share-node'
import { remove } from 'lodash'
import { vue2 } from './config/basic'

const jsVue2 = merge(basic, vue2)

remove(jsVue2.extends, 'plugin:prettier/recommended')

export = jsVue2
