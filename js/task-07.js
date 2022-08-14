const fsCont = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = fsCont.value + "px";

fsCont.addEventListener("input", (e) => {
  text.style.fontSize = e.target.value + "px";
});
