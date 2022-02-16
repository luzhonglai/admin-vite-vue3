<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { userStore } from "@/pinia/user";

const mainStore = userStore();
console.log("🚀 ~ file: App.vue ~ line 8 ~ mainStore", mainStore.count)

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
