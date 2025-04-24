import React from "react";

const categorias = [
  {
    nombre: "Moda independiente",
    imagen: "https://images.unsplash.com/photo-1687405182302-f1b28707c854?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    nombre: "Hecho a mano",
    imagen: "https://images.unsplash.com/photo-1474625121024-7595bfbc57ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlY2hvJTIwYSUyMG1hbm98ZW58MHx8MHx8fDA%3D",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    nombre: "Decoración y hogar",
    imagen: "https://images.unsplash.com/photo-1654856842821-f7a149e28a94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3JhY2lvbiUyMHklMjBob2dhcnxlbnwwfHwwfHx8MA%3D%3D",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: "Juguetes",
    imagen: "https://blog.lanasrubi.com/wp-content/uploads/2024/08/IMAGEN-DESTACADA-Patron-de-Amigurumi-Paso-a-Paso-para-Tejer-un-Adorable-Muneco-de-Lana.jpg",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: "Regalos personalizados",
    imagen: "https://plus.unsplash.com/premium_photo-1671395168227-37aa9724cd9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlZ2Fsb3MlMjBhJTIwbWFub3xlbnwwfHwwfHx8MA%3D%3D",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: "Mascota",
    imagen: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: "Cosmética natural / Cuidado personal",
    imagen: "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWNhJTIwbmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    colSpan: 2,
    rowSpan: 1,
  },
];


const getGridSpanClasses = (colSpan, rowSpan) => {
  return `col-span-${colSpan} row-span-${rowSpan}`;
};

const CategoriasMosaico = () => {
  return (
    <section className="w-full px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Categorías</h2>

      {/* Grid fijo: 4 columnas para cuadrar bien los spans */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[170px] gap-1">
        {categorias.map((cat, i) => (
          <div
            key={i}
            className={`relative group overflow-hidden rounded-lg shadow hover:shadow-md transition cursor-pointer ${getGridSpanClasses(
              cat.colSpan,
              cat.rowSpan
            )} min-h-[150px]`}
          >
            {cat.imagen && (
              <img
                src={cat.imagen}
                alt={cat.nombre}
                className="w-full h-full object-cover max-h-[500px] group-hover:scale-105 transition-transform duration-300"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-white text-xl font-semibold">
                {cat.nombre}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriasMosaico;
