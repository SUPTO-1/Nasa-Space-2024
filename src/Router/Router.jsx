import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home";
import ExploreSpace from './../Page/ExploreSpace';
import Comparison from './../Page/Comparison';
import EventAlert from './../Page/EventAlert';
import Game from "../Page/Game";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/explorespace",
          element: <ExploreSpace></ExploreSpace>
        },
        {
          path: "/comparison",
          element: <Comparison></Comparison>
        },
        {
          path: "/game",
          element: <Game></Game>
        },
        {
          path: "/eventalert",
          element: <EventAlert></EventAlert>
        },
      ],
    },
  ]);

  export default router;