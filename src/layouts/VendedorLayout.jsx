import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, InboxIcon, ClipboardIcon, UserIcon } from '@heroicons/react/24/outline';

const VendedorLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-lg p-6 rounded-lg hidden sm:block">
        {/* Menú Vendedor */}
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Menú Vendedor</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/vendedor/home"
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
              to="/vendedor/productos"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 flex items-center space-x-2 font-semibold border-l-4 border-blue-600 pl-2'
                  : 'text-gray-600 hover:text-blue-600 flex items-center space-x-2 font-medium'
              }
            >
              <InboxIcon className="h-6 w-6" /> <span>Gestionar Productos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vendedor/pedidos"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 flex items-center space-x-2 font-semibold border-l-4 border-blue-600 pl-2'
                  : 'text-gray-600 hover:text-blue-600 flex items-center space-x-2 font-medium'
              }
            >
              <ClipboardIcon className="h-6 w-6" /> <span>Pedidos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vendedor/perfil"
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
      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default VendedorLayout;
