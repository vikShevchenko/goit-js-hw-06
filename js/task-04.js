const refs = {
  btn: document.getElementById("counter"),
  result: document.getElementById("value")
}





let counterValue = 0;

refs.btn.firstElementChild.addEventListener("click", () => {
  counterValue -= 1;
  return (refs.result.textContent = counterValue);
});

refs.btn.lastElementChild.addEventListener("click", () => {
  counterValue += 1;
  return (refs.result.textContent = counterValue);
});
