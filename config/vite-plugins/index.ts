import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
/*
 * @Author: luzhonglai
 * @Date: 2022-02-17 22:53:46
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-20 03:08:41
 * @FilePath: /admin-vite/config/vite-plugins/index.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import vue from '@vitejs/plugin-vue'
import type { Plugin } from 'vite'
import { svgPlugins } from './svgPlugins'
import { PagesPlugin } from './pages'
import { ConfigMockPlugin } from './mock'
import { AutoImportDeps } from './autoImport'
import { AutoRegistryComponents } from './components'
import ViteRestart from 'vite-plugin-restart'

/**
 * @description: set all plugins
 * @param {*} isBuild
 * @return {*}
 */
export function vitePlugins(isBuild: Boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // 监听vite配置刷新
    ViteRestart({
      restart: ['*.config.ts', '**/config/*.ts'],
    }),
    // 自动按需引入组件
    AutoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps(),
    // 自动生成路由
    PagesPlugin(),
    // mock
    ConfigMockPlugin(isBuild),
    // 配置svg
    // svgPlugins(isBuild)
  ]

  return vitePlugins
}
