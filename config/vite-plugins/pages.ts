/*
 * @Author: luzhonglai
 * @Date: 2022-02-17 23:59:38
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-20 00:37:06
 * @FilePath: /admin-vite/config/vite-plugins/pages.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

/**
 * @description: 动态生成路由
 * @param {*}
 * @return {*}
 */

import Pages from 'vite-plugin-pages'
export function PagesPlugin() {
  return Pages({
    pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
    extensions: ['vue', 'md'],
    exclude: ['**/components/*.vue'],
  })
}
