/*
 * @Author: your name
 * @Date: 2022-02-16 01:09:24
 * @LastEditTime: 2022-02-28 01:25:25
 * @LastEditors: luzhonglai
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /admin-vite/vite.config.ts
 */
import path from 'path'
import { ConfigEnv, defineConfig } from 'vite'
import { vitePlugins } from './config/vite-plugins'
import { envAxios } from './config/index'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  return {
    plugins: vitePlugins(isBuild),
    resolve: {
      css: {
        preprocessorOptions: {
          scss: {
            // 全局scss css 变量引入
            additionalData: '@import "@/styles/main.scss";',
          },
        },
      },
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@config': path.resolve(__dirname, './config'),
        '@components': path.resolve(__dirname, './src/components'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@api': path.resolve(__dirname, './src/api'),
      },
    },
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      port: 4000,
      open: false,
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy: {
        [envAxios[mode].baseApi]: {
          target: envAxios[mode].target,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${API_BASE_URL}`), ''),
        },
      },
    },
  }
})
