const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export interface Movies {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export async function getCategories() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data.results; // <-- viktigt! bara själva arrayen med filmer
  } catch (err) {
    console.error(err);
    return [];
  }
}
