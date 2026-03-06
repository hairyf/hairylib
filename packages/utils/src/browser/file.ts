/* eslint-disable prefer-promise-reject-errors */

export interface OpenFilePickerOptions {
  /**
   * select multiple files
   */
  multiple?: boolean
  /**
   * Choose the default format for the file
   */
  accept?: string
}
/**
 * Select multiple files
 */
export function openFilePicker(option: OpenFilePickerOptions = {}) {
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

/** @deprecated use openFilePicker */
export const showOpenFilePicker = openFilePicker

export interface OpenImagePickerOptions {
  /**
   * select multiple images
   */
  multiple?: boolean
}

/**
 * Select multiple images
 */
export function openImagePicker(options: OpenImagePickerOptions = {}) {
  const { multiple = true } = options
  return openFilePicker({ multiple, accept: 'image/jpeg,image/x-png,image/gif' })
}

/** @deprecated use openImagePicker */
export const selectImages = openImagePicker
export const showOpenImagePicker = openImagePicker

/**
 * Generate Blob | string file and download it
 * @param data Blob data, or string
 * @param name file name
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
 * Download network files
 * @param url Download link
 * @param name file name
 */
export function downloadUrlFile(url: string, name?: string) {
  const a = document.createElement('a')
  name && (a.download = name)
  a.href = url
  a.click()
}

/** @deprecated use downloadUrlFile */
export const downloadNetworkFile = downloadUrlFile

export type ReaderType = 'readAsArrayBuffer' | 'readAsBinaryString' | 'readAsDataURL' | 'readAsText'
/**
 * Read File file
 * @param formType Transform type
 * @param file file object
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
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      isNull(this.result) ? reject() : resolve(this.result)
    }
  })
}
