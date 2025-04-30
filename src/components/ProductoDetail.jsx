import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import toast from 'react-hot-toast';

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleBuyNow = () => {
    // Aquí puedes agregar lógica adicional si necesitas
    // como guardar el producto en el estado global antes de redirigir
    navigate("/checkout/shipping"); // Redirige al formulario de envío
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const producto = {
      id: 1,
      title: "Apple Watch Series 7",
      subtitle: "Reloj inteligente de última generación",
      image:
        "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad",
      price: 399,
    };

    addToCart(producto);

    toast.success("Producto agregado al carrito 🛒", {
      style: {
        background: '#4caf50',
        color: 'white',
        fontSize: '16px',
        position: 'top-center'
      },
    });
  };

  if (loading) return <Loader />;

  return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="max-w-screen-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Imágenes del Producto */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide>
                <img
                  src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad"
                  alt="Imagen del producto"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_02/w=800,h=800,fit=pad"
                  alt="Imagen del producto"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_03/w=800,h=800,fit=pad"
                  alt="Imagen del producto"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Información del Producto */}
          <div className="w-full md:w-1/3 md:pl-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold text-gray-900">
              Apple Watch Series 7
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Reloj inteligente de última generación con pantalla más grande y
              más resistente.
            </p>

            <div className="mt-4 flex items-center space-x-4">
              <span className="text-sm line-through text-gray-500">$449</span>
              <span className="text-3xl font-bold text-gray-900">$399</span>
            </div>

            {/* Información adicional */}
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Stock disponible: 50 unidades
              </p>
              <p className="text-sm text-gray-600">Vendido por: Apple Store</p>
            </div>

            {/* Botones de acción */}
            <div className="mt-6 flex flex-col space-y-4">
              {/* Botón para "Agregar al carrito" */}
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Agregar al carrito
              </button>

              {/* Botón para "Comprar ahora" */}
              <button 
                onClick={handleBuyNow}
                className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Comprar ahora
              </button>
            </div>
          </div>
        </div>

        {/* Información adicional (por ejemplo, especificaciones, reseñas, etc.) */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">
            Especificaciones
          </h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="font-semibold">Pantalla: </span>
              <span>1.7 pulgadas</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Material: </span>
              <span>Aluminio</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Color: </span>
              <span>Negro</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Resistencia: </span>
              <span>50 metros bajo agua</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
