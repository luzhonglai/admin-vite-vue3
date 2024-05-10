/*
 * @Author: your name
 * @Date: 2022-02-18 21:46:20
 * @LastEditTime: 2024-05-11 02:30:59
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \admin-vite-vue3\src\utils\globalMethod.ts
 */

import type { App } from 'vue'
import * as echarts from 'echarts'
import cache from '@/utils/cache'
import http from '@/utils/axios'

export const setupGlobalMethods = (app: App) => {
  app.config.globalProperties.$echarts = echarts
  app.config.globalProperties.$cache = cache
  app.config.globalProperties.$http = http
}
