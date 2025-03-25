import type { DefaultTheme } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { version } from '../../package.json'
import vite from './vite.config'

const GUIDES: DefaultTheme.NavItemWithLink[] = [
  { text: 'Getting Started', link: '/guide/' },
  { text: 'Installation & Usage', link: '/guide/install' },
]

const VERSIONS: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
  { text: `v${version} (current)`, link: '/' },
  { text: `Release Notes`, link: 'https://github.com/hairyf/hairylib/releases' },
  { text: `Contributing`, link: 'https://github.com/hairyf/hairylib/blob/main/CONTRIBUTING.md' },
]

export default defineConfig({
  title: 'Hairy Library',
  description: 'Hairylib is a monorepo project managed and published using pnpm and bumpp.',
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [transformerTwoslash() as any],
    languages: ['js', 'jsx', 'ts', 'tsx'],
    config: (md) => {
      md.use(groupIconMdPlugin)
    },
  },
  cleanUrls: true,
  vite: vite as any,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      {
        text: 'Guide',
        items: [
          {
            items: GUIDES,
          },
        ],
      },
      {
        text: `v${version}`,
        items: VERSIONS,
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: GUIDES,
        },
      ],
    },
    editLink: {
      pattern: 'https://github.com/antfu/hairylib/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },
    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/antfu/hairylib' },
    ],

    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2019-present Hairy',
    },
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Hairyf' }],
    // ['meta', { property: 'og:title', content: '' }],
    // ['meta', { property: 'og:image', content: '' }],
    ['meta', { property: 'og:description', content: 'Hairylib is a monorepo project managed and published using pnpm and bumpp.' }],
    // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // ['meta', { name: 'twitter:image', content: '' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
  ],
})
