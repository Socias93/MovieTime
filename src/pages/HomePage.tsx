import { useEffect, useState } from "react";
import { getCategories, Movies } from "../services/movieService";
import Popular from "../components/Popular";
import Carousel from "../components/Carousel";

function HomePage() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getCategories().then(setMovies);
  }, []);
  return (
    <>
      <Popular movies={movies} />
      <Carousel />
    </>
  );
}

export default HomePage;
