export interface ChooseFileOptions {
  /**
   * 是否多选文件
   */
  multiple?: boolean
  /**
   * 选择文件的默认格式
   */
  accept?: string
}
/**
 * 选择多个文件
 * @param option.multiple 是否多选
 * @param option.accept 文件类型(accept)
 */
export const chooseFile = (option: ChooseFileOptions = {}) => {
  const { multiple = true, accept } = option
  return new Promise<File[]>((resolve, reject) => {
    const inputElement = document.createElement('input')
    inputElement.type = 'file'
    inputElement.multiple = multiple
    accept && (inputElement.accept = accept)
    inputElement.click()
    const timer = setTimeout(reject, 20 * 1000)
    inputElement.addEventListener('change', function () {
      if (this.files) {
        resolve(Object.values(this.files))
        clearTimeout(timer)
      }
    })
  })
}
/** @deprecated use chooseFile */
export const selectFiles = chooseFile
