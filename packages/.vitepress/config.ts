/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-22 17:46:38
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-22 20:10:48
 */
import { defineConfig } from 'vitepress'
import {sidebar, nav} from './config.theme'
import cname from './plugins/vite-plugin-cname'


const config = defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],
  title: 'Hairy Library',
  description: 'Hairy Library',
  themeConfig: { logo: '/favicon.svg', sidebar, nav },
  vite: {
    plugins: [cname()]
  }
})



export default config