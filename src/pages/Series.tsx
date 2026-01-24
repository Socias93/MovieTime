import { useEffect, useState } from "react";
import { getPopularSeries } from "../services/serieService";

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getPopularSeries().then(setSeries);
  }, []);
  return (
    <h1>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}> {serie.name} </li>
        ))}
      </ul>
    </h1>
  );
}

export default Series;
