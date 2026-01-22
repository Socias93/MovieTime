import { useEffect, useState } from "react";
import "./App.css";
import { getCategories } from "./services/MovieService";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getCategories().then(setMovies);
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.id}>
              <td>{index + 1}</td>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
              <td>{movie.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
