const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (e) => {
  outputText.textContent = e.target.value || "Anonymous";
});
