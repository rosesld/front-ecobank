import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentData] = useState(location.state?.paymentData || {
    orderId: `#${Math.floor(Math.random() * 1000000)}`,
    amount: 399.00,
    date: new Date().toLocaleDateString(),
    paymentMethod: 'Banco Simple'
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) setProgress(progress + 20);
    }, 500);
    return () => clearTimeout(timer);
  }, [progress]);

  // Componentes SVG inline
  const CheckIcon = () => (
    <svg 
      className="text-green-500 w-16 h-16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  );

  const ClockIcon = () => (
    <svg 
      className="text-blue-500 w-5 h-5" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" 
      />
    </svg>
  );

  const MapPinIcon = () => (
    <svg 
      className="text-purple-500 w-5 h-5" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" 
      />
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" 
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md"
      >
        {/* Encabezado */}
        <div className="bg-green-50 p-8 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260 }}
          >
            <CheckIcon />
          </motion.div>
          <h1 className="text-2xl font-bold mt-4 text-center text-gray-800">
            ¡Pago exitoso!
          </h1>
        </div>

        {/* Barra de progreso */}
        <div className="px-6 pt-2 pb-1">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-green-500"
            />
          </div>
          <p className="text-xs text-gray-500 text-center mt-1">
            Preparando tu pedido...
          </p>
        </div>

        {/* Detalles de la orden */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <ClockIcon />
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Número de orden</h3>
              <p className="text-gray-900">{paymentData.orderId}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <MapPinIcon />
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Dirección de envío</h3>
              <p className="text-gray-900">Av. Principal 123, Santiago</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between">
              <span className="text-gray-600">Total pagado:</span>
              <span className="font-bold">${paymentData.amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-gray-600">Método:</span>
              <span className="font-medium">{paymentData.paymentMethod}</span>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="p-6 pt-0 space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition"
          >
            Seguir comprando
          </button>
          
          <button 
            onClick={() => navigate('/cliente/compras')}
            className="w-full py-2 text-green-600 font-medium hover:text-green-800"
          >
            Ver mis pedidos
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmation;