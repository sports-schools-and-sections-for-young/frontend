import { useMemo, useState } from "react";
import AppRouter from "./providers/Router/AppRouter.tsx";
import "./styles/index.scss";
import { School, Sport } from "../types";
import AppContext from "../context";

function App() {
  const [sports, setSports] = useState<Sport[]>([]);
  const [schools, setSchools] = useState<School[]>([]);

  const value = useMemo(() => {
    return { sports, schools, setSports, setSchools };
  }, [sports, schools]);

  return (
    <AppContext.Provider value={value}>
      <div className="app">
        <header
          style={{
            borderBottom: "1px solid red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Я хедер
        </header>
        <AppRouter />
        <footer
          style={{
            borderTop: "1px solid red",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Я футер
        </footer>
      </div>
    </AppContext.Provider>
  );
}

export default App;
