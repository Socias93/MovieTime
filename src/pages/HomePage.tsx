import { useEffect, useState } from "react";
import { getCategories, Movies } from "../services/movieService";
import Popular from "../components/Popular";
import Navbar from "../components/Navbar";

function HomePage() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getCategories().then(setMovies);
  }, []);
  return (
    <>
      <Navbar />
      <Popular movies={movies} />;
    </>
  );
}

export default HomePage;
