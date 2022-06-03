
import ora from 'ora'
import pPipe from 'p-pipe';
import {
  OpenAPIBuildConfiguration,
  OpenAPIDefineConfig,
  parserTsConfig,
  JSONParser,
  dataSource,
  tsCompiler,
  generate,
  dest,
} from './helper'


export interface OpenAPIWebClientGeneratorType {
  (config: OpenAPIBuildConfiguration | OpenAPIBuildConfiguration[]): Promise<void>
}

export const openAPIWebClientGenerator: OpenAPIWebClientGeneratorType = async (config) => {
  const configs: OpenAPIBuildConfiguration[] = Array.isArray(config) ? config : [config]
  const spinner = ora('Generate Interface ...\n').start()

  const process = configs.map(
    pPipe(
      (config) => parserTsConfig(config),
      (configRead) => dataSource(configRead),
      (configRead) => JSONParser(configRead),
      (configRead) => tsCompiler(configRead),
      (configRead) => generate(configRead),
      (configRead) => dest(configRead),
    )
  )
  await Promise.all(process)

  spinner.succeed()
  spinner.clear()
}

/**
 * 处理 swagger define config ，使得使用扩展更加方便
 * 该 config 提供给 @hairy/cli 的 hairy swagger 使用
 * @param config
 * @returns
 */
export const defineConfig = (config: OpenAPIDefineConfig) => config

export * from './config'