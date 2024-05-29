/*
 * @Author: luzhonglai
 * @Date: 2022-02-22 09:49:44
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @LastEditTime: 2024-05-18 14:03:08
 * @FilePath: \admin-vite-vue3\src\directives\permisson.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import { userStore } from '@/store/module/user'

/**
 * @name: 按钮指令
 * @return {*}
 */
export default {
  mounted(el: Element, binding: any) {
    const buttonPermissions = userStore().buttonPermissions
    const { value } = binding

    if (value && value instanceof Array && value.length > 0) {
      const vPermissions = value
      const hasPermission = buttonPermissions.some((item: any) => {
        return vPermissions.includes(item)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('指令传参错误, [directive/permission.js]')
    }
  },
}
