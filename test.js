console.log(11)

setTimeout(() => {
  console.log(22)
}, 1000)

async function async1() {
  await async2()
  console.log(44)
}

async function async2() {
  console.log(33)
}

Promise.resolve().then(() => {
  console.log(55)
})

async1()
console.log(77)
