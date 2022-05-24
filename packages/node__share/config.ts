import path from 'path'
import { pathToFileURL } from 'url'
import { build } from 'esbuild'
import fs from 'fs-extra'

declare const jest: any

export const usingDynamicImport = typeof jest === 'undefined'

// eslint-disable-next-line no-new-func
export const dynamicImport = usingDynamicImport ? new Function('file', 'return import(file)') : require

export const dynamicImportDefault = async (file: string) => {
  const result = await dynamicImport(file)
  return result.default || result
}

async function bundleConfigFile(fileName: string, isESM = false): Promise<{ code: string; dependencies: string[] }> {
  const result = await build({
    absWorkingDir: process.cwd(),
    entryPoints: [fileName],
    outfile: 'out.js',
    write: false,
    platform: 'node',
    bundle: true,
    format: isESM ? 'esm' : 'cjs',
    sourcemap: 'inline',
    metafile: true,
    plugins: [
      {
        name: 'externalize-deps',
        setup(build) {
          build.onResolve({ filter: /.*/ }, (args) => {
            if (args.path[0] !== '.' && !path.isAbsolute(args.path)) {
              return { external: true }
            }
          })
        }
      }
    ]
  })
  const { text } = result.outputFiles[0]
  return {
    code: text,
    dependencies: result.metafile ? Object.keys(result.metafile.inputs) : []
  }
}

interface NodeModuleWithCompile extends NodeModule {
  _compile(code: string, filename: string): any
}

/**
 * 更改 require 编译器，当 require 一个地址时，编译 code 内容
 * @param fileName
 * @param bundledCode
 * @returns
 */
async function loadConfigFromBundledFile(fileName: string, bundledCode: string): Promise<any> {
  const extension = path.extname(fileName)
  const defaultLoader = require.extensions[extension]!
  require.extensions[extension] = (module: NodeModule, filename: string) => {
    if (filename === fileName) {
      ;(module as NodeModuleWithCompile)._compile(bundledCode, filename)
    } else {
      defaultLoader(module, filename)
    }
  }
  // clear cache in case of server restart
  delete require.cache[require.resolve(fileName)]
  const raw = require(fileName)
  const config = raw.__esModule ? raw.default : raw
  require.extensions[extension] = defaultLoader
  return config
}

export const loadConfigFromFile = async <T = any>(
  name: string,
  root = process.cwd()
): Promise<{ path?: string; config?: T }> => {
  let resolvedPath = ''
  let isES = false
  let isTS = false
  let isJSON = false
  let config

  for (const ext of ['js', 'mjs', 'ts', 'cjs', 'json', '']) {
    const configFile = path.resolve(root, ext ? `${name}.${ext}` : name)
    if (!fs.existsSync(configFile)) continue
    if (ext === 'ts') isTS = true
    if (ext === 'json') isJSON = true
    if (ext === '') isJSON = true
    if (ext === 'mjs') isES = true
    resolvedPath = configFile
  }

  if (!resolvedPath) return {}

  if (isJSON) config = await fs.readJSON(resolvedPath)

  if (isES) {
    const fileUrl = pathToFileURL(resolvedPath)
    const bundled = await bundleConfigFile(resolvedPath, true)
    if (isTS) {
      fs.writeFileSync(resolvedPath + '.js', bundled.code)
      config = await dynamicImportDefault(`${fileUrl}.js?t=${Date.now()}`)
      fs.unlinkSync(resolvedPath + '.js')
    } else {
      config = await dynamicImportDefault(`${fileUrl}?t=${Date.now()}`)
    }
  }

  if (!config) {
    const bundled = await bundleConfigFile(resolvedPath)
    config = await loadConfigFromBundledFile(resolvedPath, bundled.code)
  }

  return { path: resolvedPath, config }
}
