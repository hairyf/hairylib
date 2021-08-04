/*
 * @Author: Mr.Mao
 * @Date: 2021-07-13 13:55:57
 * @LastEditTime: 2021-07-14 14:54:49
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
/*
 * @Author: Mr.Mao
 * @Date: 2021-07-13 13:55:57
 * @LastEditTime: 2021-07-13 14:09:06
 * @Description: 
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { cloneDeep } from 'lodash-es'
import { RouteRecordRaw } from 'vue-router'
import { calculRouterActive } from '..'
import baseRoutes from './mock'
describe('calculRouterActive', () => {
  
  it('completePath Integrity', () => {
    const routes: RouteRecordRaw[] = [
      {
        path: '/home',
        component: {},
        children: [{ path: 'index', component: {} }]
      }
    ]
    calculRouterActive(routes)
    expect(routes[0].children[0].meta.completePath).toMatch('/home/index')
  })

  it('pathMaps Integrity', () => {
    const children: RouteRecordRaw[] = [
      { path: 'A2', component: {} },
    ]
    const routes: RouteRecordRaw[] = [
      {
        path: '/A0',
        component: {},
        children: [
          { path: 'A1', component: {}, children: cloneDeep(children) },
          { path: 'B1', component: {}, children: cloneDeep(children) },
        ]
      },
      {
        path: '/A--',
        component: {},
        children: [
          { path: 'A1', component: {}, children: cloneDeep(children) },
          { path: 'B1', component: {}, children: cloneDeep(children) },
        ]
      }
    ]
    calculRouterActive(routes)
    const deepLevelRoute = routes[0].children[0].children[0]
    const equalValue = ['/A0', '/A0/A1', '/A0/A1/A2']
    expect(deepLevelRoute.meta.pathMaps).toEqual(equalValue)
  })

  it('pathMaps complex Integrity', () => {
    const routes = cloneDeep(baseRoutes)
    calculRouterActive(routes)
    const deepLevelRoute = routes[0].children[2].children[0]
    const equalValue = ['/shop', '/shop/materialCenter', '/shop/materialCenter/material']
    expect(deepLevelRoute.meta.pathMaps).toEqual(equalValue)
  })
  
})