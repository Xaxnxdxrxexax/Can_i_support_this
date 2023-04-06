import { MoviePoster } from "./MoviePoster";

export default function Favorites({
  movieList,
  setsingleMovieInfo,
  setFavorites,
  favorites,
  updateLocalStorage,
}) {
  return (
    <>
      <h2>Favorites</h2>
      <div className="movieParent">
        {favorites.map((movie) => {
          return (
            <MoviePoster
              movie={movie}
              setsingleMovieInfo={setsingleMovieInfo}
              setFavorites={setFavorites}
              favorites={favorites}
              updateLocalStorage={updateLocalStorage}
            />
          );
        })}
      </div>
    </>
  );
}
