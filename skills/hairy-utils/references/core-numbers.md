---
name: core-numbers
description: BigNumber operations, formatting, and calculations
---

# Number Utilities

## Usage

### BigNumber Operations

```typescript
import { bignumber, gte, gt, lte, lt } from '@hairy/utils'

// Create BigNumber instance
const num = bignumber('123.456')

// Comparisons
gte('100', '50') // true
gt('100', '50')  // true
lte('50', '100') // true
lt('50', '100')  // true
```

### Array Calculations

```typescript
import { plus, multiply, divide, average, percentage } from '@hairy/utils'

// Sum array of numbers
plus(['1.1', '2.2', '3.3']) // '6.6'

// Multiply array
multiply(['2', '3', '4']) // '24'

// Divide array (1 / a / b / c)
divide(['2', '4']) // '0.125'

// Average
average(['10', '20', '30']) // '20'

// Percentage
percentage('100', '25') // '25.000'
```

### Number Formatting

```typescript
import { formatNumeric, integer, decimal, zerofill, zeroRemove } from '@hairy/utils'

// Format with thousand separators and units
formatNumeric('1234567', {
  delimiters: ['k', 'm'],
  decimals: 2
}) // '1.23m'

// Integer conversion
integer('123.456') // '123'

// Decimal places
decimal('123.456', 2) // '123.45'

// Zero fill
zerofill('5', 2) // '05'

// Remove trailing zeros
zeroRemove('123.4500') // '123.45'
```

## Key Points

* **BigNumber**: All operations use BigNumber.js internally to avoid floating-point precision issues.
* **String inputs**: Most functions accept `Numberish` (string, number, or BigNumber) for precision.
* **Default config**: ROUND_UP mode, 6 decimal places. Use `bignumber.clone()` to customize.
* **Array operations**: `plus()`, `multiply()`, `divide()` operate on arrays, filtering out non-positive values where applicable.
* **Formatting**: `formatNumeric()` supports delimiters (k/m/b/t), rounding modes, and decimal control.
* **Precision**: Always use string inputs for financial calculations to avoid precision loss.
