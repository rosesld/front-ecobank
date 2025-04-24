import React, { useState } from "react";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ConfirmModal from "../../components/ConfirmModal";
import InfoModal from "../../components/InfoModal";

const GestionProductos = () => {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    descuento: "",
    imagenes: [],
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editando) {
      setProductos((prev) =>
        prev.map((p) => (p.id === editando.id ? { ...form, id: p.id } : p))
      );
    } else {
      setProductos((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setForm({
      nombre: "",
      descripcion: "",
      precio: "",
      stock: "",
      descuento: "",
      imagenes: [],
    });
    setEditando(null);
    setMostrarFormulario(false);
  };

  const eliminarProducto = (id) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
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

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">
          Gestión de Productos
        </h1>
        <button
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
          {/* Form fields */}
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
                      className="absolute top-1 right-1 text-red-600 hover:text-red-800 p-1 rounded-full bg-white shadow-md"
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

      {/* Lista de productos */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {productos.map((p) => (
            <div key={p.id} className="p-4 bg-white rounded shadow">
              <h3 className="font-semibold text-lg text-gray-800">
                {p.nombre}
              </h3>
              <p className="text-gray-500">{p.descripcion}</p>
              <p className="text-green-600 font-bold">${p.precio}</p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() =>
                    abrirModalConfirmacion({
                      title: "Editar producto",
                      message: `¿Estás seguro que deseas editar "${p.nombre}"?`,
                      onConfirm: () => {
                        setEditando(p);
                        setForm(p);
                        setMostrarFormulario(true);
                      },
                    })
                  }
                  className="text-yellow-600 hover:text-yellow-800"
                >
                  <PencilIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    abrirModalConfirmacion({
                      title: "Eliminar producto",
                      message: `¿Deseas eliminar "${p.nombre}"? Esta acción no se puede deshacer.`,
                      onConfirm: () => eliminarProducto(p.id),
                    })
                  }
                  className="text-red-600 hover:text-red-800"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de confirmación */}
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
