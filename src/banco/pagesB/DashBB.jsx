import React from "react";
import Sidebar from "../componentsB/SideBarB";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet /> {/* Aquí se cargan las subpáginas como Saldo o Movimientos */}
      </main>
    </div>
  );
};

export default Dashboard;
