function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", (e) => {
  const quantityElement = e.target.previousElementSibling.value;

  boxes.prepend(...createBoxes(quantityElement));
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const arrElements = [];
  let newElement;
  let startSize = 30;

  for (let i = 0; i < amount; i++) {
    newElement = document.createElement("div");
    newElement.style.background = getRandomHexColor();
    newElement.style.height = startSize + "px";
    newElement.style.width = startSize + "px";
    startSize += 10;

    arrElements.push(newElement);
  }

  return arrElements;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
