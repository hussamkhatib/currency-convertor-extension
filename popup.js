import "./styles.css";
let create = document.querySelector("#create");
let wrapper = document.querySelector("#flexContainer");

create.addEventListener("click", createElement);
const btn = document.createElement("button");
function createElement() {
  const dropdown = document.createElement("select");
  const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  btn.innerText = "okay";
  for (let i = 0; i < 3; i++) {
    const option = document.createElement("option");
    option.value = option.innerText = i;
    fragment.appendChild(option);
  }
  dropdown.appendChild(fragment);
  div.appendChild(dropdown);
  div.appendChild(btn);
  div.className = "container";
  insertBefore(div, create);
}

function insertBefore(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode);
}
