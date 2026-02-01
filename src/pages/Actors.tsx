import { useEffect, useState } from "react";
import { Actor, getPopularActors } from "../services/actorSerive";
function ActorsPage() {
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    getPopularActors().then(setActors);
  }, []);

  return (
    <ul>
      {actors.map((actor) => (
        <div key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.profile_path}
          />
          <li> {actor.name} </li>
        </div>
      ))}
    </ul>
  );
}

export default ActorsPage;
