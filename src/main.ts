/*
 * @Author: your name
 * @Date: 2022-02-16 01:09:24
 * @LastEditTime: 2022-02-18 22:11:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /admin-vite/src/main.ts
 */
s
import App from './App.vue'
import { createApp, defineProps } from 'vue'
import TDesign from 'tdesign-vue-next'
import { createPinia } from 'pinia'

import '@/styles/index.scss'
import 'tdesign-vue-next/es/style/index.css'

// 挂在全局方法插件
import { VueGlobalMethods } from '@/utils/globalMethod'

const app = createApp(App)

app.use(createPinia()).use(VueGlobalMethods()).use(TDesign).mount('#app')
