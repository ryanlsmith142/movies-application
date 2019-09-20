module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  }
};

module.exports = {
  addMovie: () => {
    return fetch('/api/movies/').then(postMovie () => {
          let movieTitle = $('#new-coffee').val();
          let movieRating = $('#new-movie-rating').val();
          let newMovie = {
            title: movieTitle,
            rating: movieRating
          };
          const url = '/api/movies';
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie),
          };
          // fetch(url, options)
          //     .then(renderMovies());
          //     .catch(console.log("movie didn't load"));

        });





  }

};
