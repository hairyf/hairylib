/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-22 17:46:38
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-22 20:10:48
 */
import { defineConfig } from 'vitepress'
import indexes, { categories } from '../indexes.json'

const Guide = [
  { text: 'Get Started', link: '/guide/' }
]


const FunctionsSideBar = getFunctionsSideBar()



const config = defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],
  title: 'Hairy Library',
  description: 'Hairy Library',
  themeConfig: {
    logo: '/favicon.svg',
    sidebar: FunctionsSideBar,
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

function getFunctionsSideBar() {
  const links = []

  for (const name of categories) {
    console.log(name)
    const functions = indexes.functions.filter(i => i.category === name)

    links.push({
      text: name,
      children: functions.map(i => ({
        text: i.name,
        link: i.docs,
      })),
    })
  }

  return links
}

export default config