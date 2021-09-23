import { RouteRecordRaw } from 'vue-router'

/*
 * @Author: Mr.Mao
 * @Date: 2021-07-14 14:47:27
 * @LastEditTime: 2021-07-14 14:49:47
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/shop',
    component: {},
    meta: { title: '店铺', icon: 'nr-shop' },
    children: [
      {
        path: 'myShop',
        component: {},
        meta: { title: '我的店铺' }
      },
      {
        path: 'template',
        component: {},
        meta: { title: '模板管理' }
      },
      {
        path: 'materialCenter',
        component: {},
        meta: { title: '素材中心' },
        children: [
          {
            path: 'material',
            component: {},
            meta: { title: '素材' }
          },
          {
            path: 'recovery',
            component: {},
            meta: { title: '回收站' }
          }
        ]
      },
      {
        path: 'fictitious',
        component: {},
        meta: { title: '虚拟会员', hidden: true }
      }
    ]
  },
  {
    path: '/commodity',
    component: {},
    meta: { title: '商品', icon: 'nr-shop' },
    children: [
      {
        path: 'admin',
        component: {},
        meta: { title: '商品管理' }
      },
      {
        path: 'addGoods',
        component: {},
        meta: { title: '新增商品', hideen: true }
      },
      {
        path: 'classification',
        component: {},
        meta: { title: '商品分类' }
      }
    ]
  }
]

export default routes
