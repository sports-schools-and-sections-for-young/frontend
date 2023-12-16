import { createContext, Dispatch, SetStateAction } from "react";
import { School, Section, Sport } from "../types";
import { Weekday } from "../utils/constants/week";

export interface ISectionsRequest {
  gender: "Man" | "Woman" | null;
  sports: Sport[] | null;
  age: number | null;
  location: [number, number];
  distance: number | null;
  maxPrice: number;
  freeTrial: boolean;
  schedule: Weekday[] | null;
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
  school: School | null;
  setSchool: Dispatch<SetStateAction<School | null>>;
}

export const sectionsRequestDefault: ISectionsRequest = {
  gender: null,
  sports: null,
  age: null,
  location: [59.936846, 30.312185],
  distance: null,
  maxPrice: Infinity,
  freeTrial: false,
  schedule: null,
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
  school: null,
  setSchool: () => {},
};

const AppContext = createContext<IAppContext>(defaultValue);

export default AppContext;
