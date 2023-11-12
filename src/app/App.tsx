import { useMemo, useState } from "react";
import AppRouter from "./providers/Router/AppRouter.tsx";
import "./styles/index.scss";
import { School, Sport } from "../types";
import AppContext from "../context";
import Header from "../components/ui/Header/Header.tsx";
import MainFooter from "../components/MainFooter/MainFooter.tsx";

function App() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [schools, setSchools] = useState<School[]>([]);

  const appContextValues = useMemo(() => {
    return { sports, schools, setSports, setSchools };
  }, [sports, schools]);

  return (
    <AppContext.Provider value={appContextValues}>
      <div className="app">
        <Header />
        <AppRouter />
        <MainFooter />
      </div>
    </AppContext.Provider>
  );
}

export default App;
