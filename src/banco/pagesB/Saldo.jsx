import React from "react";
import SaldoBox from "../componentsB/SaldoBox";

const Saldo = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Saldo</h1>
      <SaldoBox saldo={10000} />
    </div>
  );
};

export default Saldo;
