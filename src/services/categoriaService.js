import axios from "axios";

// Instancia de axios con la URL base para las categorías
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // si usas sesiones
});

// Endpoint para obtener todas las categorías
const FETCH_CATEGORIES_URL = "/categorias/all";

// Función para obtener categorías
export const fetchCategorias = async () => {
  try {
    const response = await apiClient.get(FETCH_CATEGORIES_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    throw new Error("No se pudieron obtener las categorías.");
  }
};
