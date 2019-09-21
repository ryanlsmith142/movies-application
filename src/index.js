/**
 * es6 modules and imports
 */

/**
 * require style imports
 */
function getMovies() {
  return fetch('/api/movies')
      .then(response => response.json());
}

function addMovie() {
  let movieTitle = $('#new-movie-title').val();
  let movieRating = $('#new-movie-rating').val();
  let newMovie = {
    title: movieTitle,
    rating: movieRating,

  };
  const url = '/api/movies';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMovie),
  };
  fetch(url, options)
      .then(getMovies)
      .catch(/* handle errors */);
}
//IMPORTS getMovies() fetch request from api.js


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

$('#add-movie').on("click", function() {
  preventDefault();
  addMovie();
});

