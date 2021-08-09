import { merge } from 'lodash'
import { DefineConfig } from '../dist'
import defaults from './defaults'


export const defineCloudConfig = (config: DefineConfig = {}) => {
  return merge(defaults, config)
}