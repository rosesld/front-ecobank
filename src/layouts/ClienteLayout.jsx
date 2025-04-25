import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

const ClienteLayout = ({ children }) => {

  return (
    <div className="flex min-h-screen bg-gray-100 pt-16">
      {/* Menú para pantallas grandes */}
      <aside className="w-64 bg-white shadow-lg p-6 rounded-lg hidden sm:block">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Menú Cliente</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/cliente/home"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 flex items-center space-x-2 font-semibold border-l-4 border-blue-600 pl-2'
                  : 'text-gray-600 hover:text-blue-600 flex items-center space-x-2 font-medium'
              }
            >
              <HomeIcon className="h-6 w-6" /> <span>Inicio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cliente/compras"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 flex items-center space-x-2 font-semibold border-l-4 border-blue-600 pl-2'
                  : 'text-gray-600 hover:text-blue-600 flex items-center space-x-2 font-medium'
              }
            >
              <ShoppingCartIcon className="h-6 w-6" /> <span>Mis Compras</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cliente/perfil"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 flex items-center space-x-2 font-semibold border-l-4 border-blue-600 pl-2'
                  : 'text-gray-600 hover:text-blue-600 flex items-center space-x-2 font-medium'
              }
            >
              <UserIcon className="h-6 w-6" /> <span>Perfil</span>
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Menú para pantallas pequeñas en formato grid */}
      <aside className="sm:hidden fixed inset-0 bg-white shadow-lg p-6 z-10">
        <h2 className="text-2xl text-center font-semibold mb-6 text-gray-800">Menú Cliente</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <NavLink
              to="/cliente/home"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 flex items-center justify-center space-x-2 font-semibold border-l-4 border-blue-600 pl-2'
                  : 'text-gray-600 hover:text-blue-600 flex items-center justify-center space-x-2 font-medium'
              }
            >
              <HomeIcon className="h-6 w-6" /> <span>Inicio</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/cliente/compras"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 flex items-center justify-center space-x-2 font-semibold border-l-4 border-blue-600 pl-2'
                  : 'text-gray-600 hover:text-blue-600 flex items-center justify-center space-x-2 font-medium'
              }
            >
              <ShoppingCartIcon className="h-6 w-6" /> <span>Mis Compras</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/cliente/perfil"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 flex items-center justify-center space-x-2 font-semibold border-l-4 border-blue-600 pl-2'
                  : 'text-gray-600 hover:text-blue-600 flex items-center justify-center space-x-2 font-medium'
              }
            >
              <UserIcon className="h-6 w-6" /> <span>Perfil</span>
            </NavLink>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-y-auto pt-16">{children}</main>
    </div>
  );
};

export default ClienteLayout;
