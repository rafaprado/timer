import { updateDisplay } from "./display.js";
import { registerControls, soundControls } from "./events.js";

export function start() {
  updateDisplay();
  registerControls();
  soundControls();
}

start();