import state from "./state.js";
import { songButtons } from "./elements.js";

export function toggleSelectedSong(event) {
    const dataSound = event.target.dataset.sound;
    const soundSrc = `./media/songs/${dataSound}.wav`;

    if(state.playingSong.src.includes(dataSound)) {
      stopSong(event.target);
      return;
    }

    setSong(event.target, soundSrc);
}

function stopSong(target) {
  target.classList.remove("song-button--selected");
  state.playingSong.pause();
  state.playingSong.src = '';
}

function setSong(target, soundSrc) {
  songButtons.forEach(element => {
    element.classList.remove("song-button--selected");
  });

  target.classList.add("song-button--selected");

  state.playingSong.src = soundSrc;
  state.playingSong.loop = true;
  state.playingSong.play();
}