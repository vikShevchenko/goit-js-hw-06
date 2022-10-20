function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundCol = document.querySelector("body");
const btn = document.querySelector(".change-color");
const monitor = document.querySelector(".color");

btn.addEventListener("click", function () {
  backgroundCol.style.backgroundColor = getRandomHexColor();
  monitor.textContent = getRandomHexColor();
});
