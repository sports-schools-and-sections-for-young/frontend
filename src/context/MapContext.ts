import { createContext, Dispatch, SetStateAction } from "react";

interface IMapContext {
  map: any;
  setMap: Dispatch<SetStateAction<any>>;
}

const MapContext = createContext<IMapContext>({ map: null, setMap: () => {} });

export default MapContext;
