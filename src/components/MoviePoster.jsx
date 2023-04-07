import { Link } from "react-router-dom";

export function MoviePoster({
  movie,
  setsingleMovieInfo,
  setFavorites,
  favorites,
  updateLocalStorage,
}) {
  function handleClick(id) {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
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
    <>
      <div
        key={movie.id}
        data-testid="MoviePoster"
        className="moviePoster"
        onClick={() => handleClick(movie.id)}
      >
        <Link to={`/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
            title={`Go to ${movie.title}'s detailed page`}
          />
        </Link>
        <div className="title-fav">
          <p title={movie.title}>{movie.title}</p>
          <p
            className="favorite"
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleFavorites(e, movie);
              }
            }}
            tabIndex={0}
            onClick={(e) => handleFavorites(e, movie)}
            title={`Add ${movie.title} to favorites`}
          >
            <FavoriteSVG favorites={favorites} movie={movie} />
          </p>
        </div>
      </div>
    </>
  );
}

function FavoriteSVG({ favorites, movie }) {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={favorites.find((fav) => fav.id === movie.id) ? "red" : "gray"}
      className="bi bi-balloon-heart-fill"
      viewBox="0 0 16 16"
      title={`Add ${movie.title} to favorites`}
    >
      <title>{`Add ${movie.title} to favorites`}</title>
      <path
        title="heart"
        fillRule="evenodd"
        d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
      />
    </svg>
  );
}
