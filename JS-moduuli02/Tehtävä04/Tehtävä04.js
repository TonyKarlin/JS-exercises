'use strict';

const listOfNumbers = [];

let number = 1;
while (number !== 0) {
  number = parseInt(prompt('Enter a number'));
  listOfNumbers.push(number);
}

listOfNumbers.sort((a, b) => b - a);
console.log(listOfNumbers);