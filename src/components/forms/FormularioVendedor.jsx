import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import vendedorService from '../../services/vendedorService';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

const FormularioVendedor = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: '',
    password: '',
    telefono: '',
    rutPyme: '',
    razonSocial: '',
    nombrePyme: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await vendedorService.crearVendedor(formData);
      alert('Vendedor creado exitosamente');
      setFormData({
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        email: '',
        password: '',
        telefono: '',
        rutPyme: '',
        razonSocial: '',
        nombrePyme: ''
      });

      navigate('/login'); 

    } catch (err) {
      console.error('Error al crear vendedor:', err);
      alert('Hubo un error al registrar al vendedor');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Formulario de Vendedor</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Apellido Paterno</label>
            <input
              type="text"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Apellido Materno</label>
            <input
              type="text"
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">RUT Pyme</label>
            <input
              type="text"
              name="rutPyme"
              value={formData.rutPyme}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Razón Social</label>
            <input
              type="text"
              name="razonSocial"
              value={formData.razonSocial}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Nombre de la Pyme</label>
          <input
            type="text"
            name="nombrePyme"
            value={formData.nombrePyme}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-lg"
        >
          Registrar como Vendedor
        </button>
      </form>
    </div>
  );
};

export default FormularioVendedor;
