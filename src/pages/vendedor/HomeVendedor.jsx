import React from 'react';

const HomeVendedor = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Bienvenido, Vendedor</h1>
      <p className="text-gray-600">
        Aquí puedes gestionar tus productos, ver tus estadísticas y mucho más.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Estadísticas de Ventas</h2>
        <div className="mt-4 bg-white p-4 rounded-lg shadow border border-gray-200">
          <p className="text-gray-800 font-medium">Ventas Totales: <span className="font-semibold">$1500</span></p>
          <p className="text-gray-800 font-medium">Productos Vendidos: <span className="font-semibold">45</span></p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-700">Gestionar Productos</h2>
        <p className="mt-2 text-gray-600">
          Haz clic en <strong>"Gestionar Productos"</strong> en el menú lateral para agregar o editar productos.
        </p>
      </div>
    </div>
  );
};

export default HomeVendedor;
