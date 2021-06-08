/*
 * @Author: Mr.Mao
 * @Date: 2021-05-17 17:15:30
 * @LastEditTime: 2021-05-31 11:35:59
 * @Description: 背景配置
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
module.exports = {
  /**
   * 背景图片配置 class="bg-[key]"
   * @template {none: 'none'}
   * @template {'gradient-to-t': 'linear-gradient(to top, var(--gradient-stops))'}
   * @template {'hero-pattern': "url('/img/hero-pattern.svg')"}
   * @link https://www.tailwindcss.cn/docs/background-image
   */
  extend: {
    backgroundImage: {
      'auth-login': `url(${'@/assets/img/user/user-auth-bg.png'})`,
      'auth-login-1': `url(${'@/assets/img/user/user-auth-bg-1.png'})`,
      'set-meal': `url(${'@/assets/img/background/set-meal.png'})`
    }
  }
}
