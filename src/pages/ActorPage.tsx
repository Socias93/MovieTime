import { useParams } from "react-router-dom";

function ActorsPrivatePage() {
  const { id } = useParams();
  return <h1>Actor {id} </h1>;
}

export default ActorsPrivatePage;
