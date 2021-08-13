import { Linter } from 'eslint'
/**
 * @author: Mr.Mao
 * @description: UniApp eslint options
 */
export const uni: Linter.Config = {
  globals: {
    uni: true,
    wx: true,
    plus: true,
    getApp: true,
    UniApp: true
  }
}
