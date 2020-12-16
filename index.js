let create = document.querySelector("#create");
let wrapper = document.querySelector("#flexContainer");
const dropdown = document.createElement("select");

const okay = document.createElement("button");
create.addEventListener("click", createElement);
// +
okay.addEventListener("click", createNewCurrency);

function createElement() {
  const div = document.createElement("div");
  const fragment = document.createDocumentFragment();
  okay.innerText = "okay";
  dropdown.textContent = "";
  for (let i = 0; i < 3; i++) {
    const option = document.createElement("option");
    option.value = option.innerText = i;
    fragment.appendChild(option);
  }
  dropdown.appendChild(fragment);
  div.appendChild(dropdown);
  div.appendChild(okay);
  div.className = "container";
  wrapper.replaceChild(div, create);
}

function createNewCurrency() {
  let lastDiv = wrapper.querySelector("div:last-of-type");
  wrapper.replaceChild(okay, lastDiv);
  wrapper.appendChild(create);
  var value = dropdown.options[dropdown.selectedIndex].value;
  var text = dropdown.options[dropdown.selectedIndex].text;
  console.log(value, text);
}
