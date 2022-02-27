/*
 * @Author: your name
 * @Date: 2022-02-18 01:01:00
 * @LastEditTime: 2022-02-24 11:29:20
 * @LastEditors: luzhonglai
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /admin-vite/config/vite-plugins/components.ts
 */

/**
 * @name  AutoRegistryComponents
 * @description 按需加载，自动引入组件
 */
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

export const AutoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'],
    dts: 'src/components.d.ts',
    directoryAsNamespace: true,
    globalNamespaces: [],
    directives: true,
    include: ['**/*.vue'],
    resolvers: [ElementPlusResolver(), VueUseComponentsResolver()],
  })
}
