import React from "react";
import Card from "./Card";

const products = [
    {
        id: 1,
        name: "Apple Watch Series 7",
        image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
        price: 599,
        oldPrice: 649,
    },
    {
        id: 2,
        name: "Samsung Galaxy Watch 5",
        image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
        price: 399,
        oldPrice: 449,
    },
    {
        id: 3,
        name: "Fitbit Versa 4",
        image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
        price: 249,
        oldPrice: 299,
    },
    {
        id: 3,
        name: "Fitbit Versa 4",
        image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
        price: 249,
        oldPrice: 299,
    },
    {
        id: 3,
        name: "Fitbit Versa 4",
        image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
        price: 249,
        oldPrice: 299,
    },
    {
        id: 3,
        name: "Fitbit Versa 4",
        image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
        price: 249,
        oldPrice: 299,
    }
];

const ProductosHome = () => {
    return (
        <section className="px-4 py-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Productos Destacados</h2>
            <div className="overflow-x-auto pb-4">
                <div className="flex space-x-4 snap-x snap-mandatory scroll-smooth">
                    {products.map((product) => (
                        <div key={product.id} className="snap-start">
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductosHome;