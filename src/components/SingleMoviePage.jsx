import "./styles/SimpleMoviePage.css";
import OPENAI_API_KEY from "../components/API/openAi_API";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

export default function SingleMoviePage({ singleMovie }) {
  const [chatgptResponse, setChatgptResponse] = useState("");
  const [status, setStatus] = useState("waiting");
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: OPENAI_API_KEY,
    })
  );

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
        src={`https://image.tmdb.org/t/p/original/${singleMovie.poster_path}`}
        alt={singleMovie.title}
      />
      <h2>{singleMovie.title}</h2>
      <p>Genres</p>
      <ul>
        {singleMovie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <h2>Overview:</h2>
      <p>{singleMovie.overview}</p>
      <h2>Can i support this movie? (powered by chatGPT)</h2>
      <button onClick={handleResponse}>generate generate response</button>
      {status === "searching" && (
        <p>waiting for a response, this may take up to 10 seconds</p>
      )}
      <p>{chatgptResponse}</p>
    </div>
  );
}
