var process = require('process');

console.log('end')
setImmediate(() => {
  console.log('setImmediate')
})
Promise.resolve()
  .then(() => {
    console.log('then')
  })

process.nextTick(() => {
  console.log('nextTick')
})