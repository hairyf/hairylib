import { defineConfig } from 'tsdown'
import pkg from './package.json' with { type: 'json' }

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs', 'iife'],
  dts: true,
  clean: true,
  name: pkg.name,
  outputOptions(outputOptions, format) {
    if (format === 'iife') {
      outputOptions.globals = { ...outputOptions.globals, jweixin: 'jWeixin' }
    }
    return outputOptions
  },
  exports: {
    devExports: true,
    enabled: true,
  },
  publint: false,
})
