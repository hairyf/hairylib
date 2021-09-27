#!/usr/bin/env node
import cac from 'cac'
import { Select, Confirm } from 'enquirer'
import { projectOptions } from '../config'
import { createTemplate } from 'templa-cli'

const cli = cac('templa-cli')

cli.command('create <app-name>', 'create project to app-name dir').action(async (output) => {
  const selectPrompt = new Select({
    name: 'template',
    message: '选择创建的模板',
    choices: Object.keys(projectOptions)
  })
  const confirmPrompt = new Confirm({
    message: '确定要在当前目录创建吗?'
  })
  try {
    if (/[./\\]/.test(output) && !(await confirmPrompt.run())) {
      return
    }
    const type = await selectPrompt.run()
    const config = await projectOptions[type](output)
    createTemplate(config)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})

cli.help()
cli.parse()
