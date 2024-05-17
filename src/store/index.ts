/*
 * @Author: luzhonglai
 * @Date: 2022-02-24 09:45:18
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @LastEditTime: 2024-05-17 22:57:00
 * @FilePath: \admin-vite-vue3\src\store\index.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()

export const setupStore = (app: App) => {
  store.use(piniaPluginPersistedstate)
  app.use(store)
}

export { store }
