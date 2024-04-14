'use strict';

const listOfDogs = [];

for (let i = 6; i > 0; i--) {
  const dogName = prompt('What\'s the name of your dog?');
  listOfDogs.push(dogName);
}

listOfDogs.sort();

for (const dog in listOfDogs.reverse()) {
  console.log(listOfDogs);
}

const ulElement = document.querySelector('ul');

listOfDogs.forEach(dogName => {
  const liElement = document.createElement('li');
  liElement.textContent = dogName;
  ulElement.appendChild(liElement);
});