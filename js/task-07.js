const slider = document.getElementById("font-size-control");
const text = document.getElementById("text");

slider.addEventListener("input", function () {
  text.style.fontSize = `${slider.value}px`;
});
