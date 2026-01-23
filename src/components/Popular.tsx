import { Movies } from "../services/movieService";

interface Props {
  movies: Movies[];
}

function Popular({ movies }: Props) {
  return (
    <>
      <div className="ms-4">
        <h1>Popular movies right now</h1>
      </div>
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
            <p>
              {new Date(movie.release_date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Popular;
