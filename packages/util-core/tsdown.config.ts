import { defineConfig } from 'tsdown'
import pkg from './package.json' with { type: 'json' }

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs', 'iife'],
  dts: { resolver: 'tsc' },
  clean: true,
  name: pkg.name,
  exports: {
    devExports: true,
    enabled: true,
  },
  publint: false,
})
