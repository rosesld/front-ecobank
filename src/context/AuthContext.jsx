import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:9090/api/auth/login", {
        email,
        password,
      });

      const { token, email: userEmail, id, roles, nombreCompleto } = response.data;

      let rol = "cliente"; 
      if (roles.includes("ROLE_VENDEDOR")) rol = "vendedor";
      else if (roles.includes("ROLE_CLIENTE")) rol = "cliente";

      const userData = {
        id,
        email: userEmail,
        nombreCompleto,
        rol,
      };

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(userData);
      //console.log("Login exitoso:", userData);
    } catch (error) {
      console.error("Error al hacer login", error);
      throw new Error("Credenciales incorrectas");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    axios.defaults.headers.Authorization = "";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
