/*
 * @Author: luzhonglai
 * @Date: 2022-02-18 01:03:05
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-20 00:34:12
 * @FilePath: /admin-vite/config/vite-plugins/autoImport.ts
 * @Description: 
 * https://github.com/luzhonglai/admin-vite-vue3
 */

/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */
 import AutoImport from 'unplugin-auto-import/vite'

 console.log(AutoImport({}))
 export const AutoImportDeps = () => {
     return AutoImport({
         dts: 'src/auto-imports.d.ts',
         imports: ['vue', 'pinia', 'vue-router'],
     })
 }