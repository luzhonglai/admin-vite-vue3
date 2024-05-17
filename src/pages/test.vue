<!--
 * @Author: luzhonglai
 * @Date: 2022-02-20 23:11:38
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @LastEditTime: 2024-05-17 18:08:05
 * @FilePath: \admin-vite-vue3\src\pages\test.vue
 * @Description: 
 * https://github.com/luzhonglai/admin-vite-vue3
-->
<route>
{
  meta: {layout: true}
}
</route>

<script setup lang="ts">
  import { userStore } from '@/store'
  const {
    proxy: { $echarts, $http },
  } = getCurrentInstance()

  const router = useRouter()
  const route = useRoute()

  const userState = userStore()

  const table = ref([
    { id: '1', name: 'rare' },
    { id: '1', name: 'rare' },
  ])

  $http
    .get('/dev/comments?postId=1')
    .then((res: any) => {
      console.log(res)
    })
    .catch((err: any) => {
      console.log(err)
    })

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

<template>
  <div class="title">asdasdsadasdsa1212</div>
  <!-- 测试 echarts -->
  <div id="box"></div>
  <!-- 测试按需引入 组件 -->
  <HelloWorld />
  <!-- 测试taiwindcss  -->
  <div class="flex w-36 h-36 m-auto items-center">欢迎学习vue3 script setup pinia</div>
  <!-- 测试element-plus 按需引入组件 -->
  <el-table :data="table" border stripe>
    <el-table-column type="index" width="50" />
    <el-table-column v-for="col in table" :key="col.id" :prop="col.id" :label="col.name" />
  </el-table>

  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
</template>

<style lang="scss" scoped>
  #box {
    width: 600px;
    height: 600px;
  }
  .title {
    color: $yellow;
  }
</style>
