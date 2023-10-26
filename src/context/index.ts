import { createContext, Dispatch, SetStateAction } from "react";
import { School, Sport } from "../types";

interface IAppContext {
  sports: Sport[];
  schools: School[];
  setSports: Dispatch<SetStateAction<Sport[]>>;
  setSchools: Dispatch<SetStateAction<School[]>>;
}

const defaultValue: IAppContext = {
  sports: [],
  schools: [],
  setSports: () => {},
  setSchools: () => {},
};

const AppContext = createContext<IAppContext>(defaultValue);

export default AppContext;
