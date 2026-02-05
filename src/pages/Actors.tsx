import { useEffect, useState } from "react";
import { Actor, getPopularActors } from "../services/actorSerive";
import { NavLink } from "react-router-dom";
function ActorsPage() {
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    getPopularActors().then(setActors);
  }, []);

  console.log(actors);

  return (
    <ul>
      <div className="serie-scroll-container mt-3 mb-3">
        {actors.map((actor) => (
          <div
            key={actor.id}
            className="serie-card d-flex flex-column justify-content-between"
            style={{ height: "350px" }}>
            <img
              className="card-img-top"
              style={{ maxHeight: "250px" }}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : actor.gender === 0
                    ? "/public/images/female_user.jpg"
                    : "/public/images/male_user.png"
              }
            />

            <div key={actor.id + 1}>
              <li> {actor.name} </li>
              <h5>{actor.known_for_department} </h5>
              <NavLink
                to={`/actors/${actor.id}`}
                className="btn btn-outline-dark mb-2">
                See more
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
}

export default ActorsPage;
