import React, { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
import Loader from "./Loader";
import Home from "../pages/Home";
import RegisterPages from "../pages/RegisterPages";
import ProductoDetail from "../components/ProductoDetail";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import Login from "../pages/Login";


import ProtectedRoutes from "../routes/ProtectedRoutes";
import HomeCliente from "../pages/cliente/HomeCliente";
import Compras from "../pages/cliente/Compras";
import PerfilCliente from "../pages/cliente/PerfilCliente";
import ShippingForm from "../pages/cliente/ShippingForm";
import OrderReview from "../pages/cliente/OrderReview";
import PaymentMethod from "../pages/cliente/PaymentMethod";
import OrderConfirmation from "../pages/cliente/OrderConfirmation";

import PerfilVendedor from "../pages/vendedor/PerfilVendedor";
import HomeVendedor from "../pages/vendedor/HomeVendedor";
import GestionProductos from "../pages/vendedor/GestionProductos";
import QuienesSomos from "../pages/QuienesSomos";
import CartPage from "../pages/cliente/CartPage";

const AppWrapper = () => {
  const { loading, setLoading } = useLoader();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<RegisterPages />} />
        <Route path="/producto/:id" element={<ProductoDetail />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />

        <Route path="/checkout/shipping" element={<ShippingForm />} />
        <Route path="/checkout/review" element={<OrderReview />} />
        <Route path="/checkout/payment" element={<PaymentMethod />} />
        <Route path="/checkout/order-confirmation" element={<OrderConfirmation />} />

        {/* 🔐 Rutas protegidas cliente */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/cliente/home" element={<HomeCliente />} />
          <Route path="/cliente/compras" element={<Compras />} />
          <Route path="/cliente/perfil" element={<PerfilCliente />} />
        </Route>
        {/* Rutas protegidas para el Vendedor */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/vendedor/home" element={<HomeVendedor />} />
          <Route path="/vendedor/productos" element={<GestionProductos />} />
          <Route path="vendedor/perfil" element={<PerfilVendedor />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppWrapper;
