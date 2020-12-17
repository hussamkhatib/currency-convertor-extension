let create = document.querySelector("#create");
let wrapper = document.querySelector("#flexContainer");
const dropdown = document.createElement("select");

let delBtn = null
let inputFields = document.querySelector('input')

const URL = 'https://api.exchangeratesapi.io/latest'
const okay = document.createElement("button");

let currencyArray = [ ]
let currencyArray2 = [ ]
let currencyValue = [ ]
let activeARR = [['EUR',1.00]]
let keys = []

const trashBin = `<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.625 3.75V15H11.875V3.75H0.625ZM3.75 12.5C3.75 12.845 3.47 13.125 3.125 13.125C2.78 13.125 2.5 12.845 2.5 12.5V6.25C2.5 5.905 2.78 5.625 3.125 5.625C3.47 5.625 3.75 5.905 3.75 6.25V12.5ZM6.875 12.5C6.875 12.845 6.595 13.125 6.25 13.125C5.905 13.125 5.625 12.845 5.625 12.5V6.25C5.625 5.905 5.905 5.625 6.25 5.625C6.595 5.625 6.875 5.905 6.875 6.25V12.5ZM10 12.5C10 12.845 9.72 13.125 9.375 13.125C9.03 13.125 8.75 12.845 8.75 12.5V6.25C8.75 5.905 9.03 5.625 9.375 5.625C9.72 5.625 10 5.905 10 6.25V12.5ZM12.5 1.25V2.5H0V1.25H3.56937C4.13187 1.25 4.58875 0.563125 4.58875 0H7.91062C7.91062 0.563125 8.36688 1.25 8.93 1.25H12.5Z" fill="black"/>
</svg>
`
okay.addEventListener("click", createNewCurrency);

fetchOptions()
async function fetchOptions() {
    const resp = await fetch(URL)
    const data = await resp.json()
    currencyArray = [['EUR',1.00],...Object.entries(data.rates)]
    currencyArray2 = [...currencyArray]
    currencyValue = data.rates
    currencyValue =  Object.assign({},{'EUR':1.00},currencyValue);
    keys = Object.keys(currencyValue)
}


create.addEventListener("click", createElement);

// plus
function createElement() {
  const div = document.createElement("div");
  const fragment = document.createDocumentFragment();
  okay.innerText = "okay";
  dropdown.textContent = "";
  div.innerText = ''
  for (let i = 0; i < currencyArray.length; i++) {
    const option = document.createElement("option");
    option.value = option.innerText = currencyArray[i][0];
    fragment.appendChild(option);
  }
  dropdown.appendChild(fragment);
  div.appendChild(dropdown);
  div.appendChild(okay);
  div.className = "container";
  wrapper.replaceChild(div, create);
}

function createNewCurrency() {
  const div = document.createElement("div");
  const p = document.createElement('p')
  const input = document.createElement('input')
  const del = document.createElement('button')
  let text = dropdown.options[dropdown.selectedIndex].text;
  let lastDiv = wrapper.querySelector("div:last-of-type");
  div.className = 'container'
  div.appendChild(p)
  p.innerText = text 
  input.value = currencyValue[text]
  input.type = 'number'
  div.appendChild(input) 
  del.innerHTML = trashBin
  del.className = 'del'
  wrapper.replaceChild(div, lastDiv);
  wrapper.appendChild(create);
  del.addEventListener('click',function(){
    wrapper.removeChild(del.parentNode)
  })
  div.appendChild(del) 
  inputFields = document.querySelectorAll('input')  
  input.addEventListener('change',convert)
  const index = keys.map(e => e).indexOf(text);
  activeARR.push(currencyArray2[index])
 
}

function convert(e) {
  let curValue = e.target.value
  let curName = e.target.parentNode.children[0].innerText
  const index = currencyArray.map(e => e[0]).indexOf(curName);
  let diff = curValue/currencyArray[index][1]

  currencyArray2.forEach((inp,index) => {
    inp[1] = diff * currencyArray2[index][1] 
  })
  
  activeARR.forEach((inp,i) => {
    let index = currencyArray2.map(e => e[0]).indexOf(inp[0]);
    inputFields[i].value = currencyArray2[index][1]
})
}

