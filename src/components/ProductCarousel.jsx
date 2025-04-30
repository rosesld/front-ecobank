import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./Card"; // tu componente

const ProductCarousel = ({ products, title }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // emblaApi.scrollTo(0); // si quieres resetear al inicio
    }
  }, [emblaApi]);

  return (
    <section className="mb-10">
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
          {title}
        </h2>
      )}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-64 px-2"
            >
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
