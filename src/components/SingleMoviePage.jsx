import "./styles/SimpleMoviePage.css";

export default function SingleMoviePage({ singleMovie }) {
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
    </div>
  );
}
