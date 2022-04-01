<!--
 * @Author: your name
 * @Date: 2022-02-17 01:37:07
 * @LastEditTime: 2022-04-01 17:10:40
 * @LastEditors: luzhonglai
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /admin-vite/src/App.vue
-->

<template>
  <ElConfigProvider :locale="locale">
    <router-view />
  </ElConfigProvider>
</template>

<script lang="ts" setup>
  import { ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  const locale = zhCn // Element UI 默认中文
</script>
