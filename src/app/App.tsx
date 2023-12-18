import { useEffect, useMemo, useState } from "react";
import AppRouter from "./providers/Router/AppRouter.tsx";
import "./styles/index.scss";
import { School, Section, Sport } from "../types";
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
  const [school, setSchool] = useState<School | null>(null);

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
      school,
      setSchool,
    };
  }, [sports, sectionRequest, fetchedSections, filteredSections, school]);

  useEffect(() => {
    const getSportsFromApi = async () => {
      const sportsFromApi = await getSports();
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
