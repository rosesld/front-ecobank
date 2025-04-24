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
      </Routes>
    </>
  );
};

export default AppWrapper;
