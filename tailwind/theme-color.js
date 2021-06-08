const { red } = require('tailwindcss/colors')

/*
 * @Author: Mr.Mao
 * @Date: 2021-05-17 17:15:30
 * @LastEditTime: 2021-06-01 09:41:32
 * @Description: 背景配置
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
module.exports = {
  /**
   * 背景图片配置 class="bg-[key]"
   * @template 
   * [key]: {
      darkest: '',  // 最暗
      dark: '',     // 暗
      darkmin:'',   // 一点点暗
      DEFAULT: '',  // 默认
      lightmin:'',  // 一点亮
      light: '',    // 亮
      lightest: ''  // 最亮
    }
   * @link https://www.tailwindcss.cn/docs/background-image
   */
  colors: {
    transparent: 'transparent',
    background: 'var(--background)',
    primary: {
      DEFAULT: 'var(--color-primary)',
      solid: 'var(--color-solid)',
      hollow: 'var(--color-hollow)',
      'tab-bar': 'var(--color-tab-bar)',
      'light-1': 'var(--color-primary-light-1)',
      'light-2': 'var(--color-primary-light-2)',
      'light-3': 'var(--color-primary-light-3)',
      'light-4': 'var(--color-primary-light-4)',
      'light-5': 'var(--color-primary-light-5)',
      'light-6': 'var(--color-primary-light-6)',
      'light-7': 'var(--color-primary-light-7)',
      'light-8': 'var(--color-primary-light-8)',
      'light-9': 'var(--color-primary-light-9)',
      'dark-1': 'var(--color-primary-dark-1)',
      'dark-2': 'var(--color-primary-dark-2)',
      'dark-3': 'var(--color-primary-dark-3)',
      'dark-4': 'var(--color-primary-dark-4)',
      'dark-5': 'var(--color-primary-dark-5)',
      'dark-6': 'var(--color-primary-dark-6)',
      'dark-7': 'var(--color-primary-dark-7)',
      'dark-8': 'var(--color-primary-dark-8)',
      'dark-9': 'var(--color-primary-dark-9)',
      'light-opacity-1': 'var(--color-primary-light-opacity-1)',
      'light-opacity-2': 'var(--color-primary-light-opacity-2)',
      'light-opacity-3': 'var(--color-primary-light-opacity-3)',
      'light-opacity-4': 'var(--color-primary-light-opacity-4)',
      'light-opacity-5': 'var(--color-primary-light-opacity-5)',
      'light-opacity-6': 'var(--color-primary-light-opacity-6)',
      'light-opacity-7': 'var(--color-primary-light-opacity-7)',
      'light-opacity-8': 'var(--color-primary-light-opacity-8)',
      'light-opacity-9': 'var(--color-primary-light-opacity-9)'
    },
    red: {
      DEFAULT: '#FF0000'
    },
    blue: {
      DEFAULT: '#558BF7'
    },
    white: {
      darkest: '', // 最暗
      dark: '', // 暗
      darkmin: '#F2F6FA', // 一点点暗
      DEFAULT: '#FFFFFF' // 默认
    },
    black: {
      DEFAULT: '#000000'
    },
    grey: {
      darkest: '#C4C4C4', //最暗
      dark: '#777777', //暗
      darkmin: '#8C8C8C', //一点点暗
      DEFAULT: '#999999', //默认
      lightmin: '', //一点亮
      light: '#D9D9D9', //亮
      lightest: '#F5F5F5' //最亮
    }
  }
}
