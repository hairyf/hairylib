export const packages: PackageManifest[] = [
  {
    name: '_tailwind',
    display: 'Tailwind preset',
    description: 'Tailwind config for Mr.Mao',
    manualImport: true,
    iife: false
  },
  {
    name: '_eslint',
    display: 'Eslint preset',
    description: 'Eslint config for Mr.Mao',
    manualImport: true,
    build: false
  },
  {
    name: 'axios',
    display: 'Axios utilities',
    description: 'Utilities for axios',
    external: ['lodash', '@tuimao/core', 'axios']
  },
  {
    name: 'browser',
    description: 'Utilities for browser',
    display: 'Browser utilities'
  },
  {
    name: 'core',
    display: 'Tuimao utilities core',
    description: 'Utilities core for Mr.Mao',
    globals: {
      dayjs: 'dayjs'
    }
  },
  {
    name: 'utils',
    display: 'All utilities Collection',
    description: 'Collection of Mr.mao Utils',
    manualImport: true,
    external: [
      '@tuimao/axios',
      '@tuimao/browser',
      '@tuimao/core',
      '@tuimao/vue-use',
      '@tuimao/vue-utils'
    ],
    iife: false
  },
  {
    name: 'vue-use',
    display: 'Vue composition-api function',
    description: 'Collection of essential Vue Composition Utilities',
    external: ['@vueuse/core', 'pubsub-js', 'vue', 'vue-composable'],
    globals: {
      'pubsub-js': 'pubsubJs',
      'vue-composable': 'vueComposable'
    }
  },
  {
    name: 'vue-utils',
    display: 'Vue utilities',
    description: 'Collection of essential Vue Utilities',
    external: ['vue-router', 'vue-demi']
  },
  {
    name: 'vue-directive',
    display: 'Vue directives',
    description: 'Collection of essential Vue directives',
    importFile: 'imports.ts',
    external: ['vue-demi']
  },
  {
    name: 'uni-utils',
    description: 'Collection of essential Uni Utilities',
    display: 'Uni utilities'
  },
  {
    name: 'uni-use',
    display: 'Vue composition-api function',
    description: 'Collection of essential Uni Composition Utilities'
  }
]
