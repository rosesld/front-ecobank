import React from 'react';
import CartItem from "../../components/carrito/CartItem";
import CartSummary from "../../components/carrito/CartSummary";
import { useCart } from '../../context/CartContext'; // <-- importa el contexto

export default function CartPage() {
  const { cartItems, setCartItems } = useCart(); // <-- usa los items del carrito global

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    console.log('Ir a checkout');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto py-8 px-4 flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1 space-y-4">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={handleRemove}
            />
          ))}
        </div>
        <aside className="mt-6 lg:mt-0 lg:w-1/3">
          <CartSummary items={cartItems} onCheckout={handleCheckout} />
        </aside>
      </div>
    </div>
  );
}
