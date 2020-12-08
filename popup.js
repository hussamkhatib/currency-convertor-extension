let myList = document.querySelector("#myList");
let searchBar = document.querySelector("#searchBar");

let place = [];
const char = async () => {
  try {
    const res = await fetch(`https://worldtimeapi.org/api/timezone/`);
    place = await res.json();
  } catch (err) {
    console.error(err);
  }

  let re = /[/]/;
  let a = place;

  let b = a.map((item) => {
    const c = item.search(re);
    return {
      country: item.slice(c + 1),
      continent: item.slice(0, c)
    };
  });

  searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value;

    const filteredCharacters = b.filter((character) => {
      return character.country.includes(searchString);
    });
    let d = filteredCharacters.slice(0, 5);
    let f = d
      .map((item) => {
        return `<li>${item.country}</li>`;
      })
      .join("");
    myList.innerHTML = f;
  });
};

char();
