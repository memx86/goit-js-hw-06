const refs = {
  categories: document.querySelectorAll(".item"),
};
console.log("Number of categories:", refs.categories.length);
for (const category of refs.categories) {
  const title = category.firstElementChild;
  const items = category.lastElementChild.children;
  console.log("Category: ", title.textContent);
  console.log("Elements: ", items.length);
}
