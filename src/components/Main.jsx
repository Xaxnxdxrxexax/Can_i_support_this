import Favorites from "./Favorites";
import Results from "./Results";
import Search from "./Search";
import "./styles/centerSearchAndFavorites.css";

export default function Main({
  results,
  setsingleMovieInfo,
  favorites,
  setFavorites,
  updateLocalStorage,
  setmoviesList,
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
      {results === null && (
        <div className="centerSearch">
          <Search setmoviesList={setmoviesList} />
        </div>
      )}
      <Favorites
        movieList={results}
        setsingleMovieInfo={setsingleMovieInfo}
        setFavorites={setFavorites}
        favorites={favorites}
        updateLocalStorage={updateLocalStorage}
      />
      {favorites.length === 0 && (
        <div className="centerFavorites">
          {" "}
          <p>No favorite movies at the moment...</p>
        </div>
      )}
    </>
  );
}
