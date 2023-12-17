import * as el from "./elements.js";
import state from "./state.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./songs.js";

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  let formatedMinutes = String(minutes).padStart(2, "0")
  let formatedSeconds = String(seconds).padStart(2, "0");

  el.minutes.textContent = formatedMinutes;
  el.seconds.textContent = formatedSeconds;
  el.srTime.textContent = `00:${formatedMinutes}:${formatedSeconds}`;
}

export function countdown() {
  if(!state.isRunning) return;
  clearInterval(state.timeIntervalId);

  let minutes = +el.minutes.textContent;
  let seconds = +el.seconds.textContent;

  seconds--;

  if(seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if(minutes == 0 && seconds == 0) {
    reset();
    kitchenTimer.play();
    return;
  }

  updateDisplay(minutes, seconds);
  state.timeIntervalId = setTimeout(countdown, 1000);
}