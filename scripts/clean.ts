/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-21 09:36:42
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-21 14:43:35
 */
import fg from 'fast-glob'
import fs from 'fs-extra'
import path from 'path'
import { packages } from '../meta/packages'

export const clean = async () => {
  for (const { name } of packages) {
    const packageRoot = path.resolve(__dirname, '..', 'packages', name, 'dist')
    const dirs = await Promise.all([
      fg('**/*', {
        cwd: packageRoot,
        ignore: ['package.json', 'README.md'],
        absolute: true
      }),
      fg('**/*', {
        cwd: packageRoot,
        onlyDirectories: true,
        absolute: true
      })
    ])
    await Promise.all(dirs.flat().map((file) => fs.remove(file)))
  }
}

async function cli() {
  try {
    await clean()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

if (require.main === module) cli()
