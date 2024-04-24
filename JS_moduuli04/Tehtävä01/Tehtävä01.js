'use strict';

document.getElementById('action').
    addEventListener('submit', async function(evt) {
      evt.preventDefault();

      const query = document.getElementById('query');

      const formElem = document.getElementById('action').
          getAttribute('action');
      const searchShows = formElem + `q=?${query}`;
      console.log(searchShows);
    });