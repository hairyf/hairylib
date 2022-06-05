import { loadConfigFromFile } from '@hairy/share-node'
import { openAPIWebClientGenerator, defaultConfig } from '@hairy/api-generator'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'
import isUndefined from 'lodash/isUndefined'

export const actionApiGenerator = async () => {
  const { config = {} } = await loadConfigFromFile('api-generator.config')
  if (!isArray(config.servers) && isObject(config.servers)) {
    config.servers = [config.servers]
  }
  if (isUndefined(config.servers)) {
    config.servers = []
  }
  const servers = config.servers
  delete config.servers

  Object.assign(defaultConfig, config)
  if (config.input) servers.push(config)
  await openAPIWebClientGenerator(servers)
}
