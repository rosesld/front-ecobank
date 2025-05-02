import axios from "axios";

// Instancia de Axios configurada
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Si usas cookies
});

// Interceptor para incluir automáticamente el token JWT
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("TOKEN QUE SE ENVÍA:", token);  // Asegúrate de guardar el token aquí después del login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Endpoints
const FETCH_PRODUCTS_URL = "/productos/filtrados-productos";
const CREATE_PRODUCT_URL = "/productos/guardar";
const SHOW_PRODUCT_URL = "/productos/mis-productos"; 

// Función para obtener productos
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get(FETCH_PRODUCTS_URL);
    console.log("Productos recibidos:", response.data);  // Debug
    return Array.isArray(response.data.items) ? response.data.items : [];
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw new Error("No se pudieron obtener los productos.");
  }
};

// Función para crear un producto (envío de FormData)
export const createProduct = async (formData) => {
  try {
    const response = await apiClient.post(CREATE_PRODUCT_URL, formData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el producto:", error.response?.data || error.message);
    throw new Error("No se pudo crear el producto.");
  }
};

export const fetchMisProducts = async () => {
  try {
    const response = await apiClient.get(SHOW_PRODUCT_URL);
    console.log("Respuesta completa:", response); // Para debug
    console.log("Datos recibidos:", response.data); // Para debug
    
    // Asegurando que siempre devolvamos un array
    if (response.data && Array.isArray(response.data)) {
      return response.data; // Si la respuesta es directamente un array
    } else if (response.data && Array.isArray(response.data.items)) {
      return response.data.items; // Si los productos están en propiedad 'items'
    } else if (response.data && response.data.productos) {
      return response.data.productos; // Otra posible estructura
    }
    
    console.warn("Estructura de datos inesperada:", response.data);
    return []; // Devuelve array vacío si no coincide con ninguna estructura esperada
  } catch (error) {
    console.error("Error al obtener Mis productos:", error);
    throw new Error("No se pudieron obtener Mis productos.");
  }
}
