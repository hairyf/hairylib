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
  external: [
    'react',
    'react-dom',
    'react-i18next',
    'valtio',
    'valtio/utils',
    'mitt',
    'html-parse-stringify',
    'react-use',
    '@hairy/utils',
  ],
})
