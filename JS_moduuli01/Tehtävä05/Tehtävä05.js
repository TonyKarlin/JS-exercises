'use strict';

const year = parseInt(prompt('Enter a year'));

const paragraph = document.querySelector('p');

if (year % 100 === 0 && year % 400 === 0) {
  paragraph.textContent = `${year} is a leap year.`;
} else if (year % 4 === 0 && year % 100 !== 0) {
  paragraph.textContent = `${year} is a leap year.`;
} else {
  paragraph.textContent = `${year} is not a leap year.`;
}