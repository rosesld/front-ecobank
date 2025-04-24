import React from 'react';
import { Link } from 'react-router-dom';

const VendedorLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar /}
      <aside className="w-64 bg-green-100 p-4">
        <h2 className="text-lg font-bold mb-4 text-green-700">Menú Vendedor</h2>
        <ul className="space-y-2">
          <li><Link to="/vendedor/home" className="text-green-700 hover:underline">Inicio</Link></li>
          <li><Link to="/vendedor/productos" className="text-green-700 hover:underline">Mis Productos</Link></li>
          <li><Link to="/vendedor/ventas" className="text-green-700 hover:underline">Mis Ventas</Link></li>
        </ul>
      </aside>

      {/ Contenido principal */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default VendedorLayout;