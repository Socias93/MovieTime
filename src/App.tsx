import { useEffect, useState } from "react";
import { getCategories, Movies } from "./services/movieService";
import "./App.css";
import Popular from "./components/Popular";

function App() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getCategories().then(setMovies);
  }, []);

  return <Popular movies={movies} />;
}

export default App;
