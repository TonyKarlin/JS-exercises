'use strict';

const results = document.querySelector('#results');
document.querySelector('form').
    addEventListener('submit', async function(evt) {
      evt.preventDefault();

      const query = document.getElementById('query').value;

      try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();
        console.log(jsonData);
        results.innerHTML = '';
        jsonData.forEach((tvShow) => {
          results.append(showsInHtml(tvShow));
        });
      } catch (error) {
        console.error('Error fetching your TV show:', error);
      }
    });

function showsInHtml(tvShow) {
  const {name, url, summary} = tvShow.show;
  const image = tvShow.show.image?.medium;
  const img = document.createElement('img');
  img.src = image;
  img.alt = `A front cover picture of the show ${name}`;
  const showName = document.createElement('h2');
  showName.textContent = name;
  const showUrl = document.createElement('a');
  showUrl.target = '_blank';
  showUrl.href = url;
  showUrl.textContent = url;
  const showSummary = document.createElement('div');
  showSummary.innerHTML = summary;
  const article = document.createElement('article');
  article.append(showName, img, showUrl, showSummary);
  return article;

}