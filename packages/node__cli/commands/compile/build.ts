import path from 'path'
import esbuild from 'esbuild'
import fg from 'fast-glob'
import { dtsPlugin } from 'esbuild-plugin-d.ts'
import { generateDts } from './utils'

export async function buildDir({ options, input, output, buildConfig }: any) {
  const source = path.join(input, './**/*.ts').replace(/\\/g, '/')
  const ignores = ['_*', 'dist', 'node_modules', '__tests__/**', ...options.ignore]

  if (options.type) buildConfig.plugins.push(dtsPlugin({ outDir: output }))
  buildConfig.entryPoints = await fg(source, { ignore: ignores })
  buildConfig.outdir = path.join(process.cwd(), output)

  await esbuild.build(buildConfig)
}

export async function buildEsllpkg({ options, input, output, buildConfig }: any) {
  const basename = path.basename(input).replace(/\.ts|\.tsx/, '.js')
  const outfile = path.extname(output) ? output : path.join(output, basename)

  buildConfig.bundle = true
  buildConfig.entryPoints = [input]

  const buildConfigs: esbuild.BuildOptions[] = []
  for (const mode of options.pmode) {
    const config = { ...buildConfig }
    const modeExt = mode === 'iife-minify' ? 'iife.min' : mode
    config.format = mode === 'iife-minify' ? 'iife' : mode

    config.outfile = `${outfile.replace('.js', '')}.${modeExt}.js`

    if (mode === 'iife-minify') config.minify = true

    config.plugins = [...config.plugins]

    buildConfigs.push(config)
  }

  const promises = buildConfigs.map(esbuild.build) as any[]
  if (options.type) {
    promises.push(generateDts(input, outfile.replace(path.extname(outfile), '.d.ts')))
  }

  await Promise.all(promises)
}

export async function buildFile({ options, input, output, buildConfig }: any) {
  const basename = path.basename(input).replace(/\.ts|\.tsx/, '.js')
  const outfile = path.extname(output) ? output : path.join(output, basename)
  buildConfig.bundle = true
  buildConfig.entryPoints = [input]
  buildConfig.outfile = path.join(outfile)

  await Promise.all([
    esbuild.build(buildConfig),
    options.type && generateDts(input, outfile.replace(path.extname(outfile), '.d.ts'))
  ])
}
