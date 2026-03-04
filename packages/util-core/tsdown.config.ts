import { defineConfig } from 'tsdown'
import pkg from './package.json' with { type: 'json' }

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs', 'iife'],
  dts: { resolver: 'tsc' },
  clean: true,
  inlineOnly: false,
  name: 'HairyUtils',
  outputOptions(outputOptions, format) {
    if (format === 'iife') {
      outputOptions.name = 'HairyUtils'
      outputOptions.globals = {
        ...outputOptions.globals,
        'bignumber.js': 'BigNumber',
      }
    }
    return outputOptions
  },
  exports: {
    devExports: true,
    enabled: true,
  },
  publint: false,
})
