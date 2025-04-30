import React, { useState } from 'react';
import Navbar from "../../components/Navbar"
import CartItem from "../../components/carrito/CartItem";
import CartSummary from "../../components/carrito/CartSummary";

export default function CartPage() {
 
  const [items, setItems] = useState([
    {
      id: 1,
      image: '/src/assets/img/peluche.jpg',
      title: 'Peluche de lana hecho a mano',
      subtitle: 'Amigurumi hecho a mano confeccionado con lana de alpaca peruana • Tienda doña turuleca',
      price: 9990,
    },
    {
      id: 2,
      image: '/src/assets/img/mochila.jpg',
      title: 'Mochila hecha mano',
      subtitle: 'Mochila hecha a mano con telas cuero natural • Tienda Patrones naturales',
      price: 9990,
    },
  ]);

  const handleRemove = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    
    console.log('Ir a checkout');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* aquí ya sale tu Navbar */}
      <div className="container mx-auto py-8 px-4 flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1 space-y-4">
          {items.map(item => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <aside className="mt-6 lg:mt-0 lg:w-1/3">
          <CartSummary items={items} onCheckout={handleCheckout} />
        </aside>
      </div>
    </div>
  );
}