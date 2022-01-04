const refs = {
  control: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onInputChange = (event) => {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
};

refs.control.addEventListener("input", onInputChange);
