import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación: el rol depende del correo
    const userData = {
      nombre: 'Usuario Demo',
      rol: email === 'vendedor@demo.com' ? 'vendedor' : 'cliente',
    };

    login(userData); // Guarda el usuario en contexto
    navigate(`/${userData.rol}/home`); // Redirige según el rol
  };

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900">Iniciar sesión en la plataforma</h5>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="nombre@correo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="flex items-start justify-between">
            <a href="#" className="text-sm text-blue-700 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Iniciar sesión
          </button>

          <div className="text-sm font-medium text-gray-500">
            ¿No tienes una cuenta?{' '}
            <Link to="/registro" className="text-blue-700 hover:underline">
              Crear cuenta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;