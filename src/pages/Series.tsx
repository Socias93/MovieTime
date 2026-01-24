import { useEffect, useState } from "react";
import { getPopularSeries, Series } from "../services/serieService";

function SeriesPage() {
  const [series, setSeries] = useState<Series[]>([]);

  useEffect(() => {
    getPopularSeries().then(setSeries);
  }, []);

  return (
    <>
      <h1>
        {series.map((serie) => (
          <ul key={serie.id}>
            <li> {serie.name} </li>
            <li>{serie.origin_country} </li>
          </ul>
        ))}
      </h1>
    </>
  );
}

export default SeriesPage;
