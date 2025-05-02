import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { filtrarProductos } from "../services/productService";
import { fetchCategorias } from "../services/categoriaService";


const ResultadosPage = () => {
  const location = useLocation();
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(1000);
  const [orden, setOrden] = useState("productoNombre,asc");
  const [categorias, setCategorias] = useState([]);

  const nombreBusqueda = location.state?.nombreBusqueda || "";

  const buscarProductos = async () => {
    const filtros = {
      nombre: nombreBusqueda,
      precioMin,
      precioMax,
      categoriaId: categoriaSeleccionada[0],
      page: 0,
      size: 20,
      sort: orden,
    };

    try {
      const data = await filtrarProductos(filtros);
      setProductos(data.items || []);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  const obtenerCategorias = async () => {
    try {
      const categoriasObtenidas = await fetchCategorias();
      setCategorias(categoriasObtenidas);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

   useEffect(() => {
      obtenerCategorias();
    }, []);

  useEffect(() => {
    buscarProductos();
  }, [nombreBusqueda, precioMin, precioMax, categoriaSeleccionada, orden]);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4 pt-20">
      {/* Sidebar de filtros */}
      <aside className="w-full md:w-1/4 border p-4 rounded shadow-sm bg-white">
        <h2 className="text-lg font-semibold mb-2">Filtros</h2>

        {/* Categoría */}
        <div className="mb-4">
          <p className="font-medium">Categoría</p>
          {categorias.map((cat) => (
            <div key={cat.categoriaId}>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="categoria"
                  value={cat.categoriaId}
                  checked={categoriaSeleccionada[0] === cat.categoriaId}
                  onChange={() => setCategoriaSeleccionada([cat.categoriaId])}
                />
                <span>{cat.categoriaNombre}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Rango de precios */}
        <div className="mb-4">
          <p className="font-medium">Precio</p>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={precioMin}
              onChange={(e) => setPrecioMin(Number(e.target.value))}
              className="border rounded w-20 px-2 py-1 text-sm"
              min={0}
            />
            <span>-</span>
            <input
              type="number"
              value={precioMax}
              onChange={(e) => setPrecioMax(Number(e.target.value))}
              className="border rounded w-20 px-2 py-1 text-sm"
              min={0}
            />
          </div>
        </div>

        {/* Ordenar */}
        <div>
          <p className="font-medium">Ordenar por</p>
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
          >
            <option value="productoNombre,asc">Nombre (A-Z)</option>
            <option value="productoNombre,desc">Nombre (Z-A)</option>
            <option value="productoPrecio,asc">Precio (menor a mayor)</option>
            <option value="productoPrecio,desc">Precio (mayor a menor)</option>
            <option value="productoFechaCreacion,desc">Más recientes</option>
          </select>
        </div>
      </aside>

      {/* Resultados */}
      <main className="flex-1">
        <h1 className="text-2xl font-semibold mb-4">Resultados</h1>

        {productos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productos.map((producto) => (
              <Link 
                to={`/producto/${producto.productoId}`}
                key={producto.productoId}
              >
              <div
                key={producto.productoId}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                {/* Imagen */}
                <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                  {producto.urlsImagenes?.[0] ? (
                    <img
                      src={producto.urlsImagenes[0]}
                      alt={producto.nombreProducto}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Agregar un atributo data-fallback para evitar que se repita el cambio de imagen
                        if (!e.target.dataset.fallback) {
                          e.target.src =
                            "https://via.placeholder.com/300x200?text=Imagen+no+disponible";
                          e.target.className = "w-full h-full object-contain";
                          e.target.dataset.fallback = "true"; // Esto evita que el cambio se repita
                        }
                      }}
                    />
                  ) : (
                    <div className="text-gray-400 text-center p-4">
                      <span>Sin imagen</span>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
                    {producto.nombreProducto}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {producto.descripcionProducto}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      ${producto.precioProducto}
                    </span>
                    <span className="text-sm text-gray-500">
                      Stock: {producto.stockProducto}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            ))}
          </div>
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </main>
    </div>
  );
};

export default ResultadosPage;
