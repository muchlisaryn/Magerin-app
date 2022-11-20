import LandingPage from "../Page/LandingPage/LandingPage";
import TrendingPages from "../Page/LandingPage/Trending";
import MoviePages from "../Page/Movie";
import SearchPage from "../Page/Search";

export const route = [
  {
    path: "/",
    element: LandingPage,
  },
  {
    path: "/Search/:value",
    element: SearchPage,
  },
  {
    path: "/trending",
    element: TrendingPages,
  },
  {
    path: "/movie/:id/:title",
    element: MoviePages,
  },
];

export default { route };
