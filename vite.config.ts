/*
 * @Author: luzhonglai
 * @Date: 2022-02-20 02:31:52
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-03-29 11:32:46
 * @FilePath: /admin-vite/vite.config.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
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
    css: {
      preprocessorOptions: {
        scss: {
          // 全局scss css 变量引入
          additionalData: '@import "./src/styles/sider.scss";',
        },
      },
    },
    resolve: {
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
        [envAxios[mode].baseURL]: {
          target: envAxios[mode].target,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${envAxios[mode].baseURL}`), ''),
        },
      },
    },
  }
})
