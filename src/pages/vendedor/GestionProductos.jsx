import React, { useState, useEffect } from "react";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ConfirmModal from "../../components/ConfirmModal";
import InfoModal from "../../components/InfoModal";
import { createProduct } from "../../services/productService";
import { fetchCategorias } from "../../services/categoriaService";
import { fetchMisProducts } from "../../services/productService";

const GestionProductos = () => {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    descuento: "",
    imagenes: [],
    categoriaId: "",
  });

  const [editando, setEditando] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
    onConfirm: () => {},
  });
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [infoModalContent, setInfoModalContent] = useState({
    title: "",
    message: "",
  });
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setCargando(true);
        const [categoriasData, productosData] = await Promise.all([
          fetchCategorias(),
          fetchMisProducts()
        ]);
        setCategorias(categoriasData);
        setProductos(productosData);
      } catch (error) {
        console.error("Error al cargar datos:", error);
        mostrarInfoModal("Error", "No se pudieron cargar los datos iniciales.");
      } finally {
        setCargando(false);
      }
    };
    cargarDatos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const producto = {
        nombreProducto: form.nombre,
        descripcionProducto: form.descripcion,
        precioProducto: parseFloat(form.precio),
        stockProducto: parseInt(form.stock),
        descuentoProducto: parseFloat(form.descuento || 0),
        categoriaId: parseInt(form.categoriaId),
      };
      
      const data = new FormData();
      const jsonBlob = new Blob([JSON.stringify(producto)], { type: 'application/json' });
      data.append("producto", jsonBlob);
      
      form.imagenes.forEach((img) => {
        data.append("imagenes", img);
      });
  
      const nuevoProducto = await createProduct(data);
  
      setProductos((prev) => [...prev, nuevoProducto]);
  
      setForm({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        descuento: "",
        imagenes: [],
        categoriaId: "",
      });
      setMostrarFormulario(false);
    } catch (error) {
      console.error("Error al agregar producto:", error);
      mostrarInfoModal("Error", "No se pudo agregar el producto.");
    }
  };

  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.productoId !== id));
  };

  const abrirModalConfirmacion = ({ title, message, onConfirm }) => {
    setModalData({ title, message, onConfirm });
    setModalOpen(true);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (form.imagenes.length + files.length <= 4) {
      setForm((prevForm) => ({
        ...prevForm,
        imagenes: [...prevForm.imagenes, ...files],
      }));
    } else {
      mostrarInfoModal(
        "Límite de imágenes alcanzado",
        "Puedes cargar un máximo de 4 imágenes por producto."
      );
    }
  };

  const removeImage = (index) => {
    setForm((prevForm) => ({
      ...prevForm,
      imagenes: prevForm.imagenes.filter((_, i) => i !== index),
    }));
  };

  const mostrarInfoModal = (title, message) => {
    setInfoModalContent({ title, message });
    setInfoModalOpen(true);
  };

  const buildImageUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    if (url.startsWith('/')) return `${import.meta.env.VITE_API_URL}${url}`;
    return `${import.meta.env.VITE_API_URL}/${url}`;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Gestión de Productos</h1>
        <button
          type="button"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-200 ${
            mostrarFormulario
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {mostrarFormulario ? (
            <XMarkIcon className="w-5 h-5" />
          ) : (
            <PlusIcon className="w-5 h-5" />
          )}
          {mostrarFormulario ? "Cancelar" : "Agregar Producto"}
        </button>
      </header>

      {mostrarFormulario && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 mb-8 max-w-2xl mx-auto p-6 bg-white shadow rounded"
        >
          {["nombre", "descripcion", "precio", "stock", "descuento"].map(
            (field) => (
              <div className="flex flex-col" key={field}>
                <label
                  htmlFor={field}
                  className="text-sm font-semibold text-gray-700 mb-1"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === "descripcion" ? (
                  <textarea
                    id={field}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                ) : (
                  <input
                    type={
                      field === "precio" ||
                      field === "stock" ||
                      field === "descuento"
                        ? "number"
                        : "text"
                    }
                    id={field}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field}
                    className="w-full p-2 border border-gray-300 rounded"
                    required={field !== "descuento"}
                  />
                )}
              </div>
            )
          )}

          <select
            name="categoriaId"
            value={form.categoriaId}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.categoriaId} value={cat.categoriaId}>
                {cat.categoriaNombre}
              </option>
            ))}
          </select>

          <div className="flex flex-col">
            <label
              htmlFor="imagenes"
              className="text-sm font-semibold text-gray-700 mb-1"
            >
              Imágenes
            </label>
            <input
              type="file"
              id="imagenes"
              name="imagenes"
              onChange={handleImageChange}
              multiple
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {form.imagenes.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Imágenes Cargadas:
              </h3>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {form.imagenes.map((img, index) => (
                  <div key={index} className="relative w-full h-32">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-full object-contain rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 text-red-600 hover:text-red-800 p-1 rounded-full bg-white shadow-md cursor-pointer"
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-4"
          >
            {editando ? "Actualizar Producto" : "Agregar Producto"}
          </button>
        </form>
      )}

      {/* Grid de productos mejorado */}
      {cargando ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productos.map((p) => (
            <div key={p.productoId} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              {/* Imagen del producto */}
              <div className="h-48 bg-gray-100 flex items-center justify-center relative">
  {p.urlsImagenes?.length > 0 ? (
    <img
      src={buildImageUrl(p.urlsImagenes[0]) || "https://via.placeholder.com/300x200?text=Imagen+no+disponible"}
      alt={p.nombreProducto}
      className="w-full h-full object-cover"
      onError={(e) => {
        if (e.target.src !== "https://via.placeholder.com/300x200?text=Imagen+no+disponible") {
          console.error('Error loading image:', p.urlsImagenes[0]);
          e.target.src = "https://via.placeholder.com/300x200?text=Imagen+no+disponible";
          e.target.className = "w-full h-full object-contain";
        }
      }}
      loading="lazy"
    />
  ) : (
    <div className="text-gray-400 text-center p-4">
      <span>Sin imagen</span>
    </div>
  )}
</div>

              
              {/* Contenido del producto */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
                    {p.nombreProducto}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    ${p.precioProducto}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {p.descripcionProducto}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Stock: {p.stockProducto}
                  </span>
                  
                  {/* Solo los iconos de editar y eliminar como solicitaste */}
                  <div className="flex gap-2">
                    <PencilIcon 
                      className="w-5 h-5 text-blue-600 hover:text-blue-800 cursor-pointer" 
                      onClick={() => {
                        setEditando(p);
                        setForm({
                          nombre: p.nombreProducto,
                          descripcion: p.descripcionProducto,
                          precio: p.precioProducto,
                          stock: p.stockProducto,
                          descuento: p.descuentoProducto,
                          imagenes: [],
                          categoriaId: p.categoriaId,
                        });
                        setMostrarFormulario(true);
                      }}
                    />
                    <TrashIcon 
                      className="w-5 h-5 text-red-600 hover:text-red-800 cursor-pointer"
                      onClick={() =>
                        abrirModalConfirmacion({
                          title: "Eliminar producto",
                          message: `¿Deseas eliminar "${p.nombreProducto}"?`,
                          onConfirm: () => eliminarProducto(p.productoId),
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ConfirmModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => {
          modalData.onConfirm();
          setModalOpen(false);
        }}
        title={modalData.title}
        message={modalData.message}
      />

      <InfoModal
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
        title={infoModalContent.title}
        message={infoModalContent.message}
      />
    </div>
  );
};

export default GestionProductos;