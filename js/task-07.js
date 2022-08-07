const fsCont = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fsCont.addEventListener("input", (e) => {
  text.style.fontSize = e.target.value + "px";
});
