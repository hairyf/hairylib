import path from 'path'
import { Plugin } from 'esbuild'

export const externalizePlugin = (): Plugin => {
  return {
    name: 'externalize-deps',
    setup: ({ onResolve }) => {
      onResolve({ filter: /.*/ }, (args) => {
        if (args.path[0] !== '.' && !path.isAbsolute(args.path)) {
          return { external: true }
        }
      })
    }
  }
}
