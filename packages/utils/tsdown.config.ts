import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  clean: true,
  exports: {
    devExports: true,
    enabled: true,
  },
  inlineOnly: [
    'lodash-es',
    'change-case',
  ],
})
