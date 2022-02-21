import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: '111',
  state: () => ({
    count: 'rare',
  }),
  actions: {
    setCount() {
      this.count += 'add code  date'
    },
  },
})
