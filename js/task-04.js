let counterValue = 0;
const refs = {
  decrementBtn: document.querySelector("[data-action=decrement]"),
  incrementBtn: document.querySelector("[data-action=increment]"),
  value: document.querySelector("#value"),
};
const onIncrementClick = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
};
const onDecrementClick = () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
};
refs.incrementBtn.addEventListener("click", onIncrementClick);
refs.decrementBtn.addEventListener("click", onDecrementClick);
