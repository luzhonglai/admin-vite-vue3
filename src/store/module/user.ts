/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @LastEditTime: 2024-05-17 23:14:36
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
  persist: true, // 开启缓存
  state: () => ({
    sidebar: {
      opened: false,
      withoutAnimation: false,
    },
    buttonPermissions: [],
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
