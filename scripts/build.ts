/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-21 14:44:21
 */
import assert from 'assert'
import path from 'path'
import consola from 'consola'
import fs from 'fs-extra'
import { execSync as exec } from 'child_process'
import { packages } from '../meta/packages'
import { readPackageLernaGitHash, updateImport } from './utils'
import fg from 'fast-glob'
import { rollupBuildPackage } from './rollup.config'
import execa from 'execa'
import ora from 'ora'

const rootDir = path.resolve(__dirname, '..')

const FILES_COPY_ROOT = ['LICENSE']

const FILES_COPY_LOCAL = ['package.json' /* , 'README.md' */]

assert(process.cwd() !== __dirname)

export const buildTransferDist = async (cwd: string) => {
  const files = await fg('*', { cwd, ignore: ['_*', 'dist', 'node_modules'] })
  const dirs = await fg('*', { cwd, onlyDirectories: true, ignore: ['_*', 'dist', 'node_modules'] })
  const packageDist = path.resolve(cwd, 'dist')
  await fs.emptyDir(packageDist)
  for (const file of [...files, ...dirs]) {
    await fs.copy(path.join(cwd, file), path.join(packageDist, file))
  }
}

export const buildMetaFiles = async () => {
  for (const config of packages) {
    const { name } = config
    const packageRoot = path.resolve(__dirname, '..', 'packages', name)
    const packageDist = path.resolve(packageRoot, 'dist')

    await fs.ensureDir(packageDist)

    // 向打包后的 dist 添加包的源信息
    for (const file of FILES_COPY_ROOT)
      await fs.copyFile(path.join(rootDir, file), path.join(packageDist, file))
    for (const file of FILES_COPY_LOCAL) {
      await fs.copyFile(path.join(packageRoot, file), path.join(packageDist, file))
    }
  }
}

export const buildPackageFiles = async () => {
  const spinner = ora().start()

  for (const config of packages) {
    const { name, build, internalBuild, mergeBuild } = config
    const packageRoot = path.resolve(__dirname, '..', 'packages', name)
    const packageDist = path.resolve(packageRoot, 'dist')
    const packageName = fs.readJSONSync(path.join(packageRoot, 'package.json')).name
    spinner.text = `Build ${packageName}`

    await fs.ensureDir(packageDist)

    // 判断与打包后 hash 相同则跳过编译 (在公司环境无法使用 lerna 暂时跳过)
    // const packageHash = readPackageLernaGitHash(packageRoot)
    // const distHash = readPackageLernaGitHash(packageDist)
    // if (packageHash !== '' && packageHash === distHash) {
    //   continue
    // }

    // 不需要打包的将源文件移植到 dist 文件夹
    if (build === false) {
      await buildTransferDist(packageRoot)
      continue
    }

    // 编译不合并, 采用 hairy build 方式
    if (mergeBuild === false) {
      execa.sync('hairy build', { cwd: path.join('packages', name) })
      continue
    }

    // 包内部编译
    if (internalBuild === true) {
      execa.sync('yarn build', { cwd: path.join('packages', name) })
      continue
    }

    await rollupBuildPackage(config)
  }
  spinner.succeed('Packages Builder')
  spinner.clear()
}

export const build = async () => {
  consola.info('Clean up')
  exec('yarn clean', { stdio: 'inherit' })

  consola.info('Generate Imports')
  await updateImport(packages)

  try {
    await buildPackageFiles()
  } catch (error) {
    consola.warn(error)
  }

  consola.info('Meta Builder')
  await buildMetaFiles()
}

async function cli() {
  try {
    await build()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

if (require.main === module) cli()
