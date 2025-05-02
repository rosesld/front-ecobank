import React from "react";

const SaldoBox = ({ saldo }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 w-full max-w-md mx-auto mb-6">
      <p className="text-sm text-gray-700 font-semibold mb-1">Saldo Actual</p>
      <p className="text-3xl font-bold text-gray-900">${saldo.toLocaleString("es-CL")}</p>
    </div>
  );
};

export default SaldoBox;
