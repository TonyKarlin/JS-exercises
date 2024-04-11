'use strict'

const number1 = parseInt(prompt('Enter a number'));
const number2 = parseInt(prompt('Enter a number'));
const number3 = parseInt(prompt('Enter a number'));

const allParagraphs = document.querySelectorAll('p');

allParagraphs[0].textContent = `Sum: ${number1 + number2 + number3}`;
allParagraphs[2].textContent = `Avg: ${(number1 + number2 + number3) / 3}`;
allParagraphs[1].textContent = `Prod: ${(number1 * number2 * number3)}`;
