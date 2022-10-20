const btn = document.getElementById("counter");

const result = document.getElementById("value");

let counterValue = 0;

btn.firstElementChild.addEventListener("click", () => {
  counterValue -= 1;
  return (result.textContent = counterValue);
});

btn.lastElementChild.addEventListener("click", () => {
  counterValue += 1;
  return (result.textContent = counterValue);
});
