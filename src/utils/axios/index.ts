/*
 * @Author: luzhonglai
 * @Date: 2022-02-22 09:30:07
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-28 01:30:24
 * @FilePath: /admin-vite/src/utils/axios/index.ts
 * @Description:
 * https://github.com/luzhonglai/admin-vite-vue3
 */

import qs from 'qs'
import router from '@/router'
import config from './config'
import Storage from '@/utils/cache'
import { debugInfo } from './debugInfo'
import { showMessage } from './status'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosError } from 'axios'

// 鉴权失败状态码
const { resultCode, requestTimeout, defaultHeaders, isDebugInfo, API_AUTH_STATUS } = config
const TOKEN_INVALID = '登录过期，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

// 如果请求话费了超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = requestTimeout || 5000

const service: AxiosInstance = axios.create({
  headers: {
    'Content-Type': defaultHeaders,
    'Access-Control-Allow-Origin-Type': '*',
  },
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  const headers = config.headers
  const { token } = Storage.get('userInfo') || ''
  headers.startDate = Date.now()
  if (headers['Content-Type'] === 'application/x-www-form-urlencoded')
    config.data = qs.stringify(config.data)

  if (!headers.token && token) headers.token = token
  return config
})

service.interceptors.response.use(
  (response) => {
    const { code, message } = response.data
    if (config.mode !== 'prod' && isDebugInfo) debugInfo(response)
    // status 200 && code resultCode
    if (response.status === 200 && code == resultCode) {
      return response.data
    }
    // AUTH status
    if (API_AUTH_STATUS.includes(code)) {
      ElMessage.error(message || TOKEN_INVALID)
      Storage.clear()
      router.replace('/test')
    } else {
      ElMessage.error(message || NETWORK_ERROR)
      return response.data
    }
  },
  (error: AxiosError) => {
    const response: any = error.response
    if (config.mode !== 'prod' && isDebugInfo) debugInfo(response)
    ElMessage.error(showMessage(response.status) || NETWORK_ERROR)
    return Promise.reject(error || NETWORK_ERROR)
  },
)

function fetch(options?: any): AxiosPromise {
  if (options.method.toLowerCase() == 'get') {
    options.params = options.data || options.params
    delete options.data
  }
  if (options.method.toLowerCase() == 'post') {
    options.data = options.data || options.params
    delete options.params
  }

  let isMock = config.isMock
  if (typeof options.mock !== 'undefined') {
    isMock = options.mock
  }

  if (config.mode === 'prod') {
    service.defaults.baseURL = config.baseURL
  } else {
    service.defaults.baseURL = isMock ? config.mockURl : config.baseURL
  }
  return service(options)
}

;['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  fetch[item] = (url, data, options) => {
    return fetch({
      url,
      data,
      method: item,
      ...options,
    })
  }
})

/**
 * await错误方法封装
 * @param {*} promise promise 函数
 * @[null, data] 成功
 * @[err, null] 失败
 */
export function awaitWrap(promise: any) {
  if (!promise) new Error('需要传入promise')
  return promise.then((data: any) => [null, data]).catch((err: any) => [err, null])
}

export default fetch
