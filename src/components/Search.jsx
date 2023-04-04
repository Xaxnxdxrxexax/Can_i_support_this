import { useEffect, useState } from "react";
import { API_KEY } from "./API/TMDB_API";
import { Link } from "react-router-dom";

export default function Search({ setmoviesList }) {
  const [search, setSearch] = useState("");

  async function HandleSearch() {
    const urlSafeSearch = encodeURIComponent(search);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${urlSafeSearch}`
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
  return (
    <>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/">
          <button onClick={HandleSearch} disabled={search.length === 0}>
            Search
          </button>
        </Link>
      </label>
      {}
    </>
  );
}
