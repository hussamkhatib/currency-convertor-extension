let create = document.querySelector("#create");
let wrapper = document.querySelector("#flexContainer");

const btn = document.createElement("button");
create.addEventListener("click", createElement);
btn.addEventListener("click", createNewCurrency);

function createElement() {
  const div = document.createElement("div");
  const dropdown = document.createElement("select");
  const fragment = document.createDocumentFragment();
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
  wrapper.replaceChild(div, create);
}

function createNewCurrency() {
  let lastDiv = wrapper.querySelector("div:last-of-type");
  wrapper.replaceChild(create, lastDiv);
}