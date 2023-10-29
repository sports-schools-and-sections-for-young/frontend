import { useMemo, useState } from "react";
import AppRouter from "./providers/Router/AppRouter.tsx";
import "./styles/index.scss";
import { School, Sport } from "../types";
import AppContext from "../context";

function App() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [schools, setSchools] = useState<School[]>([]);

  const appContextValues = useMemo(() => {
    return { sports, schools, setSports, setSchools };
  }, [sports, schools]);

  return (
    <AppContext.Provider value={appContextValues}>
      <div className="app">
        <header
          style={{
            borderBottom: "1px solid red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          HEADER
        </header>
        <AppRouter />
        <footer
          style={{
            borderTop: "1px solid red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          FOOTER
        </footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
