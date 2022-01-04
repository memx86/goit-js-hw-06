function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  boxes: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("#controls input"),
};
const createBoxes = (amount) => {
  let measurement = 30;
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${measurement}px`;
    box.style.height = `${measurement}px`;
    box.style.backgroundColor = getRandomHexColor();
    measurement += 10;
    boxes.push(box);
  }
  refs.boxes.append(...boxes);
};
const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
};
const onCreateClick = () => {
  if (refs.input.value) {
    createBoxes(refs.input.value);
    refs.input.value = "";
  }
};

refs.createBtn.addEventListener("click", onCreateClick);
refs.destroyBtn.addEventListener("click", destroyBoxes);
