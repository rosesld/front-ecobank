import axios from 'axios';

const API_URL = 'http://localhost:9090/api/vendedor/registro-vendedor';

const crearVendedor = async (datosVendedor) => {
  try {
    const response = await axios.post(API_URL, datosVendedor);
    return response.data;
  } catch (error) {
    console.error('Error al crear vendedor:', error);
    throw error;
  }
};

export default {
  crearVendedor
};