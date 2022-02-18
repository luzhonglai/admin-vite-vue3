/*
 * @Author: your name
 * @Date: 2022-02-17 22:53:46
 * @LastEditTime: 2022-02-18 19:50:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /admin-vite/config/vite-plugins/index.ts
 */

import vue from '@vitejs/plugin-vue';
import type { Plugin } from 'vite';
import { svgPlugins }  from './svgPlugins'
import { PagesPlugin } from './pages'
import { AutoImportDeps } from './autoImport'
import { AutoRegistryComponents } from './components'

/**
 * @description: set all plugins
 * @param {*} isBuild
 * @return {*}
 */

export function vitePlugins(isBuild: Boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // 自动按需引入组件
    // AutoRegistryComponents(),
    // 自动按需引入依赖
    // AutoImportDeps(),
    // 自动生成路由
    // PagesPlugin(),
    // svgPlugins(isBuild)
  ]

  return vitePlugins
}
