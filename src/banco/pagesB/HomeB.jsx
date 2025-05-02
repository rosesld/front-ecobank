import React from "react";
import { useNavigate } from "react-router-dom";

const HomeB = () => {
  const navigate = useNavigate();
  const handleJoinClick = () => {
    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img src="/LogoBanco.png" alt="Banco Simple" className="h-6" />
          <span className="font-bold text-xl text-[#003057]">Banco Simple</span>
        </div>
        <div className="bg-[#003057] text-white rounded-full p-2">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z" />
          </svg>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#003057] mb-2">
          Abre hoy tu cuenta digital en{" "}
          <span className="text-[#003057]">Banco Simple</span>
        </h1>
        <p className="font-semibold text-[#003057] mb-6">
          Una cuenta para <strong>TODOS</strong>
        </p>

        {/* Features + Botón juntos */}
        <div className="flex flex-wrap md:flex-nowrap gap-10 mb-10 mt-10 items-center">
          {/* Círculos */}
          <div className="flex gap-10">
            {[
              { label: "Costo", value: "$0" },
              { label: "Beneficios", value: "" },
              { label: "Bono", value: "$10.000" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#003057] text-white rounded-full h-24 w-24 flex flex-col justify-center items-center"
              >
                <span className="text-sm font-semibold">{item.label}</span>
                <span className="text-lg font-bold">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Botón a la derecha */}
          <button onClick={handleJoinClick} className="bg-[#003057] text-white px-6 py-2 rounded-md font-semibold md:ml-50">
            Abre tu cuenta gratis
          </button>
        </div>

        {/* EcoMarket + Marketplace en columnas */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 mt-30">
          {/* EcoMarket Section */}
          <section className="flex-1 bg-gray-300 rounded-md p-4">
            <p className="font-semibold text-center text-[#003057]">
              Compra en EcoMarket pagando con tu saldo de banco simple de forma
            </p>
            <p className="text-center text-gray-600 mt-1">
              Fácil – Rápida – Segura
            </p>
          </section>

          {/* Marketplace Info Section */}
          <section className="flex-1 text-center bg-gray-100 rounded-md p-4">
            <div className="flex justify-center items-center gap-2 text-[#003057] text-2xl font-bold">
              <img src="/LogoMarket.png" alt="EcoMarket" className="h-20" />
            </div>
            <p className="mt-2 text-[#003057] font-semibold text-lg">
              El Marketplace de los{" "}
              <span className="block text-2xl font-bold">Emprendedores</span>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#003057] text-white text-xs text-center py-4">
      </footer>
    </div>
  );
};

export default HomeB;
