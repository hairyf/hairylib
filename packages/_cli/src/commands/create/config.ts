/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2021-12-06 18:13:53
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-01-21 13:20:54
 */
import path from 'path'
interface ProjectItem {
  input: string
  output: string
  options?: Record<string, any>
  includes?: string[]
}
interface ProjectOptions {
  [key: string]: (outpath: string) => Promise<ProjectItem> | ProjectItem
}

export const projectOptions: ProjectOptions = {
  basic: async (output) => {
    const input = path.resolve(__dirname, './template/basic')
    if (!path.isAbsolute(output)) {
      output = path.resolve(process.cwd(), output)
    }
    return { output, input }
  }
}
