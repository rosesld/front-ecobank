import React from "react";
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
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
