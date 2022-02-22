<!--
 * @Author: luzhonglai
 * @Date: 2022-02-20 23:11:38
 * @LastEditors: luzhonglai
 * @LastEditTime: 2022-02-23 00:57:09
 * @FilePath: /admin-vite/src/pages/test.vue
 * @Description: 
 * https://github.com/luzhonglai/admin-vite-vue3
-->

<template>
  <!-- 测试 echarts -->
  <div id="box"></div>
  <!-- 测试按需引入 组件 -->
  <HelloWorld></HelloWorld>
  <!-- 测试taiwindcss  -->
  <div class="flex w-36 h-36 m-auto items-center">欢迎学习vue3 script setup pinia</div>
</template>

<script setup lang="ts">
  const {
    proxy: { $echarts, $cache },
  } = getCurrentInstance()
  const router = useRouter()
  const route = useRoute()
  const addsadsads = 11

  
  console.log("🚀 ~ file: test.vue ~ line 25 ~ router", router)
  console.log("🚀 ~ file: test.vue ~ line 26 ~ route", route)
  console.log("🚀 ~ file: test.vue ~ line 24 ~ $cache", $cache)
  console.log('🚀 ~ file: test.vue ~ line 19 ~ proxy',  $echarts)

  const initEcharts = () => {
    const myEcharts = $echarts.init(document.getElementById('box'))
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    }
    myEcharts.setOption(option)
  }

  onMounted(() => {
    initEcharts()
  })

  
</script>

<style lang="less" scoped>
  #box {
    width: 600px;
    height: 600px;
  }
</style>
