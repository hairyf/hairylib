import { isNull } from 'lodash'

export type ReaderType = 'readAsArrayBuffer' | 'readAsBinaryString' | 'readAsDataURL' | 'readAsText'
/**
 * 读取 File 文件
 * @param formType 转换形式
 * @param file 文件
 */
export const readFileReader = <T extends ReaderType>(formType: T, file: File) => {
  type ResultType = T extends 'readAsArrayBuffer' ? ArrayBuffer : string
  return new Promise<ResultType>((resole, reject) => {
    if (typeof FileReader === 'undefined') {
      console.warn('当前环境不支持使用 FileReader Api')
      return reject()
    }
    const reader = new FileReader()
    reader[formType](file)
    reader.onloadend = function () {
      if (isNull(this.result)) reject()
      else resole(this.result as ResultType)
    }
  })
}
