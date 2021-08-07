/*
 * @Author: Mr.Mao
 * @Date: 2021-06-18 14:02:44
 * @LastEditTime: 2021-07-18 11:01:28
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { merge } from 'lodash'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import defaults from './config/defaults'
import { DeepPartial, DeepReplace } from '@tuimao/core'

/** 修复 CorePlugins 类型 start */
type CorePlugins =
  | {
      [key in TailwindConfig['corePlugins'][number]]?: boolean
    }
  | TailwindConfig['corePlugins']

type PartialConfig = DeepPartial<TailwindConfig>
type FixCorePlugins = DeepReplace<PartialConfig, 'corePlugins', CorePlugins>
type DefineConfig = FixCorePlugins
/** 修复 CorePlugins 类型 end */

/**
 * 初始化返回预设
 * @param config 深层合并预设
 * @returns 预设
 */
const mergePresets = (config: DefineConfig = {}) => {
  return merge(defaults, config)
}
mergePresets({})
export default mergePresets
export { default as preset } from './config/preset'
export { default as defaults } from './config/defaults'
export * from './config/utils'
