import { useState } from "react";
import { Link, redirect } from "react-router-dom";

export default function Search({ setmoviesList }) {
  const [search, setSearch] = useState("");

  async function HandleSearch() {
    const urlSafeSearch = encodeURIComponent(search);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${urlSafeSearch}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setmoviesList(data))
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      HandleSearch();
      setSearch("");
      return redirect("/");
      //TODO it does not redirect on enter key
    }
  }
  return (
    <>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          placeholder="type here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            handleKeyPress(e);
          }}
        />
        <Link to="/" tabIndex={-1}>
          <button
            onClick={() => {
              HandleSearch();
              setSearch("");
            }}
            disabled={search.length === 0}
          >
            Search
          </button>
        </Link>
      </label>
      {}
    </>
  );
}
