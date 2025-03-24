import { defineConfig } from 'tsup'
import { dependencies, devDependencies, name } from './package.json'

export default defineConfig(() => {
  const external = Object.keys(dependencies || {})
  const resolve = Object.keys(devDependencies || {})
    .filter(name => !name.startsWith('lodash'))
  return [
    {
      entry: ['./src/index.ts'],
      clean: true,
      dts: { resolve },
      format: ['esm'],
      name,
      external,
    },
    {
      entry: ['./src/index.ts'],
      clean: true,
      format: ['cjs', 'esm', 'iife'],
      name,
      external,
    },
  ]
})
