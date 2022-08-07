const counter = document.querySelectorAll("#counter button");
const value = document.querySelector("#value");
let counterValue = 0;

for (let btn of counter) {
  btn.addEventListener("click", () => {
    value.textContent =
      btn.dataset.action === "decrement" ? --counterValue : ++counterValue;
  });
}
