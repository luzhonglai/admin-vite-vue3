
import App from '@/App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { setupGlobalDirective } from '@/directives'
import { setupGlobalMethods } from '@/utils/globalMethod'

import '@/styles/index.scss'
const app = createApp(App)

// directive
setupGlobalDirective(app)
// methods （axios echarts cache）
setupGlobalMethods(app)

app.use(createPinia()).use(router).mount('#app')
