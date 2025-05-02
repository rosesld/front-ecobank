import React, { useState } from "react";

const Transferencia = () => {
  const [monto, setMonto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Transferencia realizada por $${monto}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-15">Realizar Transferencia</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Transferir
        </button>
      </form>
    </div>
  );
};

export default Transferencia;
