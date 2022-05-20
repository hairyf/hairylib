/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-24 13:59:57
 */
import { mergeWith, remove } from 'lodash-es'
import { basic } from './configs/basic'
import { typescript } from './configs/typescript'
import { mergeCustomizer } from './utils'

const config = mergeWith(typescript, basic, mergeCustomizer)

remove(config.extends, 'plugin:import/recommended')

export = config
