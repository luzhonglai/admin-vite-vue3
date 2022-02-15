import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Hollew',
    component: () => import('@/pages/hollew/Hollew.vue'), 
  },
]

const router = createRouter({
  history: createWebHistory(),   // hash history   注意 # 和根/
  routes,
})

export default router
