import Favorites from "./Favorites";
import Results from "./Results";

export default function Main({
  results,
  setsingleMovieInfo,
  favorites,
  setFavorites,
  updateLocalStorage,
}) {
  return (
    <>
      <Results
        movieList={results}
        setsingleMovieInfo={setsingleMovieInfo}
        setFavorites={setFavorites}
        favorites={favorites}
        updateLocalStorage={updateLocalStorage}
      />
      <Favorites
        movieList={results}
        setsingleMovieInfo={setsingleMovieInfo}
        setFavorites={setFavorites}
        favorites={favorites}
        updateLocalStorage={updateLocalStorage}
      />
    </>
  );
}
