/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-12 10:30:06
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-12 10:39:08
 */

export const getCommitlintEnum = (file: string) => {
  const options = {
    read: false,
    config: {} as any
  }
  try {
    options.config = require(file)
    options.read = true
  } catch {}
  const defaultEnum = ['upd', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']
  return defaultEnum
}
