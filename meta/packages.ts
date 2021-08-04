export const packages: PackageManifest[] = [
  {
    name: '_tailwind',
    display: 'Tailwind preset',
    iife: false
  },
  {
    name: 'eslint',
    display: 'Eslint preset',
    build: false
  },
  {
    name: 'axios',
    display: 'Axios utilities',
    external: ['lodash-es', '@tuimao/core', 'axios']
  },
  {
    name: 'browser',
    display: 'Browser utilities'
  },
  {
    name: 'core',
    display: 'Tuimao utilities core',
    globals: {
      dayjs: 'dayjs'
    }
  },
  {
    name: 'utils',
    display: 'All utilities Collection',
    external: [
      '@tuimao/axios',
      '@tuimao/browser',
      '@tuimao/core',
      '@tuimao/vue-use',
      '@tuimao/vue-utils'
    ],
    build: false
  },
  {
    name: 'vue-use',
    display: 'vue combination-api function',
    external: ['@vueuse/core', 'pubsub-js', 'vue', 'vue-composable'],
    globals: {
      'pubsub-js': 'pubsubJs',
      'vue-composable': 'vueComposable'
    }
  },
  {
    name: 'vue-utils',
    display: 'vue utilities',
    external: ['vue-router', 'vue-demi']
  }
]
