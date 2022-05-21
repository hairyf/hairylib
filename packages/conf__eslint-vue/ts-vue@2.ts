import typescript from '@hairy/eslint-basic'
import { merge } from '@hairy/share-node'
import { remove } from 'lodash'
import { vue2 } from './config/basic'

const tsVue2 = merge(typescript, vue2)

remove(tsVue2.extends, 'plugin:prettier/recommended')

export = tsVue2
