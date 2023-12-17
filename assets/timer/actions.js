import { countdown, updateDisplay } from "./display.js";
import state from "./state.js";
import { updateAppStatus } from "./screenReader.js";

export function togglePlay() {
  state.isRunning = document.documentElement.classList.toggle("running");

  if(state.isRunning) {
    countdown();
    updateAppStatus("Temporizador iniciado");
    return;
  }

  updateAppStatus("Temporizador pausado");
}

export function reset() {
  document.documentElement.classList.remove("running");
  state.isRunning = false;
  updateDisplay();
  updateAppStatus(`Tempo do temporizador resetado, de volta ao estado inicial. Tempo atual de 00:${state.minutes}`);
}

export function add() {
  if(state.minutes + 5 > 60) {
    updateAppStatus(`Não foi possível adicionar cinco minutos ao temporizador, tempo máximo de 60 minutos. Tempo atual de 00:${state.minutes}`);
    state.minutes = 60;
  } else {
    state.minutes += 5;
    updateAppStatus(`Adicionado cinco minutos ao temporizador. tempo atual de 00:${state.minutes}`);
  }

  updateDisplay();
}

export function decrease() {
  if(state.minutes - 5 < 0 ) {
    updateAppStatus(`Não foi possível diminuir cinco minutos do temporizador, tempo mínimo de 0 minutos. Tempo atual de 00:${state.minutes}`);
    state.minutes = 0;
  } else {
    state.minutes -= 5;
    updateAppStatus(`Retirado cinco minutos do temporizador. tempo autual de 00:${state.minutes}`);
  }

  updateDisplay();
}