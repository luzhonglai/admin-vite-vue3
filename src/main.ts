import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next'
import { createPinia } from 'pinia'

import '@/styles'
import 'tdesign-vue-next/es/style/index.css'

createApp(App).use(createPinia()).use(TDesign).mount('#app')
