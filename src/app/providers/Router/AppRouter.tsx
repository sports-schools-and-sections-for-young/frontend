import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../../config/routeConfig/routeConfig.tsx";
import Preloader from "../../../components/ui/Preloader/Preloader.tsx";
import { PreloaderSize } from "../../../components/ui/Preloader/types/index.ts";

const AppRouter = () => {
  return (
    <Suspense fallback={<Preloader size={PreloaderSize.Medium} />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
