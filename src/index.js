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

  let modalMovieId;

  $('.open-modal').on("click", function() {
    //This will grab the text found in the movie title
    let modalMovieTitle = $(this).parent().children("h5").text();
    //This will grab the text found in the movie rating
    let modalMovieRating = $(this).parent().children("h6").text();
    //This will grab the id that corresponds with the button and the movie in the database
    modalMovieId = $(this).attr("id");

    $('.modal').modal("toggle");

    $('#edit-movie-title').val(modalMovieTitle);

    $('#edit-movie-rating').val(modalMovieRating);

  }); //open-model event listener "click"


  $('#save-changes').on("click", function() {

    let editedMovieTitle = $(this).parent().parent().children(".modal-body").children().children("#edit-movie-title").val();

    let editedMovieRating = $(this).parent().parent().children(".modal-body").children().children("#edit-movie-rating").val();

    editMovie(editedMovieTitle,editedMovieRating,modalMovieId);
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

} //addMovie()

function editMovie(editedMovieTitle, editedMovieRating, modalMovieId) {
  const editedMovie = {
    title: editedMovieTitle,
    rating: editedMovieRating,
    id: modalMovieId
  };
  const url = `/api/movies/${modalMovieId}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedMovie),
  };
  fetch(url, options)
      .then((response) => {
        return response.json();
      }).then((editedMovie) => {
          $(modalMovieId).parent().children("h5").html(editedMovie.title);
        // $(".container").html(dynamicHTML);
      })
      .catch(function() {
        console.log("Hey we couldn't edit that movie")
      });

} //editMovie()




//DYNAMICALLY CREATES HTML BASED ON WHAT IS IN db.json

function renderMovies(title,rating, id) {
  //declare empty variable to hold HTML that is being dynamically created
  return `
    <div class="card" style="width: 18rem">
      <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted" id="card-movie-rating">${rating}</h6>
      <button id=${id} class="open-modal" type="button" class="btn btn-secondary">Edit</button>
      </div>
    </div>
  `;



} //renderMovies()

//ADDS A MOVIE TO DATABASE ON CLICK


$('#add-movie-btn').on("click", function() {
  addMovie();
});

