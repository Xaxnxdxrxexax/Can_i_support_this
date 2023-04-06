export function fetchSingleMovie({ singleMovie }) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${singleMovie.id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw response;
  });
}
