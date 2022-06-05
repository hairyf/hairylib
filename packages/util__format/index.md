---
category: 'Universal Utils'
---

# String / Number

数值的处理

## Install

```
pnpm add -D @hairy/format
```

## Usage Functions

### prefixZero

数字位数不够时，进行前补零

```typescript
prefixZero(20, 3, { type: 'positive' }) // 020
prefixZero(20, 3, { type: 'reverse' })  // 200
```

### integer

格式化为正整数

```typescript
integer(1.0010101) // 1
integer('442.33')  // 442
integer('ada0')    // 0
```

## keepDecimal

保留 lh 位小数点

```typescript
keepDecimal('223'))           // '223.00'
keepDecimal('223.4421'))      // '223.44'
keepDecimal('223.1'))         // '223.10'
keepDecimal('223.100000', 6)) // '223.100000'
```

## thousandBitSeparator

格式化数字千位分隔符

```typescript
thousandBitSeparator('123456789'))                                     //'123,456,789'
thousandBitSeparator('123456789.123456789'))                           //'123,456,789.123,456,789'
thousandBitSeparator('123456789.123456789', ',', { decimal: false }))  //'123,456,789.123456789'
thousandBitSeparator('123456789.123456789', ',', { integer: false }))  //'123456789.123,456,789'
```