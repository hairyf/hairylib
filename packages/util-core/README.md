# @hairy/utils

<!-- automd:badges name="@hairy/utils" github="hairyf/hairylib" license bundlephobia -->

[![npm version](https://img.shields.io/npm/v/@hairy/utils)](https://npmjs.com/package/@hairy/utils)
[![npm downloads](https://img.shields.io/npm/dm/@hairy/utils)](https://npm.chart.dev/@hairy/utils)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@hairy/utils)](https://bundlephobia.com/package/@hairy/utils)
[![license](https://img.shields.io/github/license/hairyf/hairylib)](https://github.com/hairyf/hairylib/blob/main/LICENSE)

<!-- /automd -->

Core utility functions shared across all Hairylib packages.

## Install

<!-- automd:pm-install name="@hairy/utils" -->

```sh
# ✨ Auto-detect
npx nypm install @hairy/utils

# npm
npm install @hairy/utils

# yarn
yarn add @hairy/utils

# pnpm
pnpm add @hairy/utils

# bun
bun install @hairy/utils

# deno
deno install npm:@hairy/utils
```

<!-- /automd -->

## API

<!-- automd:jsdocs src="./src/index.ts" headingLevel="2" -->

### `arange()`

### `average(array, options?)`

### `BIG_INTS`

#### `b`

##### `d`

- **Type**: `number`
- **Default**: `10`

##### `n`

- **Type**: `string`
- **Default**: `"b"`

##### `v`

- **Type**: `number`
- **Default**: `1000000000`

#### `k`

##### `d`

- **Type**: `number`
- **Default**: `4`

##### `n`

- **Type**: `string`
- **Default**: `"k"`

##### `v`

- **Type**: `number`
- **Default**: `1000`

#### `m`

##### `d`

- **Type**: `number`
- **Default**: `7`

##### `n`

- **Type**: `string`
- **Default**: `"m"`

##### `v`

- **Type**: `number`
- **Default**: `1000000`

#### `t`

##### `d`

- **Type**: `number`
- **Default**: `13`

##### `n`

- **Type**: `string`
- **Default**: `"t"`

##### `v`

- **Type**: `number`
- **Default**: `1000000000000`

### `Bignumber()`

### `bignumber(n, base?)`

### `call(fn)`

### `camelCase()`

### `capitalCase()`

### `chunk()`

### `clone()`

### `cloneDeep()`

### `cloneDeepWith()`

### `cloneWith()`

### `compose()`

### `concat()`

### `constantCase()`

### `cover(value, mode, symbol)`

Intercept front and back characters, hide middle characters

### `debounce()`

### `decimal(value, n)`

retain n decimal places

### `DEFAULT_BIGNUM_CONFIG`

#### `DECIMAL_PLACES`

- **Type**: `number`
- **Default**: `6`

#### `ROUNDING_MODE`

- **Type**: `number`
- **Default**: `0`

### `Deferred()`

### `delay(ms)`

Delay for a given number of milliseconds.

**Example:**

```ts
delay(1000).then(() => { console.log('1 second') })

### `dialsPhone(phoneNumber)`

### `divide(array, options?)`

### `dotCase()`

### `downloadBlobFile(data, name)`

Generate Blob | string file and download it

### `downloadNetworkFile(url, name?)`

Download network files

### `downloadUrlFile(url, name?)`

Download network files

### `ensurePrefix(prefix, str)`

Ensure prefix of a string

### `ensureSuffix(suffix, str)`

Ensure suffix of a string

### `find()`

### `formatNumeric(value, options?)`

format number thousand separator and unit

### `formdataToObject(formData)`

formData to object

### `get()`

### `ghost(strictMessage?)`

### `groupBy()`

### `gt(a, b)`

### `gte(a, b)`

### `integer(value)`

format as a positive integer

### `isAndroid()`

### `isArguments()`

### `isArray()`

### `isArrayBuffer()`

### `isArrayLike()`

### `isArrayLikeObject()`

### `isBoolean()`

### `isBrowser()`

### `isBuffer()`

### `isChrome()`

### `isDate()`

### `isEdge()`

### `isElement()`

### `isEmpty()`

### `isEqual()`

### `isEqualWith()`

### `isError()`

### `isFF()`

### `isFormData(value)`

### `isFunction()`

### `isIE()`

### `isIE11()`

### `isIE9()`

### `isInteger()`

### `isIOS()`

### `isMap()`

### `isMatch()`

### `isMatchWith()`

### `isMobile()`

### `isNaN()`

### `isNative()`

### `isNull()`

### `isNumber()`

### `isObject()`

### `isObjectLike()`

### `isPhantomJS()`

### `isPlainObject()`

### `isRegexp()`

### `isSet()`

### `isString()`

### `isSymbol()`

### `isTruthy(value)`

### `isUndefined()`

### `isWeakMap()`

### `isWeakSet()`

### `isWeex()`

### `isWindow(value)`

### `join()`

### `kebabCase()`

### `keyBy()`

### `keys()`

### `loop()`

### `lt(a, b)`

### `lte(a, b)`

### `max()`

### `maxBy()`

### `merge()`

### `mergeWith()`

### `min()`

### `minBy()`

### `multiply(array, options?)`

### `noCase()`

### `nonnanable(value)`

Check if a value is not NaN.

### `noop()`

### `numberify(value)`

Convert a value to a number.

### `numberish(value)`

Convert a value to a numberish value.

### `objectToFormdata(object)`

Object to formData

### `off(obj)`

### `omit()`

### `omitBy()`

### `on(obj)`

### `once()`

### `openFilePicker(option)`

eslint-disable prefer-promise-reject-errors

Select multiple files

### `openImagePicker(options)`

Select multiple images

### `parseNumeric(num, delimiters)`

### `pascalCase()`

### `pascalSnakeCase()`

### `pathCase()`

### `percentage(total, count, options?)`

calculate percentage

### `pick()`

### `pickBy()`

### `pipe()`

### `plus(array, options?)`

### `proxy(initObject?, initExtend?, options?: { strictMessage? })`

eslint-disable ts/no-empty-object-type

Creates a proxy object that updates the original object when the proxy is updated.

**Example:**

```ts
const obj = proxy({ name: 'John' })
console.log(obj.name) // John

obj.proxy.update({ name: 'Jane' })
console.log(obj.name) // Jane

const obj2 = proxy()

obj2.any // Error: Proxy not updated. Call object.proxy.update() to update the proxy.

obj2.proxy.source // undefined
obj2.update({ name: 'John' })

// get the original object
obj2.proxy.source // { name: 'John' }
```

### `randomItem(array)`

Get a random item from an array.

**Example:**

```ts
randomItem(['a', 'b', 'c']) // 'a' | 'b' | 'c'

### `randomNumber(min, max)`

Get a random number between a minimum and maximum value.

**Example:**

```ts
randomNumber(0, 100) // 0-100

### `randomString(size, chars)`

Get a random string of a given size.

**Example:**

```ts
randomString() // 10 characters long
randomString(20) // 20 characters long
randomString(20, 'abcdefghijklmnopqrstuvwxyz') // 20 characters long

### `range()`

### `readFileReader(formType, file)`

Read File file

### `redirectTo(url, target)`

### `riposte()`

Select a value based on a condition.

**Example:**

```ts
select(
 [condition1, value],
 [condition2, value2],
// default value
[true, value3],
 ...
) // value
```

### `select()`

Select a value based on a condition.

**Example:**

```ts
select(
 [condition1, value],
 [condition2, value2],
// default value
[true, value3],
 ...
) // value
```

### `selectImages(options)`

Select multiple images

### `sentenceCase()`

### `set()`

### `shortenId(value, startWith, endWith)`

Shortens an identifier string by showing only the beginning and end portions, with ellipsis in the middle. Suitable for various types of identifiers like IPFS CID, transaction hashes, EVM addresses, user IDs, etc.

### `showOpenFilePicker(option)`

eslint-disable prefer-promise-reject-errors

Select multiple files

### `showOpenImagePicker(options)`

Select multiple images

### `size(dimension, unit?)`

### `slash(str)`

Replace backslash to slash

### `snakeCase()`

### `stringify(value)`

Convert a value to a string.

### `template(str)`

### `to(promise, error?)`

Convert a promise to a tuple of [error, data].

**Example:**

```ts
to(Promise.resolve('data')) // Promise<[null, 'data']>
to(Promise.reject(new Error('error'))) // Promise<[Error, undefined]>
```

### `toArray(value?, required)`

Convert a value to an array.

**Example:**

```ts
toArray(arrorOrItemOrUndefined) // item[] | undefined
toArray(arrayOrItemOrUndefined, true) // item[]
```

### `trainCase()`

### `truncate()`

### `tryParseJson(text)`

### `unindent(str)`

Remove common leading whitespace from a template string. Will also remove empty lines at the beginning and end.

**Example:**

```ts
const str = unindent`
  if (a) {
    b()
  }
`
```

### `uniq()`

### `uniqBy()`

### `uniqWith()`

### `unit(value, unit)`

### `unwrap(value)`

Unwrap a value or a function that returns a value.

**Example:**

```ts
unwrap({ name: 'John' }) // { name: 'John' }
unwrap(() => { return { name: 'John' } }) // { name: 'John' }
```

### `values()`

### `whenever(value, callback)`

Call a callback if a value is not null or undefined.

**Example:**

```ts
whenever(value, (value) => { return 'value' }) // value

### `zerofill(value, n, type)`

leading zeros

### `zeroRemove(value, convert)`

<!-- /automd -->

## Source

<!-- automd:file src="./src/index.ts" code lang="ts" -->

```ts [index.ts]
export * from './browser'
export * from './is'
export * from './module'
export * from './number'
export * from './string'
export * from './typings'
export * from './util'
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
