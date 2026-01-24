const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;

export interface Series {
  id: string;
  name: string;
  origin_country: string;
  poster_path: string;
}

export async function getPopularSeries() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
