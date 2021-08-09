import { merge } from 'lodash'
import { DefineConfig } from '../dist'

const tailwindPresets: DefineConfig = require('tailwindcss/stubs/defaultConfig.stub.js')
;(tailwindPresets as any).theme.spacing = {}
tailwindPresets

export const defaultPresets = merge(tailwindPresets, <DefineConfig>{
  theme: {
    colors: {
      pink: { DEFAULT: 'pink' },
      fuchsia: { DEFAULT: 'fuchsia' },
      purple: { DEFAULT: 'purple' },
      violet: { DEFAULT: 'violet' },
      blue: { DEFAULT: 'blue' },
      lightBlue: { DEFAULT: 'lightblue' },
      sky: { DEFAULT: 'sky' },
      cyan: { DEFAULT: 'cyan' },
      green: { DEFAULT: 'green' },
      lime: { DEFAULT: 'lime' },
      yellow: { DEFAULT: 'yellow' },
      orange: { DEFAULT: 'orange' },
      red: { DEFAULT: 'red' },
      gray: { DEFAULT: 'gray' }
    },
    boxShadow: {
      DEFAULT: '0px 0px 10px rgba(0, 0, 0, 0.05), 0px 0px 20px rgba(0, 0, 0, 0.02)'
    },
    height: (theme: any) => ({
      ...theme('spacing'),
      ...percentage,
      min: 'min-content',
      max: 'max-content',
      screen: '100vh'
    }),
    minWidth: (theme: any) => ({
      ...theme('spacing'),
      ...percentage,
      min: 'min-content',
      max: 'max-content',
      screen: '100vw'
    }),
    maxWidth: (theme: any) => ({
      ...theme('spacing'),
      ...percentage,
      min: 'min-content',
      max: 'max-content',
      screen: '100vw'
    }),
    minHeight: (theme: any) => ({
      ...theme('spacing'),
      ...percentage,
      min: 'min-content',
      max: 'max-content',
      screen: '100vh'
    }),
    maxHeight: (theme: any) => ({
      ...theme('spacing'),
      ...percentage,
      min: 'min-content',
      max: 'max-content',
      screen: '100vh'
    })
  }
})
/** 百分比尺寸 */
export const percentage = {
  full: '100%',
  auto: 'auto',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%'
}
