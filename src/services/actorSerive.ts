const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/trending/person?api_key=${API_KEY}`;

export interface Actor {
  id: string;
  name: string;
  gender: number;
  known_for_department: string;
}
