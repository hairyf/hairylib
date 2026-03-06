# @hairy/react-i18-lib

<!-- automd:badges name="@hairy/react-i18-lib" github="hairyf/hairylib" license bundlephobia -->

[![npm version](https://img.shields.io/npm/v/@hairy/react-i18-lib)](https://npmjs.com/package/@hairy/react-i18-lib)
[![npm downloads](https://img.shields.io/npm/dm/@hairy/react-i18-lib)](https://npm.chart.dev/@hairy/react-i18-lib)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@hairy/react-i18-lib)](https://bundlephobia.com/package/@hairy/react-i18-lib)
[![license](https://img.shields.io/github/license/hairyf/hairylib)](https://github.com/hairyf/hairylib/blob/main/LICENSE)

<!-- /automd -->

Small helpers for `react-i18next`-based i18n.

## Install

<!-- automd:pm-install name="@hairy/react-i18-lib" -->

```sh
# ✨ Auto-detect
npx nypm install @hairy/react-i18-lib

# npm
npm install @hairy/react-i18-lib

# yarn
yarn add @hairy/react-i18-lib

# pnpm
pnpm add @hairy/react-i18-lib

# bun
bun install @hairy/react-i18-lib

# deno
deno install npm:@hairy/react-i18-lib
```

<!-- /automd -->

## Usage

<!-- automd:jsimport name="@hairy/react-i18-lib" src -->

<!-- ⚠️  (jsimport) input must be a `string` or `URL` -->

<!-- /automd -->

## API

<!-- automd:jsdocs src="./src/index" -->

### `Trans()`

Translate a string to a React node

**Example:**

```tsx
<Trans i18nKey="hello" />
<Trans i18nKey="hello" name="John" />
<Trans i18nKey="hello" name="John" age={20} />
<Trans i18nKey="hello" name="John" age={<span>20</span>} />
```

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree src="./src" maxDepth=2 -->

```
└── index.ts
```

<!-- /automd -->

## Source

<!-- automd:file src="./src/index.ts" code lang="ts" -->

```ts [index.ts]
import type { ReactNode } from 'react'
import HTML from 'html-parse-stringify'
import { createElement } from 'react'
import { useTranslation } from 'react-i18next'

export interface TransProps {
  i18nKey: string
  [key: string]: ReactNode
}

/**
 * Translate a string to a React node
 *
 * @example
 * <Trans i18nKey="hello" />
 * <Trans i18nKey="hello" name="John" />
 * <Trans i18nKey="hello" name="John" age={20} />
 * <Trans i18nKey="hello" name="John" age={<span>20</span>} />
 */
export function Trans({ i18nKey, ...additionalProps }: TransProps) {
  const translation = useTranslation().t(i18nKey, additionalProps)
  return renderNodes(HTML.parse(translation), additionalProps)
}

function renderNodes(tokens: HTML.Token[], values: Record<string, ReactNode>): ReactNode[] {
  let index = 0
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
```

<!-- /automd -->

## Contributors

<!-- automd:contributors github="hairyf/hairylib" author="Hairyf" license="MIT" -->

Published under the [MIT](https://github.com/hairyf/hairylib/blob/main/LICENSE) license.
Made by [@Hairyf](https://github.com/Hairyf) and [community](https://github.com/hairyf/hairylib/graphs/contributors) 💛
<br><br>
<a href="https://github.com/hairyf/hairylib/graphs/contributors">
<img src="https://contrib.rocks/image?repo=hairyf/hairylib" />
</a>

<!-- /automd -->

## License

<!-- automd:fetch url="gh:hairyf/hairylib/main/LICENSE" -->

<!-- ⚠️  (fetch) [GET] "https://raw.githubusercontent.com/hairyf/hairylib/main/LICENSE": 404 Not Found -->

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
