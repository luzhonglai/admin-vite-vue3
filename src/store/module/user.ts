/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @LastEditTime: 2024-05-17 22:48:21
 * @FilePath: \admin-vite-vue3\src\store\module\user.ts
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
    language: 'asdsa',
    size: 'medium',
    count: '',
  }),
  actions: {
    setCount() {
      this.count += 'add code  date'
    },
  },
})
