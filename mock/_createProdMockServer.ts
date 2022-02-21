/*
 * @Author: luzhonglai
 * @Date: 2022-02-20 02:51:55
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-20 02:54:43
 * @FilePath: /admin-vite/mock/_createProdMockServer.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
// 批量加载
const modules = import.meta.globEager('./mock/*.ts')

const mockModules: Array<string> = []
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...modules[key].default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
