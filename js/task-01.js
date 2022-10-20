const categories = document.getElementById("categories");
console.log(`Number of categories: ${categories.children.length}`);

for (let i = 0; i < categories.children.length; i += 1) {
  console.log(
    `Category: ${categories.children[i].firstElementChild.textContent}`
  );
  console.log(
    `Elements: ${categories.children[i].lastElementChild.children.length}`
  );
}
