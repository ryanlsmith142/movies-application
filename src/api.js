export default {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  }
};

// export default function postMovie()
// {
//   let movieTitle = $('#new-movie-title').val();
//   let movieRating = $('#new-movie-rating').val();
//   let newMovie = {
//     title: movieTitle,
//     rating: movieRating,
//
//   };
//   const url = '/api/movies';
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newMovie),
//   };
//   fetch(url, options)
//       .then(/* post was created successfully */)
//       .catch(/* handle errors */);
// }






