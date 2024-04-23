'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target');

names.forEach(name => {
  const addLiItem = document.createElement('li');
  addLiItem.textContent = name;
  target.appendChild(addLiItem);
});
