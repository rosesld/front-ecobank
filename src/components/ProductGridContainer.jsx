import React, { useEffect, useState } from 'react';
import ProductGrid from './ProductGrid';
import { fetchProducts } from '../services/productService';

const ProductGridContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log("Productos cargados:", data);  // Verifica qué datos estás recibiendo
        setProducts(data);  // Actualiza el estado con el array de productos
      } catch (err) {
        console.error(err);
        setError('Hubo un error al cargar los productos.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return <ProductGrid title={title} products={products} />;
};

export default ProductGridContainer;