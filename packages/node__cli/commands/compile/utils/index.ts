import path from 'path'
import fs from 'fs-extra'
import lnk from 'lnk'
import { rollup } from 'rollup'
import rollupPluginDts from 'rollup-plugin-dts'

const FILES_COPY_LOCAL = ['README.md', 'LICENSE', 'index.md', 'CHANGELOG.md']

export const buildMetaFiles = async (outdir: string) => {
  await fs.ensureDir(outdir)
  for (const file of FILES_COPY_LOCAL) {
    const filePath = path.join(process.cwd(), file)
    if (!fs.existsSync(filePath)) continue
    await fs.copy(filePath, path.join(process.cwd(), outdir, file))
  }

  const packageJsonPath = path.join(process.cwd(), 'package.json')
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = await fs.readJson(packageJsonPath)
    if (packageJson.publishConfig) delete packageJson.publishConfig.directory
    const packageJsonPathOutput = path.join(process.cwd(), outdir, 'package.json')
    await fs.writeJson(packageJsonPathOutput, packageJson, { spaces: '\t' })
  }

  const nodeModulesPath = path.join(process.cwd(), 'node_modules')
  if (fs.existsSync(nodeModulesPath)) {
    const nodeModulesOutput = path.join(process.cwd(), outdir)
    lnk(['node_modules'], nodeModulesOutput)
  }
}

export const generateDts = async (input: string, file: string) => {
  const bundles = await rollup({
    input,
    plugins: [
      rollupPluginDts({
        compilerOptions: { preserveSymlinks: false }
      })
    ],
    onwarn: () => false
  })

  await bundles.write({ file, format: 'es' })
}
