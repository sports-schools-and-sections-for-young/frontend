import { type RouteProps } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { TestPage } from "../../pages/TestPage";
import { MainPage } from "../../pages/MainPage";
import { SearchPage } from "../../pages/SearchPage";
import { ResultPage } from "../../pages/ResultPage";
import { AppRoutes } from "../types";

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_PAGE]: "/",
  [AppRoutes.SEARCH_PAGE]: "/search",
  [AppRoutes.RESULT_PAGE]: "/results",
  [AppRoutes.TEST_PAGE]: "/test",
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
  [AppRoutes.TEST_PAGE]: {
    path: RoutePath.test_page,
    element: <TestPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
