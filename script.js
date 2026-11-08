const scene = document.querySelector(".scene");
const openButton = document.querySelector("#openLetter");
const replayButton = document.querySelector("#replay");
const letter = document.querySelector("#letter");
const hint = document.querySelector("#hint");

function openLetter() {
  scene.classList.add("is-open");
  letter.setAttribute("aria-hidden", "false");
  openButton.setAttribute("aria-label", "Carta aberta");
  hint.textContent = "Uma mensagem só para você ♡";
  replayButton.hidden = false;
}

function closeLetter() {
  scene.classList.remove("is-open");
  letter.setAttribute("aria-hidden", "true");
  openButton.setAttribute("aria-label", "Abrir a carta");
  hint.textContent = "Toque no coração para abrir sua carta";
  replayButton.hidden = true;
  openButton.focus();
}

openButton.addEventListener("click", openLetter);
replayButton.addEventListener("click", closeLetter);
