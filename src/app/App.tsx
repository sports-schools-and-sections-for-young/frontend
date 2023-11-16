import { useEffect, useMemo, useState } from "react";
import AppRouter from "./providers/Router/AppRouter.tsx";
import "./styles/index.scss";
import { Sport } from "../types";
import AppContext, {
  ISectionsRequest,
  sectionsRequestDefault,
} from "../context";
import { getSports } from "../utils/api";

function App() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [sectionRequest, setSectionRequest] = useState<ISectionsRequest>(
    sectionsRequestDefault,
  );

  const appContextValues = useMemo(() => {
    return { sports, setSports, sectionRequest, setSectionRequest };
  }, [sports, sectionRequest]);

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
