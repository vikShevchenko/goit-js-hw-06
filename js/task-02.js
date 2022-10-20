const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

const newList = ingredients.map((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  return listItem;
});
list.append(...newList);
