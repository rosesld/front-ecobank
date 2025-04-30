// CartPage.jsx
import React from 'react';
import CartItem from "../../components/carrito/CartItem";
import CartSummary from "../../components/carrito/CartSummary";
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  const handleCheckout = () => {
    console.log('Ir a checkout');
  };

  return (
    <main className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Tu carrito</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="flex-1 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 py-10">
                Tu carrito está vacío.
              </div>
            ) : (
              cartItems.map(item => (
                <CartItem
                  key={item.id}
                  {...item}
                  onRemove={removeFromCart}
                />
              ))
            )}
          </div>
          <aside className="mt-6 lg:mt-0 lg:w-1/3">
            <CartSummary items={cartItems} onCheckout={handleCheckout} />
          </aside>
        </div>
      </div>
    </main>
  );
}
