import { Select } from 'enquirer'
import execa from 'execa'

export const install = async (output: string) => {
  const selectInstallUtils = new Select({
    message: '✨ 创建模板成功！是否使用以下工具安装依赖？',
    choices: ['npm', 'yarn', 'pnpm', 'none']
  })
  const utils = await selectInstallUtils.run()
  if (utils === 'none') return undefined
  execa.sync(`${utils} install`, { cwd: output, stdio: 'inherit' })
}
