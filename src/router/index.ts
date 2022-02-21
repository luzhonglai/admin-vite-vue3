import { router } from '@/router'
/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-21 00:05:30
 * @FilePath: /admin-vite/src/router/index.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import routes from 'virtual:generated-pages'

routes.push({
  path: '/',
  redirect: '/test',
})

const router = createRouter({
  history: createWebHistory(), // hash history   注意 # 和根/
  routes,
})

console.log('🚀 ~ file: index.ts ~ line 26 ~ routes', routes)

export default router
