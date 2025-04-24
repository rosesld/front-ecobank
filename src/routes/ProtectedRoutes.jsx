import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ClienteLayout from '../layouts/ClienteLayout';
import VendedorLayout from '../layouts/VendedorLayout';

const ProtectedRoutes = () => {
  const { user } = useAuth();

  // Si no hay usuario logueado, redirige a /login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Decide el layout según el rol
  const Layout = user.rol === 'cliente' ? ClienteLayout : VendedorLayout;

  // Muestra el layout con el contenido dentro
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoutes;