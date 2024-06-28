const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

const btn = document.querySelector("button");
const text = document.querySelector(".transcript");

btn.addEventListener("click", () => {
  recognition.start();
});
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  text.innerHTML = transcript;
};
