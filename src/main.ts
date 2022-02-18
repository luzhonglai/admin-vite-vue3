import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next'
import { createPinia } from 'pinia'
import * as echarts from 'echarts'

import '@/styles/index.scss'
import 'tdesign-vue-next/es/style/index.css'

const app = createApp(App)

app.config.globalProperties.$echarts = echarts

app.use(createPinia()).use(TDesign).mount('#app')

