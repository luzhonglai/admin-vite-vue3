/*
 * @Author: luzhonglai
 * @Date: 2022-02-22 09:30:07
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-22 09:49:25
 * @FilePath: /admin-vite/src/plugins/directives.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import permisson from '@/directives/permisson'

/* -------------------------------------------------------------------------- */

/**
 * @description 使用webpack api自动注册全局指令
 * @param {vue} app 当前应用实例， vue3新特性
 * @returns {void} void
 */
export function setupDirectives(app): void {
  const files = require.context('../directives/', true, /\.(ts)$/)
  files.keys().forEach((key) => {
    const config = files(key)
    const name = key
      .replace(/^\.\//, '')
      .replace(/\.\w+$/, '')
      .split('/')[0]
    app.directive(name, config.default || config)
  })
}
