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
            <th scope="col"></th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
