import React from "react";
import { Link } from "react-router-dom";  // Importamos Link para redirigir a la página de detalles
import Card from "./Card";

const ProductGrid = ({ products = [], title }) => {
  return (
    <section className="py-8">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
          {title}
        </h2>
      )}
      <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <Link 
            key={product.productoId}  // Asegúrate de usar el ID correcto del producto
            to={`/producto/${product.productoId}`}  // Enlazamos al detalle del producto
          >
            <Card product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;