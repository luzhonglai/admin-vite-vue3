/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */
 import AutoImport from 'unplugin-auto-import/vite'

 console.log(AutoImport({}))
 export const AutoImportDeps = () => {
     return AutoImport({
         dts: 'src/auto-imports.d.ts',
         imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
     })
 }