import { DefaultTheme } from 'vitepress'
import indexes, { categories } from '../indexes.json'

const Guide = [
  { text: 'Get Started', link: '/docs__guide/' },
  { text: 'Contributing', link: '/docs__guide/contributing' }
]

const Study = [
  { text: 'What is Monorepo?', link: '/docs__study/monorepo' },
  { text: 'Pnpm Workspace', link: '/docs__study/pnpm-workspace' },
  { text: 'Monorepo Compiler', link: '/docs__study/monorepo-compiler' },
  { text: 'Turborepo', link: '/docs__study/turborepo' },
  { text: 'Changesets', link: '/docs__study/changesets' },
  { text: 'Document system', link: '/docs__study/docs-system' },
  { text: 'Unit Testing', link: '/docs__study/unit-testing' }
]

const CoreCategories = categories.map((category) => ({
  text: category,
  link: indexes.documents.find((item) => item.category === category)?.docs || ''
}))
const DocumentsSideBar = getDocumentSideBar()

const DefaultSideBar: DefaultTheme.SidebarGroup[] = [
  { text: 'Guide', items: Guide },
  { text: 'Study', items: Study },
  { text: 'Core Functions', items: CoreCategories }
]
export const sidebar: DefaultTheme.Sidebar = {
  '/docs__guide/': DefaultSideBar,
  '/docs__study/': DefaultSideBar,
  // #region functions
  ...getReduceSideBar(indexes.documents.map((v) => v.docs))
  // #endregion
}

export const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Guide',
    items: Guide
  },
  {
    text: 'Functions',
    items: CoreCategories
  },
  {
    text: 'Github',
    link: 'https://github.com/TuiMao233/hairylib'
  },
  {
    text: "Hairy's Blog",
    link: 'https://hairy.blog/'
  }
]

function getDocumentSideBar() {
  const links: any[] = []
  for (const name of categories) {
    const documents = indexes.documents.filter((i) => i.category === name)
    links.push({
      text: name,
      items: documents.map((i) => ({ text: i.name, link: i.docs }))
    })
  }
  return links
}

function getReduceSideBar(names: string[]) {
  const bars = names.reduce((total, key) => {
    if (!key) return total
    total[key] = DocumentsSideBar
    return total
  }, <any>{})
  return bars
}
