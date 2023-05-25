import { dirname, join, resolve } from 'node:path'
import fs from 'fs-extra'
import Git from 'simple-git'
import matter from 'gray-matter'

import fg from 'fast-glob'
import { dirSrc, listFunctionMds } from './utils'

const git = Git()

export async function listPackageDir() {
  return await fg('**', {
    onlyDirectories: true,
    cwd: dirSrc,
    deep: 1,
    ignore: ['docs'],
  })
}

export async function getPackageName(dir: string, cwd = dirSrc) {
  const jsonPath = resolve(cwd, dir, 'package.json')
  if (!fs.existsSync(jsonPath))
    return
  const packageJSON = await fs.readJson(jsonPath)
  if (packageJSON.private)
    return
  return packageJSON.name as string
}

export async function updateIndexes() {
  const indexes: PackageIndexes = {
    categories: [],
    documents: [],
  }
  const directory = await listPackageDir()

  await git.addConfig('safe.directory', '*', undefined, 'global')

  for (const _dir of directory) {
    const dir = join(dirSrc, _dir)
    const mds = await listFunctionMds(dir)
    await Promise.all(
      mds.map(async (mdName) => {
        const mdPath = join(dir, mdName)
        const tsPath = mdName.replace('.md', '.ts')
        const mdDir = dirname(mdPath)

        let { content, data: frontmatter } = matter(await fs.readFile(mdPath, 'utf-8'))

        const doc: HairyDocument = {
          name: '',
          package: await getPackageName(dir),
          function: fs.existsSync(mdPath.replace('.md', '.ts')) ? tsPath : undefined,
          lastUpdated: +(await git.raw(['log', '-1', '--format=%at', mdDir])) * 1000,
        }

        doc.docs = mdName.replace(/index\.md|\/index\.md/, '').trim()
        doc.docs = doc.docs.replace('.md', '')
        doc.docs = [_dir, doc.docs].filter(Boolean).join('/')
        doc.docs += mdName.endsWith('index.md') ? '/' : ''
        doc.docs = `/${doc.docs}`

        content = content.replace(/\r\n/g, '\n')
        content = content.match(/# .*?\n/)?.input || ''
        const contentRows = content
          .split('\n')
          .filter(Boolean)
          .map(v => v.replace(/#/g, ''))
          .map(v => v.trim())

        doc.name = frontmatter['side-bar'] || contentRows[0]
        doc.description = contentRows[1]
        indexes.documents.push(doc)
      }),
    )
  }
  indexes.documents.sort((a, b) => a.name.localeCompare(b.name))
  await fs.writeJSON('packages/indexes.json', indexes, { spaces: '\t' })
}

updateIndexes()
