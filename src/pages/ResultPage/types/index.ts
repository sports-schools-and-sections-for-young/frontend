import React, { HTMLAttributes } from "react";
import { Section } from "../../../types";

export type ResultOptionsProps = {
  clearFilters: () => void;
};

export interface IResultNavigateProps
  extends HTMLAttributes<HTMLHeadingElement> {
  setMapView: React.Dispatch<React.SetStateAction<number>>;
}

export type ResultListProps = {
  mapView: number;
};

export interface IResultFiltersProps
  extends HTMLAttributes<HTMLHeadingElement> {
  searchHandle: (event: React.FormEvent<HTMLFormElement>) => void;
  clearFilters: () => void;
}

export type ResultCardProps = {
  section: Section | null;
  favourite: Section[];
  setFavourite: React.Dispatch<React.SetStateAction<Section[]>>;
};

export type mapViewProps = {
  setActiveSection: React.Dispatch<React.SetStateAction<Section | null>>;
};
