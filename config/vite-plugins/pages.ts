/*
 * @Author: luzhonglai
 * @Date: 2022-02-17 23:59:38
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-04-01 16:29:07
 * @FilePath: /admin-vite/config/vite-plugins/pages.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
export function PagesPlugin() {
  Layouts({
    layoutsDirs: 'src/layout',
    defaultLayout: 'index',
  })

  Pages({
    pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
    extensions: ['vue', 'md'],
    exclude: ['**/components/*.vue'],
  })
}
