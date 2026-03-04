import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs', 'iife'],
  dts: { resolver: 'tsc' },
  clean: true,
  name: 'LibReact',
  outputOptions(outputOptions, format) {
    if (format === 'iife') {
      outputOptions.globals = {
        ...outputOptions.globals,
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-i18next': 'reactI18next',
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
