import React from "react";

const categorias = [
  {
    nombre: "Ropa",
    imagen: "https://images.unsplash.com/photo-1612423284934-9ff25e554ec4?auto=format&fit=crop&w=800&q=80",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    nombre: "Tecnología",
    imagen: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    nombre: "Hogar",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: "Juguetes",
    imagen: "https://images.unsplash.com/photo-1583337130417-3346a1c137a7?auto=format&fit=crop&w=800&q=80",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: "Deportes",
    imagen: "https://images.unsplash.com/photo-1599059817343-fcdba2f1d1af?auto=format&fit=crop&w=800&q=80",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: "Belleza",
    imagen: "https://images.unsplash.com/photo-1588776814546-ec7ec12a778d?auto=format&fit=crop&w=800&q=80",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: "Mascotas",
    imagen: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
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
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-1">
        {categorias.map((cat, i) => (
          <div
            key={i}
            className={`relative group overflow-hidden rounded-lg shadow hover:shadow-md transition ${getGridSpanClasses(
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
