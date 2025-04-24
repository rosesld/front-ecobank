const VendedorLayout = ({ children }) => (
    <div className="flex">
      <aside className="w-64 bg-green-100 h-screen p-4">
        <p className="font-bold text-green-600">Sidebar Vendedor</p>
      </aside>
      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  );
  
  export default VendedorLayout;