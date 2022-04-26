/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-22 20:41:28
 */
import { resolve, join, relative } from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'
import { packages } from '../meta/packages'
import Git from 'simple-git'
import matter from 'gray-matter'

const git = Git()

const DOCS_URL = 'http://localhost:3000'
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

export const listFunctionIndexMd = async (dir: string) => {
  const files = await fg(['**/index.md'], {
    onlyFiles: true,
    cwd: dir,
    ignore: ['_*', 'dist', 'node_modules']
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

export const updateIndexes = async () => {
  const indexes: PackageIndexes = {
    packages: {},
    categories: [],
    documents: []
  }
  for (const info of packages) {
    const dir = join(DIR_SRC, info.name)
    const indexMds = await listFunctionIndexMd(dir)

    const _package: HairyPackage = {
      ...info,
      dir: relative(DIR_SRC, dir).replace(/\\/g, '/')
      // TODO: 默认文档 docs: info.a
    }

    await Promise.all(
      indexMds.map(async (indexMd) => {
        const functionPath = indexMd.replace(/index\.md|\/index\.md/, '')
        const mdPath = join(dir, indexMd)

        const absolutePath = join(dir, functionPath)

        const relativePath = `/${_package.name}/${functionPath ? functionPath + '/' : ''}`

        const mdRaw = await fs.readFile(mdPath, 'utf-8')
        const { content: md, data: frontmatter } = matter(mdRaw)

        // TODO: 未获取 md 说明
        const description = ''
        const function_: HairyDocument = {
          name: frontmatter.title || functionPath || _package.name,
          path: functionPath || _package.name,
          package: _package.name,
          lastUpdated: +(await git.raw(['log', '-1', '--format=%at', absolutePath])) * 1000,
          docs: relativePath,
          category: frontmatter.category,
          description
        }
        indexes.documents.push(function_)
      })
    )
    indexes.documents.sort((a, b) => a.name.localeCompare(b.name))
    indexes.categories = [...new Set(indexes.documents.map((item) => item.category).filter(Boolean))]
  }
  fs.writeJSON('packages/indexes.json', indexes, { spaces: '\t' })
}
