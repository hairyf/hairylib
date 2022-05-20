import { merge } from 'lodash-es'
import { DefineConfig } from '../utils'
import defaults from './defaults'

export const defineCloudMergeConfig = (config: DefineConfig = {}) => {
  return merge(defaults, config)
}
