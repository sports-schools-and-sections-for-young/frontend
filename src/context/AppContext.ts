import { createContext, Dispatch, SetStateAction } from "react";
import { Section, Sport } from "../types";

export interface ISectionsRequest {
  gender: "Man" | "Woman" | null;
  sports: Sport[] | null;
  age: number | null;
  location: [number, number];
  distance: number | null;
  maxPrice: number | null;
  freeTrieal: boolean;
}

interface IAppContext {
  sports: Sport[];
  setSports: Dispatch<SetStateAction<Sport[]>>;
  sectionRequest: ISectionsRequest;
  setSectionRequest: Dispatch<SetStateAction<ISectionsRequest>>;
  fetchedSections: Section[];
  setFetchedSections: Dispatch<SetStateAction<Section[]>>;
  filteredSections: Section[];
  setFilteredSections: Dispatch<SetStateAction<Section[]>>;
}

export const sectionsRequestDefault: ISectionsRequest = {
  gender: null,
  sports: null,
  age: null,
  location: [59.936846, 30.312185],
  distance: null,
  maxPrice: null,
  freeTrieal: false,
};

const defaultValue: IAppContext = {
  sports: [],
  setSports: () => {},
  sectionRequest: sectionsRequestDefault,
  setSectionRequest: () => {},
  fetchedSections: [],
  setFetchedSections: () => {},
  filteredSections: [],
  setFilteredSections: () => {},
};

const AppContext = createContext<IAppContext>(defaultValue);

export default AppContext;
