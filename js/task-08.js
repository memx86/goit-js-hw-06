const formRef = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  if (!email.value || !password.value) {
    alert("Все поля должны быть заполнены");
  } else {
    const formData = {};
    for (const { name, value } of event.currentTarget.elements) {
      if (name) {
        formData[name] = value;
      }
    }
    console.log(formData);
    event.currentTarget.reset();
  }
};
formRef.addEventListener("submit", onFormSubmit);
