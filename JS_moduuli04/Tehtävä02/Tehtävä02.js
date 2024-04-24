'use strict';

document.querySelector('form').
    addEventListener('submit', async function(evt) {
      evt.preventDefault();

      const query = document.getElementById('query').value;

      try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();
        console.log(jsonData);
      } catch (error) {
        console.error('Error fetching your TV show:', error);
      }
    });
