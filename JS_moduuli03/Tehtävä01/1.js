'use strict';

let addHtml = document.getElementById('target');

addHtml.innerHTML = `
  <li>First item</li>
  <li>Second item</li>
  <li>Thrid item</li>
`;

addHtml.className += 'my-list';
