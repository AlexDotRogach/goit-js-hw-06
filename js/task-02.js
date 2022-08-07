const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const newElements = [];

for (let item of ingredients) {
  let newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = item;

  newElements.push(newElement);
}

ingredientsList.prepend(...newElements);
