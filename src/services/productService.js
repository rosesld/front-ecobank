import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Endpoints
const FETCH_PRODUCTS_URL = `${API_BASE_URL}/filtrados-productos`;
const CREATE_PRODUCT_URL = `${API_BASE_URL}/guardar`;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(FETCH_PRODUCTS_URL);
    console.log("Productos recibidos:", response.data);  // Para que veas toda la respuesta
    // Extraemos la propiedad 'items' que contiene el array de productos
    return Array.isArray(response.data.items) ? response.data.items : [];
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return [];  // Retorna un array vacío en caso de error
  }
};

// Crear producto
export const createProduct = async (formData) => {
  try {
    const response = await axios.post(CREATE_PRODUCT_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true, // si usas sesiones
    });
    return response.data;
  } catch (error) {
    console.error("Error al crear el producto:", error);
    throw error;
  }
};
