import { lazy } from "react";

export const AddSectionPageAsync = lazy(
  async () => import("./AddSectionPage.tsx"),
);
