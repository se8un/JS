const player = document.getElementById('player')
const block = document.getElementById('block')
let counter = document.getElementById('counter')

document.addEventListener('keydown', event => {
  jump()
})

function jump() {
  if (player.classList != 'jump') {
    player.classList.add('jump')
  }
  setTimeout(() => {
    player.classList.remove('jump')
  }, 300)
}

let isAlive = setInterval(() => {
  let playerTop = parseInt(
    window.getComputedStyle(player).getPropertyValue('top')
  )
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  )

  if (blockLeft < 120 && blockLeft > 0 && playerTop >= 240) {
    console.log('GAME OVER! :(')
    // alert(`GAME OVER! :( \nСчет: ${counter}`)
  }
}, 10)

// TODO:

/* реализовать звук прыжка игрока
function soundJump (){
	if (keydown) {
		звук
	}
}
 */
