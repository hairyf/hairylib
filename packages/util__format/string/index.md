---
category: '@format'
---

# String

字符串的处理。

## Usage Functions

### cover

截取前后字符，隐藏中间的字符。


```typescript
// [0] 前截取多少位 [1] symbol 复制多少份 [2] 后截取多少位
cover(11111111, [2, 4, 2]) // 11****11
```