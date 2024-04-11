'use strict'

const name = prompt('Enter your name');

const firstParagraph = document.querySelector('p');
firstParagraph.textContent = `Hello, ${name}!`;
