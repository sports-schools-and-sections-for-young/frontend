import { type RouteProps } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { TestPage } from "../../pages/TestPage";
import { MainPage } from "../../pages/MainPage";

export enum AppRoutes {
  MAIN_PAGE = "main_page",
  TEST_PAGE = "test_page",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN_PAGE]: "/",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.TEST_PAGE]: "test",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN_PAGE]: {
    path: RoutePath.main_page,
    element: <MainPage />,
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
