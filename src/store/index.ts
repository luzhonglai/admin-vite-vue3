/*
 * @Author: luzhonglai
 * @Date: 2022-02-24 09:45:18
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-24 10:01:46
 * @FilePath: /admin-vite/src/store/index.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import { createPinia } from 'pinia'
import { userStore } from './module/user'

const pinia = createPinia()

export { userStore }
export default pinia
