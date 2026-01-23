import { useEffect, useState } from "react";
import "./App.css";
import { getCategories, Movies } from "./services/MovieService";

function App() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getCategories().then(setMovies);
  }, []);

  return (
    <>
      <div className="container py-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
          {movies.map((movie) => (
            <div key={movie.id} className="col">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <h5 className="card-title text-center">{movie.title}</h5>

                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">
                    Popularity: {movie.popularity.toFixed()} <br />
                    Released: {movie.release_date} <br />
                    Rating: {movie.vote_average} / 10 ({movie.vote_count} votes)
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
