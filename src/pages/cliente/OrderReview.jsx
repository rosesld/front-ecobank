import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
  const navigate = useNavigate();

  // Datos mock (simulados) para el ejemplo
  const checkoutItems = [
    {
      id: 'prod_123',
      name: 'Apple Watch Series 7',
      price: 399,
      image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/126514635_01/w=800,h=800,fit=pad',
      variant: '45mm Midnight',
      quantity: 1
    }
  ];

  // Datos mock de envío
  const shippingData = {
    name: 'Juan Pérez',
    address: 'Av. Principal 123',
    city: 'Santiago',
    postalCode: '7500001'
  };

  // Cálculos
  const subtotal = checkoutItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = 5.99;
  const total = subtotal + shippingCost;

  const handlePayment = () => {
    navigate('/checkout/payment');
  };

  return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Revisa tu pedido</h2>
        
        {/* Sección de Datos de Envío */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-4">Detalles de envío</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Nombre:</p>
              <p className="text-gray-600">{shippingData.name}</p>
            </div>
            <div>
              <p className="font-medium">Dirección:</p>
              <p className="text-gray-600">{shippingData.address}</p>
            </div>
            <div>
              <p className="font-medium">Ciudad:</p>
              <p className="text-gray-600">{shippingData.city}</p>
            </div>
            <div>
              <p className="font-medium">Código Postal:</p>
              <p className="text-gray-600">{shippingData.postalCode}</p>
            </div>
          </div>
        </div>

        {/* Sección de Productos */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-4">Tu pedido</h3>
          {checkoutItems.map((item) => (
            <div key={item.id} className="flex justify-between py-4 border-b border-gray-200">
              <div className="flex items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded mr-4" 
                />
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.variant}</p>
                  <p className="text-sm">Cantidad: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Totales */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between py-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Envío:</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 text-lg font-bold border-t border-gray-200 mt-2 pt-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* Botón de Acción */}
          <button
            onClick={handlePayment}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300 mt-6"
          >
            Proceder al pago (${total.toFixed(2)})
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderReview;