/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-24 13:48:57
 */
export const packages: PackageManifest[] = [
  {
    name: 'tailwind',
    display: 'Tailwind preset Config',
    description: 'Tailwind config for Mr.Mao',
    external: ['@hairy/share'],
    iife: false
  },
  {
    name: 'eslint',
    display: 'Eslint preset Configs',
    description: 'Eslint config for Mr.Mao',
    manualImport: true,
    mergeBuild: false
  },
  {
    name: 'windicss',
    display: 'Windicss preset Config',
    description: 'Windicss config for Mr.Mao',
    external: ['@hairy/share', 'windicss', 'windicss/helpers'],
    iife: false
  },
  {
    name: 'cli',
    display: 'Project All cli',
    description: 'Project All cli',
    manualImport: true,
    internalBuild: true
  },
  {
    name: 'axios',
    display: 'Axios utilities',
    description: 'Utilities for axios',
    external: ['axios'],
    globals: { axios: 'axios', '@hairy/axios': 'hairyAxios' }
  },
  {
    name: 'browser',
    description: 'Utilities for browser',
    display: 'Browser utilities'
  },
  {
    name: 'utils',
    display: 'Hairy utilities core',
    description: 'Utilities core for Mr.Mao',
    external: ['dayjs']
  },
  {
    name: 'share',
    display: 'Hairy packages share function',
    description: 'Hairy packages share function',
    globals: { '@hairy/share': 'hairyShare' }
  },
  {
    name: 'vue-use',
    display: 'Vue composition-api function',
    description: 'Collection of essential Vue Composition Utilities',
    external: ['@vueuse/core', 'pubsub-js', 'vue', '@vue/reactivity'],
    globals: { '@hairy/vue-use': 'hairyVueUse' }
  },
  {
    name: 'vue-utils',
    display: 'Vue utilities',
    description: 'Collection of essential Vue Utilities',
    external: ['vue-router', 'vue-demi', '@hairy/browser'],
    globals: { '@hairy/vue-utils': 'hairyVueUtils' }
  },
  {
    name: 'vue-directive',
    display: 'Vue directives',
    description: 'Collection of essential Vue directives',
    manualImport: true,
    external: ['vue-demi'],
    globals: { '@hairy/vue-directive': 'hairyVueDirective' }
  },
  {
    name: 'uni-use',
    display: 'Uni composition-api function',
    description: 'Collection of essential Uni Composition Utilities',
    external: ['@vue/composition-api'],
    iife: false
  },
  {
    name: 'uni-utils',
    display: 'Uni utilities',
    external: ['@hairy/browser'],
    description: 'Collection of essential Uni Utilities',
    iife: false
  },
  {
    name: 'wechat-jssdk',
    display: 'Wechat Jssdk',
    description: 'Wechat Jssdk',
    external: ['jweixin'],
    manualImport: true,
    globals: { '@hairy/wechat-jssdk': 'hairyWechatJssdk' }
  },
  {
    name: 'swagger',
    display: 'Swagger api generate',
    description: 'Swagger api generate',
    external: ['fs-extra', 'ora', 'prettier', 'path', 'axios', 'transliteration'],
    iife: false,
    manualImport: true
  }
]
