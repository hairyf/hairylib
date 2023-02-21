---
category: '@libcore'
---

# Universal

多端通用的工具

## Install

```
pnpm add -D @hairy/libcore
```

## Usage Functions

### setQueryParams(url, params)

设置 URL 的参数内容

```typescript
setQueryParams('xxx', { aaa: 123, bbb: true }) // xxx?aaa=123&bbb
```

### delay(milliseconds, options?)

延迟指定的时间

```typescript
await delay(1000) // 1000 Create a promise which resolves after the specified milliseconds.
// delay.reject(milliseconds, options?)
// delay.range(minimum, maximum, options?)
```

### pipe

管道函数，类似与 `a | b | c | pipe(process.stdout)

```typescript
const call = pipe(
  (n) => n + 1,
  (n) => n + 1,
  (n) => n + 1,
  (n) => n + 1,
)
call(1) // 5
```

### pPipe

将 promise 和 async 函数组合成一个可重用的管道，并且类型完整

```typescript
const call = pPipe(
  async (n) => n + 1,
  async (n) => n + 1,
  async (n) => n + 1,
  async (n) => n + 1,
)
await call(1) // 5
```

### compose

跟 pipe差不多，但反向的调用

```typescript
const call = compose(
  (n) => n - 1,
  (n) => n - 1,
  (n) => n - 1,
  () => 50,
)
call() // 47
```

### arange

生成 min-max 的区间数值数组

```typescript
arange(0, 10) // [0, 1, 2, 3..., 10]
```