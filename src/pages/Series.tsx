import { useEffect, useState } from "react";
import { getPopularSeries, Series } from "../services/serieService";

function SeriesPage() {
  const [series, setSeries] = useState<Series[]>([]);

  useEffect(() => {
    getPopularSeries().then(setSeries);
  }, []);

  return (
    <>
      <div className="serie-scroll-container">
        {series.map((serie) => (
          <div key={serie.id} className="serie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
              className="card-img-top"
              alt={serie.name}
            />
            <div className="serie-card">
              <h5 className="card-title">{serie.name} </h5>
              <p> </p>
              <span className="card-text">{serie.origin_country}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SeriesPage;
