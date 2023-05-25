import type { DefaultTheme } from 'vitepress'
import indexes from '../indexes.json'

const Guide = [
  { text: 'Get Started', link: '/docs/guide/' },
  { text: 'Contributing', link: '/docs/guide/contributing' },
]

const Study = [
  { text: 'What is Monorepo?', link: '/docs/study/monorepo' },
  { text: 'Pnpm Workspace', link: '/docs/study/pnpm-workspace' },
  { text: 'Monorepo Compiler', link: '/docs/study/monorepo-compiler' },
  { text: 'Turborepo', link: '/docs/study/turborepo' },
  { text: 'Changesets', link: '/docs/study/changesets' },
  { text: 'Document system', link: '/docs/study/docs-system' },
  { text: 'Unit Testing', link: '/docs/study/unit-testing' },
]

const CoreFunctions = indexes.documents.map(doc => ({
  text: doc.name,
  link: doc.docs,
}))

const DefaultSideBar: any[] = [
  { text: 'Guide', items: Guide },
  { text: 'Study', items: Study },
  { text: 'Core Functions', items: CoreFunctions },
]

export const sidebar: DefaultTheme.Sidebar = {
  '/docs/guide/': DefaultSideBar,
  '/docs/study/': DefaultSideBar,
  ...getReduceSideBar(indexes.documents.map(v => v.docs)),
}

export const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    items: Guide,
  },
  {
    text: 'Functions',
    items: CoreFunctions,
  },
  {
    text: 'Github',
    link: 'https://github.com/TuiMao233/hairylib',
  },
  {
    text: 'Hairy\'s Blog',
    link: 'https://hairy.blog/',
  },
]

function getReduceSideBar(names: string[]) {
  const bars = names.reduce((total, key) => {
    if (!key)
      return total
    total[key] = DefaultSideBar
    return total
  }, <any>{})
  return bars
}
