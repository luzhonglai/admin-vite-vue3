/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-21 00:23:44
 * @FilePath: /admin-vite/src/main.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import App from '@/App.vue'
import { createApp, defineProps } from 'vue'
import TDesign from 'tdesign-vue-next'
import { createPinia } from 'pinia'
import router from './router'
import 'tdesign-vue-next/es/style/index.css'

// 挂在全局方法插件
import { VueGlobalMethods } from '@/utils/globalMethod'
import '@/styles/index.scss'

const app = createApp(App)

app.use(createPinia()).use(router).use(VueGlobalMethods()).mount('#app')
