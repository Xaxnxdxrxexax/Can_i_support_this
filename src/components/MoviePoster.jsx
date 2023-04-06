import { API_KEY } from "./API/TMDB_API";

export function MoviePoster({
  movie,
  setsingleMovieInfo,
  setFavorites,
  favorites,
  updateLocalStorage,
}) {
  function handleClick(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setsingleMovieInfo(data);
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }

  function handleFavorites(e, movie) {
    function addFavoriteMovie(movie) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      updateLocalStorage(newFavoriteList);
    }
    function removeFavoriteMovie(movie) {
      const newFavoriteList = favorites.filter((fav) => fav.id !== movie.id);
      setFavorites(newFavoriteList);
      updateLocalStorage(newFavoriteList);
    }
    e.stopPropagation();
    if (favorites.find((fav) => fav.id === movie.id)) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  }

  return (
    <div
      key={movie.id}
      className="moviePoster"
      onClick={() => handleClick(movie.id)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="title-fav">
        <p>{movie.title}</p>
        <p className="favorite" onClick={(e) => handleFavorites(e, movie)}>
          ❤️
        </p>
      </div>
    </div>
  );
}
