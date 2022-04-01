/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-03-29 11:33:58
 * @FilePath: /admin-vite/src/main.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import App from '@/App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

// 挂在全局方法插件
import { VueGlobalMethods } from '@/utils/globalMethod'
import '@/styles/index.scss'
// import '@/styles/sider.scss'

const app = createApp(App)

app.use(createPinia()).use(router).use(VueGlobalMethods()).mount('#app')
