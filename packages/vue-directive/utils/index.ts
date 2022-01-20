/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-20 18:51:52
 */
export type DirectiveConfig = Partial<typeof directiveOptions>

/**
 * 命令配置
 */
export const directiveOptions = {
  permissions: [] as string[]
}

/**
 * 定义命令配置
 * @param options {DirectiveConfig}
 */
export const defineDirectiveConfig = (options: DirectiveConfig = {}) => {
  for (const [key, value] of Object.entries(options)) {
    ;(directiveOptions as any)[key] = value
  }
}
