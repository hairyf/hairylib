import { Select, Confirm } from 'enquirer'
import execa from 'execa'
import { createTemplate } from 'templa-cli'
import { projectOptions } from './config'

export const actionCreateTemplate = async (output: string) => {
  const selectPrompt = new Select({
    message: '选择创建的模板',
    choices: Object.keys(projectOptions)
  })
  const confirmCurrentPath = new Confirm({
    message: '🤔 确定要在当前目录创建吗?'
  })
  try {
    if (/[./\\]/.test(output) && !(await confirmCurrentPath.run())) {
      return
    }

    const type = await selectPrompt.run()
    const config = await projectOptions[type](output)

    // ------------------ render template ------------------
    await createTemplate(config)
    // ------------------ render template ------------------

    // ----------------------- install ---------------------
    const selectInstallUtils = new Select({
      message: '✨ 创建模板成功！是否使用以下工具安装依赖？',
      choices: ['npm', 'yarn', 'none']
    })
    const utils = await selectInstallUtils.run()
    if (utils === 'none') {
      return undefined
    }
    execa.sync(`${utils} install`, { cwd: config.output, stdio: 'inherit' })
    // ----------------------- install ---------------------
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
