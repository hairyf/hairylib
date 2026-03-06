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

## API

<!-- automd:jsdocs src="./src/index.ts" -->

### `CollapseTransition`

#### `name`

- **Type**: `string`
- **Default**: `"CollapseTransition"`

#### `setup()`

### `ehr(component, tag?)`

Directly render the incoming function components

### `Field`

#### `name`

- **Type**: `string`
- **Default**: `"Field"`

#### `props`

##### `is`

###### `default`

- **Type**: `string`
- **Default**: `""`

###### `type`

- **Type**: `array`
- **Default**: `[null,null,null]`

#### `setup()`

### `propertyToRef(data, prop)`

Convert the properties of an object to ref

### `syncElementSize(fromTarget, toTarget, options)`

Synchronize the width or height of from DOM to the specified to DOM

### `syncElementSyncScroll(fromTarget, toTarget, options)`

Synchronize scrolling between two DOM with the same scrollbar

### `useChecked(target, checked, unchecked)`

Get the status of checked and customize the value of checked | unchecked

### `useSelectedMultiple(array, options)`

### `useSelectedSingle(array, options)`

### `useServerPagination(options)`

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree imports=""maxDepth=2 -->

```
├── src/
│   ├── components/
│   │   ├── c-field.ts
│   │   ├── collapse-transition.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── syncElementScroll/
│   │   │   └── index.ts
│   │   ├── syncElementSize/
│   │   │   └── index.ts
│   │   ├── useChecked/
│   │   │   └── index.ts
│   │   ├── usePaginationServer/
│   │   │   └── index.ts
│   │   ├── useSelectedMultiple/
│   │   │   └── index.ts
│   │   ├── useSelectedSingle/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   └── extendSelected.ts
│   │   └── index.ts
│   ├── utils/
│   │   └── index.ts
│   └── index.ts
├── test/
│   └── index.test.ts
├── package.json
├── README.md
└── tsdown.config.ts
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
