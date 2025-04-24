import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import { LoaderProvider } from "./context/LoaderContext";
import { AuthProvdider } from "./context/AuthContext";

function App() {
  return (
    <LoaderProvider>
      <AuthProvdider>
      <Router>
        <AppWrapper />
      </Router>
      </AuthProvdider>
    </LoaderProvider>
  );
}

export default App;
