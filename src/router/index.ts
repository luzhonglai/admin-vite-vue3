import { router } from '@/router'
/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-23 00:38:41
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

export default router
