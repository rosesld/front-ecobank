import axios from 'axios';

const API_REGISTRO_CLIENTE = 'http://localhost:9090/api/auth/registro-cliente'

const crearCliente = async (datosCliente) => {
    try {
        const response = await axios.post(API_REGISTRO_CLIENTE, datosCliente);
        return response.data;
    } catch (error) {
        //console.log("Error al crear cliente: ", error)
        throw error;
    }
};

export default {
    crearCliente
};