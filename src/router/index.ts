import { setupLayouts } from 'virtual:setupRouter';
/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-04-01 17:12:33
 * @FilePath: /admin-vite/src/router/index.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import { router } from '@/router'
import { createRouter, createWebHistory } from 'vue-router'

import getRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
const routes = setupLayouts(getRoutes)
debugger
const router = createRouter({
  history: createWebHistory(), // hash history   注意 # 和根/
  routes,
})

export default router
