import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => (
  <div className="flex-shrink-0 w-56 h-[300px] bg-white border border-gray-200 rounded-lg shadow-sm mx-2 flex flex-col">
    <a href="#" className="block flex-grow">
      <Link to={`/producto/${product.id}`}>
        <img
          className="w-full h-48 object-contain rounded-t-lg"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </Link>
    </a>
    <div className="px-4 pb-4 flex flex-col flex-grow">
      <Link to={`/producto/${product.id}`}>
        <h5 className="text-sm font-semibold text-gray-900 truncate hover:underline">
          {product.name}
        </h5>
      </Link>

      {/* Alineación de precios */}
      <div className="mt-2 flex flex-col space-y-1">
        {/* Precio antiguo */}
        {product.oldPrice && (
          <span className="text-sm line-through text-gray-500">{`$${product.oldPrice}`}</span>
        )}

        {/* Precio actual */}
        <div className="flex items-center justify-between mt-1">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
