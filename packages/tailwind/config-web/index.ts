import { merge } from 'lodash'
import { DefineConfig } from '../utils/types'
import defaults from './defaults'

/**
/**
 * 初始化返回预设
 * @param config 深层合并预设
 * @returns 预设
 */
export const defineWebMergeConfig = (config: DefineConfig = {}) => {
  return merge(defaults, config)
}
