/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-02-16 18:25:50
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-28 00:49:13
 */

import config from '../../../config/index'

interface ConfigOptions {
  resultCode: number | string
  defaultHeaders: string
  requestTimeout: number
  isMock?: boolean
  isDebugInfo: boolean | string
  isLocalMock: boolean
  env: string
  baseApi: string
  mockApi: string
}

const axiosConfig: ConfigOptions = {
  /**
   * 开启接口日志调试窗口
   *
   */
  isDebugInfo: true,
  isMock: false,

  /**
   * 接口成功返回状态码
   */
  resultCode: '1',
  API_AUTH_STATUS: [403, 70000001, 70000003],
  requestTimeout: 5000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  defaultHeaders: 'application/json',

  /**
   * api请基础配置
   */
  ...config,
}

export default axiosConfig
