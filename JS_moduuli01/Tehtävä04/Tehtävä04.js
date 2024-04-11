'use strict';

const potterName = prompt('Enter your name');

let houses = Math.floor(Math.random() * 4 + 1);
const allHouses = document.querySelector('p');

if (houses === 1) {
  allHouses.textContent = (`${potterName} you are Gryffindor`);
} else if (houses === 2) {
  allHouses.textContent = (`${potterName} you are Slytherin`);
} else if (houses === 3) {
  allHouses.textContent = (`${potterName} you are Hufflepuff`);
} else {
  allHouses.textContent = (`${potterName} you are Ravenclaw`);
}
