import { generateArray } from '@tuimao/core'
const plugin = require('tailwindcss/plugin')

export const lineClampPlugin = () => {
  return plugin(({ addUtilities, theme }: any) => {
    const newUtils = generateArray(1, theme('line-clamp') || 4).reduce((total, value) => {
      total[`.line-clamp-${value}`] = {
        '-webkit-line-clamp': `${value}`
      }
      return total
    }, {} as Record<string, any>)
    newUtils['.truncate-clamp'] = {
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden'
    }
    addUtilities(newUtils)
  })
}
