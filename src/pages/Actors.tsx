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
        <li key={actor.id}> {actor.name} </li>
      ))}
    </ul>
  );
}

export default ActorsPage;
