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
    if (!path.isAbsolute(output)) {
      output = path.resolve(process.cwd(), output)
    }
    return {
      output,
      input: path.resolve(__dirname, './template/base')
    }
  }
}
