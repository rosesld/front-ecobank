import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import { LoaderProvider } from "./context/LoaderContext";
import { AuthProvdider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <LoaderProvider>
      <AuthProvdider>
        <CartProvider>
          <Router>
            <Toaster position="top-center" reverseOrder={false} />
            <AppWrapper />
          </Router>
        </CartProvider>
      </AuthProvdider>
    </LoaderProvider>
  );
}

export default App;
