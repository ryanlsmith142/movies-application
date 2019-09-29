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
      .then()
      .catch(function() {
          console.log("Hey we couldn't add a movie or update the movies.")
      });

  renderMovies();
}


getMovies().then((movies) => {
  let dynamicHTML = "";
  movies.forEach(({title, rating, id}) => {
    dynamicHTML += renderMovies(title, rating, id);

  });

  $(".container").html(dynamicHTML);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});


//DYNAMICALLY CREATES HTML BASED ON WHAT IS IN db.json

function renderMovies(title,rating, id) {

  //declare empty variable to hold HTML that is being dynamically created

  return `
    <div class="card" style="width: 18rem; data-id=${id}">
      <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${rating}</h6>
      <button class="edit-movie" type="button" class="btn btn-secondary">Edit</button>
      </div>
    </div>
  `;



}

function renderModal() {
  return '\n' +
      '<div class="modal" tabindex="-1" role="dialog">\n' +
      '  <div class="modal-dialog" role="document">\n' +
      '    <div class="modal-content">\n' +
      '      <div class="modal-header">\n' +
      '        <h5 class="modal-title">Modal title</h5>\n' +
      '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
      '          <span aria-hidden="true">&times;</span>\n' +
      '        </button>\n' +
      '      </div>\n' +
      '      <div class="modal-body">\n' +
      '        <p>Modal body text goes here.</p>\n' +
      '      </div>\n' +
      '      <div class="modal-footer">\n' +
      '        <button type="button" class="btn btn-primary">Save changes</button>\n' +
      '        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
      '      </div>\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>'
}

//ADDS A MOVIE TO DATABASE ON CLICK

$('#add-movie-btn').on("click", function() {
  addMovie();
});

$('.edit-movie').on("shown.bs.modal", function() {
  console.log('edit button');
  renderModal();

});

// $('.edit-movie').click(function() {
//
//   console.log('edit button 2 ran');
//
//   let modal = renderModal();
//   $(document).html(modal);
// });
