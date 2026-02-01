const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/trending/person/day?api_key=${API_KEY}&language=en-US
`;

export interface Actor {
  id: string;
  name: string;
  gender: number;
  known_for_department: string;
  profile_path: string;
}

export async function getPopularActors() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log("Error", error);
  }
}
