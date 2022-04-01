/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-03-29 14:52:58
 * @FilePath: /admin-vite/src/store/module/user.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import { defineStore } from 'pinia'
export interface AppState {
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  language: string
  size: string
}

export const userStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    sidebar: {
      opened: false,
      withoutAnimation: false,
    },
    settings: {
      showSidebarLogo: false,
    },
    language: 'asdsa',
    size: 'medium',
  }),
  actions: {
    setCount() {
      this.count += 'add code  date'
    },
  },
})
