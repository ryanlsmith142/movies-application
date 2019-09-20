/**
 * es6 modules and imports
 */

/**
 * require style imports
 */

//IMPORTS getMovies() fetch request from api.js

const {getMovies} = require('./api.js');


getMovies().then((movies) => {
  console.log('Here are all the movies:');
  let dynamicHTML = "";
  movies.forEach(({title, rating, id}) => {
    // console.log(`id#${id} - ${title} - rating: ${rating}`);
    dynamicHTML += renderMovies(title, rating, id);

  });

  $(".container").html(dynamicHTML);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});


//DYNAMICALLY CREATES HTML BASED ON WHAT IS IN db.json

//BOOTSTRAP CARD REFERENCE

// <div class="card" style="width: 18rem;">
//     <div class="card-body">
//     <h5 class="card-title">Card title</h5>
// <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// <a href="#" class="card-link">Card link</a>
// <a href="#" class="card-link">Another link</a>
// </div>
// </div>

function renderMovies(title,rating, id) {

  //declare empty variable to hold HTML that is being dynamically created

  let dynamicHTML = "";

  dynamicHTML = `
    <div class="card" style="width: 18rem; data-id=${id}">
      <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${rating}</h6>
      </div>
    </div>
  `;

  return dynamicHTML;

}