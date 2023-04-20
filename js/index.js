import { Timer } from './timer.js'
import { Controls } from './controls.js'

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnSet = document.querySelector('.set')

const btnSoundOn = document.querySelector('.sound-on')
const btnSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let timerTimeout

const controls = Controls({
  btnPause,
  btnPlay,
  btnSet,
  btnStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

btnPlay.addEventListener('click', function () {
  controls.play()

  timer.countdown()
})

btnPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
})

btnStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
})

btnSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes() 

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

btnSoundOn.addEventListener('click', function () {
  btnSoundOn.classList.add('hide')
  btnSoundOff.classList.remove('hide')
})

btnSoundOff.addEventListener('click', function () {
  btnSoundOff.classList.add('hide')
  btnSoundOn.classList.remove('hide')
})



