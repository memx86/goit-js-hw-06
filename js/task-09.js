function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  button: document.querySelector(".change-color"),
  spanColor: document.querySelector(".color"),
  body: document.body,
};
const onChangeColorClick = () => {
  const newBgColor = getRandomHexColor();
  refs.spanColor.textContent = newBgColor;
  refs.body.style.backgroundColor = newBgColor;
};
refs.button.addEventListener("click", onChangeColorClick);
