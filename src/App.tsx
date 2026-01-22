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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Popularity</th>
            <th scope="col">Released</th>
            <th scope="col">Raiting</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.popularity.toFixed()} / 900</td>
              <td>{movie.release_date} </td>
              <td>
                {movie.vote_average} / 10 ({movie.vote_count} votes)
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
