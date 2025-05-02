import React from "react";
import { useNavigate } from "react-router-dom";
import LogoBanco from '../assets/img/LogoBanco.png';
import Banco from '../assets/img/banco.jpg'
const PublicidadBanco = () => {
  const navigate = useNavigate();

  const handleUnirseClick = () => {
    navigate("/home-banco");
  };

  return (
    <div className="w-full bg-white py-8 px-4 xl:w-full">
      <div className="max-w-7xl mx-auto bg-[#A4C5DE] rounded-xl overflow-hidden flex flex-col md:flex-row items-center">
        
        {/* Columna 1: Texto */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2C59] mb-4">
            Controla tus ventas en un solo clic
          </h2>
          <p className="text-[#1f2937] mb-6">
            Únete a nuestro banco simple y disfruta de beneficios únicos, comisiones bajas y maneja tus
            finanzas como emprendedor con la única cuenta digital que impulsa tu negocio.
          </p>
          <button
            onClick={handleUnirseClick}
            className="bg-white text-[#0F2C59] font-medium py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
          >
            Unirse
          </button>
        </div>

        {/* Columna 2: Imagen principal */}
        <div className="flex-1 flex justify-center p-6">
          <img
            src={Banco}
            alt="Mujer con tarjeta y celular"
            className="max-w-xs md:max-w-sm w-full h-auto"
          />
        </div>

        {/* Columna 3: Logo */}
        <div className="hidden md:flex flex-col items-center justify-center p-6">
          <img
            src={LogoBanco}
            alt="Logo Banco Simple"
            className="w-40 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PublicidadBanco;