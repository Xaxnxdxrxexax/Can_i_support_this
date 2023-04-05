import { MoviePoster } from "./MoviePoster";
import "./styles/Results.css";

export default function Results({
  movieList,
  setsingleMovieInfo,
  setFavorites,
  favorites,
  updateLocalStorage,
}) {
  return (
    <>
      <h2>Results</h2>
      <div className="movieParent">
        {movieList?.results?.map((movie) => {
          return (
            <MoviePoster
              key={movie.id}
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
