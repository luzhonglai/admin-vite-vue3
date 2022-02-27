/*
 * @Author: luzhonglai
 * @Date: 2022-02-16 01:09:24
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-23 00:25:12
 * @FilePath: /admin-vite/src/store/user.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */
import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: '111',
  state: () => ({
    count: 'rare',
    buttonPermissions: [],
  }),
  actions: {
    setCount() {
      this.count += 'add code  date'
    },
  },
})
