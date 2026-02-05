import { useEffect, useState } from "react";
import { Actor, getPopularActors } from "../services/actorSerive";
function ActorsPage() {
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    getPopularActors().then(setActors);
  }, []);

  return (
    <ul>
      <div className="serie-scroll-container mt-3 mb-3">
        {actors.map((actor) => (
          <div key={actor.id} className="serie-card">
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : "/public/images/user.jpg"
              }
            />

            <div key={actor.id + 1} className="serie-card">
              {actor.profile_path === null}
              <li> {actor.name} </li>
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
}

export default ActorsPage;
