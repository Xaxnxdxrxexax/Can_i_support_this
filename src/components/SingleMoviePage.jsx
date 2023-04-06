import "./styles/SimpleMoviePage.css";
import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";
import IMDB_logo from "../IMDB_logo.png";

export default function SingleMoviePage({ singleMovie }) {
  const [chatgptResponse, setChatgptResponse] = useState("");
  const [status, setStatus] = useState("waiting");
  const [cast, setCast] = useState([]);
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    })
  );
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${singleMovie.id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((actors) => {
        setCast(actors.cast);
      })
      .catch((error) => {
        console.error("error fetching data", error);
      });
  }, [singleMovie.id]);

  async function handleResponse() {
    setStatus("searching");
    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Are there any controversies connected to any actors or companies associated with the movie ${singleMovie.title}`,
          },
        ],
      })
      .then((res) => {
        setChatgptResponse(res.data.choices[0].message.content);
      });
    setStatus("waiting");
  }

  return (
    <div className="singleMoviePage">
      <img
        className="backgroundPoster"
        src={`https://image.tmdb.org/t/p/original/${singleMovie.poster_path}`}
        alt={singleMovie.title}
      />
      <div className="topPageParent">
        <img
          className="foregroundPoster"
          src={`https://image.tmdb.org/t/p/w300/${singleMovie.poster_path}`}
          alt={singleMovie.title}
        />
        <div className="topPageChild">
          <div className="titleRatingImdb">
            <h1>{singleMovie.title}</h1>
            <a
              href={`https://www.imdb.com/title/${singleMovie.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="IMDB_logo"
                src={IMDB_logo}
                alt="IMDB logo"
                title={`go to ${singleMovie.title} IMDB webpage`}
              />
            </a>
            <p className="rating">{singleMovie.vote_average.toFixed(1)}</p>
          </div>
          <p>Genres</p>
          <ul className="genres">
            {singleMovie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>Top cast:</p>
          <ul className="actors">
            {cast.slice(0, 10).map((actor) => (
              <li key={actor.id}>
                {actor.name} as "{actor.character}"
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h2>Overview:</h2>
      <p className="overviewText">{singleMovie.overview}</p>
      <div className="responseTitleAndButton">
        <h2>
          Can i support this movie? <span>(powered by chatGPT)</span>
        </h2>
        {chatgptResponse.length === 0 && (
          <button
            className="chatGPTButton"
            onClick={handleResponse}
            disabled={status === "searching"}
          >
            Generate response
          </button>
        )}
      </div>
      {status === "searching" && (
        <p>waiting for a response, this may take up to 10 seconds</p>
      )}
      <p>{chatgptResponse}</p>
    </div>
  );
}
