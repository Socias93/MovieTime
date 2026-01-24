const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`;
const GENRE_URL = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`;

export interface Series {
  id: string;
  name: string;
  genres: { id: number; name: string }[];
  origin_country: string;
  poster_path: string;
}

export async function getPopularSeries() {
  try {
    const genreRes = await fetch(GENRE_URL);
    const genreData = await genreRes.json();
    const genreMap: Record<number, string> = {};
    genreData.genres.forEach((g: { id: number; name: string }) => {
      genreMap[g.id] = g.name;
    });

    const res = await fetch(BASE_URL);
    const data = await res.json();

    const seriesWithGenres: Series[] = data.results.map((serie: any) => ({
      id: serie.id,
      name: serie.name,
      genres: serie.genre_ids.map((id: number) => ({ id, name: genreMap[id] })),
      origin_country: serie.origin_country,
      poster_path: serie.poster_path,
    }));

    return seriesWithGenres;
  } catch (err) {
    console.error(err);
    return [];
  }
}
