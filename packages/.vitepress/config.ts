import { defineConfig } from 'vitepress'
import { nav, sidebar } from './config.theme'
import { MarkdownTransform } from './plugins/transform'

const config = defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]],
  title: 'Hairy Library',
  description: 'Hairy Library',
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.svg',
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2019-present Evan You',
    },
    sidebar,
    nav,
  },
  vite: {
    publicDir: 'public',
    plugins: [MarkdownTransform() as any],
  },
})

export default config
