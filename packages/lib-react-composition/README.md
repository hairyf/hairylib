# @hairy/react-lib-composition

<!-- automd:badges name="@hairy/react-lib-composition" github="hairyf/hairylib" license bundlephobia -->

[![npm version](https://img.shields.io/npm/v/@hairy/react-lib-composition)](https://npmjs.com/package/@hairy/react-lib-composition)
[![npm downloads](https://img.shields.io/npm/dm/@hairy/react-lib-composition)](https://npm.chart.dev/@hairy/react-lib-composition)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@hairy/react-lib-composition)](https://bundlephobia.com/package/@hairy/react-lib-composition)
[![license](https://img.shields.io/github/license/hairyf/hairylib)](https://github.com/hairyf/hairylib/blob/main/LICENSE)

<!-- /automd -->

React reactivity layer built on top of `@vue/reactivity`.

## Install

<!-- automd:pm-install name="@hairy/react-lib-composition" -->

```sh
# ✨ Auto-detect
npx nypm install @hairy/react-lib-composition

# npm
npm install @hairy/react-lib-composition

# yarn
yarn add @hairy/react-lib-composition

# pnpm
pnpm add @hairy/react-lib-composition

# bun
bun install @hairy/react-lib-composition

# deno
deno install npm:@hairy/react-lib-composition
```

<!-- /automd -->

## API

<!-- automd:jsdocs src="./src/index.ts" -->

### `computed(arg1, arg2)`

### `customRef(factory)`

Creates a customized ref with explicit control over its dependency tracking and updates triggering.

### `defineComponent()`

### `effectScope()`

Creates an effect scope object which can capture the reactive effects (i.e. computed and watchers) created within it so that these effects can be disposed together. For detailed use cases of this API, please consult its corresponding {@link https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md | RFC}.

### `Fragment`

- **Type**: `symbol`
- **Default**: `undefined`

### `getCurrentInstance()`

### `getCurrentScope()`

Returns the current active effect scope if there is one.

### `h()`

### `hasInjectionContext()`

### `inject()`

### `isProxy()`

### `isReactive()`

### `isReadonly()`

### `isRef()`

### `isShallow()`

### `markRaw()`

### `nextTick()`

### `onBeforeMount(fn)`

### `onBeforeUnmount(fn)`

The function is called right before the component is unmounted.

### `onBeforeUpdate(fn)`

### `onMounted(fn)`

The function is called right after the component is mounted.

### `onScopeDispose(fn, _failSilently)`

Registers a dispose callback on the current active effect scope. The callback will be invoked when the associated effect scope is stopped.

### `onUnmounted(fn)`

### `onUpdated(fn)`

The function is called immediately after the component is re-rendered with updated props or state. This method is not invoked during the initial render.

### `provide()`

### `reactive(target)`

### `reactivity(getter)`

Converts some of the 'raw Vue' data, which is not already wrapped in a hook, into reactive hook data to ensure proper reactivity within the component.

**Example:**

```tsx
import React from 'react'
import { ref, reactivity } from 'veact'

const countRef = ref(0)

export const Component: React.FC = () => {
  // Convert to a reactivity hook
  const count = reactivity(() => countRef)
  const increment = () => {
    count.value++
  }

  return (
    <div>
      <span>{count.value}</span>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
```

### `readonly(target)`

Takes an object (reactive or plain) or a ref and returns a readonly proxy to the original.

A readonly proxy is deep: any nested property accessed will be readonly as well. It also has the same ref-unwrapping behavior as {@link reactive()}, except the unwrapped values will also be made readonly.

**Example:**

```js
const original = reactive({ count: 0 })
const copy = readonly(original)

useWatchEffect(() => {
  // works for reactivity tracking
  console.log(copy.count)
})

// mutating original will trigger watchers relying on the copy
original.count++

// mutating the copy will fail and result in a warning
copy.count++ // warning!
```

### `ref(initValue?)`

### `shallowReactive(target)`

Shallow version of {@link reactive()}.

Unlike {@link reactive()}, there is no deep conversion: only root-level properties are reactive for a shallow reactive object. Property values are stored and exposed as-is - this also means properties with ref values will not be automatically unwrapped.

**Example:**

```js
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// mutating state's own properties is reactive
state.foo++

// ...but does not convert nested objects
isReactive(state.nested) // false

// NOT reactive
state.nested.bar++
```

### `shallowReadonly(target)`

Shallow version of {@link readonly()}.

Unlike {@link readonly()}, there is no deep conversion: only root-level properties are made readonly. Property values are stored and exposed as-is - this also means properties with ref values will not be automatically unwrapped.

**Example:**

```js
const state = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2
  }
})

// mutating state's own properties will fail
state.foo++

// ...but works on nested objects
isReadonly(state.nested) // false

// works
state.nested.bar++
```

### `shallowRef(initValue?)`

### `toRaw()`

### `toReactive()`

### `toReadonly()`

### `toRef()`

### `toRefs()`

### `toValue()`

### `TransitionGroup()`

### `unref()`

### `watch(source, callback, options)`

### `watchEffect(effect, options)`

Runs a function immediately while reactively tracking its dependencies and re-runs it whenever the dependencies are changed.

**Example:**

```js
const count = useRef(0)
watchEffect(() => console.log(count.value))
// -> logs 0

count.value++
// -> logs 1
```

### `withEffectScope(fn, detached?)`

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree imports=""maxDepth=2 -->

```
├── src/
│   ├── computed.ts
│   ├── effectScope.ts
│   ├── index.ts
│   ├── inject.ts
│   ├── lifecycle.ts
│   ├── reactive.ts
│   ├── reactivity.ts
│   ├── readonly.ts
│   ├── ref.ts
│   ├── watch.ts
│   └── watchEffect.ts
├── macros-global.d.ts
├── package.json
├── README.md
└── tsdown.config.ts
```

<!-- /automd -->

## Source

<!-- automd:file src="./src/index.ts" code lang="ts" -->

```ts [index.ts]
import { noop } from '@hairy/utils'

export * from './computed'
export * from './effectScope'
export * from './lifecycle'
export * from './reactive'
export * from './reactivity'
export * from './readonly'
export * from './ref'
export * from './watch'
export * from './watchEffect'

export {
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  isShallow,
  markRaw,
  toRaw,
  toReactive,
  toReadonly,
  toRef,
  toRefs,
  toValue,
  unref,
} from '@vue/reactivity'
export {
  Fragment,
  createElement as h,
} from 'react'
export const getCurrentInstance = noop
export const hasInjectionContext = noop
export const inject = noop
export const provide = noop
export const nextTick = noop
export const defineComponent = noop
export const TransitionGroup = noop
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
