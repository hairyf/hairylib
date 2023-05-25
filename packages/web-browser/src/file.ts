/* eslint-disable prefer-promise-reject-errors */
import isNull from 'lodash/isNull'

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
export function chooseFile(option: ChooseFileOptions = {}) {
  const { multiple = true, accept } = option
  return new Promise<File[]>((resolve, reject) => {
    const inputElement = document.createElement('input')
    inputElement.type = 'file'
    inputElement.multiple = multiple
    accept && (inputElement.accept = accept)
    inputElement.click()
    const timer = setTimeout(reject, 20 * 1000)
    inputElement.addEventListener('change', (event) => {
      const files = (event.target as HTMLInputElement).files as FileList
      if (files) {
        resolve(Object.values(files))
        clearTimeout(timer)
      }
    })
  })
}

export interface ChooseImageOptions {
  /**
   * 是否多选图片
   */
  multiple?: boolean
}

/**
 * 选择多个图片
 * @param multiple 是否多选
 */
export function chooseImage(options: ChooseImageOptions = {}) {
  const { multiple = true } = options
  return chooseFile({ multiple, accept: 'image/jpeg,image/x-png,image/gif' })
}

/** @deprecated use chooseFile */
export const selectImages = chooseImage

/**
 * 生成 blob|string 文件，并下载
 * @param data blob 数据，或者字符串
 * @param name 文件名称
 */
export function downloadBlobFile(data: Blob | string, name: string) {
  const blob = new Blob([data])
  const link = document.createElement('a')
  const url = window.URL.createObjectURL(blob)
  link.href = url
  link.download = name
  link.click()
}

/**
 * 下载网络文件
 * @param url 下载地址
 * @param fileName 文件名称
 */
export function downloadNetworkFile(url: string, fileName?: string) {
  const a = document.createElement('a')
  fileName && (a.download = fileName)
  a.href = url
  a.click()
}

export type ReaderType = 'readAsArrayBuffer' | 'readAsBinaryString' | 'readAsDataURL' | 'readAsText'
/**
 * 读取 File 文件
 * @param formType 转换形式
 * @param file 文件
 */
export function readFileReader<T extends ReaderType>(formType: T, file: File) {
  type ResultType = T extends 'readAsArrayBuffer' ? ArrayBuffer : string
  return new Promise<ResultType>((resolve, reject) => {
    if (typeof FileReader === 'undefined') {
      console.warn('当前环境不支持使用 FileReader Api')
      reject()
    }
    const reader = new FileReader()
    reader[formType](file)
    reader.onloadend = function () {
      if (isNull(this.result))
        reject()
      else resolve(this.result as ResultType)
    }
  })
}
