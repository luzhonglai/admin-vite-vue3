/*
 * @Date: 2024-05-30 01:43:41
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @LastEditTime: 2024-05-30 01:49:42
 * @FilePath: \admin-vite-vue3\src\pages\time\utils.ts
 */

export function getTimeArr(now = new Date()) {
  // const Y = now.getFullYear()
  // const M = now.getMonth() + 1
  // const D = now.getDate()
  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()
  return [
    // ...toArr(Y),
    // ...toArr(M),
    // ...toArr(D),
    ...toArr(h),
    ...toArr(m),
    ...toArr(s)
  ]
}


function toArr(n) {
  return n >= 10 ? ('' + n).split('').map(item => Number(item)) : [0, n]
}
