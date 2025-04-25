import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FormularioCliente from "../components/forms/FormularioCliente";
import FormularioVendedor from "../components/forms/FormularioVendedor"; 

const RegisterPages = () => {
  const [searchParams] = useSearchParams();
  const tipo = searchParams.get("tipo");

  const [isVendedor, setIsVendedor] = useState(false); 

  useEffect(() => {
    if (tipo === "vendedor") {
      setIsVendedor(true);
    } else if (tipo === "cliente") {
      setIsVendedor(false);
    }
  }, [tipo]);

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gray-100">
      <div className="text-center">
        <button
          onClick={() => setIsVendedor(!isVendedor)}
          className="mb-8 text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
        >
          {isVendedor ? 'Cambiar a Cliente' : 'Cambiar a Vendedor'}
        </button>

        {isVendedor ? <FormularioVendedor /> : <FormularioCliente />}
      </div>
    </div>
  )
}

export default RegisterPages;
