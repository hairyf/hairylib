import { merge } from 'lodash'
import { DefineConfig } from '../utils/types'
import defaults from './defaults'


export const defineCloudMergePreset = (config: DefineConfig = {}) => {
  return merge(defaults, config)
}