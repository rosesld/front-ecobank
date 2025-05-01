import { createContext, useContext, useState, useEffect } from "react";

import axios from "axios"; // Asegúrate de tener axios instalado

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Proveedor de contexto que envuelve toda la aplicación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Para manejar la carga de la sesión

  // Verificamos si ya hay un token en localStorage cuando la app se inicia
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`; // Establecer el token por defecto para todas las peticiones
      setUser({ token });
    }
    setLoading(false); // Una vez se verifica el token, se puede cargar el resto de la app
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:9090/api/auth/login", {
        email,
        password,
      });
      
      const { token, userData } = response.data; // Asumimos que tu API devuelve el token y los datos del usuario
      localStorage.setItem("token", token); // Guardamos el token en el localStorage
      axios.defaults.headers.Authorization = `Bearer ${token}`; // Establecemos el token en los headers globales de axios
      setUser(userData); // Actualizamos el estado con los datos del usuario
    } catch (error) {
      console.error("Error al hacer login", error);
      throw new Error("Credenciales incorrectas");
    }
  };

  const logout = () => {
    localStorage.removeItem("token"); // Limpiamos el token del localStorage
    setUser(null); // Limpiamos el estado del usuario
    axios.defaults.headers.Authorization = ""; // Limpiamos los headers de axios
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useAuth = () => useContext(AuthContext);