import LandingPage from "../Page/LandingPage/LandingPage";
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
];

export default { route };
