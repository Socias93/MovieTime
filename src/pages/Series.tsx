import { useEffect, useState } from "react";
import { getPopularSeries, Series } from "../services/serieService";
import Pagination from "../components/Pagination";

function SeriesPage() {
  const [series, setSeries] = useState<Series[]>([]);

  useEffect(() => {
    getPopularSeries().then(setSeries);
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center m-4">
        Popular Series right now
      </h1>
      <div className="serie-scroll-container mt-3 mb-3">
        {series.map((serie) => (
          <div key={serie.id} className="serie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              className="card-img-top"
              alt={serie.name}
            />
            <div className="serie-info">
              <h5 className="serie-title">{serie.name} </h5>
              <p>{serie.genres.map((g) => g.name).join(" • ")}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Pagination />
      </div>
    </>
  );
}

export default SeriesPage;
