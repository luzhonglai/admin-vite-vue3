/*
 * @Author: luzhonglai
 * @Date: 2022-02-17 22:53:46
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-04-01 16:06:13
 * @FilePath: /admin-vite/config/vite-plugins/index.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'
// import { svgPlugins } from './svgPlugins'
import { ConfigMockPlugin } from './mock'
import { AutoImportDeps } from './autoImport'
import { AutoRegistryComponents } from './components'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// import ViteRestart from 'vite-plugin-restart'
// import styleImport from 'vite-plugin-style-import'

/**
 * @description: set all plugins
 * @param {*} isBuild
 * @return {*}
 */
export function vitePlugins(isBuild: Boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // 自动按需引入依赖
    AutoImportDeps(),
    Pages({
      pagesDir: [{ dir: 'src/pages', baseRoute: '' }],
      extensions: ['vue', 'md'],
      exclude: ['**/components/*.vue'],
    }),
    Layouts({
      layoutsDirs: 'src/layout',
      defaultLayout: 'index',
    }),
    // 监听vite配置刷新
    // ViteRestart({
    //   restart: ['*.config.ts', '**/config/*.ts'],
    // }),
    // 自动按需引入组件
    AutoRegistryComponents(),
    // mock
    ConfigMockPlugin(isBuild),
    // 配置svg
    // svgPlugins(isBuild)
  ]

  return vitePlugins
}
