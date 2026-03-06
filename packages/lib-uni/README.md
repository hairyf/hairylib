# @hairy/uni-lib

<!-- automd:badges name="@hairy/uni-lib" github="hairyf/hairylib" license bundlephobia -->

[![npm version](https://img.shields.io/npm/v/@hairy/uni-lib)](https://npmjs.com/package/@hairy/uni-lib)
[![npm downloads](https://img.shields.io/npm/dm/@hairy/uni-lib)](https://npm.chart.dev/@hairy/uni-lib)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@hairy/uni-lib)](https://bundlephobia.com/package/@hairy/uni-lib)
[![license](https://img.shields.io/github/license/hairyf/hairylib)](https://github.com/hairyf/hairylib/blob/main/LICENSE)

<!-- /automd -->

Shared utilities targeting Uni-app / Vue runtimes.

## Install

<!-- automd:pm-install name="@hairy/uni-lib" -->

```sh
# ✨ Auto-detect
npx nypm install @hairy/uni-lib

# npm
npm install @hairy/uni-lib

# yarn
yarn add @hairy/uni-lib

# pnpm
pnpm add @hairy/uni-lib

# bun
bun install @hairy/uni-lib

# deno
deno install npm:@hairy/uni-lib
```

<!-- /automd -->

## API

<!-- automd:jsdocs src="./src/index.ts" -->

### `createQuerySelector(type, mode)`

### `useQuerySelector()`

### `useQuerySelectorAll()`

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree imports=""maxDepth=2 -->

```
├── src/
│   ├── hooks/
│   │   ├── index.ts
│   │   ├── useQuerySelector.ts
│   │   └── useQuerySelectorAll.ts
│   ├── utils/
│   │   └── index.ts
│   └── index.ts
├── test/
│   └── index.test.ts
├── package.json
├── README.md
├── tsconfig.json
└── tsdown.config.ts
```

<!-- /automd -->

## Source

<!-- automd:file src="./src/index.ts" code lang="ts" -->

```ts [index.ts]
export * from './hooks'
export * from './utils'
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

Copyright (c) 2025-PRESENT Hairyf <https://github.com/antfu>

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
