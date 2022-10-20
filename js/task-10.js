const boxes = document.getElementById("boxes");
const element = document.getElementById("controls");
const input = element.firstElementChild //input
const destroy = element.lastElementChild //destroy
const create = element.childNodes[3] //create

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`
}



