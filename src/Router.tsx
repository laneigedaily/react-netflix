import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Screens/Home";
import Tv from "./Screens/Tv";
import Movie from "./Screens/Movie";
import TvDetail from "./Screens/TvDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "movies/:movieId",
        element: <Movie />,
      },
      {
        path: "tvlist/:tvId",
        element: <TvDetail />,
      },
    ],
  },
]);

export default router;
