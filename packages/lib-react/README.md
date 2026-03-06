# @hairy/react-lib

<!-- automd:badges name="@hairy/react-lib" github="hairyf/hairylib" license bundlephobia -->

[![npm version](https://img.shields.io/npm/v/@hairy/react-lib)](https://npmjs.com/package/@hairy/react-lib)
[![npm downloads](https://img.shields.io/npm/dm/@hairy/react-lib)](https://npm.chart.dev/@hairy/react-lib)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@hairy/react-lib)](https://bundlephobia.com/package/@hairy/react-lib)
[![license](https://img.shields.io/github/license/hairyf/hairylib)](https://github.com/hairyf/hairylib/blob/main/LICENSE)

<!-- /automd -->

React hooks and utilities for building applications.

## Install

<!-- automd:pm-install name="@hairy/react-lib" -->

```sh
# ✨ Auto-detect
npx nypm install @hairy/react-lib

# npm
npm install @hairy/react-lib

# yarn
yarn add @hairy/react-lib

# pnpm
pnpm add @hairy/react-lib

# bun
bun install @hairy/react-lib

# deno
deno install npm:@hairy/react-lib
```

<!-- /automd -->

## API

<!-- automd:jsdocs src="./src/index.ts" -->

### `Case(props)`

### `cls()`

A simple JavaScript utility for conditionally joining classNames together.

### `Default(props)`

### `Else(props)`

### `If(props)`

### `Injector(props)`

### `Switch(props)`

### `Then(props)`

### `track(fn)`

**Example:**

```tsx
// Obtain externally
import { track } from '@hairy/lib-react'
const context = await track(() => useContext(YourContext))
console.log(context) // { ... }

### `Trigger()`

**Example:**

```tsx
import { Trigger } from '@hairy/lib-react'

// Use triggers to capture context
function App() {
 return (
  <YourContext.Provider>
   <Trigger />
  </YourContext.Provider>
 )
}

// Obtain externally
import { track } from '@hairy/lib-react'
const context = await track(() => useContext(YourContext))
console.log(context) // { ... }
```

### `tryUseCallback(callback, deps)`

### `tryUseEffect(effect, deps)`

### `tryUseInsertionEffect(callback, deps)`

### `tryUseReducer(reducer, initializerArg, initializer?)`

### `tryUseRef(initialValue?)`

### `tryUseState(initialState?)`

### `tryUseUpdate()`

### `Unless(props)`

### `useAsyncCallback(fun)`

### `useAsyncState(fun, deps, options?)`

### `useDebounce(value, delay)`

### `useEventBus(key)`

### `useFetchRequestIntercept(intercept)`

### `useFetchResponseIntercept(intercept)`

### `useMounted()`

### `useOffsetPagination(options)`

### `useUpdate()`

### `useWatch(source, callback, options)`

### `useWhenever(source, cb, options?)`

### `wrapper(asChild, props, children?)`

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree imports=""maxDepth=2 -->

```
├── src/
│   ├── components/
│   │   ├── condition/
│   │   │   ├── Case.ts
│   │   │   ├── Default.ts
│   │   │   ├── Else.ts
│   │   │   ├── If.ts
│   │   │   ├── index.ts
│   │   │   ├── Switch.ts
│   │   │   ├── Then.ts
│   │   │   └── Unless.ts
│   │   ├── utils/
│   │   │   ├── index.ts
│   │   │   ├── Injector.ts
│   │   │   └── Trigger.ts
│   │   └── index.ts
│   ├── hooks/
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── tryUseCallback.ts
│   │   ├── tryUseEffect.ts
│   │   ├── tryUseInsertionEffect.ts
│   │   ├── tryUseReducer.ts
│   │   ├── tryUseRef.ts
│   │   ├── tryUseState.ts
│   │   ├── tryUseUpdate.ts
│   │   ├── useAsyncCallback.ts
│   │   ├── useAsyncState.ts
│   │   ├── useDebounce.ts
│   │   ├── useEventBus.ts
│   │   ├── useFetchIntercept.ts
│   │   ├── useMounted.ts
│   │   ├── useOffsetPagination.ts
│   │   ├── usePrevious.ts
│   │   ├── useUpdate.ts
│   │   ├── useWatch.ts
│   │   └── useWhenever.ts
│   ├── types/
│   │   ├── html-parse-stringify.d.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── cls.ts
│   │   ├── index.ts
│   │   ├── track.ts
│   │   └── wrapper.ts
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
export * from './types'
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
