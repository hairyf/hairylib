import { chooseFile } from '../chooseFile'

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
export const chooseImage = (options: ChooseImageOptions = {}) => {
  const { multiple = true } = options
  return chooseFile({ multiple, accept: 'image/jpeg,image/x-png,image/gif' })
}

/** @deprecated use chooseFile */
export const selectImages = chooseImage
