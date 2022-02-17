import vue from '@vitejs/plugin-vue'
import svg from 'vite-plugin-svg-icons'
import { PagesPlugin } from './pages'

/**
 * @description: 
 * @param {*} isBuild
 * @return {*}
 */
export function vitePlugins(isBuild:Boolean) {
  const plugins = [
    vue(),
    // svg(),
    PagesPlugin(),
  ]
  
  return plugins
}