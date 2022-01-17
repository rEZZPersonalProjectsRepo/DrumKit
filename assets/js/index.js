function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return

  audio.currentTime = 0 // Rewind to start of audio

  audio.play()

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  key.classList.add('active')
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') {
    this.classList.remove('active')
  }
}

const keys = document.querySelectorAll('.key')
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition)
})
window.addEventListener('keydown', playSound)
