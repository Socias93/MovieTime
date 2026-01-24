import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ActorsPage from "./pages/Actors";
import SeriesPage from "./pages/Series";

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
    ],
  },
]);

export default router;
