import React from "react";

const Card = ({ product }) => (
    <div className="flex-shrink-0 w-72 bg-white border border-gray-200 rounded-lg shadow-sm mx-2">
        <a href="#">
            <img className="p-8 rounded-t-lg" src={product.image} alt={product.name} />
        </a>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.name}</h5>
            </a>
            <div className="mt-4 flex items-center space-x-3">
                <span className="text-sm line-through text-gray-500">${product.oldPrice}</span>
                <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            </div>
        </div>
    </div>
);

export default Card;