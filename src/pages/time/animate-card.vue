<!--
 * @Date: 2024-05-30 01:42:56
 * @LastEditors: luzhonglai 1342341673@qq.com
 * @LastEditTime: 2024-05-30 02:14:02
 * @FilePath: \admin-vite-vue3\src\pages\time\FlipItem.vue
-->

<template>
  <div class="aimate-card">
    <div
      class="card-group"
      v-for="(item, idx) in val"
      :key="idx"
      :style="{ 'font-size': size + 'px' }"
    >
      <transition-group
        enter-active-class="animate__animated animate__bounceIn"
        leave-active-class="animate__animated animate__fadeOutDown"
      >
        <div
          class="card-item"
          :class="{ disabled: selfDisabled }"
          v-for="num in 10"
          :key="num"
          v-show="item == num - 1"
          >{{ num - 1 }}</div
        >
      </transition-group>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      val: {
        type: Array,
        default: () => ['0', '0'],
      },
      size: {
        type: Number,
        default: 16,
      },
      selfDisabled: {
        type: Boolean,
        default: false,
      },
    },

    mounted() {
      console.log(this.selfDisabled)
    },
  }
</script>

<style lang="scss" scoped>
  .aimate-card {
    width: auto;
    display: inline-block;
    height: 100%;
    .card-group {
      display: inline-block;
      position: relative;
      width: 40px;
      padding: 5px;
      height: 100%;
      vertical-align: middle;
      .card-item {
        position: absolute;
        background: #3a7fe4;
        color: #fff;
        width: 30px;
        height: 40px;
        top: -20px;
        line-height: 40px;
      }
      .disabled {
        background: #ccc !important;
      }
    }
  }
</style>
