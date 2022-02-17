/*
 * @Author: your name
 * @Date: 2022-02-18 00:13:46
 * @LastEditTime: 2022-02-18 00:18:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /admin-vite/src/config/vite-plugins/svgPlugins.ts
 */


import path from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'
export const svgPlugins = (isBuild)=>{
  return viteSvgIcons({
    iconDirs:[path.resolve(process.pwd(), 'src/assets/icon')],
    symbolId:  'icon-[dir]-[name]',
    svgOptions: isBuild
  })
}