import {createContext, useContext, useState } from "react"

const AuthContext = createContext();


export const AuthProvdider = ({children}) => {

    const [user, setUser] = useState (null);

    const login = (data) => {
        setUser(data);
      };
    
      const logout = () => {
        setUser(null);
      };
    
      return (
        <AuthContext.Provider value={{ user, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };
    
    export const useAuth = () => useContext(AuthContext);

