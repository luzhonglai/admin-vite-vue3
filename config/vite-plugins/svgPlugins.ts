/*
 * @Author: luzhonglai
 * @Date: 2022-02-18 19:36:23
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-20 01:12:44
 * @FilePath: /admin-vite/config/vite-plugins/svgPlugins.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import path from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'
export const svgPlugins = (isBuild) => {
  return viteSvgIcons({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    symbolId: 'icon-[dir]-[name]',
    svgOptions: isBuild,
  })
}
