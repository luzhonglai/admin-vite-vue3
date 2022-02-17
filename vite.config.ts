import path from 'path'
import { defineConfig, preview } from 'vite'
import { vitePlugins } from './src/config/vite-plugins'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: vitePlugins(false),
  resolve:{
    css:{
      preprocessorOptions:{
        scss:{
          // 全局scss css 变量引入
          additionalData:'@import "@/styles/main.scss";'
        }
      }
    },
    alias: {
      "@": path.resolve(__dirname, './src'),
      '@config': path.resolve(__dirname, './config'),
      "@components": path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@api': path.resolve(__dirname, './src/api'),
    }
  },
  server:{
    hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    port: 4000, // 类型： number 指定服务器端口;
    open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    host: '0.0.0.0', // IP配置，支持从IP启动
    proxy:{
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})