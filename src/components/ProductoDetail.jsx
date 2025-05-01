import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para acceder al id del producto en la URL
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductDetail = () => {
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Aquí haces la solicitud al backend
        const response = await axios.get(`http://localhost:9090/api/productos/productos/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error al obtener los detalles del producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]); // Se vuelve a ejecutar cada vez que cambia el id

  const handleBuyNow = () => {
    // Aquí puedes agregar lógica adicional si es necesario, como guardar el producto en el estado global
    navigate("/checkout/shipping"); // Redirige al formulario de envío
  };

  const handleAddToCart = () => {
    const producto = {
      id: product.productoId,
      title: product.nombreProducto,
      subtitle: product.descripcionProducto,
      image: product.urlsImagenes[0] || 'default-image.jpg',
      price: product.precioProducto,
    };

    addToCart(producto);

    toast.success(`${producto.title} agregado al carrito`, {
      style: {
        color: 'black',
        fontSize: '16px',
        position: 'top-center'
      },
    });
  };

  if (loading) return <Loader />; // Si está cargando, mostramos el loader

  // Si no se encuentra el producto o no hay datos
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="max-w-screen-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Carrusel de imágenes */}
          <div className="w-full md:w-2/3">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {product.urlsImagenes.length > 0 ? (
                product.urlsImagenes.map((url, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={url}
                      alt={`Imagen del producto ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <img
                    src="default-image.jpg"
                    alt="Imagen predeterminada"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </SwiperSlide>
              )}
            </Swiper>
          </div>

          {/* Información del Producto */}
          <div className="w-full md:w-1/3 md:pl-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-semibold text-gray-900">
              {product.nombreProducto}
            </h2>
            <p className="text-sm text-gray-600 mt-2">{product.descripcionProducto}</p>

            <div className="mt-4 flex items-center space-x-4">
              <span className="text-sm line-through text-gray-500">
                ${product.precioAnterior || "0.00"}
              </span>
              <span className="text-3xl font-bold text-gray-900">${product.precioProducto}</span>
            </div>

            {/* Información adicional */}
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Stock disponible: {product.stockPorducto}
              </p>
              <p className="text-sm text-gray-600">Vendido por: {product.nombrePyme || "Tienda desconocida"}</p>
            </div>

            {/* Botones de acción */}
            <div className="mt-6 flex flex-col space-y-4">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Agregar al carrito
              </button>

              <button 
                onClick={handleBuyNow}
                className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Comprar ahora
              </button>
            </div>
          </div>
        </div>

        {/* Especificaciones del producto */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800">Especificaciones</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="font-semibold">Pantalla: </span>
              <span>{product.pantalla || "No disponible"}</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Material: </span>
              <span>{product.material || "No disponible"}</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Color: </span>
              <span>{product.color || "No disponible"}</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Resistencia: </span>
              <span>{product.resistencia || "No disponible"}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
