import React from "react";
import MovimientoList from "../componentsB/MovimientoList";
import { movimientosData } from "../models/movimientos";


const Movimientos = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-15">Historial de movimientos</h1>
      <MovimientoList movimientos={movimientosData} />
    </div>
  );
};

export default Movimientos;
