const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (e) => {
  if (e.target.value == "") {
    outputText.textContent = "Anonymous";
  } else {
    e.target.value == "";
    outputText.textContent = e.target.value;
  }
});
