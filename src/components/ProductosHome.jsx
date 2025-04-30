import React from "react";
import Card from "./Card";
import ProductGrid from "./ProductGrid";
import ProductCarousel from "./ProductCarousel";

const products = [
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
  {
    id: 4,
    name: "Fitbit Versa 4",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
    price: 249,
    oldPrice: 299,
  },
  {
    id: 5,
    name: "Fitbit Versa 4",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
    price: 249,
    oldPrice: 299,
  },
  {
    id: 6,
    name: "Fitbit Versa 4",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
    price: 249,
    oldPrice: 299,
  },
  {
    id: 7,
    name: "Fitbit Versa 4",
    image:
      "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
    price: 249,
    oldPrice: 299,
  },
];

const ProductosHome = () => {
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductCarousel products={products} title="Productos Destacados" />
          <ProductGrid products={products} title="Todos los Productos" />
        </div>
      </section>
    );
  };
  
  export default ProductosHome;
