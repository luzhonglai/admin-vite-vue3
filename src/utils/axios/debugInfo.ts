/*
 * @Author: luzhonglai
 * @Date: 2022-02-22 09:30:07
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-28 00:39:18
 * @FilePath: /admin-vite/src/utils/axios/debugInfo.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import { showMessage } from './status'

/**
 * @name:
 * @msg: 接口日志信息
 * @param {*} options
 * @return {*}
 */
export function debugInfo(options: any) {
  const { headers, method, url, params, baseURL, data } = options.config
  const requstConfig = {
    url,
    method,
    headers,
  }
  const poorDate = Date.now() - headers.startDate
  let stagingRes: ans = showMessage(options.status)
  if (options.status == 200) {
    stagingRes = options.data
  }
  console.group('%c当前请求详细信息：', 'background:#000;color:#bada55')
  console.log('%c当前代理：', 'color:#A101A6;font-weight: 600', baseURL)
  console.log('%c请求url：', 'color:#A101A6;font-weight: 600', url)
  console.log(
    '%c请求参数：',
    'color:#A101A6;font-weight: 600',
    params || (data && JSON.parse(data)),
  )
  console.log('%c请求配置：', 'color:#A101A6;font-weight: 600', requstConfig)
  console.log('%c请求耗时：', 'color:#A101A6;font-weight: 600', `${poorDate} ms`)
  console.log('%c返回数据：', 'color:#A101A6;font-weight: 600', stagingRes)
  console.groupEnd()
}
