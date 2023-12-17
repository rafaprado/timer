import { srAppStatus } from "./elements.js"; 

export function updateAppStatus(phrase) {
  srAppStatus.textContent = phrase;
  srAppStatus.focus();
}