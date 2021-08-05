import assert from 'assert'
import path from 'path'
import consola from 'consola'
import fs from 'fs-extra'
import { execSync as exec } from 'child_process'
import { packages } from '../meta/packages'

const rootDir = path.resolve(__dirname, '..')

const FILES_COPY_ROOT = ['LICENSE']

const FILES_COPY_LOCAL = ['package.json', 'README.md']

assert(process.cwd() !== __dirname)

const buildMetaFiles = async () => {
  for (const { name, build } of packages) {
    if (build === false) continue
    const packageRoot = path.resolve(__dirname, '..', 'packages', name)
    const packageDist = path.resolve(packageRoot, 'dist')

    for (const file of FILES_COPY_ROOT)
      await fs.copyFile(path.join(rootDir, file), path.join(packageDist, file))
    for (const file of FILES_COPY_LOCAL)
      await fs.copyFile(path.join(packageRoot, file), path.join(packageDist, file))
  }
}

const build = async () => {
  consola.info('Clean up')
  exec('yarn clean', { stdio: 'inherit' })

  // 暂时先不进行生成 import
  // consola.info('Generate Imports')

  consola.info('Rollup')
  exec('yarn build:rollup', { stdio: 'inherit' })

  // 暂时先不以 dist 目录为发布目录
  // await buildMetaFiles()
}

async function cli() {
  try {
    await build()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

if (require.main === module) cli()