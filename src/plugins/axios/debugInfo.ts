/*
 * @Author: luzhonglai
 * @Date: 2022-02-22 09:30:07
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-22 09:41:19
 * @FilePath: /admin-vite/src/plugins/axios/debugInfo.ts
 * @Description: 
 * https://github.com/luzhonglai/admin-vite-vue3
 */


/**
 * @name:
 * @msg: 接口日志信息
 * @param {*} options
 * @return {*}
 */
export function debugInfo(options: any, error = '') {
  const { headers, method, url, params, baseURL, data } = options.config
  const requstConfig = {
    url,
    method,
    headers
  }
  const poorDate = Date.now() - headers.startDate
  let stagingRes: any = null
  if (error === 'Network Error') {
    stagingRes = '后端接口连接异常'
  }
  if (error.includes('timeout')) {
    stagingRes = '后端接口请求超时'
  }
  if (error.includes('Request failed with status code')) {
    const code = error.substr(error.length - 3)
    stagingRes = '后端接口' + code + '异常'
  }
  if (options.status == 200) {
    stagingRes = options.data
  }
  console.group('%c当前请求详细信息：', 'background:#000;color:#bada55')
  console.log('%c当前服务：', 'color:#A101A6;font-weight: 600', baseURL)
  console.log('%c请求url：', 'color:#A101A6;font-weight: 600', url)
  console.log('%c请求参数：', 'color:#A101A6;font-weight: 600', params || (data && JSON.parse(data)))
  console.log('%c请求配置：', 'color:#A101A6;font-weight: 600', requstConfig)
  console.log('%c请求耗时：', 'color:#A101A6;font-weight: 600', `${poorDate} ms`)
  console.log('%c返回数据：', 'color:#A101A6;font-weight: 600', stagingRes)
  console.groupEnd()
}
