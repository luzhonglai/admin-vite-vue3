export const setupDebounce = {
  mounted(el: HTMLElement, bind: any) {
    let timer: number
    el.addEventListener(bind.arg, () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        bind.value()
      }, 1000)
    })
  },
}
