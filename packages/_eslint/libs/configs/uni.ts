import { Linter } from 'eslint'
export const uni: Linter.Config = {
  globals: {
    uni: true,
    wx: true,
    plus: true,
    getApp: true,
    UniApp: true
  }
}
