import React, { useState } from 'react';
import Logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';


const NavbarModern = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriasOpen, setCategoriasOpen] = useState(false);
  const [usuarioOpen, setUsuarioOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { cartItems } = useCart();

  //Simulación de sesión: null si no hay sesión, objeto si sí
  const usuario = null; // cambiar a { nombre: 'Juan Pérez' } si está logueado
  //const usuario = { nombre: 'Juan Pérez' };

  const categorias = ['Ropa', 'Tecnología', 'Hogar', 'Juguetes'];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Buscando: ${search}`);
  };

  return (
    <header className="bg-white shadow-sm w-full z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={Logo} className="h-30 w-30 object-contain" alt="Logo" />
            </Link>
          </div>

          {/* Buscador */}
          <div className="hidden md:flex flex-1 justify-center">
            <form onSubmit={handleSearch} className="relative flex w-full max-w-xl">
              {/* Categorías dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCategoriasOpen(!categoriasOpen)}
                  className="bg-gray-100 border-r px-4 py-2 rounded-l-md text-sm hover:bg-gray-200"
                >
                  Categorías
                </button>
                {categoriasOpen && (
                  <div className="absolute top-12 left-0 bg-white border shadow-md rounded z-50 w-40">
                    {categorias.map((cat, i) => (
                      <a
                        key={i}
                        href={`/categoria/${cat.toLowerCase()}`}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="text"
                className="flex-1 border-t border-b border-gray-300 px-4 py-2 text-sm focus:outline-none"
                placeholder="Buscar productos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm hover:bg-blue-700"
              >
                Buscar
              </button>
            </form>
          </div>

          <div className="relative flex items-center mx-auto">
            <Link to="/carrito" className="relative">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

          </div>

          {/* Usuario / Login */}
          <div className="flex items-center space-x-4">
            {/* Si hay sesión, muestra el nombre y menú */}
            {usuario ? (
              <div className="hidden md:block relative">
                <button
                  onClick={() => setUsuarioOpen(!usuarioOpen)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  <span>{usuario.nombre}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {usuarioOpen && (
                  <div className="absolute right-0 top-12 bg-white border shadow-md rounded w-48 z-50">
                    <a href="/perfil" className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">Perfil</a>
                    <a href="/historial" className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700">Historial</a>
                    <button
                      onClick={() => alert("Cerrando sesión")}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-sm font-medium text-blue-700 hover:underline">
                Iniciar sesión
              </Link>
            )}

            {/* Botón hamburguesa */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="md:hidden px-4 py-4 space-y-4 bg-white border-t shadow-sm">
          {/* Buscador móvil */}
          <form onSubmit={handleSearch} className="flex w-full">
            <input
              type="text"
              className="flex-1 border px-4 py-2 text-sm rounded-l-md"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 text-sm rounded-r-md"
            >
              Buscar
            </button>
          </form>

          {/* Categorías móvil */}
          <div>
            <p className="text-gray-600 font-semibold">Categorías</p>
            {categorias.map((cat, i) => (
              <a
                key={i}
                href={`/categoria/${cat.toLowerCase()}`}
                className="block text-gray-700 py-1 px-2 hover:bg-gray-100 rounded"
              >
                {cat}
              </a>
            ))}
          </div>

          {/* Menú cuenta móvil solo si hay usuario */}
          {usuario && (
            <div>
              <p className="text-gray-600 font-semibold">Cuenta</p>
              <a href="/perfil" className="block text-gray-700 py-1 px-2 hover:bg-gray-100 rounded">Perfil</a>
              <a href="/historial" className="block text-gray-700 py-1 px-2 hover:bg-gray-100 rounded">Historial</a>
              <button
                onClick={() => alert("Cerrando sesión")}
                className="w-full text-left py-1 px-2 text-red-600 hover:bg-red-100 rounded"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default NavbarModern;
