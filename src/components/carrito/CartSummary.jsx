import React from 'react';

export default function CartSummary({ items, onCheckout }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const isDisabled = items.length === 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">Resumen compra</h2>
      <div className="flex justify-between text-gray-700">
        <span>Productos ({items.length})</span>
        <span>${total.toLocaleString()}</span>
      </div>
      <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
        <span className="text-lg font-bold">Total</span>
        <span className="text-2xl font-bold">${total.toLocaleString()}</span>
      </div>
      <button
        onClick={onCheckout}
        disabled={isDisabled}
        className={`w-full py-3 rounded-lg font-medium text-white transition ${
          isDisabled
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        Continuar Compra
      </button>
    </div>
  );
}
