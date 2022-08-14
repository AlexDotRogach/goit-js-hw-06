function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let startSize = 30;

btnCreate.addEventListener("click", (e) => {
  const quantityElement = e.target.previousElementSibling.value;

  boxes.append(...createBoxes(quantityElement));
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes(boxes);
});

function createBoxes(amount) {
  const arrElements = [];
  let newElement;

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

function destroyBoxes(elem) {
  elem.innerHTML = "";
  startSize = 30;
}
