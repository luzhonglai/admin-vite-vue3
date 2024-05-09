
import App from '@/App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { setupGlobalDirective } from '@/directives'

// 挂在全局方法插件
import { VueGlobalMethods } from '@/utils/globalMethod'
import '@/styles/index.scss'
const app = createApp(App)

app.use(createPinia()).use(router).use(VueGlobalMethods())

// 挂在指令
setupGlobalDirective(app)

app.mount('#app')
