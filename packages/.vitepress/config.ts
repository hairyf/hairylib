/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-22 17:46:38
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-22 20:10:48
 */
import { defineConfig } from 'vitepress'

const Guide = [
  { text: 'Get Started', link: '/guide/' }
]

const Engineering = [
]

const DefaultSideBars = [
  { text: 'Guide', items: [] },
  { text: 'Engineering', items: [] },
  { text: 'Axios', items: [] },
  { text: 'Utils', items: [] },
  { text: 'Browser', items: [] },
]

const config = defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],
  title: 'Hairy Library',
  description: 'Hairy Library',
  themeConfig: {
    logo: '/favicon.svg',
    sidebar: {
      '/guide/': DefaultSideBars
    },
    nav: [
      {
        text: 'Guide',
        items: Guide
      },
      {
        text: 'Functions',
        items: []
      },
      {
        text: 'Github',
        link: 'https://github.com/TuiMao233/hairylib',
      },
      {
        text: 'Blog',
        link: 'https://tuimao233.gitee.io/mao-blog/',
      },
    ]
  },
})

export default config