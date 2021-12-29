/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2021-12-29 10:37:17
 */
export const packages: PackageManifest[] = [
  {
    name: '_tailwind',
    display: 'Tailwind preset',
    description: 'Tailwind config for Mr.Mao',
    iife: false
  },
  {
    name: '_eslint',
    display: 'Eslint preset',
    description: 'Eslint config for Mr.Mao',
    manualImport: true,
    tsc: true
  },
  {
    name: '_cli',
    display: 'Project All cli',
    description: 'Project All cli',
    manualImport: true,
    scriptBuild: true
  },
  {
    name: 'axios',
    display: 'Axios utilities',
    description: 'Utilities for axios',
    external: ['axios']
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
    external: ['dayjs']
  },
  {
    name: 'vue-use',
    display: 'Vue composition-api function',
    description: 'Collection of essential Vue Composition Utilities',
    external: ['@vueuse/core', 'pubsub-js', 'vue', '@vue/reactivity']
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
    name: 'uni-use',
    display: 'Uni composition-api function',
    description: 'Collection of essential Uni Composition Utilities',
    external: ['@vue/composition-api']
  },
  {
    name: 'uni-utils',
    display: 'Uni utilities',
    description: 'Collection of essential Uni Utilities'
  },
  {
    name: 'wechat-jssdk',
    display: 'Wechat Jssdk',
    description: 'Wechat Jssdk',
    external: ['jweixin'],
    manualImport: true
  },
  {
    name: 'swagger',
    display: 'Swagger api generate',
    description: 'Swagger api generate',
    manualImport: true
  }
]
