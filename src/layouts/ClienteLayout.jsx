import React from 'react';
import { NavLink } from 'react-router-dom';

const ClienteLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-blue-100 p-4">
        <h2 className="text-lg font-bold mb-4 text-blue-700">Menú Cliente</h2>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/cliente/home"
              className={({ isActive }) => isActive ? 'text-blue-900 font-bold' : 'text-blue-600'}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cliente/compras"
              className={({ isActive }) => isActive ? 'text-blue-900 font-bold' : 'text-blue-600'}
            >
              Mis Compras
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cliente/perfil"
              className={({ isActive }) => isActive ? 'text-blue-900 font-bold' : 'text-blue-600'}
            >
              Perfil
            </NavLink>
          </li>
        </ul>
      </aside>

      {/ Contenido principal */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default ClienteLayout;