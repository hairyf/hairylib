# @hairy/vue-lib

<!-- automd:badges name="@hairy/vue-lib" github="hairyf/hairylib" license bundlephobia -->

[![npm version](https://img.shields.io/npm/v/@hairy/vue-lib)](https://npmjs.com/package/@hairy/vue-lib)
[![npm downloads](https://img.shields.io/npm/dm/@hairy/vue-lib)](https://npm.chart.dev/@hairy/vue-lib)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@hairy/vue-lib)](https://bundlephobia.com/package/@hairy/vue-lib)
[![license](https://img.shields.io/github/license/hairyf/hairylib)](https://github.com/hairyf/hairylib/blob/main/LICENSE)

<!-- /automd -->

Vue 2/3 composables and helpers built on top of `vue-demi`.

## Install

<!-- automd:pm-install name="@hairy/vue-lib" -->

```sh
# ✨ Auto-detect
npx nypm install @hairy/vue-lib

# npm
npm install @hairy/vue-lib

# yarn
yarn add @hairy/vue-lib

# pnpm
pnpm add @hairy/vue-lib

# bun
bun install @hairy/vue-lib

# deno
deno install npm:@hairy/vue-lib
```

<!-- /automd -->

## Usage

<!-- automd:jsimport name="@hairy/vue-lib" src -->

<!-- ⚠️  (jsimport) input must be a `string` or `URL` -->

<!-- /automd -->

## API

<!-- automd:jsdocs src="./src/index" -->

<!-- ⚠️  (jsdocs) (0 , _cssRender.default) is not a function -->

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree src="./src" maxDepth=2 -->

```
├── components/
│   ├── c-field.ts
│   ├── collapse-transition.ts
│   └── index.ts
├── hooks/
│   ├── syncElementScroll/
│   ├── syncElementSize/
│   ├── useChecked/
│   ├── usePaginationServer/
│   ├── useSelectedMultiple/
│   ├── useSelectedSingle/
│   ├── utils/
│   └── index.ts
├── utils/
│   └── index.ts
└── index.ts
```

<!-- /automd -->

## Source

<!-- automd:file src="./src/index.ts" code lang="ts" -->

```ts [index.ts]
export * from './components'
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
