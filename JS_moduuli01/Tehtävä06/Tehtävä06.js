'use strict';

const button = confirm('Should I calculate square root?');
console.log(button);
let number = parseFloat(prompt('Enter a number'));

const sqrt = document.querySelector('p');
sqrt.textContent = `${Math.sqrt(number)}`;

if (number < 0) {
  sqrt.textContent = 'The square root of a negative number is not defined';
}