import globals from 'esbuild-plugin-globals'
import { defineConfig } from 'tsup'
import { dependencies, name } from './package.json'

export default defineConfig(() => {
  const external = Object.keys(dependencies || {})
  return [
    {
      entry: ['./src/index.ts'],
      clean: true,
      dts: true,
      format: ['esm'],
      name,
      external,
    },
    {
      entry: ['./src/index.ts'],
      clean: true,
      format: ['cjs', 'esm', 'iife'],
      esbuildPlugins: [globals({
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-i18next': 'reactI18next',
      })],
      name,
      globalName: 'LibReact',
      external,
    },
  ]
})
