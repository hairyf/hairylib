import { DefaultTheme } from 'vitepress'
import indexes, { categories } from '../indexes.json'

const Guide = [
  { text: 'Get Started', link: '/docs__guide/' },
  { text: 'Contributing', link: '/docs__guide/contributing' }
]

const CoreCategories = categories.map((category) => ({
  text: category,
  link: indexes.documents.find((item) => item.category === category)?.docs || ''
}))
const DocumentsSideBar = getDocumentSideBar()

const DefaultSideBar: DefaultTheme.SidebarGroup[] = [
  { text: 'Guide', items: Guide },
  { text: 'Core Functions', items: CoreCategories }
]
export const sidebar: DefaultTheme.Sidebar = {
  '/docs__guide/': DefaultSideBar,
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
    text: 'Blog',
    link: 'https://tuimao233.gitee.io/mao-blog/'
  }
]

function getDocumentSideBar() {
  const links = []
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
