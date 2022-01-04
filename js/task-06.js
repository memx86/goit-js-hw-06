const inputRef = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  const currentInputLength = event.currentTarget.value.length;
  const inputRequiredLength = inputRef.dataset.length;
  const isValidLength = currentInputLength >= inputRequiredLength;

  if (isValidLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", onInputBlur);
