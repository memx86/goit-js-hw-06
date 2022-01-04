const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");
const itemsRef = [];
ingredients.map((ingredient) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = ingredient;
  itemRef.classList.add("item");
  itemsRef.push(itemRef);
});
listRef.append(...itemsRef);
