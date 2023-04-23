import {
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOff,
  btnSoundOn
} from './elements.js'

export default function ({controls, timer, sound}) {
  btnPlay.addEventListener('click', function () {
    controls.play()
    timer.countdown()
  
    sound.pressButton()
  })
  
  btnPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
  
    sound.pressButton()
  })
  
  btnStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
  
    sound.pressButton()
  })
  
  btnSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes() 
  
    if (!newMinutes) {
      timer.reset()
      return
    }
  
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  
    sound.pressButton()
  })
  
  btnSoundOn.addEventListener('click', function () {
    btnSoundOn.classList.add('hide')
    btnSoundOff.classList.remove('hide')
    
    sound.bgAudio.pause()
  })
  
  btnSoundOff.addEventListener('click', function () {
    btnSoundOff.classList.add('hide')
    btnSoundOn.classList.remove('hide')
    
    sound.bgAudio.play()
  })
  
}










