import baseConfig from '../config-base'
import { merge } from 'lodash'
import { spacing } from '@hairy/share'

const defaultConfig = merge(baseConfig, {
  theme: {
    /**
     * 断点配置 class="sm:text-center"
     * @template {sm: '640px'}
     * @link https://www.tailwindcss.cn/docs/breakpoints
     */
    screens: {
      xs: { min: '0' },
      sm: { min: '576px' },
      md: { min: '768px' },
      lg: { min: '992px' },
      xl: { min: '1200px' },
      xxl: { min: '1600px' },
      xxxl: { min: '1920px' }
    },
    spacing: spacing(2000)
  }
})

export default defaultConfig
