import path from 'path'
import { Select, prompt } from 'enquirer'
import { install } from './utils'

interface Project {
  input: string
  output: string
  options?: Record<string, any>
  includes?: string[]
  created?: () => any | Promise<any>
}
interface ProjectOptions {
  [key: string]: (outPath: string) => Promise<Project> | Project
}

export const projectOptions: ProjectOptions = {
  basic: async (output) => {
    const input = path.resolve(__dirname, './template/basic')
    const created = () => install(output)
    return { output, input, created }
  },
  hairy: async (output) => {
    const input = path.resolve(__dirname, './template/hairy')
    const { name } = await prompt({
      type: 'input',
      name: 'name',
      message: `请输入名称`
    })
    const type = await new Select({
      message: '✨ 选择子项目类型',
      choices: ['node', 'node-universal', 'universal']
    }).run()
    const options = { type, name }
    return { output, input, options }
  }
}
