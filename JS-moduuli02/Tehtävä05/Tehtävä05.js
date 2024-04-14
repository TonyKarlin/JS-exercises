'use strict';

const listOfNumbers = [];

let number = parseInt(prompt('Enter a number'));
while (!listOfNumbers.includes(number)) {
  listOfNumbers.push(number);
  number = parseInt(prompt('Enter a number'));
}

listOfNumbers.sort((a, b) => a - b);
console.log(listOfNumbers);