import React from 'react';
import MovimientoItem from './MovimientoItem';
import { movimientosData } from '../models/movimientos';

function MovimientoList() {
  return (
    <div className="movimiento-list bg-white shadow-md rounded-lg p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Movimientos recientes</h3>
      {movimientosData.length === 0 ? (
        <p className="text-center text-gray-500">No hay movimientos recientes.</p>
      ) : (
        movimientosData.map((movimiento) => (
          <MovimientoItem key={movimiento.id} movimiento={movimiento} />
        ))
      )}
    </div>
  );
}

export default MovimientoList;
