/*
 * @Author: your name
 * @Date: 2022-02-18 21:46:20
 * @LastEditTime: 2022-02-23 00:34:42
 * @LastEditors: luzhonglai
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /admin-vite/src/utils/globalMethod.ts
 */
import * as echarts from 'echarts'
import cache from '@/utils/cache'

/**
 *
 * @description: 注册vue全局方法插件
 * @param {*}
 * @return {*}
 */

export const VueGlobalMethods = (app) => {
  return {
    install: (app, options) => {
      app.config.globalProperties.$echarts = echarts
      app.config.globalProperties.$cache =  cache
    },
  }
}
