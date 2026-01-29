---
name: core-type-checking
description: Runtime type detection and validation utilities
---

# Type Checking

## Usage

### Environment Detection

```typescript
import { isBrowser, isIOS, isAndroid, isMobile } from '@hairy/utils'

if (isBrowser()) {
  // Browser environment
}

if (isIOS()) {
  // iOS device
}

if (isAndroid()) {
  // Android device
}

if (isMobile()) {
  // Mobile device (any platform)
}
```

### Browser Detection

```typescript
import { isChrome, isFF, isIE, isEdge } from '@hairy/utils'

if (isChrome()) {
  // Chrome browser
}

if (isFF()) {
  // Firefox browser
}

if (isIE()) {
  // Internet Explorer
}

if (isEdge()) {
  // Microsoft Edge
}
```

### Value Type Checking

```typescript
import { isTruthy, isFormData, isWindow } from '@hairy/utils'

// Type guard for truthy values
const value: string | null = getValue()
if (isTruthy(value)) {
  // value is now NonNullable<string>
  console.log(value.toUpperCase())
}

// FormData detection
if (isFormData(data)) {
  // data is FormData
}

// Window object detection
if (isWindow(obj)) {
  // obj is Window
}
```

## Key Points

* **Environment checks**: `isBrowser()`, `isWeex()`, `isIOS()`, `isAndroid()`, `isMobile()`.
* **Browser checks**: `isChrome()`, `isFF()`, `isIE()`, `isIE9()`, `isIE11()`, `isEdge()`, `isPhantomJS()`.
* **Type guards**: `isTruthy()` narrows to `NonNullable<T>`, useful for filtering null/undefined.
* **Special types**: `isFormData()`, `isWindow()` for specific object types.
* **All functions**: Return boolean values and can be used in conditionals or as type guards.
