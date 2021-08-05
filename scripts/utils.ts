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
  for (const { name, manualImport } of packages) {
    if (manualImport) continue
    const packageDir = join(DIR_SRC, name)
    const importPath = join(packageDir, 'index.ts')
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
      url: 'https://github.com/TuiMao233/tuimao-config/issues'
    }
    packageJSON.repository = {
      type: 'git',
      url: 'git+https://github.com/TuiMao233/tuimao-config.git'
    }
    packageJSON.homepage = 'https://github.com/TuiMao233/tuimao-config#readme'
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
    fs.writeJSON(packageJSONPath, packageJSON, { spaces: 2 })
  }
}
