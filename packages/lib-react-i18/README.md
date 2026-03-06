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

## API

<!-- automd:jsdocs src="./src/index.ts" -->

### `Trans()`

Translate a string to a React node

**Example:**

```ts
<Trans i18nKey="hello" />
<Trans i18nKey="hello" name="John" />
<Trans i18nKey="hello" name="John" age={20} />
<Trans i18nKey="hello" name="John" age={<span>20</span>} />
```

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree imports=""maxDepth=2 -->

```
├── src/
│   └── index.ts
├── package.json
├── README.md
└── tsdown.config.ts
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

MIT License

Copyright (c) 2025-PRESENT Hairyf <https://github.com/hairyf>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
