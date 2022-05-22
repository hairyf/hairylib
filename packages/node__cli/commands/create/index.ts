import { Select, Confirm } from 'enquirer'
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

    await config.created?.()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
