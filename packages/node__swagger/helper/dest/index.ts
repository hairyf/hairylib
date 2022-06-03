import { OpenAPIBuildConfigurationRead } from "../typings/generator";
import fs from 'fs-extra'

export const dest = async (options: OpenAPIBuildConfigurationRead) => {
  await Promise.all(
    (options?.outputs || []).map(async item => {
      await fs.ensureDir(item.root)
      await fs.writeFile(item.path, item.code || '', { flag: 'w' })
    })
  )
}