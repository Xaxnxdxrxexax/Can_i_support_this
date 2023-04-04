import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { results } from "./components/sampleData/searchResult";
import { singleMovie } from "./components/sampleData/singleMovie";
import SingleMoviePage from "./components/SingleMoviePage";

function App() {
  const [moviesList, setmoviesList] = useState(results);
  //TODO the site breakes if i start with null
  const [singleMovieInfo, setsingleMovieInfo] = useState(singleMovie);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem("can-i-support-this-fav")
    );
    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  function updateLocalStorage(movieFavorites) {
    localStorage.setItem(
      "can-i-support-this-fav",
      JSON.stringify(movieFavorites)
    );
  }

  return (
    <>
      <Header setmoviesList={setmoviesList} />
      <Main
        results={moviesList}
        setsingleMovieInfo={setsingleMovieInfo}
        favorites={favorites}
        setFavorites={setFavorites}
        updateLocalStorage={updateLocalStorage}
      />
      <SingleMoviePage singleMovie={singleMovieInfo} />
      <Footer />
    </>
  );
}

export default App;

const movieSearch =
  "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher";

const singleMovieRequest =
  "https://api.themoviedb.org/3/movie/343611?api_key={api_key}";
