import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../config/routeConfig/routeConfig.tsx";
import Preloader from "../../../components/ui/Preloader/Preloader.tsx";
import { PreloaderSize } from "../../../components/ui/Preloader/types";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute.tsx";

const AppRouter = () => {
  return (
    <Suspense fallback={<Preloader size={PreloaderSize.Large} />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path, onlyForAuth }) =>
          onlyForAuth === undefined ? (
            <Route key={path} path={path} element={element} />
          ) : (
            <Route
              key={path}
              element={<ProtectedRoute onlyForAuth={onlyForAuth} />}
            >
              <Route key={path} path={path} element={element} />
            </Route>
          ),
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
