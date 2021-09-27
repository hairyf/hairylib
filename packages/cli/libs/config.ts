import path from 'path'
interface ProjectItem {
  input: string
  options?: Record<string, any>
  includes?: string[]
}
interface ProjectOptions {
  [key: string]: (outpath: string) => Promise<ProjectItem> | ProjectItem
}

export const projectOptions: ProjectOptions = {
  basic: async (output) => {
    if (output == '.') {
      output = process.cwd()
    }
    return {
      output,
      input: path.resolve(__dirname, './template/base')
    }
  }
}
