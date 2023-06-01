import { dirname, join } from 'node:path'
import { rollup } from 'rollup'
import rollupPluginDts from 'rollup-plugin-dts'
import md5 from 'md5'
import fs from 'fs-extra'
import { dirSrc, formatTypescript, listFunctionMds } from './utils'

export async function updateFunctionTypes() {
  const mdPaths = await listFunctionMds(dirSrc, { absolute: true })

  const tsPaths = mdPaths.map(v => join(dirname(v), 'src/index.ts')).filter(v => fs.existsSync(v))

  await fs.ensureDir('node_modules/.cache/types')
  for (const tsPath of tsPaths) {
    const filePath = `node_modules/.cache/types/${md5(tsPath)}`

    console.time(`bundles ${filePath}`)

    const bundles = await rollup({
      input: tsPath,
      plugins: [
        rollupPluginDts({
          compilerOptions: { preserveSymlinks: false },
        }),
      ],
      onwarn: () => false,
    })

    const { output } = await bundles.generate({ format: 'es' })
    let code = output[0].code.replace(/declare /g, '')
    code = code.replace(/export {};/, '')

    if (!/props/.test(tsPath))
      code = await formatTypescript(code)

    await fs.writeFile(filePath, code, { flag: 'w' })
    console.timeEnd(`bundles ${filePath}`)
  }
}

updateFunctionTypes()
