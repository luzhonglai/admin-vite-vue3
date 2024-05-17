/*
 * @Date: 2024-05-10 01:16:05
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @LastEditTime: 2024-05-17 22:21:56
 * @FilePath: \admin-vite-vue3\src\main.ts
 */
import App from '@/App.vue'
import router from './router'
import { createApp } from 'vue'
import { setupGlobalDirective } from '@/directives'
import { setupGlobalMethods } from '@/utils/globalMethod'
import { setupStore } from './store'
import '@/styles/index.scss'

const initSpa = async () => {
  const app = createApp(App)
  // setupPinia
  setupStore(app)

  // methods （axios echarts cache）
  setupGlobalMethods(app)

  // directive
  setupGlobalDirective(app)

  app.use(router)
  app.mount('#app')
}

initSpa()
