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
