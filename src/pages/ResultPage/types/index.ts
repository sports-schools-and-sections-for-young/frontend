import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { Section } from "../../../types";

export type ResultOptionsProps = {
  clearFilters: () => void;
};

export interface IResultNavigateProps
  extends HTMLAttributes<HTMLHeadingElement> {
  setMapView: Dispatch<SetStateAction<number>>;
  activeView: number;
}

export type ResultListProps = {
  mapView: number;
};

export interface IResultFiltersProps
  extends HTMLAttributes<HTMLHeadingElement> {
  clearFilters: () => void;
  setLoader: Dispatch<SetStateAction<boolean>>;
}

export type mapViewProps = {
  setActiveSection: Dispatch<SetStateAction<Section | null>>;
};
