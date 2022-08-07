const categories = document.querySelectorAll(".item");

console.group("task 1");
console.log(`Number of categories: ${categories.length}`);
console.log(" ");

for (let сategory of categories) {
  console.log(`Category: ${сategory.children[0].textContent}`);
  console.log(`Elements: ${сategory.children[1].children.length}`);
  console.log(" ");
}
console.groupEnd();
