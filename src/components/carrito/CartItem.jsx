import React from 'react';

export default function CartItem({ 
  id, 
  image, 
  title, 
  subtitle, 
  price, 
  onRemove 
}) {
  return (
    <div className="flex items-center bg-white rounded-xl p-4 space-x-4 shadow-sm">
      <img 
        src={image} 
        alt={title} 
        className="w-24 h-24 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <p className="mt-1 text-xl font-bold">${price.toLocaleString()}</p>
      </div>
      <button 
        onClick={() => onRemove(id)}
        className="text-gray-400 hover:text-gray-600"
        aria-label="Eliminar producto"
      >
        ✕
      </button>
    </div>
  );
}