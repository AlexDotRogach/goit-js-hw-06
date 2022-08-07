const spanColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");
const body = document.querySelector("body");

btnColor.addEventListener("click", () => {
  const color = getRandomHexColor();

  body.style.background = color;
  spanColor.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
