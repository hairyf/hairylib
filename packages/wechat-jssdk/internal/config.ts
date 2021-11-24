import { DefineEnvMode } from '../../common/define/types'

/** 环境对于渠道的 appid */
export const envSourceAppidMap = new Map<keyof typeof DefineEnvMode, string>([
  [DefineEnvMode.dev, 'wx5dc26b8cec8387a0'],
  [DefineEnvMode.stage, 'wx5dc26b8cec8387a0'],
  [DefineEnvMode.stage1, 'wx5dc26b8cec8387a0'],
  [DefineEnvMode.uat, 'wx5dc26b8cec8387a0'],
  [DefineEnvMode.prod, 'wx74d14f37adcc5070']
])

/** 环境对于接口的 apiHost */
export const envApiHostMap = new Map<keyof typeof DefineEnvMode, string>([
  [DefineEnvMode.dev, 'https://api.caesar.dev.wegton.com'],
  [DefineEnvMode.stage, 'https://janus-stage.tenclass.com/wx-openplatform'],
  [DefineEnvMode.stage1, 'https://janus-stage.tenclass.com/wx-openplatform'],
  [DefineEnvMode.uat, 'https://janus-uat.tenclass.com/wx-openplatform'],
  [DefineEnvMode.prod, 'https://janus.tenclass.com/wx-openplatform']
])
