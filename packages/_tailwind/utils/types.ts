import { DeepPartial, DeepReplace } from '@tuimao/core'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
/** 修复 CorePlugins 类型 start */
type CorePlugins =
  | {
      [key in TailwindConfig['corePlugins'][number]]?: boolean
    }
  | TailwindConfig['corePlugins']

type PartialConfig = DeepPartial<TailwindConfig>
type FixCorePlugins = DeepReplace<PartialConfig, 'corePlugins', CorePlugins>
export type DefineConfig = FixCorePlugins
/** 修复 CorePlugins 类型 end */
