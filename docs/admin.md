<!--
 * @Author: luzhonglai
 * @Date: 2022-02-20 01:13:52
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-20 02:21:46
 * @FilePath: /admin-vite/docs/admin.md
 * @Description: 
 * https://github.com/luzhonglai/admin-vite-vue3
-->




# admin-vite-vue

> vue3 全家桶最前沿技术 Vue 3 + Typescript + Vite + Pinia + Taiwindcss

模板应该可以帮助你开始使用 Vue 3 和 Vite 中的 Typescript 进行开发。模板使用 Vue 3 ' <脚本设置> ' sfc，查看[脚本设置文档](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)了解更多

### Vscode 插件

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [Vite 项目调试工具 🔧](https://marketplace.visualstudio.com/items?itemName=antfu.vite)
- Vue 3 Snippets
- Prettier Eslint
- Prettier - Code formatter
- 🎉 持续添加中.... 🀄️🀄️

### 项目解构

```
├── config
│   ├── vite-pugins      // vite配置
|   └── themeConfig      // 主题配置
├── docs                 // 文档相关
├── mock                 // mock数据
|-- public
├── src
│    ├── api             // api请求
│    ├── assets          // 静态文件
│    ├── components      // 业务通用组件
|    |-- hooks           // 业务逻辑通用
│    ├── pages           // 业务页面
│    ├── router          // 路由文件
│    ├── store           // 状态管理
│    ├── utils           // 工具类
│    ├── App.vue         // vue模板入口
│    ├── main.ts         // vue模板js
├── .d.ts                // 类型定义
├── tailwind.config.js   // tailwind全局配置
├── tsconfig.json        // ts配置
└── vite.config.ts       // vite全局配置
```

### 特点

- 🖼️ 支持 svg 图标，已封装一个简单的 SvgIcon 组件，可以直接读取文件下的 svg

- 📦 支持 axios(ts 版),已封装了主流的拦截器，请求调用等方法

- 👽 支持 router,store 模块化，内置生成路由钩子

- 🐳 支持 env，环境变量和区分打包环境

- 🍡 支持 unplugin-vue-components 组件自动引入

- 🥘 支持 vite-plugin-pages 根据文件自动生成路由的插件

- 🪲 支持 vite-plugin-restart 根据监听 config.ts 文件刷新 vite 服务

- 🚌 支持 unplugin-auto-import 按需加载自动导入


### 最后最后 求 Star

如果觉得还不错的话，就给个 Star 支持一下 🍺 ~


