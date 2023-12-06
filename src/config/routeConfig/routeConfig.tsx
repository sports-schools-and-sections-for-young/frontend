import { type RouteProps } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { MainPage } from "../../pages/MainPage";
import { SearchPage } from "../../pages/SearchPage";
import { ResultPage } from "../../pages/ResultPage";
import { FavouritePage } from "../../pages/FavouritePage";
import { AppRoutes } from "../types";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_PAGE]: "/",
  [AppRoutes.SEARCH_PAGE]: "/search",
  [AppRoutes.RESULT_PAGE]: "/results",
  [AppRoutes.FAVOURITE_PAGE]: "/favourites",
  [AppRoutes.SIGN_IN]: "/signin",
  [AppRoutes.REGISTRATION]: "/registration",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN_PAGE]: {
    path: RoutePath.main_page,
    element: <MainPage />,
  },
  [AppRoutes.SEARCH_PAGE]: {
    path: RoutePath.search_page,
    element: <SearchPage initialStep={0} />,
  },
  [AppRoutes.RESULT_PAGE]: {
    path: RoutePath.result_page,
    element: <ResultPage />,
  },
  [AppRoutes.FAVOURITE_PAGE]: {
    path: RoutePath.favourite_page,
    element: <FavouritePage />,
  },
  [AppRoutes.SIGN_IN]: {
    path: RoutePath.sign_in,
    element: <Login />,
  },
  [AppRoutes.REGISTRATION]: {
    path: RoutePath.registration,
    element: <Register />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
