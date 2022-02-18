<template>
  <div id="box" style="width: 100%; height: 400px"></div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, defineProps } from "vue";
const  propState = defineProps({
  title: {
    type: String,
    default: "",
  },
  dataSource: {
    type: Array,
    default: () => [
      { type: "Jan", jeecg: 7.0, jeebt: 3.9 },
      { type: "Feb", jeecg: 6.9, jeebt: 4.2 },
      { type: "Mar", jeecg: 9.5, jeebt: 5.7 },
      { type: "Apr", jeecg: 14.5, jeebt: 8.5 },
      { type: "May", jeecg: 18.4, jeebt: 11.9 },
      { type: "Jun", jeecg: 21.5, jeebt: 15.2 },
      { type: "Jul", jeecg: 25.2, jeebt: 17.0 },
      { type: "Aug", jeecg: 26.5, jeebt: 16.6 },
      { type: "Sep", jeecg: 23.3, jeebt: 14.2 },
      { type: "Oct", jeecg: 18.3, jeebt: 10.3 },
      { type: "Nov", jeecg: 13.9, jeebt: 6.6 },
      { type: "Dec", jeecg: 9.6, jeebt: 4.8 },
    ],
  },
  fields: {
    type: Array,
    default: () => ["jeecg", "jeebt"],
  },
  // 别名，需要的格式：[{field:'name',alias:'姓名'}, {field:'sex',alias:'性别'}]
  aliases: {
    type: Array,
    default: () => [],
  },
});
const {
  proxy: { $echarts },
}: any = getCurrentInstance();
const mycharts = $echarts.init(document.getElementById("box"));

const options = {
  
  xAxis: {
    type: "category",
    data: propState.dataSource,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};
mycharts.setOption(options);
onMounted(() => {});
</script>

<style scoped>
</style>