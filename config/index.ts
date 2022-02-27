/*
 * @Author: luzhonglai
 * @Date: 2022-02-17 01:17:26
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-28 01:30:47
 * @FilePath: /admin-vite/config/index.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

const mode = import.meta.env?.MODE
console.log('🚀 ~ file: index.ts ~ line 12 ~ mode', mode)

export const envAxios: object = {
  dev: {
    baseURL: '/dev',
    target: 'http://jsonplaceholder.typicode.com',
    mockURL: 'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api',
  },
  test: {
    baseURL: '/test',
    target: 'http://jsonplaceholder.typicode.com',
    mockURL: 'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api',
  },
  prod: {
    baseURL: '/prod',
    target: 'http://jsonplaceholder.typicode.com',
  },
}
// axios
export const axiosConfig = {
  /**
   * 开启接口日志调试窗口
   *
   */
  isDebugInfo: true,

  /**
   *
   * 开启mock
   */
  isMock: false,

  /**
   * 接口成功返回状态码
   */
  resultCode: 1,

  /**
   * 接口请求超时时间
   */
  requestTimeout: 5000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  defaultHeaders: 'application/json',
}

export default {
  mode,
  ...envAxios[mode],
  ...axiosConfig,
}
