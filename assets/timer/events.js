import * as el from "./elements.js";
import * as actions from "./actions.js";
import { toggleSelectedSong } from "./songPanel.js";
import { buttonPress } from "./songs.js";

export function registerControls() {
  el.controls.addEventListener("click", event => {

    const action = event.target.dataset.action;

    if(typeof actions[action] !== "function") return;

    buttonPress.play();
    actions[action]();
  });
}

export function soundControls() {
  el.songsPanel.addEventListener("click", event => {
    toggleSelectedSong(event);
  });
}