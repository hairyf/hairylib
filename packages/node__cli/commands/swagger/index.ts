import { loadConfigFromFile } from '@hairy/share-node'
import { swaggerWebClientGenerator } from '@hairy/swagger'

export const actionSwagger = async () => {
  // const { swaggerWebClientGenerator } = require('@hairy/swagger')
  const { config = {} } = await loadConfigFromFile('swagger.config')
  const servers = config.servers || []

  delete config.servers

  if (config) Object.assign(swaggerWebClientGenerator.default, config)

  await swaggerWebClientGenerator(servers)
}
