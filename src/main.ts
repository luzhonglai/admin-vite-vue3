/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-20 00:26:19
 * @FilePath: /admin-vite/src/main.ts
 * @Description: 
 * https://github.com/luzhonglai/admin-vite-vue3
 */


import App from './App.vue'
import { createApp, defineProps } from 'vue'
import TDesign from 'tdesign-vue-next'
import { createPinia } from 'pinia'

import '@/styles/index.scss'
import 'tdesign-vue-next/es/style/index.css'

// 挂在全局方法插件
import { VueGlobalMethods } from '@/utils/globalMethod'

const app = createApp(App)

app.use(createPinia()).use(VueGlobalMethods()).mount('#app')
