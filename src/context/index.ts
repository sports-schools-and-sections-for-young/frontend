import { createContext, Dispatch, SetStateAction } from "react";
import { Sport } from "../types";

export interface ISectionsRequest {
  gender: "male" | "female" | null;
  sports: Sport[] | null;
  age: number | null;
  location: [number, number] | null;
  distance: number | null;
  maxPrice: number | null;
}

interface IAppContext {
  sports: Sport[];
  setSports: Dispatch<SetStateAction<Sport[]>>;
  sectionRequest: ISectionsRequest;
  setSectionRequest: Dispatch<SetStateAction<ISectionsRequest>>;
}

export const sectionsRequestDefault: ISectionsRequest = {
  gender: null,
  sports: null,
  age: null,
  location: null,
  distance: null,
  maxPrice: null,
};

const defaultValue: IAppContext = {
  sports: [],
  setSports: () => {},
  sectionRequest: sectionsRequestDefault,
  setSectionRequest: () => {},
};

const AppContext = createContext<IAppContext>(defaultValue);

export default AppContext;
