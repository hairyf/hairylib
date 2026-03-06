# @hairy/ether-lib

<!-- automd:badges name="@hairy/ether-lib" github="hairyf/hairylib" license bundlephobia -->

[![npm version](https://img.shields.io/npm/v/@hairy/ether-lib)](https://npmjs.com/package/@hairy/ether-lib)
[![npm downloads](https://img.shields.io/npm/dm/@hairy/ether-lib)](https://npm.chart.dev/@hairy/ether-lib)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@hairy/ether-lib)](https://bundlephobia.com/package/@hairy/ether-lib)
[![license](https://img.shields.io/github/license/hairyf/hairylib)](https://github.com/hairyf/hairylib/blob/main/LICENSE)

<!-- /automd -->

Utilities and helpers around `ethers` v6.

## Install

<!-- automd:pm-install name="@hairy/ether-lib" -->

```sh
# ✨ Auto-detect
npx nypm install @hairy/ether-lib

# npm
npm install @hairy/ether-lib

# yarn
yarn add @hairy/ether-lib

# pnpm
pnpm add @hairy/ether-lib

# bun
bun install @hairy/ether-lib

# deno
deno install npm:@hairy/ether-lib
```

<!-- /automd -->

## Usage

<!-- automd:jsimport name="@hairy/ether-lib" src -->

<!-- ⚠️  (jsimport) input must be a `string` or `URL` -->

<!-- /automd -->

## API

<!-- automd:jsdocs src="./src/index" -->

### `Errors`

#### `ACTION_REJECTED`

- **Type**: `string`
- **Default**: `"ACTION_REJECTED"`

#### `BUFFER_OVERRUN`

- **Type**: `string`
- **Default**: `"BUFFER_OVERRUN"`

#### `CALL_EXCEPTION`

- **Type**: `string`
- **Default**: `"CALL_EXCEPTION"`

#### `INSUFFICIENT_FUNDS`

- **Type**: `string`
- **Default**: `"INSUFFICIENT_FUNDS"`

#### `INVALID_ARGUMENT`

- **Type**: `string`
- **Default**: `"INVALID_ARGUMENT"`

#### `MISSING_ARGUMENT`

- **Type**: `string`
- **Default**: `"MISSING_ARGUMENT"`

#### `MISSING_NEW`

- **Type**: `string`
- **Default**: `"MISSING_NEW"`

#### `NETWORK_ERROR`

- **Type**: `string`
- **Default**: `"NETWORK_ERROR"`

#### `NONCE_EXPIRED`

- **Type**: `string`
- **Default**: `"NONCE_EXPIRED"`

#### `NOT_IMPLEMENTED`

- **Type**: `string`
- **Default**: `"NOT_IMPLEMENTED"`

#### `NUMERIC_FAULT`

- **Type**: `string`
- **Default**: `"NUMERIC_FAULT"`

#### `REPLACEMENT_UNDERPRICED`

- **Type**: `string`
- **Default**: `"REPLACEMENT_UNDERPRICED"`

#### `SERVER_ERROR`

- **Type**: `string`
- **Default**: `"SERVER_ERROR"`

#### `TIMEOUT`

- **Type**: `string`
- **Default**: `"TIMEOUT"`

#### `TRANSACTION_REPLACED`

- **Type**: `string`
- **Default**: `"TRANSACTION_REPLACED"`

#### `UNEXPECTED_ARGUMENT`

- **Type**: `string`
- **Default**: `"UNEXPECTED_ARGUMENT"`

#### `UNKNOWN_ERROR`

- **Type**: `string`
- **Default**: `"UNKNOWN_ERROR"`

#### `UNPREDICTABLE_GAS_LIMIT`

- **Type**: `string`
- **Default**: `"UNPREDICTABLE_GAS_LIMIT"`

#### `UNSUPPORTED_OPERATION`

- **Type**: `string`
- **Default**: `"UNSUPPORTED_OPERATION"`

### `formatEther(value, options)`

### `idprefix(errorCallString)`

### `wait(transaction)`

<!-- /automd -->

## Directory structure

<!-- automd:dir-tree src="./src" maxDepth=2 -->

```
├── constants.ts
├── hash.ts
├── index.ts
├── number.ts
└── wait.ts
```

<!-- /automd -->

## Source

<!-- automd:file src="./src/index.ts" code lang="ts" -->

```ts [index.ts]
export * from './constants'
export * from './hash'
export * from './number'
export * from './wait'
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
