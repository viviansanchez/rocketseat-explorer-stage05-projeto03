import { Timer } from './timer.js'
import { Controls } from './controls.js'
import Sound from './sounds.js'
import Events from './events.js';
import { 
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  minutesDisplay,
  secondsDisplay
} from "./elements.js";

//another possibility for importing elements from elements.js:
// import { elements } from './elements.js'
// const {
//   btnPause,
//   btnPlay,
//   btnStop,
//   btnSet,
//   btnSoundOff,
//   btnSoundOn,
//   minutesDisplay,
//   secondsDisplay
// } = elements

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

const sound = Sound()

Events({controls, timer, sound})



