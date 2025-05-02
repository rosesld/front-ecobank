import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, 
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("TOKEN QUE SE ENVÍA:", token);  
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
const API_BASE_URL = "http://localhost:9090/api/productos/filtrados-productos";

// Función para obtener productos
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get(FETCH_PRODUCTS_URL);
    console.log("Productos recibidos:", response.data); 
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

//Función para mostrar todos mis productos (vendedor)
export const fetchMisProducts = async () => {
  try {
    const response = await apiClient.get(SHOW_PRODUCT_URL);
    console.log("Respuesta completa:", response); 
    console.log("Datos recibidos:", response.data); 
    
    
    if (response.data && Array.isArray(response.data)) {
      return response.data; 
    } else if (response.data && Array.isArray(response.data.items)) {
      return response.data.items; 
    } else if (response.data && response.data.productos) {
      return response.data.productos; 
    }
    
    console.warn("Estructura de datos inesperada:", response.data);
    return []; 
  } catch (error) {
    console.error("Error al obtener Mis productos:", error);
    throw new Error("No se pudieron obtener Mis productos.");
  }
}

export const filtrarProductos = async ({ nombre, precioMin, precioMax, categoriaId, page = 0, size = 10, sort = "productoNombre,asc" }) => {
  const params = {
    nombre,
    precioMin,
    precioMax,
    categoriaId,
    page,
    size,
    sort,
  };

  Object.keys(params).forEach(key => (params[key] == null || params[key] === "") && delete params[key]);

  const response = await axios.get(`${API_BASE_URL}`, { params });
  return response.data;
};