
const Nosotros = () => {
    return (
        <section className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-8">Equipo GitJav Refactor</h2>

            <div className="grid gap-8 md:grid-cols-4">
                <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
                    <img src="/src/assets/img/Pablo_Barra.jpg" alt="Pablo Barra" className="w-24 h-24 object-cover rounded-full mb-4" />
                    <h3 className="text-xl font-semibold">Pablo Barra</h3>
                    {/* <p className="text-gray-600">Scrum master</p> */}
                </div>

                <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
                    <img src="/src/assets/img/jorge_perez.png" alt="Jorge Perez" className="w-24 h-24 object-cover rounded-full mb-4" />
                    <h3 className="text-xl font-semibold">Jorge Perez</h3>
                    {/* <p className="text-gray-600">Desarrollador</p> */}
                </div>

                <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
                    <img src="/src/assets/img/Roberto_Oses_.jpg" alt="Roberto Oses" className="w-24 h-24 object-cover rounded-full mb-4" />
                    <h3 className="text-xl font-semibold">Roberto Oses</h3>
                    {/* <p className="text-gray-600">Product owner</p> */}
                </div>

                <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
                    <img src="/src/assets/img/Catalina_A.jpg" alt="Catalina Aguilar" className="w-24 h-24 object-cover rounded-full mb-4" />
                    <h3 className="text-xl font-semibold">Catalina Aguilar</h3>
                    {/* <p className="text-gray-600">Desarrolladora</p> */}
                </div>

            </div>

        </section>
    );
}

export default Nosotros;