---
title : 'Handle Color'
category: 'utils'
---

# @hairy/utils - color

颜色的混合与转换

## Usage


### colourBlend

```typescript

import { colourBlend } from '@hairy/utils'

/**
 * 颜色混合器 - 仅支持 hex 颜色完整值
 * @param colorOne 颜色值
 * @param colorTwo 颜色值
 * @param ratio 根据 colorTwo 混合比例, 0~1 区间, 1 则是完全的 colorTwo
 * @returns 混合颜色
 */
colourBlend('#ff0000', '#3333ff', 0.5) // "#991a80"
```

### hexToRgba

```typescript
import { hexToRgba } from '@hairy/utils'
/**
 * 将 hex 颜色转成 rgb
 * @param hex
 * @param opacity
 * @returns rgba String
 */
hexToRgba('#000000', 0.5).rgba // rgba(0, 0, 0, 0.5)
```

### fuseThemeColor

```typescript
import { fuseThemeColor } from '@hairy/utils'

/**
 * 根据颜色融合出黑色与白色, 透明度色
 * @param color
 */
fuseThemeColor('#000000')
/* 
  'light-2': string;
  'light-4': string;
  'light-6': string;
  'light-8': string;
  'dark-2': string;
  'dark-4': string;
  'dark-6': string;
  'dark-8': string;
  'opacity-2': string;
  'opacity-4': string;
  'opacity-6': string;
  'opacity-8': string;
*/
```