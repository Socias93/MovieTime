import { Movies } from "../services/movieService";

interface Props {
  movies: Movies[];
}

function Popular({ movies }: Props) {
  return (
    <div className="movie-scroll-container">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          style={{ maxWidth: "200px" }}>
          <img
            style={{ maxHeight: "300px" }}
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <h5>{movie.title}</h5>
          <p>Released: {movie.release_date}</p>
          <p>Rating: {movie.vote_average} / 10</p>
        </div>
      ))}
    </div>
  );
}

export default Popular;
