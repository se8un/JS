const player = document.getElementById('player')
const block = document.getElementById('block')

// let counter = parseInt(document.querySelector('.counter').textContent)
// let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
// let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
// let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))

// console.log(counter)

function jump() {
  if (player.classList != 'jump') {
    player.classList.add('jump')
  }
  setTimeout(() => {
    player.classList.remove('jump')
  }, 300)
}

// counter = 0
// function countBlock() {
//   // let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))

//   if (blockLeft < 250) {
//     counter++
//     console.log(counter)
//     countBlock()
//   }
// }
// countBlock()

setInterval(() => {
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
  let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
  let counter = parseInt(document.querySelector('.counter').textContent)

  // if (blockLeft < 140 && blockLeft > 0) {
  //   counter++
  //   // console.log(counter)
  // }

  if (blockLeft < 140 && blockLeft > 0 && playerTop >= 240) {
    // console.log(blockLeft)
    counter++
    console.log(`Game Over! :( \nСчёт: ${counter}`)

    // alert(`GAME OVER! :( \nСчет: ${counter}`)
  }
}, 0)

document.addEventListener('keydown', event => {
  jump()
})
// countBlock()
// TODO:

/* реализовать звук прыжка игрока
function soundJump (){
	if (keydown) {
		звук
	}
}
 */
