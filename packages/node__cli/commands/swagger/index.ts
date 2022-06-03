import { loadConfigFromFile } from '@hairy/share-node'
import { openAPIWebClientGenerator, defaultConfig } from '@hairy/swagger'

export const actionSwagger = async () => {
  const { config = {} } = await loadConfigFromFile('swagger.config')
  const servers = config.servers || []
  delete config.servers
  if (config) Object.assign(defaultConfig, config)
  await openAPIWebClientGenerator(servers)
}
