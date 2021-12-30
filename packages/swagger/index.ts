/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-29 10:36:04
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-30 13:43:15
 */
import fs from 'fs-extra'
import { toArray, merge } from 'lodash'

import ora from 'ora'
import { parseOutput } from './parser/output'
import { SwaggerBuildConfig } from './_types'

export interface HairySwaggerType {
  (config: SwaggerBuildConfig | SwaggerBuildConfig[]): Promise<void>
  default: SwaggerBuildConfig
}

export const hairySwagger: HairySwaggerType = async (config) => {
  const writeOptions = { encoding: 'utf8' as const, flag: 'w' as const }
  const spinner = ora('Generate Interface ...\n').start()
  const configs: SwaggerBuildConfig[] = toArray(config)
  for (const iterator of configs) {
    const config = merge(hairySwagger.default, iterator)
    const output = parseOutput(config)
    await fs.ensureDir(output.api.root)
    await fs.ensureDir(output.type.root)
  }
  spinner.stop()
  spinner.clear()
}

hairySwagger.default = {
  env: '',
  uri: '',
  httpLib: 'axios',
  output: {
    api: 'src/api/index.ts',
    type: 'src/api/index.type.ts',
    cwd: ''
  }
}
