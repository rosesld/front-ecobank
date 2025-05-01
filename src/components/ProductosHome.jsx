import React from "react";
import ProductCarousel from "./ProductCarousel";
import ProductGridContainer from "./ProductGridContainer";

const productosDestacados = [
  {
    id: 1,
    name: "Apple Watch Series 7",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
    price: 599,
    oldPrice: 649,
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 5",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
    price: 399,
    oldPrice: 449,
  },
];

const ProductosHome = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCarousel products={productosDestacados} title="Productos Destacados" />
        <ProductGridContainer title="Todos los Productos" />
      </div>
    </section>
  );
};

export default ProductosHome;