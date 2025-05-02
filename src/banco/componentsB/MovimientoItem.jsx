import React from 'react';

function MovimientoItem({ movimiento }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-200">
      <div>
        <p className="text-sm text-gray-500">{movimiento.fecha}</p>
        <p className="text-lg font-semibold">{movimiento.descripcion}</p>
      </div>
      <p className={`text-lg font-semibold ${movimiento.monto.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
        {movimiento.monto}
      </p>
    </div>
  );
}

export default MovimientoItem;
