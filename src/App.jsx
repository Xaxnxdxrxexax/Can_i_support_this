import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { singleMovie } from "./components/sampleData/singleMovie";
import SingleMoviePage from "./components/SingleMoviePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import AboutMe from "./components/AboutMe";

function App() {
  const [moviesList, setmoviesList] = useState(null);
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
    <div>
      <Header setmoviesList={setmoviesList} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main
                results={moviesList}
                setsingleMovieInfo={setsingleMovieInfo}
                favorites={favorites}
                setFavorites={setFavorites}
                updateLocalStorage={updateLocalStorage}
              />
            </>
          }
        />
        <Route
          path="/:movieId"
          element={
            <>
              <SingleMoviePage singleMovie={singleMovieInfo} />
            </>
          }
        />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

const movieSearch =
  "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher";

const singleMovieRequest =
  "https://api.themoviedb.org/3/movie/343611?api_key={api_key}";
