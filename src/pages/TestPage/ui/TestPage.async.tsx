import { lazy } from "react";

export const TestPageAsync = lazy(async () => import("./TestPage.tsx"));
