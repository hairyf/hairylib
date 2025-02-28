import { useTranslation } from 'react-i18next'
import type { ReactNode } from 'react'
import { createElement } from 'react'
import HTML from 'html-parse-stringify'

export interface TransProps {
  i18nKey: string
  [key: string]: ReactNode
}

export function Trans({ i18nKey, ...additionalProps }: TransProps) {
  const translation = useTranslation().t(i18nKey, additionalProps)
  return renderNodes(HTML.parse(translation), additionalProps)
}

let index = 0
function renderNodes(tokens: HTML.Token[], values: Record<string, ReactNode>): ReactNode[] {
  return tokens.map((token) => {
    if (token.type === 'text')
      return token.content
    index++
    const props = { ...token.attrs, key: index }
    return token.voidElement
      ? (values[token.name]
          ? createElement('span', { key: index }, values[token.name])
          : createElement(token.name, props))
      : createElement(token.name, props, renderNodes(token.children, {}))
  })
}
