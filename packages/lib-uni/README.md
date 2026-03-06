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

## Usage

<!-- automd:jsimport name="@hairy/uni-lib" src -->

<!-- ⚠️  (jsimport) input must be a `string` or `URL` -->

<!-- /automd -->

## API

<!-- automd:jsdocs src="./src/index" -->

### `createQuerySelector(type, mode)`

### `useQuerySelector()`

### `useQuerySelectorAll()`

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree src="./src" maxDepth=2 -->

```
├── hooks/
│   ├── index.ts
│   ├── useQuerySelector.ts
│   └── useQuerySelectorAll.ts
├── utils/
│   └── index.ts
└── index.ts
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

<!-- ⚠️  (fetch) [GET] "https://raw.githubusercontent.com/hairyf/hairylib/main/LICENSE": 404 Not Found -->

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
