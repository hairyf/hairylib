/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-22 17:46:38
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-22 20:10:48
 */
import { defineConfig, DefaultTheme } from 'vitepress'
import indexes, { categories } from '../indexes.json'

const Guide = [
  { text: 'Get Started', link: '/guide/' },
  { text: 'Contributing', link: '/guide/contributing' },
]

const CoreCategories = categories.map(c => ({
  text: c,
  link: indexes.documents.find(item => item.category === c)?.docs || ''
}))

const DefaultSideBar: DefaultTheme.SideBarConfig = [
  { text: 'Guide', children: Guide },
  { text: 'Core Functions', children: CoreCategories },
] as any


const DocumentsSideBar = getDocumentSideBar()

const config = defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],
  title: 'Hairy Library',
  description: 'Hairy Library',
  themeConfig: {
    logo: '/favicon.svg',
    sidebar: {
      '/guide/': DefaultSideBar,
      '/contributing': DefaultSideBar,

      '/axios/': DocumentsSideBar,
      '/browser/': DocumentsSideBar,
      '/cli/': DocumentsSideBar,
      '/eslint/': DocumentsSideBar,
      '/swagger/': DocumentsSideBar,
      '/tailwind/': DocumentsSideBar,
      '/wechat-jssdk/': DocumentsSideBar
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

function getDocumentSideBar() {
  const links = []

  for (const name of categories) {
    const documents = indexes.documents.filter(i => i.category === name)

    links.push({
      children: documents.map(i => ({ text: i.name, link: i.docs })),
      text: name,
    })
  }

  return links
}

export default config