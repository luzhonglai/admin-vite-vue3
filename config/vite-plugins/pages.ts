

/**
 * @description: 动态生成路由
 * @param {*}
 * @return {*}
 */


import Pages from 'vite-plugin-pages'
export function PagesPlugin  ()  {
  return Pages({
    pagesDir:[{dir:'src/pages',baseRoute:''}],
    extensions:['vue', 'md'],
    exclude:['**/components/*.vue']
  })
}