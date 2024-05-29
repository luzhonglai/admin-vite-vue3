<template>
  <div class="animate-clock">
    <!-- <p>{{days}}{{hours}}{{minites}}{{seconds}}</p> -->
    <span>距离结束还剩</span>
    <animate-card :val="days" :size="16" :self-disabled="disabled" />
    <span>天</span>
    <animate-card :val="hours" :size="16" :self-disabled="disabled" />
    <span>时</span>
    <animate-card :val="minites" :size="16" :self-disabled="disabled" />
    <span>分</span>
    <animate-card :val="seconds" :size="16" :self-disabled="disabled" />
    <span>秒</span>
  </div>
</template>

<style lang="scss" scoped>
  .animate-clock {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    padding: 40px 0;
  }
</style>

<script>
  import animateCard from './animate-card.vue'

  export default {
    components: { animateCard },
    props: {
      terminalTime: String,
    },
    data() {
      return {
        days: ['0', '0'],
        hours: ['0', '0'],
        minites: ['0', '0'],
        seconds: ['0', '0'],

        setIntVal: null,
        disabled: false,
        terminalTime: 17170065337412,
      }
    },
    mounted() {
      // 先调用一次
      //   this.updateClock()

      // 箭头函数不修改当前作用域下的 this 指向
      this.setIntVal = setInterval(() => {
        this.updateClock()
      }, 1000)
    },

    methods: {
      /**
       * 更新计时器
       * @result void
       */
      updateClock() {
        let now = new Date().getTime()
        let stopTime = 0

        // 错误入参 处理逻辑
        try {
          stopTime = new Date(this.terminalTime).getTime()
        } catch (err) {
          console.error(err)
          return false
        }

        // 终止逻辑
        const remainingTime = stopTime - now
        if (remainingTime < 1000) {
          clearInterval(this.setIntVal)
          this.setIntVal = null
          // 计时器 清零
          this.days = this.hours = this.minites = this.seconds = ['0', '0']

          this.disabled = true
          console.log('时间到！')
          return false
        }

        // 计算 日、时、分、秒
        let days = parseInt(remainingTime / (24 * 60 * 60 * 1000))
        let hours = parseInt((remainingTime - 24 * 60 * 60 * 1000 * days) / (60 * 60 * 1000))
        let minites = parseInt(
          (remainingTime - 24 * 60 * 60 * 1000 * days - 60 * 60 * 1000 * hours) / (60 * 1000),
        )
        let seconds = parseInt(
          (remainingTime -
            24 * 60 * 60 * 1000 * days -
            60 * 60 * 1000 * hours -
            60 * 1000 * minites) /
            1000,
        )

        // 更新 data
        this.days = this.toStringAndUnshiftZero(days)
        this.hours = this.toStringAndUnshiftZero(hours)
        this.minites = this.toStringAndUnshiftZero(minites)
        this.seconds = this.toStringAndUnshiftZero(seconds)
      },

      /**
       * 转化数字为数组，并在 头部填充 0
       * @params num: numnber
       * @result string[]
       */
      toStringAndUnshiftZero(num) {
        const val = num.toString().split('')
        if (num < 10) {
          val.unshift('0')
        }
        return val
      },
    },
  }
</script>
