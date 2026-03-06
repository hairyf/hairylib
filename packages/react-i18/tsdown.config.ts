import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: { resolver: 'tsc', eager: true },
  clean: true,
  exports: {
    devExports: true,
    enabled: true,
  },
  publint: false,
})
