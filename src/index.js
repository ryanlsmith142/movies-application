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

getMovies().then((movies) => {
  let dynamicHTML = "";
  movies.forEach(({title, rating, id}) => {
    dynamicHTML += renderMovies(title, rating, id);
  });

  $(".container").html(dynamicHTML);

  $('.open-modal').on("click", function() {
    //This refers to the card button which has an id
    console.log(this);
    //This will grab the text found in the movie title
    let modalMovieTitle = $(this).parent().children("h5").text();
    $('.modal').modal("toggle");
    $('#edit-movie-title').innerText(modalMovieTitle);

  });

}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});
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
      .then()
      .catch(function() {
          console.log("Hey we couldn't add a movie or update the movies.")
      });

  renderMovies();
}

function editMovie() {

}




//DYNAMICALLY CREATES HTML BASED ON WHAT IS IN db.json

function renderMovies(title,rating, id) {
  //declare empty variable to hold HTML that is being dynamically created
  return `
    <div class="card" style="width: 18rem">
      <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted" id="card-movie-rating">${rating}</h6>
      <button id="${id}" class="open-modal" type="button" class="btn btn-secondary">Edit</button>
      </div>
    </div>
  `;



} //renderMovies()

//ADDS A MOVIE TO DATABASE ON CLICK


$('#add-movie-btn').on("click", function() {
  addMovie();
});


