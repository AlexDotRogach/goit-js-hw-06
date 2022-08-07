const form = document.querySelector(".login-form");
const inputs = form.querySelectorAll("input");

// promise
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formValues = {};

//   new Promise((resolve, reject) => {
//     for (let elem of form.elements) {
//       if (!elem.name) continue;
//       if (!elem.value) reject(elem.name);

//       formValues[elem.name] = elem.value;
//     }

//     resolve(formValues);
//   })
//     .then((data) => {
//       console.log(data);
//       form.reset();
//     })
//     .catch((name) => {
//       alert(`${name} is null, fill all fields`);
//     });
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = {};

  for (let elem of form.elements) {
    if (!elem.name) continue;
    if (!elem.value) {
      alert(`${elem.name} is null, fill all fields`);
      break;
    }

    formValues[elem.name] = elem.value;
  }

  if (Object.keys(formValues).length === 2) {
    console.log(formValues);
    form.reset();
  }
});
