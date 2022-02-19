<!--
 * @Author: your name
 * @Date: 2022-02-17 01:37:07
 * @LastEditTime: 2022-02-18 21:35:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /admin-vite/src/App.vue
-->
<script setup lang="ts">
// 获取全局方法
const {
  proxy: { $echarts }
}: any = getCurrentInstance() 
console.log("🚀 ~ file: App.vue ~ line 15 ~ getCurrentInstance", getCurrentInstance())
import { userStore } from "@/pinia/user";

console.log("🚀 ~ file: App.vue ~ line 21 ~ $echarts", $echarts)
const mainStore = userStore();
console.log("🚀 ~ file: App.vue ~ line 8 ~ mainStore", mainStore.count)

const myEcharts = () => {
  const mycharts = $echarts.init(document.getElementById('box'))
  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
  mycharts.setOption(options)
}
onMounted(() => {
  myEcharts()
}),
//  patch 直接修改state
mainStore.$patch({
  count:'222'
})

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"></HelloWorld>
  <!-- 测试taiwindcss 插件 -->
  <div class="flex w-36 h-36 m-auto items-center">欢迎学习vue3 script setup pinia</div>
  <div @click="mainStore.setCount">{{mainStore.count}}</div>
  <div id="box" style="width:600px;height:600px"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
