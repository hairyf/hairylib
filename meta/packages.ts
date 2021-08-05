export const packages: PackageManifest[] = [
  {
    name: '_tailwind',
    display: 'Tailwind preset',
    iife: false
  },
  {
    name: '_eslint',
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
    iife: false
  },
  {
    name: 'vue-use',
    display: 'Vue combination-api function',
    external: ['@vueuse/core', 'pubsub-js', 'vue', 'vue-composable'],
    globals: {
      'pubsub-js': 'pubsubJs',
      'vue-composable': 'vueComposable'
    }
  },
  {
    name: 'vue-utils',
    display: 'Vue utilities',
    external: ['vue-router', 'vue-demi']
  },
  {
    name: 'uni-utils',
    display: 'Uni utilities'
  }
]
