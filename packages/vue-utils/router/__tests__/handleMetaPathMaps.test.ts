/*
 * @Author: Mr.Mao
 * @Date: 2021-07-13 13:55:57
 * @LastEditTime: 2021-08-06 11:14:15
 * @Description:
 * @LastEditors: Zhilong
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
import { handleMetaPathMaps } from '..'
import baseRoutes from './mock'
describe('handleMetaPathMaps', () => {
  it('completePath Integrity', () => {
    const routes: RouteRecordRaw[] = [
      {
        path: '/home',
        component: {},
        children: [{ path: 'index', component: {} }]
      }
    ]
    handleMetaPathMaps(routes)
    expect(routes[0].children![0]!.meta!.completePath).toMatch('/home/index')
  })

  it('pathMaps Integrity', () => {
    const children: RouteRecordRaw[] = [{ path: 'A2', component: {} }]
    const routes: RouteRecordRaw[] = [
      {
        path: '/A0',
        component: {},
        children: [
          { path: 'A1', component: {}, children: cloneDeep(children) },
          { path: 'B1', component: {}, children: cloneDeep(children) }
        ]
      },
      {
        path: '/A--',
        component: {},
        children: [
          { path: 'A1', component: {}, children: cloneDeep(children) },
          { path: 'B1', component: {}, children: cloneDeep(children) }
        ]
      }
    ]
    handleMetaPathMaps(routes)
    const deepLevelRoute = routes[0]!.children![0]!.children![0]
    const equalValue = ['/A0', '/A0/A1', '/A0/A1/A2']
    expect(deepLevelRoute!.meta!.pathMaps).toEqual(equalValue)
  })

  it('pathMaps complex Integrity', () => {
    const routes = cloneDeep(baseRoutes)
    handleMetaPathMaps(routes)
    const deepLevelRoute = routes[0].children![2].children![0]
    const equalValue = ['/shop', '/shop/materialCenter', '/shop/materialCenter/material']
    expect(deepLevelRoute.meta!.pathMaps).toEqual(equalValue)
  })
})
