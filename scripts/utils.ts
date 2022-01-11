/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-11 14:13:03
 */
import { resolve, join } from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'

// const DIR_ROOT = resolve(__dirname, '..')
const DIR_SRC = resolve(__dirname, '../packages')

/**
 * 获取依赖包的所有方法目录
 * @param dir 路径
 * @param ignore 过滤路径
 */
export async function listFunctions(dir: string, ignore: string[] = []) {
  const files = await fg('*', {
    onlyDirectories: true,
    cwd: dir,
    ignore: ['_*', 'dist', 'node_modules', ...ignore]
  })
  files.sort()
  return files
}

/**
 * 更新所有扩展的 index.ts
 * @param packages
 */
export const updateImport = async (packages: PackageManifest[]) => {
  for (const { name, manualImport, importFile } of packages) {
    if (manualImport) continue
    const packageDir = join(DIR_SRC, name)
    const importPath = join(packageDir, importFile || 'index.ts')
    const functions = await listFunctions(packageDir)
    const content =
      functions
        .sort()
        .map((name) => `export * from './${name}'`)
        .join('\n') + '\n'
    await fs.writeFile(importPath, content)
  }
}
/**
 * 更新所有包的 package.json 配置
 * @param packages
 */
export const updatePackageJSON = async (packages: PackageManifest[]) => {
  for (const { name, iife, description, author } of packages) {
    const packageDir = join(DIR_SRC, name)
    const packageJSONPath = join(packageDir, 'package.json')
    const packageJSON = await fs.readJson(packageJSONPath)
    packageJSON.description = description || packageJSON.description
    packageJSON.author = author || 'Anthony Fu<https://github.com/TuiMao233>'
    packageJSON.bugs = {
      url: 'https://github.com/TuiMao233/hairylib/issues'
    }
    packageJSON.repository = {
      type: 'git',
      url: 'git+https://github.com/TuiMao233/hairylib.git'
    }
    packageJSON.homepage = 'https://github.com/TuiMao233/hairylib#readme'
    packageJSON.main = './index.cjs.js'
    packageJSON.types = './index.d.ts'
    packageJSON.module = './index.esm.js'
    if (iife !== false) {
      packageJSON.unpkg = './index.iife.min.js'
      packageJSON.jsdelivr = './index.iife.min.js'
    }
    packageJSON.exports = {
      '.': {
        import: './index.esm.js',
        require: './index.cjs.js'
      },
      './*': './*'
    }
    packageJSON.publishConfig = {
      access: 'public'
    }
    fs.writeJSON(packageJSONPath, packageJSON, { spaces: 2 })
  }
}

/**
 * 读取扩展包中 lerna 自动生成的 hash 字段
 * @param cwd
 */
export const readPackageLernaGitHash = (cwd: string) => {
  try {
    return fs.readJSONSync(join(cwd, 'package.json'))?.gitHead || ''
  } catch {
    return ''
  }
}
