import { SwaggerDefineConfig } from '@hairy/swagger'
import { loadConfigFromFile } from './utils'

export const actionSwagger = async () => {
  const { swaggerWebClientGenerator } = require('@hairy/swagger')
  const { config = {} } = await loadConfigFromFile<SwaggerDefineConfig>('swagger.config')
  const servers = config.servers || []

  delete config.servers

  if (config) Object.assign(swaggerWebClientGenerator.default, config)

  await swaggerWebClientGenerator(servers)
}