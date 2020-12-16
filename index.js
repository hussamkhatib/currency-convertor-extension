let create = document.querySelector("#create");
let wrapper = document.querySelector("#flexContainer");
const dropdown = document.createElement("select");

const URL = 'https://api.exchangeratesapi.io/latest'
const okay = document.createElement("button");
let currencyName = [ ]
let currencyValue = [ ]
let fetched = false

okay.addEventListener("click", createNewCurrency);


//        currencyName = data.rates

  //      console.log(Object.keys(currencyName))

fetchOptions()
async function fetchOptions() {
    const resp = await fetch(URL)
    const data = await resp.json()
    currencyName = Object.keys(data.rates)
}


const div = document.createElement("div");
create.addEventListener("click", createElement);

// plus
function createElement() {
  const fragment = document.createDocumentFragment();
  okay.innerText = "okay";
  dropdown.textContent = "";
  div.innerText =''
  for (let i = 0; i < currencyName.length; i++) {
    const option = document.createElement("option");
    option.value = option.innerText = currencyName[i];
    fragment.appendChild(option);
  }
  dropdown.appendChild(fragment);
  div.appendChild(dropdown);
  div.appendChild(okay);
  div.className = "container";
  wrapper.replaceChild(div, create);
}


function createNewCurrency(e) {
    e.stopPropagation() 
    let text = dropdown.options[dropdown.selectedIndex].text;
    let lastDiv = wrapper.querySelector("div:last-of-type");
  //  const div = document.createElement('div')
   // div.className = 'container'
    div.innerText = text
    console.log(lastDiv)
    wrapper.replaceChild(div, lastDiv);
    wrapper.appendChild(create);

}
