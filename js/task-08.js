const form = document.querySelector(".login-form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = {};

  new Promise((resolve, reject) => {
    for (let elem of form.elements) {
      if (!elem.name) continue;
      if (!elem.value) reject(elem.name);

      formValues[elem.name] = elem.value;
    }

    resolve(formValues);
  })
    .then((data) => {
      console.log(data);
      form.reset();
    })
    .catch((name) => {
      alert(`${name} is null, fill all fields`);
    });
});
