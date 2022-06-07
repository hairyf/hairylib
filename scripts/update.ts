import { resolve, join, dirname } from 'path'
import fs from 'fs-extra'
import Git from 'simple-git'
import matter from 'gray-matter'

import fg from 'fast-glob'
import { listFunctionMds, DIR_SRC } from './utils'

const git = Git()

export const listPackageDir = async () => {
  return await fg('**', {
    onlyDirectories: true,
    cwd: DIR_SRC,
    deep: 1,
    ignore: ['docs__guide']
  })
}

export const getPackageName = async (dir: string, cwd = DIR_SRC) => {
  const jsonPath = resolve(cwd, dir, 'package.json')
  if (!fs.existsSync(jsonPath)) return
  const packageJSON = await fs.readJson(jsonPath)
  if (packageJSON.private) return
  return packageJSON.name as string
}

export const updateIndexes = async () => {
  const indexes: PackageIndexes = {
    categories: [],
    documents: []
  }
  const directory = await listPackageDir()
  for (const _dir of directory) {
    const dir = join(DIR_SRC, _dir)
    const mds = await listFunctionMds(dir)
    await Promise.all(
      mds.map(async (mdName) => {
        const mdPath = join(dir, mdName)
        const tsPath = mdName.replace('.md', '.ts')
        const mdDir = dirname(mdPath)
        // eslint-disable-next-line prefer-const
        let { content, data: frontmatter } = matter(await fs.readFile(mdPath, 'utf-8'))

        if (!frontmatter.category) return undefined

        const doc: HairyDocument = {
          name: '',
          package: await getPackageName(dir),
          function: fs.existsSync(mdPath.replace('.md', '.ts')) ? tsPath : undefined,
          lastUpdated: +(await git.raw(['log', '-1', '--format=%at', mdDir])) * 1000
        }

        doc.docs = mdName.replace(/index\.md|\/index\.md/, '').trim()
        doc.docs = doc.docs.replace('.md', '')
        doc.docs = [_dir, doc.docs].filter(Boolean).join('/')
        doc.docs += mdName.endsWith('index.md') ? '/' : ''

        doc.category = frontmatter.category

        content = content.replace(/\r\n/g, '\n')
        content = content.match(/# .*?\n/)?.input || ''
        const contentRows = content
          .split('\n')
          .filter(Boolean)
          .map((v) => v.replace(/#/g, ''))
          .map((v) => v.trim())

        doc.name = frontmatter['side-bar'] || contentRows[0]
        doc.description = contentRows[1]
        indexes.documents.push(doc)
      })
    )
  }
  indexes.documents.sort((a, b) => a.name.localeCompare(b.name))
  indexes.categories = [...new Set(indexes.documents.map((item) => item.category).filter(Boolean))] as any
  fs.writeJSON('packages/indexes.json', indexes, { spaces: '\t' })
}

// updateIndexes()
