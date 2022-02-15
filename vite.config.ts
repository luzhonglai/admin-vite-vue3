import { defineConfig, preview } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@import "@/styles/main.scss";'
        }
      }
    },
    alias:{
      '@': resolve(__dirname, 'src'),
      '_c':resolve(__dirname, 'src/components'),
      '_u':resolve(__dirname, 'src/utils')
    },
  },
  server:{
    proxy:{
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }
})