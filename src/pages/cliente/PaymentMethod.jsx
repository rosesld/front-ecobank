import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
  const navigate = useNavigate();
  
  // Datos simulados
  const bankData = {
    name: "Banco Simple",
    logo: "https://via.placeholder.com/100x50?text=Banco+Simple",
    balance: 1250.50,
    lastDigits: "•••• 4567"
  };

  // Datos simulados de la orden
  const orderTotal = 399.00; // Este valor debería venir del contexto o props

  const handlePayment = () => {
    // Lógica simulada de pago
    alert(`Pago exitoso de $${orderTotal.toFixed(2)} con Banco Simple`);
    navigate('/checkout/order-confirmation');
  };

  return (
    <section className="px-4 py-8 bg-gray-50 min-h-screen pt-20">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Método de Pago</h2>
        
        {/* Tarjeta del Banco */}
        <div className="bg-blue-600 text-white p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center mb-4">
            <img 
              src={bankData.logo} 
              alt={bankData.name} 
              className="h-8 object-contain"
            />
            <span className="font-medium">Cuenta Principal</span>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-80">Saldo disponible</p>
            <p className="text-2xl font-bold">${bankData.balance.toFixed(2)}</p>
            <p className="text-sm mt-2">{bankData.lastDigits}</p>
          </div>
        </div>

        {/* Resumen de Compra */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-3">Resumen de tu compra</h3>
          <div className="flex justify-between py-2">
            <span>Total:</span>
            <span className="font-medium">${orderTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-t border-gray-200">
            <span>Saldo después del pago:</span>
            <span className="font-medium">
              ${(bankData.balance - orderTotal).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Botón de Pago */}
        <button
          onClick={handlePayment}
          disabled={orderTotal > bankData.balance}
          className={`w-full py-3 rounded-lg text-white font-bold transition duration-300 ${
            orderTotal > bankData.balance
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {orderTotal > bankData.balance
            ? 'Saldo insuficiente'
            : `Pagar $${orderTotal.toFixed(2)}`}
        </button>

        {/* Mensaje de saldo insuficiente */}
        {orderTotal > bankData.balance && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            No tienes suficiente saldo en tu cuenta. Por favor recarga o elige otro método de pago.
          </div>
        )}

        <button 
          onClick={() => navigate(-1)}
          className="w-full mt-4 py-2 text-blue-600 hover:text-blue-800"
        >
          ← Volver atrás
        </button>
      </div>
    </section>
  );
};

export default PaymentMethod;