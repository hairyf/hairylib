import { merge } from 'lodash'
import defaults from './defaults'
import { FullConfig } from 'windicss/types/interfaces'

/**
/**
 * 初始化返回预设
 * @param config 深层合并预设
 * @returns 预设
 */
export const defineWebMergeConfig = (config: FullConfig = {}) => {
  return merge(defaults, config)
}
