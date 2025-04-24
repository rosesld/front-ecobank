import React from 'react'

const HomeCliente = ({children}) => {
  return (
    <div className="flex">
    <aside className="w-64 bg-blue-100 h-screen p-4">
      <p className="font-bold text-blue-600">Sidebar Cliente</p>
    </aside>
    <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  )
}

export default HomeCliente
