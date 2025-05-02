import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { to: "/dashboard/saldo", label: "Saldo", extraClass: "mt-20" },
    { to: "/dashboard/movimientos", label: "Movimientos" },
    { to: "/dashboard/transferencia", label: "Transferencia" },
    { to: "/dashboard/depositar", label: "Depositar" },
    { to: "/dashboard/ventas", label: "Mis ventas" },
    { to: "/dashboard/ecomarket", label: "EcoMarket" },
  ];

  return (
    <aside className="h-screen w-64 bg-white shadow p-4">
      <nav className="flex flex-col space-y-4">
        {links.map(({ to, label, extraClass = "" }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 py-2 rounded text-left ${extraClass} ${
                isActive
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "bg-gray-100 text-gray-800"
              } hover:bg-blue-50`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
