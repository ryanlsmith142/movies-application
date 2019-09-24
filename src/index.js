/**
 * es6 modules and imports
 */

/**
 * require style imports
 */
function getMovies() {
    console.log("getmovies ran");
  return fetch('/api/movies')
      .then(response => response.json());
}

function addMovie() {
    console.log("add Movies ran");
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
      .then()
      .catch(function() {
          console.log("Hey we couldn't add a movie or update the movies.")
      });
}


getMovies().then((movies) => {
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

//ADDS A MOVIE TO DATABASE ON CLICK

$('#add-movie-btn').on("click", function(e) {
  // e.preventDefault();
  console.log("click event occured");
  addMovie();
});


