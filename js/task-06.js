const inputRef = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  const currentInputLength = event.currentTarget.value.length;
  const inputRequiredLength = inputRef.dataset.length;
  const isValidLength = currentInputLength >= inputRequiredLength;

  if (isValidLength) {
    classToggleInputRef("valid", "invalid");
  } else {
    classToggleInputRef("invalid", "valid");
  }
};

inputRef.addEventListener("blur", onInputBlur);

function classToggleInputRef(classAdd, classRemove) {
  inputRef.classList.add(classAdd);
  inputRef.classList.remove(classRemove);
}
