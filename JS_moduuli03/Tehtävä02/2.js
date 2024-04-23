'use strict';
/*
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

const text1 = document.createTextNode('First item');
const text2 = document.createTextNode('Second item');
const text3 = document.createTextNode('Third item');

listItem1.appendChild(text1);
listItem2.appendChild(text2);
listItem3.appendChild(text3);
*/
const ulElement = document.getElementById('target');
/*ulElement.appendChild(listItem1);
ulElement.appendChild(listItem2);
ulElement.appendChild(listItem3);
listItem2.className += 'my-item';*/

for (let i = 0; i < 3; i++) {
  const liItem = document.createElement('li');
  const text = document.createTextNode(`Item ${i + 1}`);
  liItem.appendChild(text);

  if (i === 1) {
    liItem.className = 'my-item';
  }
  ulElement.appendChild(liItem);
}
