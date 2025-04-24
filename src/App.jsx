import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import { LoaderProvider } from "./context/LoaderContext";

function App() {
  return (
    <LoaderProvider>
      <Router>
        <AppWrapper />
      </Router>
    </LoaderProvider>
  );
}

export default App;
