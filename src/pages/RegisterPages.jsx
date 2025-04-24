import { useState } from 'react';
import FormularioCliente from "../components/forms/FormularioCliente";
import FormularioVendedor from "../components/forms/FormularioVendedor"; 

const RegisterPages = () => {

    const [isVendedor, setIsVendedor] = useState(false); 

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <div className="text-center">
        <button
          onClick={() => setIsVendedor(!isVendedor)}
          className="mb-8 text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
        >
          {isVendedor ? 'Cambiar a Cliente' : 'Cambiar a Vendedor'}
        </button>

        {isVendedor ? <FormularioVendedor/> : <FormularioCliente />}
      </div>
    </div>
  )
}

export default RegisterPages