import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slides from "../data/dataBanner.js";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[91vh]">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
        
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <div className="space-x-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
                  <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 mb-2 sm:mb-0 sm:mr-4 cursor-pointer">
                    <Link to="/registro" className="w-full h-full">
                      {slide.ctaText1 || "¡Comienza a vender hoy!"}
                    </Link>
                  </button>

                  <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer">
                    <Link to="/registro" className="w-full h-full">
                      {slide.ctaText2 || "Explora y compra ahora"}
                    </Link>
                  </button>
                  {/* Botón o enlace para ir a la página de registro */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
