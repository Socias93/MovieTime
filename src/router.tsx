import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Series from "./pages/Series";
import Actors from "./pages/Actors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "series", element: <Series /> },
      { path: "actors", element: <Actors /> },
    ],
  },
]);

export default router;
