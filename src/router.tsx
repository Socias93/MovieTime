import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home";
import ActorsPage from "./pages/Actors";
import SeriesPage from "./pages/Series";
import ActorsPrivatePage from "./pages/ActorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "series", element: <SeriesPage /> },
      { path: "actors", element: <ActorsPage /> },
      { path: "actors/:id", element: <ActorsPrivatePage /> },
    ],
  },
]);

export default router;
