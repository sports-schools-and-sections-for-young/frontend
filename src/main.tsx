import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.tsx";
import ErrorBoundary from "./app/providers/ErrorBoundary/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
      <ErrorBoundary>
          <App />
      </ErrorBoundary>
  </BrowserRouter>,
);
