const player = document.getElementById('player')
const block = document.getElementById('block')

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

  if (blockLeft < 50 && blockLeft > 0 && playerTop >= 140) {
    console.log('GAME OVER! :(')
    // alert('GAME OVER! :(')
  }
}, 10)
