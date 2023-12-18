import { lazy } from "react";

export const FavouritePageAsync = lazy(
  async () => import("./FavouritePage.tsx"),
);
