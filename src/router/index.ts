import { setupLayouts } from 'virtual:setupRouter'
/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @LastEditTime: 2024-05-30 01:46:44
 * @FilePath: \admin-vite-vue3\src\router\index.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import { createRouter, createWebHistory } from 'vue-router'

// import getRoutes from 'virtual:generated-pages'
// import { setupLayouts } from 'virtual:generated-layouts'
// const routes = setupLayouts(getRoutes)

// debugger
const router = createRouter({
  history: createWebHistory(), // hash history   注意 # 和根/
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/test.vue'),
      meta: {
        title: 'demo',
      },
    },
    {
      name: 'time',
      path: '/time',
      component: () => import('@/pages/time/time.vue'),
      meta: {
        title: 'time',
      },
    },
  ],
})

export default router
