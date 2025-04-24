import React from 'react';

const categorias = [
  {
    nombre: 'Ropa',
    imagen: 'https://wwflac.awsassets.panda.org/img/8886_1_736993.jpg',
    colSpan: 2,  // Esta categoría ocupará dos columnas
    rowSpan: 2,  // Esta categoría ocupará dos filas
  },
  {
    nombre: 'Tecnología',
    imagen: '/images/categorias/tecnologia.jpg',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: 'Hogar',
    //imagen: 'https://educacion.editorialaces.com/wp-content/uploads/2021/10/la-alegria-en-el-hogar-PORTADA.png',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    nombre: 'Juguetes',
    imagen: 'https://blog.lanasrubi.com/wp-content/uploads/2024/08/IMAGEN-DESTACADA-Patron-de-Amigurumi-Paso-a-Paso-para-Tejer-un-Adorable-Muneco-de-Lana.jpg',
    colSpan: 3, // Juguetes ocupará 3 columnas
    rowSpan: 1,
  },
  {
    nombre: 'Deportes',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJMzg4kAdqpVnNDnkrjqMyExytlrrTDtURdg&s',
    colSpan: 1,
    rowSpan: 1,
  },
];

const CategoriasMosaico = () => {
  return (
    <section className="w-full px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Categorías</h2>
      {/* Configuración del grid para ocupar todo el ancho */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {categorias.map((cat, i) => (
          <div
            key={i}
            className={`relative group overflow-hidden rounded-lg shadow hover:shadow-md transition 
              col-span-${cat.colSpan} row-span-${cat.rowSpan}`}
          >
            <img
              src={cat.imagen}
              alt={cat.nombre}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Eliminar fondo negro, solo mostrar el texto */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{cat.nombre}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriasMosaico;
