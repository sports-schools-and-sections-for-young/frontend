import { useEffect, useMemo, useState } from "react";
import AppRouter from "./providers/Router/AppRouter.tsx";
import "./styles/index.scss";
import { Section, Sport } from "../types";
import AppContext, {
  ISectionsRequest,
  sectionsRequestDefault,
} from "../context/AppContext.ts";
import { getSports } from "../utils/api";

function App() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [sectionRequest, setSectionRequest] = useState<ISectionsRequest>(
    sectionsRequestDefault,
  );
  const [fetchedSections, setFetchedSections] = useState<Section[]>([]);
  const [filteredSections, setFilteredSections] = useState<Section[]>([]);

  const appContextValues = useMemo(() => {
    return {
      sports,
      setSports,
      sectionRequest,
      setSectionRequest,
      fetchedSections,
      setFetchedSections,
      filteredSections,
      setFilteredSections,
    };
  }, [sports, sectionRequest, fetchedSections, filteredSections]);

  useEffect(() => {
    const getSportsFromApi = async () => {
      const sportsFromApi = await getSports();
      console.log("Получен массив:", sportsFromApi);
      setSports(sportsFromApi);
    };
    if (!sports.length) {
      getSportsFromApi();
    }
  }, [sports.length]);

  return (
    <AppContext.Provider value={appContextValues}>
      <div className="app">
        <AppRouter />
      </div>
    </AppContext.Provider>
  );
}

export default App;
