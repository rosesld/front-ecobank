import React from 'react';
import toast from 'react-hot-toast';  // Asegúrate de tener esto

export default function CartItem({ 
  id, 
  image, 
  title, 
  subtitle, 
  price, 
  onRemove 
}) {

  const handleRemove = () => {
    onRemove(id);  // Llama a la función onRemove para eliminar el producto del carrito

    // Muestra un mensaje de éxito
    toast.success(`${title} eliminado del carrito 🗑️`);
  };


  return (
    <div className="relative flex bg-white rounded-xl p-4 shadow-sm space-x-4">
      {/* Botón eliminar */}
      <button 
        onClick={handleRemove}
        className="absolute top-2 right-0 text-gray-400 hover:text-gray-600 text-xl"
        aria-label="Eliminar producto"
      >
        ✕
      </button>

      {/* Imagen del producto */}
      <img 
        src={image} 
        alt={title} 
        className="w-24 h-24 rounded-lg object-cover"
      />

      {/* Información del producto */}
      <div className="flex flex-col justify-center flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <p className="mt-1 text-xl font-bold text-gray-800">${price.toLocaleString()}</p>
      </div>
    </div>
  );
}
