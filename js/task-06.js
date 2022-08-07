const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", (e) => {
  const target = e.target;
  const elemLen = target.value.length;
  const elemNeedLen = target.dataset.length;

  if (elemLen == elemNeedLen) {
    changeState(target, "valid");
  } else {
    changeState(target, "invalid");
  }
});

function changeState(elem, type) {
  type === "valid"
    ? elem.classList.remove("invalid")
    : elem.classList.remove("valid");
  elem.classList.add(`${type}`);
}
