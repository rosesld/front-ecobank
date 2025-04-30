import Nosotros from "../components/Nosotros";

const QuienesSomos = () => {
    return (
        
        <div className="p-6 max-w-6xl mx-auto">
            <div className="p-6 bg-gray-200 rounded-b-lg">
                <h2 className="text-3xl font-extrabold mb-4 text-center pt-20">¿Quienes somos?</h2>
                <p className="mt-4 mb-4 px-8 text-center">En EcoMarket & BancoSimple creemos en un futuro más justo e inclusivo, donde las microempresas y las personas no bancarizadas puedan vender, comprar y gestionar su dinero sin barreras.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pb-10 mt-10 gap-6">
                <div className="p-4 md:w-1/2">
                <p className="pb-4 text-center">Sabemos que para muchas microempresas, ingresar al comercio digital sigue siendo un desafío: comisiones elevadas, condiciones poco favorables y plataformas que no se adaptan a sus necesidades.</p>
                <p className="pb-1 text-center">A esto se suma una realidad preocupante: millones de personas aún no tienen acceso a servicios bancarios debido a procesos burocráticos o costos inaccesibles.</p>
                </div>

                <div className="p-4 md:w-1/2 flex justify-center">
                    <img src="/src/assets/img/undraw_organizing-data_uns9.png" alt="ilustracion de grafico vectorizado" className="w-full object-cover" />
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-6 text-center">Nuestra Misión</h3>
                <p className="mb-4 px-6 text-center">Crear un ecosistema digital que integra comercio e inclusión financiera en un solo lugar. Queremos que más personas puedan acceder a herramientas tecnológicas simples, justas y pensadas para crecer.</p>
                <p className="mb-4 px-6 text-center">En EcoMarket & BancoSimple trabajamos por una economía más accesible, colaborativa y solidaria.</p>
            </div>

            <Nosotros></Nosotros>
        </div>
    );
 }

 export default QuienesSomos;